import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom"
import { clockContex } from "../../../pages/PushUpTimer2";

function ClockTB(props) {
    const { play, setPlay } = useContext(clockContex)
    const navigate = useNavigate();
    let { navigateObject } = props
    console.log("clockTB :", navigateObject);
    let timeInSeconds = props.time;
    const [isFinish, setIsFinish] = useState(false);

    //const { setPlay } = setPlay;
    console.log("play: ", props.play);

    function complete() {
        setIsFinish(true);
        setPlay(false)
        props.setShowContinueBtn(true);

    }



    const renderTime = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime - minutes * 60;

        return (
            <div className={styles.wrapping}>
                <div className={styles.timer}>

                    <div className={styles.value}>
                        {minutes < 10 && 0}
                        {minutes}:{seconds < 10 && 0}
                        {seconds}
                    </div>
                    {remainingTime === 0 && complete()}
                    {!isFinish && (
                        <div
                            className={styles.playPause}
                            onClick={() => {
                                setPlay(!play);
                            }}
                        >
                        </div>
                    )}
                </div>
            </div>
        );
    };
    // isplay&&props.funcs.onPlay()

    return (

        <div className={styles.wrapClock}>
            {/*  this clock refers to freeStyle */}

            <div>
                <CountdownCircleTimer
                    rotation={"counterclockwise"}
                    isPlaying={play}
                    duration={timeInSeconds}
                    colors={["#7D56A5"]}
                    onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                    trailColor={"#FEEFEC"}
                    strokeLinecap={"square"}
                    size={262}
                    strokeWidth={21}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>
        </div>

    );


    // return <CountdownCircleTimer></CountdownCircleTimer>;
    // console.log("stop");
}


export default ClockTB;





// import React from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { useState } from "react";
// import styles from "./style.module.css";
// import { useNavigate } from "react-router-dom";

// function ClockTB(props) {
//     const navigate = useNavigate();
//     let { navigateObject } = props;
//     console.log("clockTB :", navigateObject);
//     let timeInSeconds = props.time;
//     const [isFinish, setIsFinish] = useState(true);
//     const { setPlay } = setPlay;
//     //console.log("play: ", props.play);
//     //  navigateObject.roundCounter++
//     // const showContinue = () => {
//     //   //setShowContinueBtn(true);

//     //   console.log("round-count",navigateObject.roundCounter);
//     //   navigateObject.roundCounter++;
//     // };

//     function complete() {
//         setIsFinish(true);
//         setPlay(false);
//         //showContinue()
//         //navigateObject.roundCounter++;
//         navigate("/train-reading/instructions", { state: { navigateObject } });
//     }

//     const renderTime = ({ remainingTime }) => {
//         const minutes = Math.floor(remainingTime / 60);
//         const seconds = remainingTime - minutes * 60;

//         return (
//             <div className={styles.wrapping}>
//                 <div className={styles.timer}>
//                     <div className={styles.value}>
//                         {minutes < 10 && 0}
//                         {minutes}:{seconds < 10 && 0}
//                         {seconds}
//                     </div>
//                     {/* {remainingTime === 0 && complete()} */}
//                     {!isFinish && (
//                         <div
//                             className={styles.playPause}
//                             onClick={() => {
//                                 setPlay(!props.play);
//                             }}
//                         ></div>
//                     )}
//                 </div>
//             </div>
//         );
//     };
//     // isplay&&props.funcs.onPlay()

//     return (
//         <div className={styles.wrapClock}>
//             {/*  this clock refers to freeStyle */}

//             <div>
//                 <CountdownCircleTimer
//                     rotation={"counterclockwise"}
//                     isPlaying={props.play}
//                     duration={timeInSeconds}
//                     colors={["#7D56A5"]}
//                     trailColor={"#FEEFEC"}
//                     strokeLinecap={"square"}
//                     size={200}
//                     onUpdate={props.clockFunctions.onUpdate}
//                     onComplete={props.clockFunctions.onComplete}
//                     strokeWidth={15}
//                 >
//                     {renderTime}
//                 </CountdownCircleTimer>
//             </div>
//         </div>
//     );

//     // return <CountdownCircleTimer></CountdownCircleTimer>;
//     // console.log("stop");
// }

// export default ClockTB;