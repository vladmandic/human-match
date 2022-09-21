const fs = require('fs');
const path = require('path');
const log = require('@vladmandic/pilogger');
const asbind = require('as-bind/dist/as-bind.cjs.js'); // helper for as-loader that wraps string&array types

const wasmFile = '../dist/human-match.wasm'; // use `build.js` to compile `assembly/human-match.ts` to `dist/human-match.wasm`
const dbFile = 'data/db.json'; // sample face db with 40k records
const descriptorFile = 'data/descriptor.json'; // just a test descriptor, intentionally truncated to low precision
const multiplyDB = 2000; // load db n times to fake huge size
let wasm; // holds instance of wasm module

async function init() {
  const memory = new WebAssembly.Memory({ initial: 1, maximum: 16384, shared: true }); // maximum is number of pages. each page is hard coded to 64kb. this is 256mb or enough for ~80k face records
  const imports = { env: { memory } };
  wasm = await asbind.instantiate(fs.readFileSync(path.join(__dirname, wasmFile)), imports);
  log.info('wasm:', { file: wasmFile, exports: Object.keys(wasm.typeDescriptor.exportedFunctions) });
  const f = wasm.exports.features();
  const features = { target: f[0] === 0 ? 'portable' : f[0] === 1 ? '32bit' : '64bit', optimize: f[1], shrink: f[2], simd: f[3] === 1, shmem: f[4] === 1, threads: f[5] === 1 }
  log.info('wasm features:', features);
  return features;
}

async function main() {
  log.header();
  await init();
  let t0;

  // load entire face db as array of objects
  t0 = process.hrtime.bigint();
  let db = [];
  for (let i = 0; i < multiplyDB; i++) {
    const tmpDB = JSON.parse(fs.readFileSync(dbFile).toString());
    db = db.concat(tmpDB);
  }
  log.timed(t0, 'db load:', { records: db.length });

  // unpack face db to array of labels on js side and array of descriptors sent to both js array and wasm array
  t0 = process.hrtime.bigint();
  const labels = [];
  for (const rec of db) { // this way instead of having monolithic db that we have to pass as param, we can use method to append to db on-the-fly
    labels.push(rec.name); // separate array with labels
    wasm.exports.register(rec.embedding) // descriptor array used by wasm match, can be replaced with shared memory
  }
  db.length = 0; // unload db as we dont need it anymore
  log.timed(t0, 'db unpack:', { records: labels.length, bytes: wasm.exports.memory.buffer.byteLength });

  // initialize variables
  let index = -1;
  let best = -1;
  let similarity = -1;
  const embedding = JSON.parse(fs.readFileSync(descriptorFile).toString()); // load sample which will be used as compare-to descriptor

  // use pure wasm match loop with wasm similarity math function
  t0 = process.hrtime.bigint();
  [index, best, similarity] = wasm.exports.match(embedding);
  log.timed(t0, 'match', { type: 'pure wasm  ' }, { index, name: labels[index], similarity: Math.round(1000 * similarity) / 10, distance: best });
}

main();
