import ClockTB from "../../../components/Common/ClockTB";
import { useEffect, useState, createContext } from "react";
import RoundedButtonTB from "../../../components/Common/RoundedButtonTB";
import AudioChangeRate from "../../../components/Common/AudioChangeRate";
import { useLocation, useNavigate } from 'react-router-dom'
import Button from "../../../components/Common/Button";

export const clockContex = createContext();

export default function PushUpTimer2() {
  const navigate = useNavigate()
  const location = useLocation();
  const [showStopBtn, setShowStopBtn] = useState(false);
  const [showContinueBtn, setShowContinueBtn] = useState(false);
  const [dataNewLpm, setDataNewLpm] = useState(50);
  const [play, setPlay] = useState(true);
  const navigateObject = location.state.navigateObject;


  console.log("navigateObject", navigateObject);

  console.log("fatherPlay:", play);

  const continueBtnClick = () => navigate("/train-reading/questions", { state: { navigateObject } });

  const stopBtnClick = () => {
    setPlay(false)
    console.log(dataNewLpm);
    navigateObject.rateData.LPM = dataNewLpm
    navigate("/train-reading/questions", { state: { navigateObject } });
  };

  useEffect(() => {
    navigateObject.roundCounter === 4
      ? setShowStopBtn(true)
      : setShowStopBtn(false);
  }, [])


  return (
    <>
      <div style={{ position: "relative" }}>
        <clockContex.Provider value={{ play, setPlay }}>
          <ClockTB freeStyle={false} time={2} navigateObject={navigateObject} setShowContinueBtn={setShowContinueBtn} />
          <RoundedButtonTB play={play} setPlay={setPlay} />
          <AudioChangeRate setDataNewLpm={setDataNewLpm} />
        </clockContex.Provider>
      </div>
      <div>
        {showContinueBtn && (
          <Button startFunction={continueBtnClick} title="continue" fontColor="white" />
        )}
        {showStopBtn && (
          <Button startFunction={stopBtnClick} title="stop" fontColor="white" />
        )}
      </div></>
  );
}










//----------**************************************

// import { React, useState, useEffect, useRef, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { pageNameContext } from "../../../components/layout/Layout";
// import Clock from "../../../components/common/Clock";
// import SubmitBtn from "../../../components/common/SubmitBtn";
// import styles from "./style.module.css";

// // const audio = require("../../../assets/audio/woc.mp3");

// export default function PushUpTimer(props) {
//   let audioRef = useRef();
//   const [showStopBtn, setShowStopBtn] = useState(false);
//   const [showContinueBtn, setShowContinueBtn] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { pageName, setPageName } = useContext(pageNameContext);

//   const navigateObject = location.state.navigateObject;
//   setPageName(`Pushup ${navigateObject.roundCounter}/4`);

//   useEffect(() => {
//     // audioRef.current.src = audio;
//     // remove
//     navigateObject.roundCounter === 4
//       ? setShowStopBtn(true)
//       : setShowStopBtn(false);
//     // remove when clock onplay work
//   }, []);

//   // remove
//   function navigateInst() {
//     showContinue();
//   }

//   // function for Clock.onComplete event
//   const showContinue = () => {
//     setShowContinueBtn(true);
//     navigateObject.roundCounter++;
//   };

//   const changeRate = () => {};

//   const clockFunctions = {
//     onStart: playAudio,
//     onPause: pauseAudio,
//     onComplete: showContinue,
//     onTick: changeRate,
//   };

//   // const continueBtnClick = () => {
//   //   navigate("/train-reading/questions");
//   // };

//   return (
//     <div>
//       <div>
//         <Clock freeStyle={false} func={clockFunctions} />
//         {/* <audio ref={audioRef}> </audio> */}
//         {showContinueBtn && (
//           <SubmitBtn
//             type="link"
//             path="/train-reading/questions"
//             name="continue"
//           />
//         )}
//         {showStopBtn && (
//           <SubmitBtn type="link" path="/train-reading/questions" name="stop" />
//         )}
//       </div>
//       {/* remove */}
//       <button onClick={navigateInst}> show continue </button>
//     </div>
//   );
// }

// ----------- ayellet && shacher fix 28/6 19:40

// import React from 'react'
// import { useState, useEffect } from 'react';

// export default function PushUpTimer(props) {

//     const [minutes, setMinutes] = useState(3);
//     const [seconds, setSeconds] = useState(0);
//     useEffect(() => {
//         let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             }
//         }, 1000)
//         return () => {
//             clearInterval(myInterval);
//         };
//     });

//     return (
//         <div>
//             {minutes === 0 && seconds === 0
//                 ? null
//                 : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
//             }
//         </div>
//     )
// }

// function Music() {

// }

//----------******************************************************








// import { React, useState, useEffect, useRef, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { pageNameContext } from "../../../components/layout/Layout";
// import Clock from "../../../components/common/Clock";
// import SubmitBtn from "../../../components/common/SubmitBtn";
// import styles from "./style.module.css";

// // const audio = require("../../../assets/audio/woc.mp3");

// export default function PushUpTimer(props) {
//   let audioRef = useRef();
//   let continueRef = useRef();
//   let stopRef = useRef();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [pageName, setPageName] = useContext(pageNameContext);

//   const navigateObject = location.state.navigateObject;

//   setPageName(`Pushup ${navigateObject.roundCounter}/4`);

//   useEffect(() => {
//     // audioRef.current.src = audio;
//     // remove
//     let x = "";
//     navigateObject.roundCounter === 4
//       ? (stopRef.current.className = styles.btnshow)
//       : (x = "");
//   }, []);

//   // remove
//   function navigateInst() {
//     // continueRef.current.className = styles.btnshow;
//     navigateObject.roundCounter++;
//     navigate("/train-reading/instructions", { state: { navigateObject } });
//   }

//   const playAudio = () => {
//     // audioRef.current.play();
//     // let x = "";
//     // navigateObject.roundCounter === 4
//     //   ? (stopRef.current.className = styles.btnshow)
//     //   : (x = "");
//   };

//   const pauseAudio = () => {
//     // audioRef.current.pause();
//   };

//   const showContinue = () => {
//     continueRef.current.className = styles.btnshow;
//   };

//   const changeRate = () => {};

//   const clockFunctions = {
//     onStart: playAudio,
//     onPause: pauseAudio,
//     onComplete: showContinue,
//     onTick: changeRate,
//   };

//   // const continueBtnClick = () => {
//   //   navigate("/train-reading/Questions");
//   // };

//   return (
//     <div>
//       <div>
//         <Clock freeStyle={false} func={clockFunctions} />
//         {/* <audio ref={audioRef}> </audio> */}
//         <div className={styles.btnhide} ref={continueRef}>
//           <SubmitBtn path="/train-reading/Questions" name="continue" />
//         </div>
//         <div className={styles.btnhide} ref={stopRef}>
//           <SubmitBtn path="/train-reading/Questions" name="stop" />
//         </div>
//       </div>
//       {/* remove */}
//       <button onClick={navigateInst}> navigate to inst</button>
//     </div>
//   );
// }

// ----------- ayellet && shacher fix 28/6 19:40

// import React from 'react'
// import { useState, useEffect } from 'react';



// export default function PushUpTimer(props) {

//     const [minutes, setMinutes] = useState(3);
//     const [seconds, setSeconds] = useState(0);
//     useEffect(() => {
//         let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             }
//         }, 1000)
//         return () => {
//             clearInterval(myInterval);
//         };
//     });

//     return (
//         <div>
//             {minutes === 0 && seconds === 0
//                 ? null
//                 : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
//             }
//         </div>
//     )
// }

// function Music() {


// }


