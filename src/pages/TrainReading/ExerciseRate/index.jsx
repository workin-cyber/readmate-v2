import styles from "./style.module.css";
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import dataContext from "../../../../context/dataContext";
import mainContext from "../../../context/mainContext";

const ExerciseRate = () => {
  // const user = useContext(dataContext);
  const { header } = useContext(mainContext);
  const { state } = useLocation();
  const LPM_fromClock = state.LPM;
  const [newLPM, setNewLPM] = useState(LPM_fromClock);
  const [isJustRight, setIsJustRight] = useState(false);
  const [round, setRound] = useState(0);
  const [clickedButton, setClickedButton] = useState(state.ClickedButton);
  const route = "/train-reading/question";
  const navigate = useNavigate();

  console.log("exerciseRate", state);
  console.log("newLpm", newLPM);

  useEffect(() => {
    header.setPageName("Reading Rate")
    return () => header.setPageName("")
  }, [])

  useEffect(() => {
    round > 0 && startFunction();
  }, [round]);

  const objProp = {
    LPM_Pushup: state.LPM_Pushup,
    New_LPM: newLPM,
    JustRight: isJustRight,
    Round: round,
    ClickedButton: clickedButton,
    BookName: state.BookName,
    fromPath: "train-reading/rate",
    formInfo: state.formInfo,
  };

  function choice(button) {
    if (button === "JR") {
      setIsJustRight(true);
      setRound(round + 1 + state.Round);
      setClickedButton((clickedButton) => [...clickedButton, "JR"]);
    }

    if (state.ClickedButton.length === 0) {
      if (button === "TF") {
        setNewLPM(LPM_fromClock - 2);
        setRound(round + 1 + state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TF"]);
      }
      if (button === "TS") {
        setNewLPM(LPM_fromClock + 2);
        setRound(round + 1 + state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TS"]);
      }
    }
    if (state.ClickedButton.length > 0) {
      if (
        button === "TF" &&
        state.ClickedButton[
        state.ClickedButton.length - 1
        ] === "TF"
      ) {
        setNewLPM(newLPM - 2);
        setRound(round + 1 + state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TF"]);
      }
      if (
        button === "TS" &&
        state.ClickedButton[
        state.ClickedButton.length - 1
        ] === "TS"
      ) {
        setNewLPM(newLPM + 2);
        setRound(round + 1 + state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TS"]);
      }

      if (
        button === "TS" &&
        state.ClickedButton[
        state.ClickedButton.length - 1
        ] === "TF"
      ) {
        setNewLPM(newLPM + 1);
        setRound(round + 1 + state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TS"]);
      }

      if (
        button === "TF" &&
        state.ClickedButton[
        state.ClickedButton.length - 1
        ] === "TS"
      ) {
        setNewLPM(newLPM - 1);
        setRound(round + 1 + state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TF"]);
      }
    }
  }

  const startFunction = () => navigate(route, { state: objProp });

  return (
    <div className={styles.container}>
      <div className={` ${styles.answers} two-colored-div`}  >
        <p>How was that reading rate?</p>
        <button name="just right" type={"button"} onClick={() => choice("JR")}> just Right</button>
        <button name="Too Fast" type={"button"} onClick={() => choice("TF")} >  Too fast</button>
        <button name="Too Slow" type={"button"} onClick={() => choice("TS")}  > Too SLow </button>
      </div>
    </div>
  );
};

export default ExerciseRate;
