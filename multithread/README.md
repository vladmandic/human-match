# NodeJS Multi-Threading Match Solution

## Notes

- just two JS files: `main.js` and `worker.js` :)
- no external dependencies for main process or worker threads
- manually created thread pool  
  can shutdown workers or create additional worker threads on-the-fly
  safe against workers that exit
- shared buffer array that holds descriptors  
- labels are maintained only in main thread  
- job assigment to workers using round-robin  
  since timing for each job is near-fixed and predictable  
- memory consumption of buffer is 8k per descriptor since each descriptor element is a float64  
  this could be reduced by factor of 32x if necessary:  
  1. map `f64` element values to `uint8` for *8x* size reduction  
     this would not result in performance gain as math still has to be `f64`  
  2. reduced number of elements from *1024* to *256* for *4x* reduction  
     this would result in equal performance gain when performing matches,  
     but reduction of descriptor complexity is math heavy to prepare such data
- thread safe even without atomics or locks:  
  1. buffer is preallocated  
  2. only writing to incrementing addresses  
  3. each write is a single f64 write without structures or serialization  
  4. workers never access new address space until adding is complete  
  5. once descriptor is added all workers in a pool are informed of the new record count

## Methods

- `appendRecord`: add additional batch of descriptors to buffer on-the-fly  
- `getLabel`: fetch label for resolved descriptor index
- `getDescriptor`: get descriptor array for a given id from a buffer
- `workersStart`: start or expand worker pool
- `workersClose`: close workers in a pool (nicely plus terminate)
- `match`: dispach a match job to a worker

## Performance

Tested with face database of 50k records and 100 match jobs:

> threadPoolSize: 1 => 46,000 ms  
> threadPoolSize: 6 => 13,327 ms  
> threadPoolSize:12 => 10,150 ms  

*Note: This is a worse-case scenario where each match job scans entire database*
*Setting `minThreshold` to even a high value typically improves results by 2-5x*

## Test

Currently `main.js`:

1. preallocates buffer
2. loads small descriptors database repeatedly to create fake large database
3. creates couple of workers
4. submits first batch of jobs based on random descriptors pulled from same database
5. loads additional records
6. creates additional workers
7. creates fuzzed descriptors pulled from same database for harder match
8. submits second batch of jobs
9. closes workers when all jobs have completed
