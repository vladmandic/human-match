const fs = require('fs');
const path = require('path');
const log = require('@vladmandic/pilogger');
const asbind = require('as-bind/dist/as-bind.cjs.js'); // helper for as-loader that wraps string&array types
const pca = require('./pca'); // principal components analysis for dimensionality reduction

const wasmFile = 'dist/human-match.wasm'; // use `build.js` to compile `assembly/human-match.ts` to `dist/human-match.wasm`
const dbFile = 'data/db.json'; // sample face db with 40k records
const descriptorFile = 'data/descriptor.json'; // just a test descriptor, intentionally truncated to low precision
const reduceDim = 1; // reduce dimensionality of descriptor
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

function distance(embedding1, embedding2, order = 2) { // distance function in js
  // general minkowski distance, euclidean distance is limited case where order is 2
  let sum = 0;
  for (let i = 0; i < embedding1.length; i++) {
    const diff = (order === 2) ? (embedding1[i] - embedding2[i]) : (Math.abs(embedding1[i] - embedding2[i]));
    sum += (order === 2) ? (diff * diff) : (diff ** order);
  }
  return sum;
}

function similarity(distance) {
  return Math.max(0, 100 - distance) / 100.0;
}

function match(embedding, arr, { hybrid }, threshold = 0) { // match function in js
  const order = 2;
  let best = Number.MAX_SAFE_INTEGER;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const res = hybrid ? wasm.exports.distance(embedding, arr[i], 2) : distance(embedding, arr[i], order);
    if (res < best) {
      best = res;
      index = i;
    }
    if (best < threshold) break;
  }
  best = best ** (1 / order)
  return [index, best, similarity(best)];
}

const reshape = (arr, width) => arr.reduce((rows, key, index) => (index % width == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);

function reduce(embedding) { // reduce dimensionality of descriptor
  if (reduceDim === 1) return embedding;
  const descriptor = reshape(embedding, reduceDim); // reshape 1d array to 2d
  const vectors = pca.getEigenVectors(descriptor); // calculate vectors used for packing
  /*
  log.data('pca vectors', vectors.length);
  for (let i = vectors.length; i > 0; i--) {
    const loss = pca.computePercentageExplained(vectors, ...vectors.slice(0, i));
    log.data('pca loss', { vector: i, precision: Math.round(100 * loss) }) // we don't have to use all vectors when packing, see how much loss is ok
  }
  */
  const data = pca.computeAdjustedData(descriptor, ...vectors)
  /*
  const unpack = pca.computeOriginalData(data.formattedAdjustedData, data.selectedVectors, data.avgData);
  log.data('pca data:  ', data.formattedAdjustedData[0].length, data.formattedAdjustedData[0]); // compressed data
  log.data('original  :', descriptor.length, descriptor); // original descriptor
  log.data('pca unpack:', unpack.formattedOriginalData.length, unpack.formattedOriginalData); // compare original to unpacked to see how much detail was lost
  */
  return data.formattedAdjustedData[0];
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
  const descriptors = [];
  for (const rec of db) { // this way instead of having monolithic db that we have to pass as param, we can use method to append to db on-the-fly
    const reduced = reduce(rec.embedding); // optionally reduce descriptor dimensionality on load
    labels.push(rec.name); // separate array with labels
    descriptors.push(reduced); // descriptor array used by js and hybrid match
    wasm.exports.register(reduced) // descriptor array used by wasm match, can be replaced with shared memory
  }
  db.length = 0; // unload db as we dont need it anymore
  log.timed(t0, 'db unpack:', { records: labels.length, bytes: wasm.exports.memory.buffer.byteLength, reduce: reduceDim, descriptor: descriptors[0].length });

  // initialize variables
  let index = -1;
  let best = -1;
  let similarity = -1;
  const embedding = JSON.parse(fs.readFileSync(descriptorFile).toString()); // load sample which will be used as compare-to descriptor

  // use pure js match loop with js similarity math function
  t0 = process.hrtime.bigint();
  [index, best, similarity] = match(reduce(embedding), descriptors, { hybrid: false });
  log.timed(t0, 'match', { type: 'javascript ' }, { index, name: labels[index], similarity: Math.round(1000 * similarity) / 10, distance: best });

  // use pure js match loop with wasm similarity math function
  t0 = process.hrtime.bigint();
  [index, best, similarity] = match(reduce(embedding), descriptors, { hybrid: true });
  log.timed(t0, 'match', { type: 'hybrid wasm' }, { index, name: labels[index], similarity: Math.round(1000 * similarity) / 10, distance: best });

  // use pure wasm match loop with wasm similarity math function
  t0 = process.hrtime.bigint();
  [index, best, similarity] = wasm.exports.match(reduce(embedding));
  log.timed(t0, 'match', { type: 'pure wasm  ' }, { index, name: labels[index], similarity: Math.round(1000 * similarity) / 10, distance: best });

  // const reshape = desc.reshape([128, 8]); // reshape large 1024-element descriptor to 128 x 8
  // const reduce = reshape.logSumExp(1); // reduce 2nd dimension by calculating logSumExp on it which leaves us with 128-element descriptor
}

main();
