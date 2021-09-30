import { abort } from 'env';

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
    return uint8Array;
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1036, "HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1068, "LAAAAAAAAAAAAAAABAAAABAAAAAgBAAAIAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 1116, "LAAAAAAAAAAAAAAAAAAAABgAAAABAAAAAwAAAAAAAAABAAAAAQAAAAEAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 1164, "PAAAAAAAAAAAAAAAAQAAACgAAABBAGwAbABvAGMAYQB0AGkAbwBuACAAdABvAG8AIABsAGEAcgBnAGUAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 1228, "PAAAAAAAAAAAAAAAAQAAACAAAAB+AGwAaQBiAC8AcgB0AC8AaQB0AGMAbQBzAC4AdABzAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 1296, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1328, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1356, "PAAAAAAAAAAAAAAAAQAAACQAAABJAG4AZABlAHgAIABvAHUAdAAgAG8AZgAgAHIAYQBuAGcAZQAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 1420, "LAAAAAAAAAAAAAAAAQAAABQAAAB+AGwAaQBiAC8AcgB0AC4AdABzAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 1472, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1500, "PAAAAAAAAAAAAAAAAQAAAB4AAAB+AGwAaQBiAC8AcgB0AC8AdABsAHMAZgAuAHQAcwAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 1564, "LAAAAAAAAAAAAAAAAQAAABwAAABJAG4AdgBhAGwAaQBkACAAbABlAG4AZwB0AGgA");
  base64DecodeToExistingUint8Array(bufferView, 1612, "LAAAAAAAAAAAAAAAAQAAABoAAAB+AGwAaQBiAC8AYQByAHIAYQB5AC4AdABzAAAA");
  base64DecodeToExistingUint8Array(bufferView, 1664, "vvP4eexh9j8ZMJZbxv7evz2Ir0rtcfU/pPzUMmgL27+wEPDwOZX0P3u3HwqLQde/hQO4sJXJ8z97z20a6Z3Tv6VkiAwZDfM/Mbby85sd0L+gjgt7Il7yP/B6OxsdfMm/PzQaSkq78T+fPK+T4/nCv7rlivBYI/E/XI14v8tgub+nAJlBP5XwP85fR7adb6q/AAAAAAAA8D8AAAAAAAAAAKxHmv2MYO4/PfUkn8o4sz+gagIfs6TsP7qROFSpdsQ/5vxqVzYg6z/S5MRKC4TOPy2qoWPRwuk/HGXG8EUG1D/tQXgD5oboP/ifGyycjtg/YkhT9dxn5z/Me7FOpODcPw==");
  base64DecodeToExistingUint8Array(bufferView, 1920, "AAAAAAAA8D90hRXTsNnvPw+J+WxYte8/UVsS0AGT7z97UX08uHLvP6q5aDGHVO8/OGJ1bno47z/h3h/1nR7vPxW3MQr+Bu8/y6k6N6fx7j8iNBJMpt7uPy2JYWAIzu4/Jyo21dq/7j+CT51WK7TuPylUSN0Hq+4/hVU6sH6k7j/NO39mnqDuP3Rf7Oh1n+4/hwHrcxSh7j8TzkyZiaXuP9ugKkLlrO4/5cXNsDe37j+Q8KOCkcTuP10lPrID1e4/rdNamZ/o7j9HXvvydv/uP5xShd2bGe8/aZDv3CA37z+HpPvcGFjvP1+bezOXfO8/2pCkoq+k7z9ARW5bdtDvPw==");
  base64DecodeToExistingUint8Array(bufferView, 2188, "fAAAAAAAAAAAAAAAAQAAAF4AAABFAGwAZQBtAGUAbgB0ACAAdAB5AHAAZQAgAG0AdQBzAHQAIABiAGUAIABuAHUAbABsAGEAYgBsAGUAIABpAGYAIABhAHIAcgBhAHkAIABpAHMAIABoAG8AbABlAHkAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 2316, "PAAAAAAAAAAAAAAAAQAAACoAAABPAGIAagBlAGMAdAAgAGEAbAByAGUAYQBkAHkAIABwAGkAbgBuAGUAZAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 2380, "PAAAAAAAAAAAAAAAAQAAACgAAABPAGIAagBlAGMAdAAgAGkAcwAgAG4AbwB0ACAAcABpAG4AbgBlAGQAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 2448, "BgAAACAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAIZAAAAAAAAAkEAAAAAAAACCQAAAAAAAA==");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      
  function wasm2js_memory_fill(dest, value, size) {
    dest = dest >>> 0;
    size = size >>> 0;
    if (dest + size > bufferView.length) throw "trap: invalid memory.fill";
    bufferView.fill(value, dest, dest + size);
  }
      
  function wasm2js_memory_copy(dest, source, size) {
    // TODO: traps on invalid things
    bufferView.copyWithin(dest, source, source + size);
  }
      
  function wasm2js_scratch_store_f32(value) {
    f32ScratchView[2] = value;
  }
      
  function wasm2js_scratch_load_f32() {
    return f32ScratchView[2];
  }
      
function asmFunc(env) {
 var memory = env.memory;
 var buffer = memory.buffer;
 memory.grow = __wasm_memory_grow;
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var abort = env.abort;
 var nan = NaN;
 var infinity = Infinity;
 var $lib_builtins_abort = env.abort;
 var $lib_rt_itcms_total = 0;
 var $lib_rt_itcms_threshold = 0;
 var $lib_rt_itcms_state = 0;
 var $lib_rt_itcms_visitCount = 0;
 var $lib_rt_itcms_pinSpace = 0;
 var $lib_rt_itcms_iter = 0;
 var $lib_rt_itcms_toSpace = 0;
 var $lib_rt_itcms_white = 0;
 var $lib_rt_itcms_fromSpace = 0;
 var $lib_rt_tlsf_ROOT = 0;
 var $lib_rt___rtti_base = 2448;
 var $lib_memory___stack_pointer = 18884;
 var i64toi32_i32$HIGH_BITS = 0;
 function $lib_rt_itcms_visitRoots() {
  var $0 = 0, $1 = 0;
  $lib_rt_itcms___visit(1088);
  $lib_rt_itcms___visit(1376);
  $lib_rt_itcms___visit(1584);
  $lib_rt_itcms___visit(2208);
  $lib_rt_itcms___visit(1184);
  $lib_rt_itcms___visit(2336);
  $lib_rt_itcms___visit(2400);
  $1 = $lib_rt_itcms_pinSpace;
  $0 = HEAP32[($1 + 4 | 0) >> 2] & -4 | 0;
  while_continue_0 : while (1) {
   if (($0 | 0) != ($1 | 0)) {
    if ((HEAP32[($0 + 4 | 0) >> 2] & 3 | 0 | 0) != (3 | 0)) {
     $lib_builtins_abort(0 | 0, 1248 | 0, 159 | 0, 16 | 0);
     abort();
    }
    $lib_rt___visit_members($0 + 20 | 0);
    $0 = HEAP32[($0 + 4 | 0) >> 2] & -4 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
 }
 
 function $lib_rt_itcms_Object_unlink($0) {
  var $1 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] & -4 | 0;
  if (!$1) {
   if (!(HEAP32[($0 + 8 | 0) >> 2] ? 0 : $0 >>> 0 < 18884 >>> 0)) {
    $lib_builtins_abort(0 | 0, 1248 | 0, 127 | 0, 18 | 0);
    abort();
   }
   return;
  }
  $0 = HEAP32[($0 + 8 | 0) >> 2];
  if (!$0) {
   $lib_builtins_abort(0 | 0, 1248 | 0, 131 | 0, 16 | 0);
   abort();
  }
  HEAP32[($1 + 8 | 0) >> 2] = $0;
  HEAP32[($0 + 4 | 0) >> 2] = $1 | (HEAP32[($0 + 4 | 0) >> 2] & 3 | 0) | 0;
 }
 
 function $lib_rt_itcms_Object_makeGray($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  if (($0 | 0) == ($lib_rt_itcms_iter | 0)) {
   $2 = HEAP32[($0 + 8 | 0) >> 2];
   if (!$2) {
    $lib_builtins_abort(0 | 0, 1248 | 0, 147 | 0, 30 | 0);
    abort();
   }
   $lib_rt_itcms_iter = $2;
  }
  $lib_rt_itcms_Object_unlink($0);
  $2 = $lib_rt_itcms_toSpace;
  $1 = HEAP32[($0 + 12 | 0) >> 2];
  if ($1 >>> 0 <= 1 >>> 0) {
   $1 = 1
  } else {
   if ($1 >>> 0 > HEAP32[2448 >> 2] >>> 0) {
    $lib_builtins_abort(1376 | 0, 1440 | 0, 22 | 0, 28 | 0);
    abort();
   }
   $1 = HEAP32[(($1 << 3 | 0) + 2452 | 0) >> 2] & 32 | 0;
  }
  if ($1) {
   $3 = !$lib_rt_itcms_white
  } else {
   $3 = 2
  }
  $1 = HEAP32[($2 + 8 | 0) >> 2];
  HEAP32[($0 + 4 | 0) >> 2] = $2 | $3 | 0;
  HEAP32[($0 + 8 | 0) >> 2] = $1;
  HEAP32[($1 + 4 | 0) >> 2] = $0 | (HEAP32[($1 + 4 | 0) >> 2] & 3 | 0) | 0;
  HEAP32[($2 + 8 | 0) >> 2] = $0;
 }
 
 function $lib_rt_itcms___visit($0) {
  if (!$0) {
   return
  }
  $0 = $0 - 20 | 0;
  if (($lib_rt_itcms_white | 0) == (HEAP32[($0 + 4 | 0) >> 2] & 3 | 0 | 0)) {
   $lib_rt_itcms_Object_makeGray($0);
   $lib_rt_itcms_visitCount = $lib_rt_itcms_visitCount + 1 | 0;
  }
 }
 
 function $lib_rt_tlsf_removeBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = HEAP32[$1 >> 2];
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 268 | 0, 14 | 0);
   abort();
  }
  $2 = $2 & -4 | 0;
  if ($2 >>> 0 < 12 >>> 0) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 270 | 0, 14 | 0);
   abort();
  }
  if ($2 >>> 0 < 256 >>> 0) {
   $2 = $2 >>> 4 | 0
  } else {
   $2 = $2 >>> 0 < 1073741820 >>> 0 ? $2 : 1073741820;
   $4 = 31 - Math_clz32($2) | 0;
   $2 = ($2 >>> ($4 - 4 | 0) | 0) ^ 16 | 0;
   $4 = $4 - 7 | 0;
  }
  if (!($4 >>> 0 < 23 >>> 0 ? $2 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 284 | 0, 14 | 0);
   abort();
  }
  $3 = HEAP32[($1 + 8 | 0) >> 2];
  $5 = HEAP32[($1 + 4 | 0) >> 2];
  if ($5) {
   HEAP32[($5 + 8 | 0) >> 2] = $3
  }
  if ($3) {
   HEAP32[($3 + 4 | 0) >> 2] = $5
  }
  if (($1 | 0) == (HEAP32[(($0 + ((($4 << 4 | 0) + $2 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0)) {
   HEAP32[(($0 + ((($4 << 4 | 0) + $2 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $3;
   if (!$3) {
    $3 = $0 + ($4 << 2 | 0) | 0;
    $1 = $2 & 31 | 0;
    $5 = ((-1 >>> $1 | 0) & -2 | 0) << $1 | 0;
    $1 = (0 - $2 | 0) & 31 | 0;
    $1 = HEAP32[($3 + 4 | 0) >> 2] & ($5 | (((-1 << $1 | 0) & -2 | 0) >>> $1 | 0) | 0) | 0;
    HEAP32[($3 + 4 | 0) >> 2] = $1;
    if (!$1) {
     $1 = $0;
     $2 = HEAP32[$0 >> 2];
     $0 = $4 & 31 | 0;
     $3 = ((-1 >>> $0 | 0) & -2 | 0) << $0 | 0;
     $0 = (0 - $4 | 0) & 31 | 0;
     HEAP32[$1 >> 2] = $2 & ($3 | (((-1 << $0 | 0) & -2 | 0) >>> $0 | 0) | 0) | 0;
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  if (!$1) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 201 | 0, 14 | 0);
   abort();
  }
  $2 = HEAP32[$1 >> 2];
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 203 | 0, 14 | 0);
   abort();
  }
  $3 = ($1 + 4 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
  $5 = HEAP32[$3 >> 2];
  if ($5 & 1 | 0) {
   $lib_rt_tlsf_removeBlock($0, $3);
   $2 = ($2 + 4 | 0) + ($5 & -4 | 0) | 0;
   HEAP32[$1 >> 2] = $2;
   $3 = ($1 + 4 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
   $5 = HEAP32[$3 >> 2];
  }
  if ($2 & 2 | 0) {
   $1 = HEAP32[($1 - 4 | 0) >> 2];
   $6 = HEAP32[$1 >> 2];
   if (!($6 & 1 | 0)) {
    $lib_builtins_abort(0 | 0, 1520 | 0, 221 | 0, 16 | 0);
    abort();
   }
   $lib_rt_tlsf_removeBlock($0, $1);
   $2 = ($6 + 4 | 0) + ($2 & -4 | 0) | 0;
   HEAP32[$1 >> 2] = $2;
  }
  HEAP32[$3 >> 2] = $5 | 2 | 0;
  $2 = $2 & -4 | 0;
  if ($2 >>> 0 < 12 >>> 0) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 233 | 0, 14 | 0);
   abort();
  }
  if (($3 | 0) != (($1 + 4 | 0) + $2 | 0 | 0)) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 234 | 0, 14 | 0);
   abort();
  }
  HEAP32[($3 - 4 | 0) >> 2] = $1;
  if ($2 >>> 0 < 256 >>> 0) {
   $2 = $2 >>> 4 | 0
  } else {
   $2 = $2 >>> 0 < 1073741820 >>> 0 ? $2 : 1073741820;
   $3 = 31 - Math_clz32($2) | 0;
   $4 = $3 - 7 | 0;
   $2 = ($2 >>> ($3 - 4 | 0) | 0) ^ 16 | 0;
  }
  if (!($4 >>> 0 < 23 >>> 0 ? $2 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 251 | 0, 14 | 0);
   abort();
  }
  $3 = HEAP32[(($0 + ((($4 << 4 | 0) + $2 | 0) << 2 | 0) | 0) + 96 | 0) >> 2];
  HEAP32[($1 + 4 | 0) >> 2] = 0;
  HEAP32[($1 + 8 | 0) >> 2] = $3;
  if ($3) {
   HEAP32[($3 + 4 | 0) >> 2] = $1
  }
  HEAP32[(($0 + ((($4 << 4 | 0) + $2 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $1;
  HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | (1 << $4 | 0) | 0;
  $0 = $0 + ($4 << 2 | 0) | 0;
  HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] | (1 << $2 | 0) | 0;
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  var $3 = 0, $4 = 0;
  if ($1 >>> 0 > $2 >>> 0) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 377 | 0, 14 | 0);
   abort();
  }
  $1 = (($1 + 19 | 0) & -16 | 0) - 4 | 0;
  $3 = $2 & -16 | 0;
  $2 = HEAP32[($0 + 1568 | 0) >> 2];
  if ($2) {
   if (($2 + 4 | 0) >>> 0 > $1 >>> 0) {
    $lib_builtins_abort(0 | 0, 1520 | 0, 384 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($2 | 0)) {
    $4 = HEAP32[$2 >> 2];
    $1 = $1 - 16 | 0;
   }
  } else {
   if (($0 + 1572 | 0) >>> 0 > $1 >>> 0) {
    $lib_builtins_abort(0 | 0, 1520 | 0, 397 | 0, 5 | 0);
    abort();
   }
  }
  $2 = $3 - $1 | 0;
  if ($2 >>> 0 < 20 >>> 0) {
   return
  }
  $2 = $2 - 8 | 0;
  HEAP32[$1 >> 2] = $4 & 2 | 0 | ($2 | 1 | 0) | 0;
  HEAP32[($1 + 4 | 0) >> 2] = 0;
  HEAP32[($1 + 8 | 0) >> 2] = 0;
  $2 = ($1 + 4 | 0) + $2 | 0;
  HEAP32[$2 >> 2] = 2;
  HEAP32[($0 + 1568 | 0) >> 2] = $2;
  $lib_rt_tlsf_insertBlock($0, $1);
 }
 
 function $lib_rt_tlsf_initialize() {
  var $0 = 0, $1 = 0;
  $0 = __wasm_memory_size();
  if (($0 | 0) < (1 | 0)) {
   $0 = (__wasm_memory_grow(1 - $0 | 0 | 0) | 0) < (0 | 0)
  } else {
   $0 = 0
  }
  if ($0) {
   abort()
  }
  HEAP32[18896 >> 2] = 0;
  HEAP32[20464 >> 2] = 0;
  for_loop_0 : while (1) {
   if ($1 >>> 0 < 23 >>> 0) {
    HEAP32[((($1 << 2 | 0) + 18896 | 0) + 4 | 0) >> 2] = 0;
    $0 = 0;
    for_loop_1 : while (1) {
     if ($0 >>> 0 < 16 >>> 0) {
      HEAP32[((((($1 << 4 | 0) + $0 | 0) << 2 | 0) + 18896 | 0) + 96 | 0) >> 2] = 0;
      $0 = $0 + 1 | 0;
      continue for_loop_1;
     }
     break for_loop_1;
    };
    $1 = $1 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  $lib_rt_tlsf_addMemory(18896, 20468, __wasm_memory_size() << 16 | 0);
  $lib_rt_tlsf_ROOT = 18896;
 }
 
 function $lib_rt_itcms_step() {
  var $0 = 0, $1 = 0, $2 = 0;
  folding_inner0 : {
   break_0 : {
    switch ($lib_rt_itcms_state | 0) {
    case 0:
     $lib_rt_itcms_state = 1;
     $lib_rt_itcms_visitCount = 0;
     $lib_rt_itcms_visitRoots();
     $lib_rt_itcms_iter = $lib_rt_itcms_toSpace;
     break folding_inner0;
    case 1:
     $1 = !$lib_rt_itcms_white;
     $0 = HEAP32[($lib_rt_itcms_iter + 4 | 0) >> 2] & -4 | 0;
     while_continue_1 : while (1) {
      if (($0 | 0) != ($lib_rt_itcms_toSpace | 0)) {
       $lib_rt_itcms_iter = $0;
       if (($1 | 0) != (HEAP32[($0 + 4 | 0) >> 2] & 3 | 0 | 0)) {
        HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] & -4 | 0 | $1 | 0;
        $lib_rt_itcms_visitCount = 0;
        $lib_rt___visit_members($0 + 20 | 0);
        break folding_inner0;
       }
       $0 = HEAP32[($0 + 4 | 0) >> 2] & -4 | 0;
       continue while_continue_1;
      }
      break while_continue_1;
     };
     $lib_rt_itcms_visitCount = 0;
     $lib_rt_itcms_visitRoots();
     if (($lib_rt_itcms_toSpace | 0) == (HEAP32[($lib_rt_itcms_iter + 4 | 0) >> 2] & -4 | 0 | 0)) {
      $0 = $lib_memory___stack_pointer;
      while_continue_0 : while (1) {
       if ($0 >>> 0 < 18884 >>> 0) {
        $lib_rt_itcms___visit(HEAP32[$0 >> 2]);
        $0 = $0 + 4 | 0;
        continue while_continue_0;
       }
       break while_continue_0;
      };
      $0 = HEAP32[($lib_rt_itcms_iter + 4 | 0) >> 2] & -4 | 0;
      while_continue_2 : while (1) {
       if (($0 | 0) != ($lib_rt_itcms_toSpace | 0)) {
        if (($1 | 0) != (HEAP32[($0 + 4 | 0) >> 2] & 3 | 0 | 0)) {
         HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] & -4 | 0 | $1 | 0;
         $lib_rt___visit_members($0 + 20 | 0);
        }
        $0 = HEAP32[($0 + 4 | 0) >> 2] & -4 | 0;
        continue while_continue_2;
       }
       break while_continue_2;
      };
      $0 = $lib_rt_itcms_fromSpace;
      $lib_rt_itcms_fromSpace = $lib_rt_itcms_toSpace;
      $lib_rt_itcms_toSpace = $0;
      $lib_rt_itcms_white = $1;
      $lib_rt_itcms_iter = HEAP32[($0 + 4 | 0) >> 2] & -4 | 0;
      $lib_rt_itcms_state = 2;
     }
     break folding_inner0;
    case 2:
     $0 = $lib_rt_itcms_iter;
     if (($0 | 0) != ($lib_rt_itcms_toSpace | 0)) {
      $1 = HEAP32[($0 + 4 | 0) >> 2];
      $lib_rt_itcms_iter = $1 & -4 | 0;
      if ((!$lib_rt_itcms_white | 0) != ($1 & 3 | 0 | 0)) {
       $lib_builtins_abort(0 | 0, 1248 | 0, 228 | 0, 20 | 0);
       abort();
      }
      if ($0 >>> 0 < 18884 >>> 0) {
       HEAP32[($0 + 4 | 0) >> 2] = 0;
       HEAP32[($0 + 8 | 0) >> 2] = 0;
      } else {
       $lib_rt_itcms_total = $lib_rt_itcms_total - ((HEAP32[$0 >> 2] & -4 | 0) + 4 | 0) | 0;
       $1 = $0 + 4 | 0;
       if ($1 >>> 0 >= 18884 >>> 0) {
        if (!$lib_rt_tlsf_ROOT) {
         $lib_rt_tlsf_initialize()
        }
        $2 = $lib_rt_tlsf_ROOT;
        $0 = $1 - 4 | 0;
        if (($1 ? $1 & 15 | 0 : 1) ? 1 : HEAP32[$0 >> 2] & 1 | 0) {
         $lib_builtins_abort(0 | 0, 1520 | 0, 559 | 0, 3 | 0);
         abort();
        }
        HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | 1 | 0;
        $lib_rt_tlsf_insertBlock($2, $0);
       }
      }
      return 10;
     }
     $0 = $lib_rt_itcms_toSpace;
     HEAP32[($0 + 4 | 0) >> 2] = $0;
     HEAP32[($0 + 8 | 0) >> 2] = $0;
     $lib_rt_itcms_state = 0;
     break;
    default:
     break break_0;
    };
   }
   return 0;
  }
  return $lib_rt_itcms_visitCount;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  var $2 = 0, $3 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $1 = $1 >>> 4 | 0
  } else {
   if ($1 >>> 0 < 536870910 >>> 0) {
    $1 = ($1 + (1 << (27 - Math_clz32($1) | 0) | 0) | 0) - 1 | 0
   }
   $2 = 31 - Math_clz32($1) | 0;
   $1 = ($1 >>> ($2 - 4 | 0) | 0) ^ 16 | 0;
   $2 = $2 - 7 | 0;
  }
  if (!($2 >>> 0 < 23 >>> 0 ? $1 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 330 | 0, 14 | 0);
   abort();
  }
  $1 = HEAP32[(($0 + ($2 << 2 | 0) | 0) + 4 | 0) >> 2] & (-1 << $1 | 0) | 0;
  if ($1) {
   if ($1) {
    $1 = 31 - Math_clz32(($1 - 1 | 0) ^ $1 | 0) | 0
   } else {
    $1 = 32
   }
   $0 = HEAP32[(($0 + (($1 + ($2 << 4 | 0) | 0) << 2 | 0) | 0) + 96 | 0) >> 2];
  } else {
   $1 = HEAP32[$0 >> 2] & (-1 << ($2 + 1 | 0) | 0) | 0;
   if ($1) {
    $3 = $0;
    if ($1) {
     $2 = 31 - Math_clz32(($1 - 1 | 0) ^ $1 | 0) | 0
    } else {
     $2 = 32
    }
    $1 = HEAP32[(($3 + ($2 << 2 | 0) | 0) + 4 | 0) >> 2];
    if (!$1) {
     $lib_builtins_abort(0 | 0, 1520 | 0, 343 | 0, 18 | 0);
     abort();
    }
    if ($1) {
     $1 = 31 - Math_clz32(($1 - 1 | 0) ^ $1 | 0) | 0
    } else {
     $1 = 32
    }
    $0 = HEAP32[(($0 + (($1 + ($2 << 4 | 0) | 0) << 2 | 0) | 0) + 96 | 0) >> 2];
   } else {
    $0 = 0
   }
  }
  return $0;
 }
 
 function $lib_rt_itcms___new($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  if ($0 >>> 0 >= 1073741804 >>> 0) {
   $lib_builtins_abort(1184 | 0, 1248 | 0, 260 | 0, 31 | 0);
   abort();
  }
  if ($lib_rt_itcms_total >>> 0 >= $lib_rt_itcms_threshold >>> 0) {
   __inlined_func$_lib_rt_itcms_interrupt : {
    $2 = 2048;
    do_loop_0 : while (1) {
     $2 = $2 - $lib_rt_itcms_step() | 0;
     if (!$lib_rt_itcms_state) {
      $3 = $lib_rt_itcms_total;
      $2 = Math_imul($3 & 65535 | 0, 200);
      $5 = Math_imul($3 >>> 16 | 0, 200) + ($2 >>> 16 | 0) | 0;
      $3 = $5 & 65535 | 0;
      i64toi32_i32$HIGH_BITS = ($5 >>> 16 | 0) + ($3 >>> 16 | 0) | 0;
      $lib_rt_itcms_threshold = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($2 & 65535 | 0 | ($3 << 16 | 0) | 0, i64toi32_i32$HIGH_BITS) + 1024 | 0;
      break __inlined_func$_lib_rt_itcms_interrupt;
     }
     if (($2 | 0) > (0 | 0)) {
      continue do_loop_0
     }
     break do_loop_0;
    };
    $2 = $lib_rt_itcms_total;
    $lib_rt_itcms_threshold = $2 + ((($2 - $lib_rt_itcms_threshold | 0) >>> 0 < 1024 >>> 0) << 10 | 0) | 0;
   }
  }
  $4 = $0 + 16 | 0;
  if (!$lib_rt_tlsf_ROOT) {
   $lib_rt_tlsf_initialize()
  }
  $5 = $lib_rt_tlsf_ROOT;
  $2 = $5;
  if ($4 >>> 0 > 1073741820 >>> 0) {
   $lib_builtins_abort(1184 | 0, 1520 | 0, 458 | 0, 29 | 0);
   abort();
  }
  $3 = $2;
  if ($4 >>> 0 <= 12 >>> 0) {
   $2 = 12
  } else {
   $2 = (($4 + 19 | 0) & -16 | 0) - 4 | 0
  }
  $3 = $lib_rt_tlsf_searchBlock($3, $2);
  if (!$3) {
   $4 = __wasm_memory_size();
   $6 = $4;
   if ($2 >>> 0 < 536870910 >>> 0) {
    $3 = $2 + ((1 << (27 - Math_clz32($2) | 0) | 0) - 1 | 0) | 0
   } else {
    $3 = $2
   }
   $3 = ((($3 + (4 << ((HEAP32[($5 + 1568 | 0) >> 2] | 0) != (($4 << 16 | 0) - 4 | 0 | 0)) | 0) | 0) + 65535 | 0) & -65536 | 0) >>> 16 | 0;
   if ((__wasm_memory_grow((($3 | 0) < ($4 | 0) ? $6 : $3) | 0) | 0) < (0 | 0)) {
    if ((__wasm_memory_grow($3 | 0) | 0) < (0 | 0)) {
     abort()
    }
   }
   $lib_rt_tlsf_addMemory($5, $4 << 16 | 0, __wasm_memory_size() << 16 | 0);
   $3 = $lib_rt_tlsf_searchBlock($5, $2);
   if (!$3) {
    $lib_builtins_abort(0 | 0, 1520 | 0, 496 | 0, 16 | 0);
    abort();
   }
  }
  if ($2 >>> 0 > (HEAP32[$3 >> 2] & -4 | 0) >>> 0) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 498 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_removeBlock($5, $3);
  $4 = HEAP32[$3 >> 2];
  if (($2 + 4 | 0) & 15 | 0) {
   $lib_builtins_abort(0 | 0, 1520 | 0, 357 | 0, 14 | 0);
   abort();
  }
  $6 = ($4 & -4 | 0) - $2 | 0;
  if ($6 >>> 0 >= 16 >>> 0) {
   HEAP32[$3 >> 2] = $2 | ($4 & 2 | 0) | 0;
   $2 = ($3 + 4 | 0) + $2 | 0;
   HEAP32[$2 >> 2] = $6 - 4 | 0 | 1 | 0;
   $lib_rt_tlsf_insertBlock($5, $2);
  } else {
   HEAP32[$3 >> 2] = $4 & -2 | 0;
   $2 = ($3 + 4 | 0) + (HEAP32[$3 >> 2] & -4 | 0) | 0;
   HEAP32[$2 >> 2] = HEAP32[$2 >> 2] & -3 | 0;
  }
  HEAP32[($3 + 12 | 0) >> 2] = $1;
  HEAP32[($3 + 16 | 0) >> 2] = $0;
  $2 = $lib_rt_itcms_fromSpace;
  $1 = HEAP32[($2 + 8 | 0) >> 2];
  HEAP32[($3 + 4 | 0) >> 2] = $2 | $lib_rt_itcms_white | 0;
  HEAP32[($3 + 8 | 0) >> 2] = $1;
  HEAP32[($1 + 4 | 0) >> 2] = $3 | (HEAP32[($1 + 4 | 0) >> 2] & 3 | 0) | 0;
  HEAP32[($2 + 8 | 0) >> 2] = $3;
  $lib_rt_itcms_total = $lib_rt_itcms_total + ((HEAP32[$3 >> 2] & -4 | 0) + 4 | 0) | 0;
  $1 = $3 + 20 | 0;
  wasm2js_memory_fill($1, 0, $0);
  return $1 | 0;
 }
 
 function $lib_rt_itcms___link($0, $1, $2) {
  var $3 = 0;
  if (!$1) {
   return
  }
  if (!$0) {
   $lib_builtins_abort(0 | 0, 1248 | 0, 294 | 0, 14 | 0);
   abort();
  }
  $1 = $1 - 20 | 0;
  if (($lib_rt_itcms_white | 0) == (HEAP32[($1 + 4 | 0) >> 2] & 3 | 0 | 0)) {
   $0 = $0 - 20 | 0;
   $3 = HEAP32[($0 + 4 | 0) >> 2] & 3 | 0;
   if (($3 | 0) == (!$lib_rt_itcms_white | 0)) {
    $lib_rt_itcms_Object_makeGray($2 ? $0 : $1)
   } else {
    if (($3 | 0) == (3 | 0) ? ($lib_rt_itcms_state | 0) == (1 | 0) : 0) {
     $lib_rt_itcms_Object_makeGray($1)
    }
   }
  }
 }
 
 function assembly_human_match_features() {
  return $lib_rt___newArray(6, 5, 1136) | 0;
 }
 
 function $lib_array_ensureCapacity($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = HEAP32[1096 >> 2];
  if ($0 >>> 0 > ($3 >>> 2 | 0) >>> 0) {
   if ($0 >>> 0 > 268435455 >>> 0) {
    $lib_builtins_abort(1584 | 0, 1632 | 0, 18 | 0, 48 | 0);
    abort();
   }
   $0 = ($0 >>> 0 > 8 >>> 0 ? $0 : 8) << 2 | 0;
   if ($1) {
    $1 = $3 << 1 | 0;
    $1 = $1 >>> 0 < 1073741820 >>> 0 ? $1 : 1073741820;
    $0 = $0 >>> 0 < $1 >>> 0 ? $1 : $0;
   }
   $1 = $0;
   $5 = HEAP32[1088 >> 2];
   $2 = $5;
   $4 = $2 - 20 | 0;
   __inlined_func$_lib_rt_itcms___renew : {
    if ($0 >>> 0 <= ((HEAP32[$4 >> 2] & -4 | 0) - 16 | 0) >>> 0) {
     HEAP32[($4 + 16 | 0) >> 2] = $1;
     $0 = $2;
     break __inlined_func$_lib_rt_itcms___renew;
    }
    $0 = $lib_rt_itcms___new($1, HEAP32[($4 + 12 | 0) >> 2]);
    $6 = $2;
    $2 = HEAP32[($4 + 16 | 0) >> 2];
    wasm2js_memory_copy($0, $6, $1 >>> 0 < $2 >>> 0 ? $1 : $2);
   }
   wasm2js_memory_fill($0 + $3 | 0, 0, $1 - $3 | 0);
   if (($0 | 0) != ($5 | 0)) {
    HEAP32[1088 >> 2] = $0;
    HEAP32[1092 >> 2] = $0;
    $lib_rt_itcms___link(1088, $0, 0);
   }
   HEAP32[1096 >> 2] = $1;
  }
 }
 
 function $lib_array_Array_f32____get($0, $1) {
  if ($1 >>> 0 >= HEAP32[($0 + 12 | 0) >> 2] >>> 0) {
   $lib_builtins_abort(1376 | 0, 1632 | 0, 107 | 0, 42 | 0);
   abort();
  }
  return HEAPF32[(HEAP32[($0 + 4 | 0) >> 2] + ($1 << 2 | 0) | 0) >> 2];
 }
 
 function $lib_math_NativeMathf_pow($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = Math_fround(0), $6 = 0.0, $7 = 0, $8 = 0.0, $9 = 0;
  if (Math_fround(Math_abs($1)) <= Math_fround(2.0)) {
   if ($1 == Math_fround(2.0)) {
    return Math_fround($0 * $0)
   }
   if ($1 == Math_fround(.5)) {
    return $0 != Math_fround(-infinity) ? Math_fround(Math_abs(Math_fround(Math_sqrt($0)))) : Math_fround(infinity)
   }
   if ($1 == Math_fround(-1.0)) {
    return Math_fround(Math_fround(1.0) / $0)
   }
   if ($1 == Math_fround(1.0)) {
    return $0
   }
   if ($1 == Math_fround(0.0)) {
    return Math_fround(1.0)
   }
  }
  $4 = (wasm2js_scratch_store_f32($1), wasm2js_scratch_load_i32(2));
  $7 = (($4 << 1 | 0) - 1 | 0) >>> 0 >= -16777217 >>> 0;
  $2 = (wasm2js_scratch_store_f32($0), wasm2js_scratch_load_i32(2));
  $lib_util_math_powf_lut_inlined_0 : {
   if ($7 | ($2 - 8388608 | 0) >>> 0 >= 2130706432 >>> 0 | 0) {
    if ($7) {
     $5 = Math_fround(1.0);
     if (!($4 << 1 | 0)) {
      break $lib_util_math_powf_lut_inlined_0
     }
     $5 = Math_fround(nan);
     if (($2 | 0) == (1065353216 | 0)) {
      break $lib_util_math_powf_lut_inlined_0
     }
     $5 = Math_fround($0 + $1);
     if (($2 << 1 | 0) >>> 0 > -16777216 >>> 0 ? 1 : ($4 << 1 | 0) >>> 0 > -16777216 >>> 0) {
      break $lib_util_math_powf_lut_inlined_0
     }
     $5 = Math_fround(nan);
     if (($2 << 1 | 0 | 0) == (2130706432 | 0)) {
      break $lib_util_math_powf_lut_inlined_0
     }
     $5 = Math_fround(0.0);
     if ((!($4 >>> 31 | 0) | 0) == (($2 << 1 | 0) >>> 0 < 2130706432 >>> 0 | 0)) {
      break $lib_util_math_powf_lut_inlined_0
     }
     $5 = Math_fround($1 * $1);
     break $lib_util_math_powf_lut_inlined_0;
    }
    if ((($2 << 1 | 0) - 1 | 0) >>> 0 >= -16777217 >>> 0) {
     $0 = Math_fround($0 * $0);
     $1 = Math_fround(-$0);
     if ($2 >>> 31 | 0) {
      $3 = ($4 >>> 23 | 0) & 255 | 0;
      $2 = 0;
      $lib_util_math_checkintf_inlined_0 : {
       if ($3 >>> 0 < 127 >>> 0) {
        break $lib_util_math_checkintf_inlined_0
       }
       $2 = 2;
       if ($3 >>> 0 > 150 >>> 0) {
        break $lib_util_math_checkintf_inlined_0
       }
       $3 = 1 << (150 - $3 | 0) | 0;
       $2 = 0;
       if ($4 & ($3 - 1 | 0) | 0) {
        break $lib_util_math_checkintf_inlined_0
       }
       $2 = 1;
       if ($4 & $3 | 0) {
        break $lib_util_math_checkintf_inlined_0
       }
       $2 = 2;
      }
      $3 = ($2 | 0) == (1 | 0);
     } else {
      $3 = 0
     }
     $0 = $3 ? $1 : $0;
     $5 = $4 >>> 31 | 0 ? Math_fround(Math_fround(1.0) / $0) : $0;
     break $lib_util_math_powf_lut_inlined_0;
    }
    if ($2 >>> 31 | 0) {
     $7 = ($4 >>> 23 | 0) & 255 | 0;
     $3 = 0;
     $lib_util_math_checkintf_inlined_1 : {
      if ($7 >>> 0 < 127 >>> 0) {
       break $lib_util_math_checkintf_inlined_1
      }
      $3 = 2;
      if ($7 >>> 0 > 150 >>> 0) {
       break $lib_util_math_checkintf_inlined_1
      }
      $7 = 1 << (150 - $7 | 0) | 0;
      $3 = 0;
      if ($4 & ($7 - 1 | 0) | 0) {
       break $lib_util_math_checkintf_inlined_1
      }
      $3 = 1;
      if ($4 & $7 | 0) {
       break $lib_util_math_checkintf_inlined_1
      }
      $3 = 2;
     }
     if (!$3) {
      $0 = Math_fround($0 - $0);
      $5 = Math_fround($0 / $0);
      break $lib_util_math_powf_lut_inlined_0;
     }
     $2 = $2 & 2147483647 | 0;
     $3 = ($3 | 0) == (1 | 0) ? 65536 : 0;
    } else {
     $3 = 0
    }
    if ($2 >>> 0 < 8388608 >>> 0) {
     $2 = ((wasm2js_scratch_store_f32(Math_fround($0 * Math_fround(8388608.0))), wasm2js_scratch_load_i32(2)) & 2147483647 | 0) - 192937984 | 0
    }
   }
   $9 = $2;
   $2 = $2 - 1060306944 | 0;
   $4 = $2 & -8388608 | 0;
   $2 = ((($2 >>> 19 | 0) & 15 | 0) << 4 | 0) + 1664 | 0;
   $6 = +(wasm2js_scratch_store_i32(2, $9 - $4 | 0), wasm2js_scratch_load_f32()) * HEAPF64[$2 >> 3] - 1.0;
   $8 = $6 * $6;
   $6 = +$1 * (($6 * .288457581109214 + -.36092606229713164) * ($8 * $8) + ($6 * 1.4426950408774342 + (HEAPF64[($2 + 8 | 0) >> 3] + +($4 >> 23 | 0 | 0)) + ($6 * .480898481472577 + -.7213474675006291) * $8));
   wasm2js_scratch_store_f64(+$6);
   $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
   wasm2js_scratch_load_i32(0 | 0) | 0;
   if ((($2 >>> 15 | 0) & 65535 | 0) >>> 0 >= 32959 >>> 0) {
    $5 = Math_fround(($3 ? Math_fround(-1584563250285286751870879.0e5) : Math_fround(1584563250285286751870879.0e5)) * Math_fround(1584563250285286751870879.0e5));
    if ($6 > 127.99999995700433) {
     break $lib_util_math_powf_lut_inlined_0
    }
    $5 = Math_fround(($3 ? Math_fround(-2.524354896707238e-29) : Math_fround(2.524354896707238e-29)) * Math_fround(2.524354896707238e-29));
    if ($6 <= -150.0) {
     break $lib_util_math_powf_lut_inlined_0
    }
   }
   $8 = $6 + 211106232532992.0;
   wasm2js_scratch_store_f64(+$8);
   wasm2js_scratch_load_i32(1 | 0) | 0;
   $4 = wasm2js_scratch_load_i32(0 | 0) | 0;
   $6 = $6 - ($8 - 211106232532992.0);
   $6 = $6 * .6931471806916203 + 1.0 + ($6 * .05550361559341535 + .2402284522445722) * ($6 * $6);
   $7 = (($4 & 31 | 0) << 3 | 0) + 1920 | 0;
   $9 = HEAP32[$7 >> 2];
   $7 = HEAP32[($7 + 4 | 0) >> 2];
   $4 = $4 + $3 | 0;
   $2 = ($4 << 15 | 0) + $7 | 0;
   $4 = 0;
   $3 = $4;
   $4 = $9;
   $2 = $3 >>> 0 > $4 >>> 0 ? $2 + 1 | 0 : $2;
   wasm2js_scratch_store_i32(0 | 0, $4 | 0);
   wasm2js_scratch_store_i32(1 | 0, $2 | 0);
   $5 = Math_fround($6 * +wasm2js_scratch_load_f64());
  }
  return $5;
 }
 
 function assembly_human_match_distance($0, $1, $2) {
  var $3 = Math_fround(0), $4 = 0, $5 = Math_fround(0);
  for_loop_0 : while (1) {
   if (($4 | 0) < (HEAP32[($0 + 12 | 0) >> 2] | 0)) {
    $3 = Math_fround(Math_abs(Math_fround($lib_array_Array_f32____get($0, $4) - $lib_array_Array_f32____get($1, $4))));
    if ($2 == Math_fround(2.0)) {
     $3 = Math_fround($3 * $3)
    } else {
     $3 = $lib_math_NativeMathf_pow($3, $2)
    }
    $5 = Math_fround($5 + $3);
    $4 = $4 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  return $5;
 }
 
 function $lib_rt_itcms___pin($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0;
  if ($0) {
   $1 = $0 - 20 | 0;
   if ((HEAP32[($1 + 4 | 0) >> 2] & 3 | 0 | 0) == (3 | 0)) {
    $lib_builtins_abort(2336 | 0, 1248 | 0, 337 | 0, 7 | 0);
    abort();
   }
   $lib_rt_itcms_Object_unlink($1);
   $2 = $lib_rt_itcms_pinSpace;
   $3 = HEAP32[($2 + 8 | 0) >> 2];
   HEAP32[($1 + 4 | 0) >> 2] = $2 | 3 | 0;
   HEAP32[($1 + 8 | 0) >> 2] = $3;
   HEAP32[($3 + 4 | 0) >> 2] = $1 | (HEAP32[($3 + 4 | 0) >> 2] & 3 | 0) | 0;
   HEAP32[($2 + 8 | 0) >> 2] = $1;
  }
  return $0 | 0;
 }
 
 function $lib_rt_itcms___unpin($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  if (!$0) {
   return
  }
  $0 = $0 - 20 | 0;
  if ((HEAP32[($0 + 4 | 0) >> 2] & 3 | 0 | 0) != (3 | 0)) {
   $lib_builtins_abort(2400 | 0, 1248 | 0, 351 | 0, 5 | 0);
   abort();
  }
  if (($lib_rt_itcms_state | 0) == (1 | 0)) {
   $lib_rt_itcms_Object_makeGray($0)
  } else {
   $lib_rt_itcms_Object_unlink($0);
   $1 = $lib_rt_itcms_fromSpace;
   $2 = HEAP32[($1 + 8 | 0) >> 2];
   HEAP32[($0 + 4 | 0) >> 2] = $1 | $lib_rt_itcms_white | 0;
   HEAP32[($0 + 8 | 0) >> 2] = $2;
   HEAP32[($2 + 4 | 0) >> 2] = $0 | (HEAP32[($2 + 4 | 0) >> 2] & 3 | 0) | 0;
   HEAP32[($1 + 8 | 0) >> 2] = $0;
  }
 }
 
 function $lib_rt_itcms___collect() {
  var $0 = 0, $1 = 0, $2 = 0;
  if (($lib_rt_itcms_state | 0) > (0 | 0)) {
   while_continue_0 : while (1) {
    if ($lib_rt_itcms_state) {
     $lib_rt_itcms_step();
     continue while_continue_0;
    }
    break while_continue_0;
   }
  }
  $lib_rt_itcms_step();
  while_continue_1 : while (1) {
   if ($lib_rt_itcms_state) {
    $lib_rt_itcms_step();
    continue while_continue_1;
   }
   break while_continue_1;
  };
  $0 = $lib_rt_itcms_total;
  $1 = Math_imul($0 & 65535 | 0, 200);
  $2 = Math_imul($0 >>> 16 | 0, 200) + ($1 >>> 16 | 0) | 0;
  $0 = $2 & 65535 | 0;
  i64toi32_i32$HIGH_BITS = ($2 >>> 16 | 0) + ($0 >>> 16 | 0) | 0;
  $lib_rt_itcms_threshold = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($1 & 65535 | 0 | ($0 << 16 | 0) | 0, i64toi32_i32$HIGH_BITS) + 1024 | 0;
 }
 
 function $lib_rt___visit_members($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  folding_inner0 : {
   switch (HEAP32[($0 - 8 | 0) >> 2] | 0) {
   case 0:
    return;
   case 1:
    return;
   case 2:
    $0 = HEAP32[$0 >> 2];
    if ($0) {
     $lib_rt_itcms___visit($0)
    }
    return;
   case 4:
    $1 = HEAP32[($0 + 4 | 0) >> 2];
    $3 = $1 + (HEAP32[($0 + 12 | 0) >> 2] << 2 | 0) | 0;
    while_continue_0 : while (1) {
     if ($1 >>> 0 < $3 >>> 0) {
      $2 = HEAP32[$1 >> 2];
      if ($2) {
       $lib_rt_itcms___visit($2)
      }
      $1 = $1 + 4 | 0;
      continue while_continue_0;
     }
     break while_continue_0;
    };
    $lib_rt_itcms___visit(HEAP32[$0 >> 2]);
    return;
   default:
    abort();
   case 3:
   case 5:
    break folding_inner0;
   };
  }
  $lib_rt_itcms___visit(HEAP32[$0 >> 2]);
 }
 
 function $start() {
  $lib_rt_itcms_threshold = ((__wasm_memory_size() << 16 | 0) - 18884 | 0) >>> 1 | 0;
  HEAP32[1300 >> 2] = 1296;
  HEAP32[1304 >> 2] = 1296;
  $lib_rt_itcms_pinSpace = 1296;
  HEAP32[1332 >> 2] = 1328;
  HEAP32[1336 >> 2] = 1328;
  $lib_rt_itcms_toSpace = 1328;
  HEAP32[1476 >> 2] = 1472;
  HEAP32[1480 >> 2] = 1472;
  $lib_rt_itcms_fromSpace = 1472;
 }
 
 function assembly_human_match_reset() {
  var $0 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  if (($lib_memory___stack_pointer | 0) < (2500 | 0)) {
   $lib_builtins_abort(18912 | 0, 18960 | 0, 1 | 0, 1 | 0);
   abort();
  }
  $0 = $lib_memory___stack_pointer;
  HEAP32[$0 >> 2] = 0;
  HEAP32[$0 >> 2] = 1088;
  $lib_array_ensureCapacity(0, 0);
  HEAP32[1100 >> 2] = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
 }
 
 function $lib_rt___newArray($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  if (($lib_memory___stack_pointer | 0) < (2500 | 0)) {
   $lib_builtins_abort(18912 | 0, 18960 | 0, 1 | 0, 1 | 0);
   abort();
  }
  $5 = $lib_memory___stack_pointer;
  HEAP32[$5 >> 2] = 0;
  $4 = $0 << 2 | 0;
  $3 = $lib_rt_itcms___new($4, 0);
  if ($2) {
   wasm2js_memory_copy($3, $2, $4)
  }
  HEAP32[$5 >> 2] = $3;
  $1 = $lib_rt_itcms___new(16, $1);
  HEAP32[$1 >> 2] = $3;
  $lib_rt_itcms___link($1, $3, 0);
  HEAP32[($1 + 4 | 0) >> 2] = $3;
  HEAP32[($1 + 8 | 0) >> 2] = $4;
  HEAP32[($1 + 12 | 0) >> 2] = $0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $1;
 }
 
 function export_assembly_human_match_register($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  folding_inner0 : {
   if (($lib_memory___stack_pointer | 0) < (2500 | 0)) {
    break folding_inner0
   }
   $1 = $lib_memory___stack_pointer;
   HEAP32[$1 >> 2] = $0;
   $lib_memory___stack_pointer = $1 - 4 | 0;
   if (($lib_memory___stack_pointer | 0) < (2500 | 0)) {
    break folding_inner0
   }
   $1 = $lib_memory___stack_pointer;
   HEAP32[$1 >> 2] = 0;
   HEAP32[$1 >> 2] = 1088;
   $1 = HEAP32[1100 >> 2];
   $2 = $1 + 1 | 0;
   $lib_array_ensureCapacity($2, 1);
   HEAP32[(HEAP32[1092 >> 2] + ($1 << 2 | 0) | 0) >> 2] = $0;
   $lib_rt_itcms___link(1088, $0, 1);
   HEAP32[1100 >> 2] = $2;
   HEAP32[$lib_memory___stack_pointer >> 2] = 1088;
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
   return HEAP32[1100 >> 2] | 0;
  }
  $lib_builtins_abort(18912 | 0, 18960 | 0, 1 | 0, 1 | 0);
  abort();
 }
 
 function export_assembly_human_match_distance($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = Math_fround($2);
  var $3 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 8 | 0;
  if (($lib_memory___stack_pointer | 0) < (2500 | 0)) {
   $lib_builtins_abort(18912 | 0, 18960 | 0, 1 | 0, 1 | 0);
   abort();
  }
  $3 = $lib_memory___stack_pointer;
  HEAP32[$3 >> 2] = $0;
  HEAP32[($3 + 4 | 0) >> 2] = $1;
  $2 = assembly_human_match_distance($0, $1, $2);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 8 | 0;
  return Math_fround($2);
 }
 
 function export_assembly_human_match_match($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0, $4 = Math_fround(0), $5 = Math_fround(0);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  folding_inner1 : {
   if (($lib_memory___stack_pointer | 0) < (2500 | 0)) {
    break folding_inner1
   }
   $1 = $lib_memory___stack_pointer;
   HEAP32[$1 >> 2] = $0;
   $lib_memory___stack_pointer = $1 - 16 | 0;
   if (($lib_memory___stack_pointer | 0) < (2500 | 0)) {
    break folding_inner1
   }
   $1 = $lib_memory___stack_pointer;
   HEAP32[$1 >> 2] = 0;
   HEAP32[($1 + 4 | 0) >> 2] = 0;
   HEAP32[($1 + 8 | 0) >> 2] = 0;
   HEAP32[($1 + 12 | 0) >> 2] = 0;
   $4 = Math_fround(1.0);
   $1 = -1;
   for_loop_0 : while (1) {
    HEAP32[$lib_memory___stack_pointer >> 2] = 1088;
    if (($2 | 0) < (HEAP32[1100 >> 2] | 0)) {
     $3 = $lib_memory___stack_pointer;
     HEAP32[($3 + 4 | 0) >> 2] = 1088;
     $lib_memory___stack_pointer = $3 - 4 | 0;
     if (($lib_memory___stack_pointer | 0) < (2500 | 0)) {
      break folding_inner1
     }
     HEAP32[$lib_memory___stack_pointer >> 2] = 0;
     if ($2 >>> 0 >= HEAP32[1100 >> 2] >>> 0) {
      $lib_builtins_abort(1376 | 0, 1632 | 0, 107 | 0, 42 | 0);
      abort();
     }
     $3 = HEAP32[(HEAP32[1092 >> 2] + ($2 << 2 | 0) | 0) >> 2];
     HEAP32[$lib_memory___stack_pointer >> 2] = $3;
     if (!$3) {
      $lib_builtins_abort(2208 | 0, 1632 | 0, 111 | 0, 40 | 0);
      abort();
     }
     $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
     HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $3;
     $5 = assembly_human_match_distance($0, $3, Math_fround(2.0));
     if ($4 > $5) {
      $1 = $2;
      $4 = $5;
     }
     $2 = $2 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
   $4 = $lib_math_NativeMathf_pow($4, Math_fround(.5));
   $2 = $lib_memory___stack_pointer;
   $0 = $lib_rt___newArray(3, 3, 0);
   HEAP32[($2 + 8 | 0) >> 2] = $0;
   HEAP32[($lib_memory___stack_pointer + 12 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2];
   HEAPF32[HEAP32[($0 + 4 | 0) >> 2] >> 2] = Math_fround($1 | 0);
   HEAPF32[(HEAP32[($0 + 4 | 0) >> 2] + 4 | 0) >> 2] = $4;
   HEAPF32[(HEAP32[($0 + 4 | 0) >> 2] + 8 | 0) >> 2] = Math_fround(Math_fround(Math_max(Math_fround(0.0), Math_fround(Math_fround(100.0) - $4))) / Math_fround(100.0));
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 16 | 0;
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
   return $0 | 0;
  }
  $lib_builtins_abort(18912 | 0, 18960 | 0, 1 | 0, 1 | 0);
  abort();
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  if (!$1) {
   i64toi32_i32$HIGH_BITS = 0;
   return ($0 >>> 0) / (100 >>> 0) | 0;
  }
  $5 = 58 - Math_clz32($1) | 0;
  $2 = 0 - $5 | 0;
  $4 = $5 & 63 | 0;
  $3 = $4 & 31 | 0;
  if ($4 >>> 0 >= 32 >>> 0) {
   $4 = 0;
   $3 = $1 >>> $3 | 0;
  } else {
   $4 = $1 >>> $3 | 0;
   $3 = (((1 << $3 | 0) - 1 | 0) & $1 | 0) << (32 - $3 | 0) | 0 | ($0 >>> $3 | 0) | 0;
  }
  $6 = $2 & 63 | 0;
  $2 = $6 & 31 | 0;
  if ($6 >>> 0 >= 32 >>> 0) {
   $1 = $0 << $2 | 0;
   $0 = 0;
  } else {
   $1 = ((1 << $2 | 0) - 1 | 0) & ($0 >>> (32 - $2 | 0) | 0) | 0 | ($1 << $2 | 0) | 0;
   $0 = $0 << $2 | 0;
  }
  if ($5) {
   label$15 : while (1) {
    $2 = $0;
    $6 = $4 << 1 | 0 | ($3 >>> 31 | 0) | 0;
    $0 = $3 << 1 | 0 | ($1 >>> 31 | 0) | 0;
    $7 = (0 - ($6 + ($0 >>> 0 > 99 >>> 0) | 0) | 0) >> 31 | 0;
    $4 = $7 & 100 | 0;
    $3 = $0 - $4 | 0;
    $4 = $6 - ($0 >>> 0 < $4 >>> 0) | 0;
    $0 = $2 << 1 | 0 | $8 | 0;
    $1 = $1 << 1 | 0 | ($2 >>> 31 | 0) | 0;
    $7 = $7 & 1 | 0;
    $8 = $7;
    $5 = $5 - 1 | 0;
    if ($5) {
     continue label$15
    }
    break label$15;
   }
  }
  i64toi32_i32$HIGH_BITS = $1 << 1 | 0 | ($0 >>> 31 | 0) | 0;
  return $0 << 1 | 0 | $7 | 0;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(env);
 $start();
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   memory.buffer = buffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "features": assembly_human_match_features, 
  "reset": assembly_human_match_reset, 
  "__new": $lib_rt_itcms___new, 
  "__pin": $lib_rt_itcms___pin, 
  "__unpin": $lib_rt_itcms___unpin, 
  "__collect": $lib_rt_itcms___collect, 
  "__rtti_base": $lib_rt___rtti_base, 
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "register": export_assembly_human_match_register, 
  "distance": export_assembly_human_match_distance, 
  "match": export_assembly_human_match_match
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc(  { abort: function() { throw new Error('abort'); },
    abort,
    memory: { buffer : memasmFunc }
  });
export var features = retasmFunc.features;
export var reset = retasmFunc.reset;
export var __new = retasmFunc.__new;
export var __pin = retasmFunc.__pin;
export var __unpin = retasmFunc.__unpin;
export var __collect = retasmFunc.__collect;
export var memory = retasmFunc.memory;
export var register = retasmFunc.register;
export var distance = retasmFunc.distance;
export var match = retasmFunc.match;
