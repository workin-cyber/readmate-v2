import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

function ClockTB(props) {
    const navigate = useNavigate();
    let { nevigateObject } = props;
    console.log("clockTB :", nevigateObject);
    let timeInSeconds = props.time;
    const [isFinish, setIsFinish] = useState(true);
    const { setPlay } = props.setPlay;
    //console.log("play: ", props.play);
    //  nevigateObject.roundCounter++
    // const showContinue = () => {
    //   //setShowContinueBtn(true);

    //   console.log("round-count",nevigateObject.roundCounter);
    //   nevigateObject.roundCounter++;
    // };

    function complete() {
        setIsFinish(true);
        props.setPlay(false);
        //showContinue()
        //nevigateObject.roundCounter++;
        navigate("/train-reading/instructions", { state: { nevigateObject } });
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
                    {/* {remainingTime === 0 && complete()} */}
                    {!isFinish && (
                        <div
                            className={styles.playPause}
                            onClick={() => {
                                setPlay(!props.play);
                            }}
                        ></div>
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
                    isPlaying={props.play}
                    duration={timeInSeconds}
                    colors={["#7D56A5"]}
                    trailColor={"#FEEFEC"}
                    strokeLinecap={"square"}
                    size={200}
                    onUpdate={props.clockFunctions.onUpdate}
                    onComplete={props.clockFunctions.onComplete}
                    strokeWidth={15}
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