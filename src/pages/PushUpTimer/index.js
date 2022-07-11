// import { React, useState, useEffect, useRef, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// // import { pageNameContext } from "../../../components/layout/Layout";
// import Clock from "../../components/Common/Clock"
// import Button from "../../components/Common/Button"
// import styles from "./style.module.css";

// const audio = require("../../assets/sounds/wush_mp3");

// export default function PushUpTimer(props) {
//     let audioRef = useRef();
//     let continueRef = useRef();
//     let stopRef = useRef();
//     const location = useLocation();
//     const navigate = useNavigate();
//     // const [pageName, setPageName] = useContext(pageNameContext);

//     // const nevigateObject = location.state.nevigateObject;
//     const nevigateObject = {
//         bookName: "*** bla bla bla***",
//         genre: "genre",
//         roundCounter: 1,
//         lpm: 20,
//     };

//     // setPageName(`Pushup ${nevigateObject.roundCounter}/4`);

//     useEffect(() => {
//         // audioRef.current.src = audio;
//         // remove
//         let x = "";
//         nevigateObject.roundCounter === 4
//             ? (stopRef.current.className = styles.btnshow)
//             : (x = "");
//     }, []);

//     // remove
//     function navigateInst() {
//         // continueRef.current.className = styles.btnshow;
//         nevigateObject.roundCounter++;
//         navigate("/train-reading/instructions", { state: { nevigateObject } });
//     }

//     const playAudio = () => {
//         // audioRef.current.play();
//         // let x = "";
//         // nevigateObject.roundCounter === 4
//         //     ? (stopRef.current.className = styles.btnshow)
//         //     : (x = "");
//     };

//     const pauseAudio = () => {
//         // audioRef.current.pause();
//     };

//     const showContinue = () => {
//         continueRef.current.className = styles.btnshow;
//     };

//     const changeRate = () => { };

//     const clockFunctions = {
//         onStart: playAudio,
//         onPause: pauseAudio,
//         onComplete: showContinue,
//         onTick: changeRate,
//     };

//     // const continueBtnClick = () => {
//     //   navigate("/train-reading/Questions");
//     // };

//     return (
//         <div>
//             <div>
//                 <Clock freeStyle={false} funcs={clockFunctions} />
//                 {/* <audio ref={audioRef}> </audio> */}
//                 <div className={styles.btnhide} ref={continueRef}>
//                     <Button path="/train-reading/Questions" name="continue" />
//                 </div>
//                 <div className={styles.btnhide} ref={stopRef}>
//                     <Button path="/train-reading/Questions" name="stop" />
//                 </div>
//             </div>
//             {/* remove */}
//             <button onClick={navigateInst}> navigate to inst</button>
//         </div>
//     );
// }

// // ----------- ayellet && shacher fix 28/6 19:40

// // import React from 'react'
// // import { useState, useEffect } from 'react';



// // export default function PushUpTimer(props) {

// //     const [minutes, setMinutes] = useState(3);
// //     const [seconds, setSeconds] = useState(0);
// //     useEffect(() => {
// //         let myInterval = setInterval(() => {
// //             if (seconds > 0) {
// //                 setSeconds(seconds - 1);
// //             }
// //             if (seconds === 0) {
// //                 if (minutes === 0) {
// //                     clearInterval(myInterval)
// //                 } else {
// //                     setMinutes(minutes - 1);
// //                     setSeconds(59);
// //                 }
// //             }
// //         }, 1000)
// //         return () => {
// //             clearInterval(myInterval);
// //         };
// //     });

// //     return (
// //         <div>
// //             {minutes === 0 && seconds === 0
// //                 ? null
// //                 : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
// //             }
// //         </div>
// //     )
// // }

// // function Music() {


// // }


import React from 'react'
import { useState, useEffect, useRef } from 'react';

export default function PushUpTimer() {


    const audioRef = useRef();
    const [lpm, setLpm] = useState(9);

    let [fileName, lpmFile] = pickFile(lpm);
    useEffect(() => {
        const audio = require(fileName + "");
        audioRef.current.src = audio;
        console.log(audioRef.current.src);
    }, []);


    const [changePercent, setChangePercent] = useState(lpm / lpmFile);
    const [sec, setSec] = useState(1);
    console.log("lpm ", lpm);
    console.log("lpmFile ", lpmFile);
    const [play, setPlay] = useState(false);
    function change() {
        setTimeout(() => {
            // let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
            let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
            // let count = changePercent * (1 + (0.125 / 180))

            setChangePercent(count)
        }, 1000);
    }
    useEffect(() => {
        if (play) {
            change();
            setSec(sec + 1)
            // debugger;
            // audioRef.current.src = audio;
            // console.log(audioRef.current.src);
            audioRef.current.playbackRate = changePercent;
            audioRef.current.play();
            // console.log(Date.now().toString());
            console.log(changePercent);
        }

    }, [changePercent, play])

    // audioRef.current.src = audio;
    // console.log(audioRef.current.src)
    // audioRef.current.playbackRate = changePercent;

    return (
        <div>
            <audio ref={audioRef}> </audio>
            <p>{changePercent / (lpm / lpmFile)}</p>
            <p>{sec}</p>
            <button onClick={() => { setPlay(true); audioRef.current.play(); }}>play </button>
            <button onClick={() => { setPlay(false); audioRef.current.pause() }}>pause </button>

        </div>)
}

function pickFile(lpm) {
    let array = [10, 20, 40, 60, 80, 100];
    let index = 0;
    for (let i in array) {
        if (lpm > array[i]) {
            index = Number(i);
        }
    }
    if (lpm - array[index] > array[index + 1] - lpm) {
        index++;
    }
    // console.log(index);
    let fileName = `./wush_mp3/wush_${array[index]}_1min.mp3`;

    return [fileName, array[index]];
}