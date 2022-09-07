import styles from "./style.module.css";
import React from "react";
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import dataContext from "../../../../context/dataContext";
import mainContext from "../../../context/mainContext";

import Input from "../../../components/Common/Input/Input";
import Button from "../../../components/Common/Button";
import Underline from "../../../assets/images/icons/UnderLine.png";

export default function ExerciseQuestion() {
  // const user = useContext(dataContext);
  const { header } = useContext(mainContext);
  header.setPageName("Level Questions");
  const navigate = useNavigate();

  const fromTR_Rate = useLocation();
  // console.log(fromTR_Rate.state);
  const LPM_Value = fromTR_Rate.state.LPM_Pushup;
  const justRight = fromTR_Rate.state.JustRight;
  const newLPM = fromTR_Rate.state.New_LPM;
  const round = fromTR_Rate.state.Round;
  const clickedButton = fromTR_Rate.state.ClickedButton;
  const formInfo2 = fromTR_Rate.state.formInfo;

  const [vq1, setVq1] = useState(true);
  const [q1, setQ1] = useState("");

  const [vq2, setVq2] = useState(true);
  const [q2, setQ2] = useState("");

  const [vq3, setVq3] = useState(true);
  const [q3, setQ3] = useState("");

  const [vq4, setVq4] = useState(true);
  const [q4, setQ4] = useState("");

  function validForm() {
    if (q1.trim().length == 0) {
      setVq1(false);
    } else if (q2.trim().length == 0) {
      setVq2(false);
    } else if (q3.trim().length == 0) {
      setVq3(false);
    } else if (q4.trim().length == 0) {
      setVq4(false);
    } else {
      round === 1
        ? (objProps.formInfo = [
          round,
          {
            answer1: `${q1}`,
            answer2: `${q2}`,
            answer3: `${q3}`,
            answer4: `${q4}`,
          },
        ])
        : (objProps.formInfo = [
          ...formInfo2,
          ...[
            round,
            {
              answer1: `${q1}`,
              answer2: `${q2}`,
              answer3: `${q3}`,
              answer4: `${q4}`,
            },
          ],
        ]);
      console.log(objProps);
      if (
        justRight ||
        round === 3 ||
        (round > 1 && clickedButton[round - 1] !== clickedButton[round - 2])
      ) {
        // console.log("SENDING OBJ TO RESULT");
        navigate("/train-reading/result", { state: objProps });
      } else {
        // console.log("SENDING OBJ TO EXERCISE");
        navigate("/train-reading/exercise-clock", { state: objProps });
      }
    }
  }
  const objProps = {
    LPM_Pushup: fromTR_Rate.state.LPM_Pushup,
    New_LPM: newLPM,
    Round: fromTR_Rate.state.Round,
    ClickedButton: fromTR_Rate.state.ClickedButton,
    BookName: fromTR_Rate.state.BookName,
    fromPath: "tr/question",
  };
  function startFunction() {
    navigate("/train-reading/exercise-clock", { state: objProps });
  }

  return (
    <>
      <div className={styles.nTitle}>Instructions</div>
      <div className={styles.nUnderLine}>
        <img src={Underline} alt="underline" />
      </div>
      <div className={styles.newText}>
        Consectetur fames feugiat interdum morbi placerat in. Leo commodo
        maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant
        gravida lobortis suscipit enim, consectetur quisque.
      </div>
      <div className={styles.fourQues}>
        <Input
          legend={"Who is the main character?"}
          type="text"
          content={"Describe Here"}
          valid={vq1}
          onInput={(e) => {
            setVq1(true);
            setQ1(e.target.value);
          }}
        />
        <Input
          legend={"What can you say about the theme of the story?"}
          type="text"
          content={"Describe Here"}
          valid={vq2}
          onInput={(e) => {
            setVq2(true);
            setQ2(e.target.value);
          }}
        />
        <Input
          legend={"Why do you think the author wrote this book?"}
          type="text"
          content={"Describe Here"}
          valid={vq3}
          onInput={(e) => {
            setVq3(true);
            setQ3(e.target.value);
          }}
        />
        <Input
          legend={"What do you think is going to happen?"}
          type="text"
          content={"Describe Here"}
          valid={vq4}
          onInput={(e) => {
            setVq4(true);
            setQ4(e.target.value);
          }}
        />
      </div>
      <div className={styles.EQButton}>
        <Button fontColor="#fff" bgColor="#F39C12" startFunction={validForm} title="Done" />
      </div>
    </>
  );
}
