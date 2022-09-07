import React from "react";
import { useContext } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import dataContext from "../../../../context/dataContext";
import mainContext from "../../../context/mainContext";

import TwistBox from "../../../components/Common/TwistBox";
import Button from "../../../components/Common/Button";
import result from "../../../assets/images/illustrations/result.png";
import FrameBookTime from "../../../assets/images/icons/FrameBookTime.png";

export default function ExerciseResult() {
  // const user = useContext(dataContext);
  const { header } = useContext(mainContext);

  useEffect(() => {
    header.setPageName("Result Summary");
    return () => header.setPageName("")
  }, [])


  const navigate = useNavigate();
  const from_TRL_Question = useLocation();
  const userLPM = from_TRL_Question.state.New_LPM;

  function TRLevelDone() {
    navigate("/");
  }

  return (
    <div className="level_page pages">
      <img src={result} alt="Result Page Background" />

      <div className={`result--div two-colored-div`} >
        <div className="twistBoxChildren">
          <img src={FrameBookTime} alt="FrameBookTime" />
          <span>Comfortable Reading Rate</span>
          <span>{userLPM} LPM</span>
        </div>
      </div>

      <Button startFunction={TRLevelDone} title="Go To Dashboard" />

    </div>
  );
}