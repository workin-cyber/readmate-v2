let videoWidth = 960;
const API_loadUmooveLibrary = (vidWidth = 960, vidHeight = 720) => {
  videoWidth = vidWidth;
  return new Promise((resolve, reject) => {
    window
      .loadUmooveLibrary(vidWidth, vidHeight)
      .then((stream) => {
        window.initUmoove();
        resolve(stream);
      })
      .catch((e) => reject(e));
  });
};

const API_getUmooveStream = () => {
  if (window.UMStream) {
    return window.UMStream;
  } else {
    return false;
  }
};
const API_getAlignment = () => {
  let alignmentThreshholdCM = 1.0;
  let UMheadPos = window.UMheadPos;
  let diam = window.UMDiam;
  let FOV_H = 58.5;
  let degreesToRadians = 0.0174533;
  let detectedDistance =
    ((1.18 / diam) * (videoWidth / 2.0)) /
    Math.tan((FOV_H / 2.0) * degreesToRadians);
  let center = { x: window.videoWidth / 2, y: window.videoHeight / 2 };
  let alignmentThreshhold = (diam / 1.18) * alignmentThreshholdCM;

  let diff = UMheadPos.x - center.x;
  if (Math.abs(diff) > alignmentThreshhold) {
    return diff > 0 ? 1 : -1;
  } else {
    return 0;
  }
  //returns -1 0 1
};
const API_startUmoove = () => {
  window.startUmoove(true);
};
const API_stopUmoove = () => {
  window.stopUmoove();
  if (window.UMStream) {
    window.UMStream.getTracks().forEach(function (track) {
      track.stop();
    });
  }
};
const API_getDistance = () => {
  let diam = window.UMDiam;
  let FOV_H = 58.5;
  let videoWidth = 960;
  let degreesToRadians = 0.0174533;
  let detectedDistance =
    ((1.18 / diam) * (videoWidth / 2.0)) /
    Math.tan((FOV_H / 2.0) * degreesToRadians);
  if (diam !== 0 && window.UMFaceState === 2) {
    return detectedDistance;
  } else return -1;
};
const API_getUmooveTracking = () => {
  if (window.UMFaceState == 2) {
    return true;
  } else return false;
};
const API_startReading = () => {
  window.collectData = true;
};
const API_stopReading = (num_of_lines) => {
  //Stop the collection
  window.collectData = false;
  let readingdataArray = window.readingData;
  console.log(readingdataArray);
  ///deal with the data and stop collect + reset the reading data array

  //Defining thresholds and counters
  let lineBreakThreshold = -0.08;
  let stackMaxLength = 4;
  let stack = [];
  let timeStampPerLines = [];
  let timePerLine = [];
  let initialGap = 0;
  let doSearchGap = true;
  timeStampPerLines.push(readingdataArray[0].time);
  // ...?
  for (let index = 0; index < readingdataArray.length; index++) {
    const eyeDataCombined = readingdataArray[index].eye_data[3];
    const eyeDataTimestamp = readingdataArray[index].time;
    ///Stack 4
    if (stack.length === stackMaxLength) {
      stack.shift();
    }
    stack.push({ data: eyeDataCombined, index: index });
    ////+-+-+-+-////

    if (stack.length > stackMaxLength - 1) {
      let first = stack[0];
      let last = stack[stack.length - 1];
      let testGap = last.data - first.data;

      if (doSearchGap) {
        if (initialGap == 0 && testGap < lineBreakThreshold) {
          initialGap = testGap;
        } else if (initialGap != 0 && testGap <= initialGap) {
          initialGap = testGap;
        } else if (initialGap != 0) {
          initialGap = 0;
          timeStampPerLines.push({
            endPrev: readingdataArray[index - 1 - stackMaxLength].time,
            startNext: readingdataArray[index].time,
          });
          doSearchGap = false;
        }
      } else {
        if (testGap > 0) doSearchGap = true;
      }
    }
  }
  // timeStampPerLines.pop();
  timeStampPerLines.shift();
  console.log(timeStampPerLines);

  for (let index = 1; index < timeStampPerLines.length; index++) {
    const line_time =
      timeStampPerLines[index].endPrev - timeStampPerLines[index - 1].startNext;
    timePerLine.push(line_time);
  }
  console.log("results", timePerLine);

  //reset the array and vars
  window.readingData = [];
  API_stopUmoove();
  return timePerLine;
};

const UmooveApi = {
  API_loadUmooveLibrary,
  API_getUmooveStream,
  API_startUmoove,
  API_stopUmoove,
  API_getDistance,
  API_getUmooveTracking,
  API_startReading,
  API_stopReading,
  API_getAlignment,
};
export default UmooveApi;