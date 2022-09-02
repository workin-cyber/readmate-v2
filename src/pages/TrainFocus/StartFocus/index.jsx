import "./style.css";

import { useState, useEffect, useContext } from "react";
import UmooveApi from "../../../components/api/UmooveApi";
import { useLocation, useNavigate } from "react-router-dom";
import mainContext from "../../../context/mainContext";
import StartFooter from "../../../components/Common/StartFooter";

import footerImg from "./Vector.svg"

function StartFocus() {
  const [mirror, setMirror] = useState("");
  const nevigate = useNavigate();
  const [RoundNumber, setRoundNumber] = useState(localStorage?.RoundNumber ? Number(localStorage?.RoundNumber) : 1)

  const title = `START ROUND ${RoundNumber}/4`;
  const explanation1 =
    "Starting from arms length, press play and then slowly bring device towards your nose. When it starts to feel uncomfortable or you see more than one dot click stop";
  const explanation2 =
    "Now while looking at the dot pull the device slowly away back to arms length. When at arms length, click start to do another round";

  const { header: { setIsShowHeader } } = useContext(mainContext);

  useEffect(() => {
    setIsShowHeader()
    return () => setIsShowHeader(true)
  }, [])

  useEffect(() => {
    UmooveApi.API_loadUmooveLibrary()
      .then((stream) => setMirror(stream))
      .catch((err) => console.log(err));
  }, []);

  function startFunction() {
    let count = 0;
    UmooveApi.API_startUmoove();
    const interval = setInterval(() => {
      console.log(count);
      if (UmooveApi.API_getUmooveTracking()) {
        clearInterval(interval);
        localStorage.RoundNumber = RoundNumber + 1
        nevigate("/train-focus/exercise");
      } else if (count < 200) {
        count++;
      } else {
        alert("Look at the camera");
        count = 0;
      }
    }, 10);
  }

  //TODO  ה200 הוא פייק. לקבל משתנה מאורית
  localStorage.setItem("posX", 200);

  return (
    <div>
      <div
        className="localLook"
        style={{ left: localStorage.getItem("posX") + "px" }}
      >
        <div className="purpleDotDot"></div>
        <div className="arrowToDot"></div>
        <div className="anderDotText">
          <p>Focus on the {"\n"}dot above</p>
        </div>
        <video width="320" height="240">
          <source src={mirror} type="video/mp4"></source>
        </video>
      </div>

      <StartFooter
        startFunction={startFunction}
        title={title}
        explanation={RoundNumber === 1 ? explanation1 : explanation2}
        img={footerImg}
      />
    </div>
  );
}

export default StartFocus;
