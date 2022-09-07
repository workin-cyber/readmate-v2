import Clock from "../../../components/Common/Clock";
import SoundFooter from "../../../components/Common/SoundFooter"
import React, { useContext } from "react";
import { useEffect, useState } from "react"
import Button from "../../../components/Common/Button";
import { useNavigate } from 'react-router-dom'
import dataContext from "../../../context/dataContext";
import styles from "./style.module.css"
// Creator : Team H - Nurit & Milka & Batya
function Training() {

  const localDataContext = useContext(dataContext)
  const tr = localDataContext.userDetails.TR
  const [lpm, setLpm] = useState(tr[tr.length - 1].Value)
  const fileName = pickFile(lpm);
  const file = require(`../../../assets/sounds/wush_mp3/wush_${fileName}_1min.mp3`);
  const [audio, setAudio] = useState(new Audio(file));
  const [playing, setPlaying] = useState(0)
  const navigate = useNavigate()

  console.log('userLpm', tr[tr.length - 1]);



  // this function get the updated lpm and return which file is closer the most. 
  function pickFile(lpm) {
    let array = [10, 20, 40, 60, 80, 100];
    let index = 0;
    for (let i in array) {
      if (lpm > array[i])
        index = Number(i);
    }
    if (lpm - array[index] > array[index + 1] - lpm)
      index++;
    return array[index];
  }

  // this listener is for audio loop:
  useEffect(() => {
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }, [])

  function onPlay() {
    audio.play();
    audio.playbackRate = lpm / fileName
    setPlaying(1)
  }

  function onPause() {
    audio.pause();
    console.log("onPause", file);
    setPlaying(0)
  }

  function rapid(newLpm) {
    setLpm(newLpm);
    audio.playbackRate = lpm / fileName // here the audio plays the music rythm in the file according to specific lpm
    console.log("rapid", file)
    console.log(audio.playbackRate);
  }

  function onComplete() {
    console.log("onComplete")
  }

  const freeStyleFuncs = {
    onPlay: onPlay, //will turn on the music + remove button and add footer
    onPause: onPause, //will pause the music + remove footer and add button
    rapid: rapid, // what to send when freeStyle false??
    onComplete: onComplete
  }

  const onclick = () => navigate('/')

  return (
    <div className={styles.container}>
      <Clock freeStyle={true} time={180} funcs={freeStyleFuncs} initRapidValue={lpm} ></Clock>
      {
        playing ?
          <SoundFooter song={file}></SoundFooter> :
          // <div className={styles.btnContainer}>
          <Button title="Done" startFunction={onclick} />
        // </div>
      }
    </div>
  );
}

export default Training;


