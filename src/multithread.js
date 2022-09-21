const fs = require('fs');
const log = require('@vladmandic/pilogger');
const threads = require('worker_threads');

const options = {
  dbFile: 'data/db.json', // sample face db
  dbFact: 222, // load db n times to fake huge size
  dbMax: 10000, // maximum number of records to hold in memory
  threadPoolSize: 12,
  workerSrc: './src/multithread-worker.js',
  maxJobs: 1000, // exit after processing this many jobs
  debug: false, // verbose messages
  minThreshold: 0.9, // match returns first record that meets the similarity threshold, set to 0 to always scan all records
}

const data = {
  /**@type string[] */
  labels: [], // array of strings, length of array serves as overal number of records so has to be maintained carefully
  /**@type SharedArrayBuffer | null */
  buffer: null,
  /**@type Float32Array | null */
  view: null,
  /**@type threads.Worker[] */
  workers: [], // holds instance of workers. worker can be null if exited
  requestID: 0, // each request should increment this counter as its used for round robin assignment
}

const descLength =  1024; // descriptor length in bytes
let t0 = process.hrtime.bigint(); // used for perf counters

const appendRecords = (labels, descriptors) => {
  if (!data.view) return [];
  if (descriptors.length !== labels.length) {
    log.error('append error:', { descriptors: descriptors.length, labels: labels.length });
  }
  if (options.debug) log.state('appending:', { descriptors: descriptors.length, labels: labels.length });
  for (let i = 0; i < descriptors.length; i++) {
    for (let j = 0; j < descriptors[i].length; j++) {
      data.view[data.labels.length * descLength + j] = descriptors[i][j]; // add each descriptors element to buffer
    }
    data.labels.push(labels[i]); // finally add to labels
  }
  for (const worker of data.workers) { // inform all workers how many records we have
    if (worker) worker.postMessage({ records: data.labels.length });
  }
};

const getLabel = (index) => data.labels[index];

const getDescriptor = (index) => {
  if (!data.view) return [];
  const descriptor = [];
  for (let i = 0; i < 1024; i++) descriptor.push(data.view[index * descLength + i]);
  return descriptor;
}

const fuzDescriptor = (descriptor) => {
  for (let i = 0; i < descriptor.length; i++) descriptor[i] += Math.random() - 0.5;
  return descriptor;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function workersClose() {
  const current = data.workers.filter((worker) => !!worker).length;
  log.info('closing workers:', { active: current, pool: data.workers.length });
  for (const worker of data.workers) {
    if (worker) worker.postMessage({ shutdown: true }); // tell worker to exit
  }
  await delay(250); // wait a little for threads to exit on their own
  const remaining = data.workers.filter((worker) => !!worker).length;
  if (remaining > 0) {  
    log.info('terminating remaining workers:', { remaining: current, pool: data.workers.length });
    for (const worker of data.workers) {
      if (worker) worker.terminate(); // if worker did not exit cleany terminate it
    }
  }
}

async function workerClose(id, code) {
  const previous = data.workers.filter((worker) => !!worker).length;
  delete data.workers[id];
  const current =  data.workers.filter((worker) => !!worker).length;
  log.state('worker exit:', { id, code, previous, current })
}

async function workersStart(numWorkers) {
  const previous = data.workers.filter((worker) => !!worker).length;
  log.info('starting worker thread pool:', { workers: numWorkers, previous });
  for (let i = 0; i < numWorkers; i++) {
    if (!data.workers[i]) { // worker does not exist, so create it
      const worker = new threads.Worker(options.workerSrc);
      worker.on('message', (msg) => workerMessage(i, msg));
      worker.on('error', (err) => log.error('worker error:', { err }));
      worker.on('exit', (code) => workerClose(i, code));
      worker.postMessage(data.buffer); // send buffer to worker
      data.workers[i] = worker;
    }
    data.workers[i]?.postMessage({ records: data.labels.length, threshold: options.minThreshold, debug: options.debug }); // inform worker how many records there are
  }
  await delay(100); // just wait a bit for everything to settle down
}

const workerMessage = (index, msg) => {
  if (msg.request) {
    // log.data('message:', { worker: index, request: msg.request, time: msg.time, label: getLabel(msg.index), similarity: msg.similarity });
    if (msg.request >= options.maxJobs) {
      log.timed(t0, `received ${options.maxJobs} results`);
      workersClose();
    }
  } else {
    log.data('message:', { worker: index, msg });
  }
}

const match = (descriptor) => {
  const available = data.workers.filter((worker) => !!worker).length;
  if (available > 0) data.workers[data.requestID % available].postMessage({ descriptor, request: data.requestID });
  else log.error('no available workers');
}

async function loadDB(count) {
  const previous = data.labels.length;
  t0 = process.hrtime.bigint();
  for (let i = 0; i < count; i++) { // load entire face db from array of objects n times into buffer
    const db = JSON.parse(fs.readFileSync(options.dbFile).toString());
    const names = db.map((record) => record.name);
    const descriptors = db.map((record) => record.embedding);
    appendRecords(names, descriptors);
  }
  log.timed(t0, 'db load:', { records: data.labels.length, previous });
}

async function main() {
  log.header();
  log.info('options:', options);

  data.buffer = new SharedArrayBuffer(4 * options.dbMax * descLength) // preallocate max number of records as sharedarraybuffers cannot grow
  data.view = new Float32Array(data.buffer), // view into buffer
  data.labels.length = 0;
  log.state('buffer:', { bytes: data.buffer.byteLength, elements: data.view?.length });

  /*
  // first pass: load first half of database and start just half of workers and submit half of total jobs
  await loadDB(options.dbFact / 2)
  await workersStart(options.threadPoolSize / 2);
  for (let i = 0; i < options.maxJobs / 2; i++) {
    data.requestID++;
    const idx = Math.trunc(data.labels.length * Math.random()) // grab a random descriptor index that we'll search for
    match(getDescriptor(idx));
    if (options.debug) log.info('submited job for', idx, getLabel(idx), getDescriptor(idx).length); // we already know what we're searching for so we can compare results
  }
  log.state('submitted:', { jobs: options.maxJobs / 2, workers: data.workers.filter((worker) => !!worker).length });

  await delay(10); // pause just enough so first job batch starts and we continue with additional records and workers showing there is no race condition

  // second pass: load second half of database and start double of workers and submit second half of total jobs, but fuzz descriptors a bit
  await loadDB(options.dbFact / 2)
  await workersStart(options.threadPoolSize);
  const fuzzed = [];
  const t1 = performance.now();
  for (let i = 0; i < options.maxJobs / 2; i++) {
    const idx = Math.trunc(data.labels.length * Math.random()) // grab a random descriptor index that we'll search for
    const descriptor = getDescriptor(idx);
    fuzzed.push(fuzDescriptor(descriptor));
  }
  log.timed(t1, 'fuzzed descriptors:', { fuzzed: fuzzed.length });

  for (let i = 0; i < options.maxJobs / 2; i++) {
    data.requestID++;
    match(fuzzed[i]);
    if (options.debug) log.info('submited fuzzed job'); // we already know what we're searching for so we can compare results
  }
  log.state('submitted:', { jobs: options.maxJobs / 2, workers: data.workers.filter((worker) => !!worker).length });
  */

  await loadDB(options.dbFact)
  await workersStart(options.threadPoolSize);
  const fuzzed = [];
  const t1 = performance.now();
  for (let i = 0; i < options.maxJobs; i++) {
    const idx = Math.trunc(data.labels.length * Math.random()) // grab a random descriptor index that we'll search for
    const descriptor = getDescriptor(idx);
    fuzzed.push(fuzDescriptor(descriptor));
  }
  log.timed(t1, 'fuzzed descriptors:', { fuzzed: fuzzed.length });

  for (let i = 0; i < options.maxJobs; i++) {
    data.requestID++;
    match(fuzzed[i]);
    if (options.debug) log.info('submited fuzzed job'); // we already know what we're searching for so we can compare results
  }
  log.state('submitted:', { jobs: options.maxJobs, workers: data.workers.filter((worker) => !!worker).length });

}

main();
