import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import RoundButton from "../RoundButton";
import styles from "./style.module.css";


// Creator : Team H - Milka

//instructions: when you use this component you should
//  send the following props:
//  1. "freeStyle" with a value:false.
//  2. "time" with the value 180 for 3 minutes clock.
//  3. object named "funcs" with the keys: "onPlay","onPause" and "onComplete"
//     and values which are your functions for those situations.
//  4. only for freeStyle: "rapidValue" with a value: functoin that will get current LPM
//  5. "initRapidValue" with a value of the last user's LPM.

function Clock(props) {
  let freeStyle = props.freeStyle;
  const [play, setPlay] = useState(false);
  const [isplay, setIsPlay] = useState(false);
  let timeInSeconds = props.time;
  const [rapidValue, setRapidValue] = useState(props.initRapidValue);
  const [isFinish, setIsFinish] = useState(false);


  function complete() {
    setIsFinish(true);
    props.funcs.onComplete();
  }

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime - minutes * 60;

    return (
      <div className={styles["wrapping"]}>
        <div className={styles["timer"]}>
          {freeStyle ? (
            <button className={styles["squareButton"]}>
              <div className={styles["rapid"]}>{rapidValue}</div>
              <br />LPM
            </button>

          ) : (
            <div className={styles["value"]}>
              {minutes < 10 && 0}
              {minutes}:{seconds < 10 && 0}
              {seconds}
            </div>
          )}
          {remainingTime === 0 && complete()}
          {!isFinish && (
            <div
              className={styles["playPause"]}
              onClick={() => {
                !freeStyle && setPlay(!play);
                !isplay && props.funcs.onPlay();
                isplay && props.funcs.onPause();
              }}
            >
              <RoundButton setIsPlay={setIsPlay} isPlay={isplay} />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (

    <div className={styles["wrapClock"]}>
      {freeStyle && (
        <button
          className={styles["plusMinus"]}
          onClick={() => {
            setRapidValue(rapidValue - 1);
            props.funcs.rapid(rapidValue);
          }}
        >
          -
        </button>
      )}
      <div>
        <CountdownCircleTimer
          rotation={"counterclockwise"}
          isPlaying={play}
          duration={timeInSeconds}
          colors={["#7D56A5"]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          trailColor={"#FEEFEC"}
          strokeLinecap={"square"}
          size={200}
          strokeWidth={15}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      {freeStyle && (
        <button
          className={styles["plusMinus"]}
          onClick={() => {
            rapidValue > 0 && rapidValue < 100 && setRapidValue(rapidValue + 1);
            props.funcs.rapid(rapidValue);
          }}
        >
          +
        </button>
      )}
    </div>
  );


  // return <CountdownCircleTimer></CountdownCircleTimer>;
  // console.log("stop");
}


export default Clock;