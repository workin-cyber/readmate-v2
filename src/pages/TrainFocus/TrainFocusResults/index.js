import { useContext, useEffect, useState } from "react";
import SubmitBtn from "../../../components/common/SubmitBtn";
import "./mosheModels.css";
import image from "./Resuil vector.png";
import image2 from "./Group 287 (1).png";

import ReatingAndScore from "../../../components/common/ReatingAndScore";
import { pageNameContext } from "../../../components/layout/Layout";

// Creator : Team G - Shmuel
function Results() {
  // const [setPageName] = useContext(pageNameContext)}
  // setPageName("Result Summary");
  const { DailyStoppingDistance, setDailyStoppingDistance, setRoundNumber,setPageName } =
    useContext(pageNameContext);
  const updateDB = () => {
    console.log("fhdgfjhdf");
    setDailyStoppingDistance(0);
    setRoundNumber(1);
  };

  useEffect(()=>{
    setPageName("summary result")
  },[])

  return (
    <>
      <img className="train-focus-result-image" src={image} alt="img"></img>
      <div className="train-focus-rectangle1">
        <div className="train-focus-image2">
          <img src={image2}></img>
        </div>
        <h5 className="train-focus-text">Comfortable Reading</h5>
        <span className="train-focus-avg">
          <b>{DailyStoppingDistance} cm</b>
        </span>
      </div>

      <SubmitBtn
        // className="btn"
        path="/train-focus/StartFocus"
        name="Done"
        onclick={updateDB}
      />
    </>
  );
}

export default Results;
