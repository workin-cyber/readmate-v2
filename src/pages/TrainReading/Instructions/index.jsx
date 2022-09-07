import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StartFooter from "../../../components/Common/StartFooter"
import mainContext from "../../../context/mainContext";
import dataContext from "../../../context/dataContext";

import earphonesImg from "../../../assets/images/icons/FrameHeadPhone.png"
import src from '../../../assets/images/illustrations/head-phones.jpg'

function PushUpInstructions() {
  const { header } = useContext(mainContext)
  const { userDetails } = useContext(dataContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    header.setPageName(`Pushup ${navigateObject.roundCounter}/4`);
    return () => header.setPageName(``);
  }, [])

  const navigateObject = !location.state.navigateObject ? {
    bookName: location.state.bookName,
    genre: location.state.genre,
    roundCounter: 1,
    lpm: userDetails.TR[userDetails.TR.length - 1].Value,
    rateData: {
      LPM: 0,
      newLPM: 0,
      round: 0,
      justRight: false
    },
    questions: []
  } : location.state.navigateObject;

  const book = navigateObject.bookName;


  const instructionsText = navigateObject?.roundCounter === 4
    ? (`Continue reading ${book} book at the pace of the sound, for the next 3 minutes - you can use the stop button if you can't keep up with the music rate.`)
    : (`Continue reading ${book} book at the pace of the sound, for the next 3 minutes - we will notify you when time is up.`);

  const startRound = () => navigate("/train-reading/timer", { state: { navigateObject } });


  return (
    <div className="pages">
      <div className={styles.centerImg}>
        <img src={src} id="headphones" alt="headphones" className={styles.headphones} />
      </div>
      <div id="playDiv">
        <StartFooter
          startFunction={() => startRound()}
          title="Start Now"
          subtitle="With your headphones on,"
          explanation={instructionsText}
          img={earphonesImg}
        />
      </div>
    </div>
  );
}

export default PushUpInstructions;