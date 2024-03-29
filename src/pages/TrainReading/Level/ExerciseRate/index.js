import "./style.css";
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import dataContext from "../../../../context/dataContext";
import mainContext from "../../../../context/mainContext";

import Button from "../../../../components/Common/Button";
import TwistBox from "../../../../components/Common/TwistBox";

const ExerciseRate = () => {
  // const user = useContext(dataContext);
  const { header } = useContext(mainContext);
  header.setPageName("Reading Rate");

  const from_TRL_Clock = useLocation();
  const LPM_fromClock = from_TRL_Clock.state.LPM;
  console.log("exerciseRate", from_TRL_Clock.state);

  const [newLPM, setNewLPM] = useState(LPM_fromClock);
  const [isJustRight, setIsJustRight] = useState(false);
  const [round, setRound] = useState(0);
  const [clickedButton, setClickedButton] = useState(
    from_TRL_Clock.state.ClickedButton
  );

  const objProp = {
    LPM_Pushup: from_TRL_Clock.state.LPM_Pushup,
    New_LPM: newLPM,
    JustRight: isJustRight,
    Round: round,
    ClickedButton: clickedButton,
    BookName: from_TRL_Clock.state.BookName,
    fromPath: "tr/rate",
    formInfo: from_TRL_Clock.state.formInfo,
  };

  useEffect(() => {
    round > 0 && startFunction();
  }, [round]);

  function choice(button) {
    if (button === "JR") {
      setIsJustRight(true);
      setRound(round + 1 + from_TRL_Clock.state.Round);
      setClickedButton((clickedButton) => [...clickedButton, "JR"]);
    }

    if (from_TRL_Clock.state.ClickedButton.length === 0) {
      if (button === "TF") {
        setNewLPM(LPM_fromClock - 2);
        setRound(round + 1 + from_TRL_Clock.state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TF"]);
      }
      if (button === "TS") {
        setNewLPM(LPM_fromClock + 2);
        setRound(round + 1 + from_TRL_Clock.state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TS"]);
      }
    }
    if (from_TRL_Clock.state.ClickedButton.length > 0) {
      if (
        button === "TF" &&
        from_TRL_Clock.state.ClickedButton[
          from_TRL_Clock.state.ClickedButton.length - 1
        ] === "TF"
      ) {
        setNewLPM(newLPM - 2);
        setRound(round + 1 + from_TRL_Clock.state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TF"]);
      }
      if (
        button === "TS" &&
        from_TRL_Clock.state.ClickedButton[
          from_TRL_Clock.state.ClickedButton.length - 1
        ] === "TS"
      ) {
        setNewLPM(newLPM + 2);
        setRound(round + 1 + from_TRL_Clock.state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TS"]);
      }

      if (
        button === "TS" &&
        from_TRL_Clock.state.ClickedButton[
          from_TRL_Clock.state.ClickedButton.length - 1
        ] === "TF"
      ) {
        setNewLPM(newLPM + 1);
        setRound(round + 1 + from_TRL_Clock.state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TS"]);
      }

      if (
        button === "TF" &&
        from_TRL_Clock.state.ClickedButton[
          from_TRL_Clock.state.ClickedButton.length - 1
        ] === "TS"
      ) {
        setNewLPM(newLPM - 1);
        setRound(round + 1 + from_TRL_Clock.state.Round);
        setClickedButton((clickedButton) => [...clickedButton, "TF"]);
      }
    }
  }

  const route = "/tr/question";
  const navigate = useNavigate();
  function startFunction() {
    navigate(route, { state: objProp });
  }

  return (
    <>
      <div className="TwistBoxRate">
        <TwistBox
          background="#FEEFEC"
          height="337px"
          width="382px"
          transform="rotateZ(-4deg)"
        >
          <span>How was that reading rate?</span>
          <div className="RateButtons">
            <div className="justRight">
              <Button
                bgColor="#FFFFFF"
                startFunction={() => choice("JR")}
                title="Just Right"
              />
            </div>
            <div className="tooFast">
              <Button
                bgColor="#FFFFFF"
                startFunction={() => choice("TF")}
                title="Too Fast"
              />
            </div>
            <div className="tooSlow">
              <Button
                bgColor="#FFFFFF"
                startFunction={() => choice("TS")}
                title="Too Slow"
              />
            </div>
          </div>
        </TwistBox>
      </div>
      {newLPM}

      <button
        path=""
        name="just right"
        type={"button"}
        onClick={() => choice("JR")}
      >
        just Right
      </button>
      <button
        path=""
        name="Too Fast"
        type={"button"}
        onClick={() => choice("TF")}
      >
        Too fast
      </button>
      <button
        path=""
        name="Too Slow"
        type={"button"}
        onClick={() => choice("TS")}
      >
        Too SLow
      </button>
    </>
  );
};

export default ExerciseRate;
