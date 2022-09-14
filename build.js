const fs = require('fs');
const path = require('path');
const log = require('@vladmandic/pilogger');
const asc = require('assemblyscript/cli/asc');
const rimraf = require('rimraf');
// const opt = require('assemblyscript/cli/asc.json');

const options = {
  global: {
    srcDir: 'assembly',
    outDir: 'dist',
  },
  dev: {
    optimizeLevel: 3,
    shrinkLevel: 0,
    converge: true,
    debug: true,
    enable: ['simd', 'threads', 'bulk-memory'],
    target: 'release',
    exportRuntime: true,
    transform: 'as-bind',
    importMemory: true,
    initialMemory: 1, // 64KB
    maximumMemory: 4 * 64 * 64, // 256MB
    sharedMemory: true,
    // importTable: false,
    // exportTable: true,
    // explicitStart: true,
  },
};

async function buildTarget(inputFile, target) {
  const APIOptions = { // default stdout & stderr
    stdout: process.stdout,
    stderr: process.stderr,
  };
  const compileOptions = options[target];

  const argv = (opt) => { // build asc cmd line since it does not take compile options as object
    const args = [];
    Object.keys(opt || {}).forEach((key) => {
      if (asc.options[key] && asc.options[key].type === 'b') {
        if (opt[key]) args.push(`--${key}`);
      } else {
        if (Array.isArray(opt[key])) opt[key].forEach((value) => { args.push(`--${key}`, String(value)); });
        else args.push(`--${key}`, String(opt[key]));
      }
    });
    return args;
  };

  await asc.ready;
  const srcFile = path.join(options.global.srcDir, inputFile);
  const outFile = path.join(options.global.outDir, inputFile).replace('.ts', '');
  compileOptions.binaryFile = `${outFile}.wasm`;
  compileOptions.textFile = `${outFile}.wat`;
  compileOptions.jsFile = `${outFile}.js`;
  compileOptions.tsdFile = `${outFile}.d.ts`;
  compileOptions.sourceMap = `${outFile}.map`;
  // compileOptions.use = 'Math=JSMath';
  // log.data('ASC compile options:', argv(compileOptions));
  await asc.main([srcFile, ...argv(compileOptions)], APIOptions);
  log.data('ASC:', { input: srcFile, output: compileOptions.binaryFile, size: fs.statSync(compileOptions.binaryFile).size });
}

async function buildAllTargets(what) {
  rimraf.sync(path.join(options.global.outDir, what).replace('.ts', ''));
  for (const f of fs.readdirSync(options.global.srcDir)) {
    if (!f.endsWith('.ts')) continue;
    rimraf.sync(path.join(options.global.outDir, what).replace('.ts', ''));
    // await buildTarget(f, 'debug');
    // await buildTarget(f, 'release');
    await buildTarget(f, 'dev');
  }
}

async function main() {
  log.header();
  log.info('AssemblyScript version', asc.version);
  await buildAllTargets('wasi');
  log.info('Done...');
}

main();
