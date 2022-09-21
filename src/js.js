const fs = require('fs');
const log = require('@vladmandic/pilogger');

const dbFile = 'data/db.json'; // sample face db with 40k records
const descriptorFile = 'data/descriptor.json'; // just a test descriptor, intentionally truncated to low precision
const multiplyDB = 2000; // load db n times to fake huge size

function distance(embedding1, embedding2, order = 2) { // distance function in js
  // general minkowski distance, euclidean distance is limited case where order is 2
  let sum = 0;
  for (let i = 0; i < embedding1.length; i++) {
    const diff = (order === 2) ? (embedding1[i] - embedding2[i]) : (Math.abs(embedding1[i] - embedding2[i]));
    sum += (order === 2) ? (diff * diff) : (diff ** order); // optimize for square
  }
  return sum;
}

function similarity(distance) {
  return Math.max(0, 100 - distance) / 100.0;
}

function match(embedding, arr, threshold = 0) { // match function in js
  const order = 2;
  let best = Number.MAX_SAFE_INTEGER;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const res = distance(embedding, arr[i], order);
    if (res < best) {
      best = res;
      index = i;
    }
    if (best < threshold) break;
  }
  best = best ** (1 / order)
  return [index, best, similarity(best)];
}

async function main() {
  log.header();
  let t0;

  // load entire face db as array of objects
  t0 = process.hrtime.bigint();
  let db = [];
  for (let i = 0; i < multiplyDB; i++) {
    const tmpDB = JSON.parse(fs.readFileSync(dbFile).toString());
    db = db.concat(tmpDB);
  }
  log.timed(t0, 'db load:', { records: db.length });

  // unpack face db to array of labels on js side and array of descriptors sent to js array
  t0 = process.hrtime.bigint();
  const labels = [];
  const descriptors = [];
  for (const rec of db) { // this way instead of having monolithic db that we have to pass as param, we can use method to append to db on-the-fly
    labels.push(rec.name); // separate array with labels
    descriptors.push(rec.embedding); // descriptor array used by js and hybrid match
  }
  db.length = 0; // unload db as we dont need it anymore
  log.timed(t0, 'db unpack:', { records: labels.length, descriptor: descriptors[0].length });

  // initialize variables
  let index = -1;
  let best = -1;
  let similarity = -1;
  const embedding = JSON.parse(fs.readFileSync(descriptorFile).toString()); // load sample which will be used as compare-to descriptor

  // use pure js match loop with js similarity math function
  t0 = process.hrtime.bigint();
  [index, best, similarity] = match(embedding, descriptors);
  log.timed(t0, 'match', { type: 'javascript ' }, { index, name: labels[index], similarity: Math.round(1000 * similarity) / 10, distance: best });
}

main();
