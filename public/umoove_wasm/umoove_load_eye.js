var umooveHasStarted = false;
let videoWidth = 960;
let videoHeight = 720;

function PointXY(x, y) {
  this.x = x;
  this.y = y;
}
function EyePointsXY(lx, ly, rx, ry) {
  this.left = new PointXY(lx, ly);
  this.right = new PointXY(rx, ry);
}
var umooveStarted = false;
var UMstate = -1;
var UMirisPos = new EyePointsXY(0, 0, 0, 0);
var UMirisMov = new EyePointsXY(0, 0, 0, 0);
var UMirisMov = new EyePointsXY(0, 0, 0, 0);
var UMleftReliability = -2;
var UMrightReliability = -2;
var UMCombinedReliability = -2;
var UMleftStability = 0;
var UMrightStability = 0;
var UMheadPos = new PointXY(0, 0);
var UMmovType = -1;
var UMblink = 0;
var UMFaceState = -1;
var UMEyeState = -1;
var UMDiam = 0;
var UMirisPix = new EyePointsXY(0, 0, 0, 0);
var UMirisPixFiltered = new EyePointsXY(0, 0, 0, 0);
var UMCombinedIrisPos = new PointXY(0, 0);

function initUmoove() {
  wasmWorker.postMessage(["init", [{ videoWidth, videoHeight }], [0]]);
  umooveStarted = true;
}
function startUmoove(isAuto) {
  // setInterval(() => {
  //   let array = [
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //     ["1", "2", "3", "4", "4", "6", "7", "8", "9", "10"],
  //   ];
  //   let randPosition = Math.floor(Math.random() * 10);
  //   window.data = array[randPosition];
  // }, 1000);
  wasmWorker.postMessage(["start", [isAuto], [0]]);
}
function startUmooveWithStrip(isAuto, leftBox, rightBox) {
  var lBox = { x: 0, y: 0, width: 0, height: 0 };
  var rBox = { x: 0, y: 0, width: 0, height: 0 };

  lBox.x = leftBox.x * videoWidth;
  lBox.width = leftBox.width * videoWidth;
  lBox.y = leftBox.y * videoHeight;
  lBox.height = leftBox.height * videoHeight;
  rBox.x = rightBox.x * videoWidth;
  rBox.width = rightBox.width * videoWidth;
  rBox.y = rightBox.y * videoHeight;
  rBox.height = rightBox.height * videoHeight;
  wasmWorker.postMessage(["startWithStrip", [isAuto, lBox, rBox], [0]]);
}
function stopUmoove() {
  wasmWorker.postMessage(["stop", [0], [0]]);
}
function setTrackingModeUmoove(mode) {
  wasmWorker.postMessage(["setTrackingMode", [mode], [0]]);
}
//spawn a dedicated worker for WASM
var wasmWorker;
wasmWorker = new Worker("../umoove_wasm/wasm_worker.js");

var workerBusy = false;
wasmWorker.onmessage = function (e) {
  var umooveResults = e.data;
  UMFaceState = umooveResults[0];
  UMirisPos = new EyePointsXY(
    umooveResults[1],
    umooveResults[2],
    umooveResults[3],
    umooveResults[4]
  );
  UMirisMov = new EyePointsXY(
    umooveResults[5],
    umooveResults[6],
    umooveResults[7],
    umooveResults[8]
  );
  UMheadPos = new PointXY(umooveResults[13], umooveResults[14]);
  UMblink = umooveResults[16];
  UMmovType = umooveResults[15];
  UMleftStability = umooveResults[11];
  UMrightStability = umooveResults[12];
  UMleftReliability = umooveResults[9];
  UMrightReliability = umooveResults[10];
  UMEyeState = umooveResults[17]; //????
  UMDiam = Math.round(umooveResults[18] * 1000) / 1000;
  UMirisPix = new EyePointsXY(
    umooveResults[19],
    umooveResults[20],
    umooveResults[21],
    umooveResults[22]
  );
  UMirisPixFiltered = new EyePointsXY(
    umooveResults[23],
    umooveResults[24],
    umooveResults[25],
    umooveResults[26]
  );
  UMCombinedIrisPos = new PointXY(
    Math.round(umooveResults[27] * 1000) / 1000,
    Math.round(umooveResults[28] * 1000) / 1000
  );
  UMCombinedReliability = umooveResults[29];
  UMirisPix = UMirisPixFiltered;

  //eye distance
  // out[32] = cv::norm((eyeTrackingData.left.position - eyeTrackingData.right.position).getPoint());
  // out[33] = eyeTrackingData.left.irisData.sizeEstimate;
  // out[34] = eyeTrackingData.right.irisData.sizeEstimate;
  // out[35] = faceData.left.widthEye;
  // out[36] = faceData.right.widthEye;

  //left reliability [9];
  //right reliability [10];

  // UMleftRAWirisDiam =

  // if (umooveIsActive){

  // if (umooveHasStarted || (convertIntToState(UMFaceState) == "TRACK_FACE")){
  // updateUmoove();
  // umooveHasStarted = true;
  // }
  // }

  // console.log(
  //   "State = " +
  //   UMFaceState);
  //     " Combined iris: reliability= " +
  //     UMCombinedReliability +
  //     " position = " +
  //     Math.round(UMCombinedIrisPos.x * 1000) / 1000 +
  //     ", " +
  //     Math.round(UMCombinedIrisPos.y * 1000) / 1000
  // );
  // console.log("popooppo", umooveResults);

  // console.log("UMCombinedIrisPos: ", UMCombinedIrisPos.x);
  // console.log("UMirisPix left x: ", UMirisPix.left.x);
  //console.log("UMFaceState: ", UMFaceState);

  newUmooveData([
    UMFaceState,
    UMheadPos.x,
    UMheadPos.y,
    UMCombinedIrisPos.x,
    UMCombinedIrisPos.y,
    UMCombinedReliability,
    UMDiam,
    UMblink,
    UMirisPos.left.x,
    UMirisPos.left.y,
    UMirisPos.right.x,
    UMirisPos.right.y,
    UMleftReliability,
    UMrightReliability,
    UMirisPix.left.x,
    UMirisPix.left.y,
    UMirisPix.right.x,
    UMirisPix.right.y,
    UMleftStability,
    UMrightStability,
  ]);

  workerBusy = false;
};

//this listener waits for the wasm files and ambient be fully loaded
var loadUmooveLibrary = (vidWidth = 960, vidHeight = 720) => {
  videoHeight = vidHeight;
  videoWidth = vidWidth;
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = videoWidth;
    canvas.height = videoHeight;
    const ctx = canvas.getContext("2d");

    //const videoSelect = document.querySelector('select#videoSource');
    //const selectors = [videoSelect];

    var video = document.getElementById("video"); // video is the id of video tag
    // var videoPreview = document.getElementById("videoStream"); // video is the id of video tag

    function handleError(error) {
      console.log(
        "navigator.MediaDevices.getUserMedia error: ",
        error.message,
        error.name
      );
    }

    // function gotDevices(deviceInfos) {
    // // Handles being called several times to update labels. Preserve values.
    // const values = selectors.map(select => select.value);

    // selectors.forEach(select => {
    // while (select.firstChild) {
    // select.removeChild(select.firstChild);
    // }
    // });

    // for (let i = 0; i !== deviceInfos.length; ++i) {
    // const deviceInfo = deviceInfos[i];
    // const option = document.createElement('option');
    // option.value = deviceInfo.deviceId;
    // if (deviceInfo.kind === 'videoinput') {
    // option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
    // videoSelect.appendChild(option);
    // } else {
    // console.log('Some other kind of source/device: ', deviceInfo);
    // }
    // }
    // selectors.forEach((select, selectorIndex) => {
    // if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
    // select.value = values[selectorIndex];
    // }
    // });
    // start();
    // }

    // navigator.mediaDevices.getUserMedia( { audio:false, video: true})
    // .then(navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError));

    // videoSelect.onchange =
    start();

    function start() {
      if (window.stream) {
        window.stream.getTracks().forEach(function (track) {
          track.stop();
        });
      }

      //navigator.mediaDevices.getUserMedia( { video: {deviceId: videoSource ? {exact: videoSource.value} : undefined, frameRate: { min: 20, ideal: 29, max: 29 } }, audio: false } )
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            height: { min: videoHeight, max: videoHeight },
            width: { min: videoWidth, max: videoWidth },
            frameRate: { min: 15, ideal: 28, max: 30 },
            facingMode: "user",
          },
        })
        .then(function (stream) {
          resolve(stream);
          window.UMStream = stream;
          video.srcObject = stream;
          // videoPreview.srcObject = stream;
          //video.width = videoWidth;
          //video.height = videoHeight;
          video.play();


          // videoPreview.play();
          // video.addEventListener('play', function (e) {
          // if (e.type == 'play') {
          // // Video has played, perform an action
          // const rec = window.recorder;
          // rec.init(stream, "button#record", "button#download");
          // }
          // }, false);

          //whe the user accepts the camera acess starts main loop
          if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
            video.requestVideoFrameCallback(() => update(video));
          } else {
            window.requestAnimationFrame(() => update(video));
          }
        })
        .catch(function (err) {
          reject(false);
          console.log(err);
          console.log("An error occurred! " + err);
        });

      var frameGap = 33;
      var frameCounter = 0;
      var videoFrameCounter = 0;
      var previousTimestamp = 0;
      function update(video) {
        videoFrameCounter++;
        if (!workerBusy) {
          workerBusy = true;

          frameCounter++;
          ///Calculate frame rate
          currentTimestamp = Date.now();
          let currentGap;
          if (previousTimestamp > 0) {
            currentGap = currentTimestamp - previousTimestamp;

            frameGap =
              frameGap + (1.0 / frameCounter) * (currentGap - frameGap);
          }
          previousTimestamp = currentTimestamp;
          /////////////////////////////

          var t0 = performance.now();
          ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
          var t1 = performance.now();
          //console.log("+++++++++++++++ Draw image on context" + (t1 - t0) + " milliseconds.")

          t0 = performance.now();
          //capture the data as UIntClampedArray and instantiate something that cpp can understand
          let pixelArray = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          ).data;
          t1 = performance.now();
          //console.log("+++++++++++++++ Get image data and " + (t1 - t0) + " milliseconds.")

          //execute the identification function
          //let returned = _processUmoove(pixels.byteOffset, umooveHeapBytes.byteOffset);

          t0 = performance.now();

          //console.log("pixelArray [0] = "+ pixelArray[0]);
          wasmWorker.postMessage(["process", [0], pixelArray]);

          t1 = performance.now();
          //console.log("+++++++++++++++ time ", t0, " counter:", frameCounter);

          //console.log("Returned:"+ returned);//   UMirisPos: Left("+UMirisPos.left.x+","+UMirisPos.left.y+") "+" Right("+UMirisPos.right.x+","+UMirisPos.right.y+") ");
          //console.log("UMDiam:"+ UMDiam + "   UMirisPix: Left("+UMirisPix.left.x+","+UMirisPix.left.y+") "+" Right("+UMirisPix.right.x+","+UMirisPix.right.y+") ");
          //console.log("Filtered   UMirisPix: Left("+UMirisPixFiltered.left.x+","+UMirisPixFiltered.left.y+") "+" Right("+UMirisPixFiltered.right.x+","+UMirisPixFiltered.right.y+") ");
        }
        // else {
        //   console.log("+++++ Skipped frame:" + (videoFrameCounter - frameCounter) + " Processed frames: " + frameCounter + "/"+ videoFrameCounter);
        // }

        //updateCircles();
        //request the browser a new loop, it will do when it's ready
        if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
          video.requestVideoFrameCallback(() => update(video));
        } else {
          window.requestAnimationFrame(() => update(video));
        }
      }
    }
  });
};
