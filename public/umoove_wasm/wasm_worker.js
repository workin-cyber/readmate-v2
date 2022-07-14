importScripts("umoove_eye.js");
linkForFetchLocal = " http://localhost:3000";
linkForFetchOnline = " https://peripherex-patient-test.wl.r.appspot.com/";
let videoWidth = 960;
let videoHeight = 720;

var started = false;
var initialized = false;
var proccesed = true;
var emptyResponse = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

var server_key;

function init_wasm() {
  _initUmoove(videoWidth, videoHeight, 1.0);
  _setUmooveFilterState(false);
  var res;
  var domainName = self.location.hostname;
  var timestamp = Date.now();
  var xhttp = new XMLHttpRequest();
  var ptr;

  ////////////////////Get Auth///////////////////////
  fetch(
    linkForFetchOnline +
      "/?requestTime=" +
      timestamp +
      "&type=eyeSDK&sourceType=web&source=" +
      domainName,
    { method: "GET", headers: { x: "xxx" } }
  )
    .then((response) => response.json())
    .then(
      (data) => (
        (server_key = data.key),
        (ptr = allocate(intArrayFromString(server_key), "i8", 0)),
        console.log("Key:" + server_key + " response:" + _umooveAuth(ptr)),
        _free(ptr)
        //,        start_wasm(true)
      )
    );

  //server_key = "1324670667309.37649688006875415056";

  //   server_key = res;

  // Create a pointer using the 'Glue' method and the String value

  //_setUmooveTrackingMode(0);
  //   console.log("Umoove wasm initialized");
}
function start_wasm(isAuto) {
  _startUmoove(isAuto);
  console.log("Umoove wasm started");
}
function stop_wasm() {
  _stopUmoove();
  console.log("Umoove wasm stopped");
}
function startWithStrip_wasm(isAuto, leftBox, rightBox) {
  _startUmooveWithStrip(
    isAuto,
    leftBox.x,
    leftBox.y,
    leftBox.width,
    leftBox.height,
    rightBox.x,
    rightBox.y,
    rightBox.width,
    rightBox.height,
    0
  );
  console.log("Umoove wasm startedWithStrip");
}
function setTrackingMode_wasm(mode) {
  _setUmooveTrackingMode(mode);
  console.log("Umoove wasm setTrackingMode");
}

function _arrayToHeapF32(typedArray) {
  let numBytes_a = typedArray.length * typedArray.BYTES_PER_ELEMENT;
  let ptr = _malloc(numBytes_a);
  let heapBytes = new Float32Array(Module.HEAPF32.buffer, ptr, numBytes_a);
  heapBytes.set(new Float32Array(typedArray.buffer));
  return heapBytes;
}

const numBytes = videoWidth * videoHeight * 4;

onmessage = function (e) {
  var command = e.data[0];
  var params = e.data[1];
  var imageData = e.data[2];

  proccesed = false;

  switch (command) {
    case "init":
      initialized = true;
      videoWidth = params[0].videoWidth;
      videoHeight = params[0].videoHeight;
      init_wasm();

      break;
    case "setTrackingMode":
      setTrackingMode_wasm(params[0]);

      break;
    case "start":
      if (!initialized) {
        initialized = true;
        init_wasm();
      }
      started = true;
      start_wasm(params[0]);

      break;
    case "stop":
      started = false;
      stop_wasm();

      break;
    case "startWithStrip":
      if (!initialized) {
        initialized = true;
        init_wasm();
      }
      started = true;
      startWithStrip_wasm(params[0], params[1], params[2]);

      break;
    case "process":
      if (initialized && started) {
        proccesed = true;

        pixelArray = imageData;
        //console.log("pppppppp Pixels: " + pixelArray[0] + ", " + pixelArray[1] + ", " + pixelArray[2] + ", " + pixelArray[3]);
        t0 = performance.now();
        //bgraToBgr(pixelArray,videoWidth,videoHeight);
        let vidPixels = Module._malloc(numBytes);
        let pixels = new Uint8Array(Module.HEAPU8.buffer, vidPixels, numBytes);
        let typedArray = new Uint8ClampedArray(pixelArray);
        pixels.set(new Uint8Array(typedArray.buffer));
        //t1 = performance.now()
        //console.log("+++++++++++++++ prepare data " + (t1 - t0) + " milliseconds.")

        let umooveOutput = new Float32Array(37);
        let umooveHeapBytes = _arrayToHeapF32(umooveOutput);

        var p0 = performance.now();

        var returned = _processUmoove(
          pixels.byteOffset,
          umooveHeapBytes.byteOffset
        );
        //console.log("returned  = "+ returned);

        var p1 = performance.now();
        //console.log("+++++++++++++++ Process time: " + (p1 - p0) + " milliseconds.")

        postMessage([
          umooveHeapBytes[0],
          umooveHeapBytes[1],
          umooveHeapBytes[2],
          umooveHeapBytes[3],
          umooveHeapBytes[4],
          umooveHeapBytes[5],
          umooveHeapBytes[6],
          umooveHeapBytes[7],
          umooveHeapBytes[8],
          umooveHeapBytes[9],
          umooveHeapBytes[10],
          umooveHeapBytes[11],
          umooveHeapBytes[12],
          umooveHeapBytes[13],
          umooveHeapBytes[14],
          umooveHeapBytes[15],
          umooveHeapBytes[16],
          umooveHeapBytes[17],
          umooveHeapBytes[18],
          umooveHeapBytes[19],
          umooveHeapBytes[20],
          umooveHeapBytes[21],
          umooveHeapBytes[22],
          umooveHeapBytes[23],
          umooveHeapBytes[24],
          umooveHeapBytes[25],
          umooveHeapBytes[26],
          umooveHeapBytes[27],
          umooveHeapBytes[28],
          umooveHeapBytes[29],
          umooveHeapBytes[30],
          umooveHeapBytes[31],
          umooveHeapBytes[32],
          umooveHeapBytes[33],
          umooveHeapBytes[34],
          umooveHeapBytes[35],
          umooveHeapBytes[36],
        ]);

        let num_bytes_out = umooveOutput.length;
        let dataPtr = Module._malloc(num_bytes_out);
        umooveHeapBytes = new Float32Array(
          Module.HEAPF32.buffer,
          dataPtr,
          num_bytes_out
        );
        _free(pixels.byteOffset);
      }
      break;
    default:
  }

  if (!proccesed) {
    postMessage(emptyResponse);
  }
};
