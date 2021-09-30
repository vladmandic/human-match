type Embedding = f32[];

const db: Array<Embedding> = [];

export function features(): i32[] {
  return [ASC_TARGET, ASC_OPTIMIZE_LEVEL, ASC_SHRINK_LEVEL, ASC_FEATURE_SIMD as i32, ASC_FEATURE_BULK_MEMORY as i32, ASC_FEATURE_THREADS as i32]
}

export function register(embedding: Embedding): i32 {
  db.push(embedding);
  return db.length;
}

export function reset(): void {
  db.length = 0;
}

//@inline
export function distance(embedding1: Embedding, embedding2: Embedding, order: f32): f32 {
  // general minkowski distance, euclidean distance is limited case where order is 2
  // function f32x4(a: f32, b: f32, c: f32, d: f32): v128
  // Initializes a 128-bit vector from four 32-bit float values. Arguments must be compile-time constants.
  let sum: f32 = 0;
  for (let i: i32 = 0; i < embedding1.length; i++) {
    const diff: f32 = abs(embedding1[i] - embedding2[i]);
    sum += order === 2 ? diff * diff : diff ** order;
  }
  return sum as f32;
}

export function match(embedding: Embedding): f32[] {
  const order: i32 = 2;
  let best: f32 = 1;
  let index: i32 = -1;
  for (let i = 0; i < db.length; i++) {
    const res = distance(embedding, db[i], 2);
    if (res < best) {
      best = res;
      index = i;
    }
  }
  best = best ** (1 / (order as f32))
  const similarity: f32 = max(0, (100 as f32) - best) / 100.0;
  return [index as f32, best, similarity];
}
