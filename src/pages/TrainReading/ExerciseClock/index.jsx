import styles from "./style.module.css";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import dataContext from "../../../../context/dataContext";
import mainContext from "../../../context/mainContext";
import Clock from "../../../components/Common/Clock";
import soundWave from "../../../assets/images/icons/soundWave.png";

function ExerciseClock() {
  // const user = useContext(dataContext);
  const { header } = useContext(mainContext);
  header.setPageName("Exercise Clock");

  const location = useLocation();
  console.log("location", location);
  var LPM_Value = location.state.LPM_Pushup;
  const BookName = location.state.BookName;

  const from_TRL_Question = useLocation();
  // console.log(from_TRL_Question.state);
  const LPM_fromPushup = from_TRL_Question.state.LPM_Pushup;
  const newLPM_fromQuestion = from_TRL_Question.state.New_LPM;
  var round = from_TRL_Question.state.Round;
  var clickedButton = [];
  if (round > 0) {
    clickedButton = from_TRL_Question.state.ClickedButton;
    LPM_Value = newLPM_fromQuestion;
  } else {
    var round = 0;
  }

  const [lpm, setLpm] = useState(LPM_Value);
  let fileName = pickFile(lpm);
  const file = require(`../../../assets/sounds/wush_mp3/wush_${fileName}_1min.mp3`);

  const [audio, setAudio] = useState(new Audio(file));
  const [playing, setPlaying] = useState(0);

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
    return array[index];
  }

  function onPlay() {
    audio.play();
    audio.playbackRate = lpm / fileName;
    setPlaying(1);
  }

  function onPause() {
    audio.pause();
    setPlaying(0); // soundfooter
  }

  const objProps = {
    LPM: LPM_Value, // value form pushup at first after level_round 1 will be the new RATED value
    BookName: BookName, // just push foward

    LPM_Pushup: LPM_fromPushup, // value from pushup
    Round: round,
    ClickedButton: clickedButton,
    fromPath: "train-reading/exercise-clock",
    formInfo: from_TRL_Question.state.formInfo,
  };

  const route = "/train-reading/rate";
  const navigate = useNavigate();

  function onComplete() {
    audio.pause();
    navigate(route, { state: objProps });
  }

  const freeStyleFuncs = {
    onPlay: onPlay, //will turn on the music + remove button and add footer
    onPause: onPause, //will pause the music + remove footer and add button
    // rapid: rapid, // what to send when freeStyle false??
    onComplete: onComplete,
  };

  return (
    <div className={styles.exerClockPage}>
      {/* <audio playbackRate={1} ref={audioRef}> </audio> */}
      <Clock
        freeStyle={false}
        time={2}
        funcs={freeStyleFuncs}
        initRapidValue={lpm}
      ></Clock>
      <div className={styles.squareButton2}>
        <div className={styles.rapid}>{LPM_Value}</div>LPM
      </div>
      <img className={styles.soundWave} src={soundWave} alt="soundWave.png" />
      {/* {playing ? */}
      {/* <SoundFooter song = {file}></SoundFooter> : <SubmitBtn type={"link"} name={"Done"} path = {"/teamH/graphDashboard"}></SubmitBtn>} */}
      {/* <SoundFooter song={file}></SoundFooter> */}
    </div>
  );
}

export default ExerciseClock;
