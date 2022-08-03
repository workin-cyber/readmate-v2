import { useEffect, useState, useContext, useRef } from "react";
// import RoundedButtonTB from "../../../components/common/RoundedButtonTB";
// import AudioChangeRate from "../../../components/common/AudioChangeRate";
import { useLocation, useNavigate } from "react-router-dom";
import ClockTB from "../../components/Common/ClockTB";
import Button from "../../components/Common/Button";
import styles from "./style.module.css";
import mainContext from "../../context/mainContext";
import Clock from "../../components/Common/Clock";

export default function PushUpTimer2() {
    const { header } = useContext(mainContext)

    const location = useLocation();
    const navigateObject = location.state.navigateObject;
    const navigate = useNavigate();
    let audioRef = useRef(null);

    // console.log(navigateObject);
    // const [count, setCount] = useState(0);
    const [play, setPlay] = useState(false);
    const [showStopBtn, setShowStopBtn] = useState(false);
    const [showContinueBtn, setShowContinueBtn] = useState(false);
    const [showClockBtn, setShowClockBtn] = useState(true);
    // const [isplay, setIsPlay] = useState(0);
    console.log("button", play);


    useEffect(() => {
        navigateObject.roundCounter === 4
            ? setShowStopBtn(true)
            : setShowStopBtn(false);
        const audio = require(`../../assets/sounds/wush_mp3/wush_${fileName}_1min.mp3`);
        audioRef.current.src = audio;
    }, []);

    const startProccess = () => {
        // setIsPlay(!isplay);
        audioRef.current.play();
        setPlay(!play);
    };

    //  console.log("fatherPlay:", play);
    const continueBtnClick = () => {
        // navigateObject.roundCounter++;
        navigate("/tr/questions", { state: { navigateObject } });
    };


    const stopBtnClick = () => {
        // save lpm
        navigateObject.rateData.LPM = Number(newRate * lpmFile);
        navigate("/tr/questions", { state: { navigateObject } });
    };

    /****** Clock Functions ********/
    const totalTimeInMinutes = 3;
    //const totalTimeInSeconds = totalTimeInMinutes * 60;
    const totalTimeInSeconds = 10;
    const lpm = navigateObject.lpm;  // user's lpm saved in db
    let fileName = pickFile(lpm);
    let lpmFile = pickFile(lpm);





    const totalCangeRatePercent = 0.125;
    const initialRate = lpm / lpmFile;
    const [playbackRate, setPlaybackRate] = useState(initialRate);
    let newRate = initialRate;

    useEffect(() => {
        header.setPageName(`Pushup ${navigateObject.roundCounter}/4`);
    }, [])

    // function for Clock.onUpdate event
    const increaseRate = (remainingTime) => {
        if (audioRef.current) {
            if (remainingTime == totalTimeInSeconds) {
                audioRef.current.playbackRate = initialRate;
            } else {
                newRate = calcNextRate();
                audioRef.current.playbackRate = newRate;
            }

            console.log(
                "time: ",
                { remainingTime },
                "rate: ",
                audioRef.current.playbackRate,
                "lpm: ",
                newRate * lpmFile
            );
        }
    };

    function calcNextRate() {
        return newRate + (totalCangeRatePercent * initialRate) / totalTimeInSeconds;
    }


    // pick an audio file with lpm close to user's lpm
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
        // let fileName = `./wush_mp3/wush_${array[index]}_1min.mp3`;
        // let file = array[index]
        // let fileName = `../../assets/sounds/wush_mp3/wush_${array[index]}_1min.mp3`;


        console.log(array[index]);
        // console.log(fileName);
        return [array[index]];
    }

    // function for Clock.onComplete event
    const endRound = () => {
        setShowClockBtn(false);
        setShowContinueBtn(true);
        setPlay(false);
        //  navigateObject.roundCounter++;
        stopAudio();
    };

    /****** audio functions ********/
    const stopAudio = () => {
        audioRef.current.pause();
    };
    const replay = () => {
        audioRef.current.curretTime = 0;
        audioRef.current.play();
    };

    const clockFunctions = {
        onComplete: endRound,
        onUpdate: increaseRate,
    };

    return (
        <div>
            <ClockTB
                play={play}
                setPlay={setPlay}
                freeStyle={false}
                time={totalTimeInSeconds}
                navigateObject={navigateObject}
                clockFunctions={clockFunctions}
            />

            {showClockBtn && (
                <div>
                    {play ? (
                        <button
                            className={styles.RoundedButton}
                            onClick={() => {
                                // console.log("isplay");
                                // setIsPlay(!play);
                                setPlay(!play);
                            }}
                        >
                            {" "}
                            ||{" "}
                        </button>
                    ) : (
                        <button
                            className={styles.RoundedButtonPlay}
                            onClick={startProccess}
                        >
                            {" "}
                            <div id="play-icon">ג–¶</div>{" "}
                        </button>
                    )}
                </div>
            )}
            <audio ref={audioRef} onEnded={replay} />

            <Button startFunction={continueBtnClick} />
            <div>

                {showContinueBtn && (
                    <Button startFunction={continueBtnClick} title="continue" />
                )}
                {showStopBtn && (
                    <Button startFunction={stopBtnClick} title="stop" />
                )}
            </div>
        </div>
    );
}