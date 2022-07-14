import "./style.css";
import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dataContext from "../../../../context/dataContext";
import mainContext from "../../../../context/mainContext";

import StartFooter from "../../../../components/Common/StartFooter";
import Headphone from "../../../../assets/images/illustrations/head-phones.jpg";
import FrameIcon from "../../../../assets/images/icons/FrameHeadPhone.png";
// Can be FrameConus // FramePencil // FrameCamera // FrameHeadPhone

const Exercise = () => {
  const user = useContext(dataContext);
  const BookName = user.userDetails.currentBook.name;

  const { header } = useContext(mainContext);
  header.setPageName("Exercise");

  // const pushup = useLocation();
  const navigate = useNavigate();

  const lpmFromPushup = 20; // pushup.state.nevigateObject.lpm // i have to take the info from pushup by navigateObj
  // const BookName = // pushup.state.nevigateObject.lpm // i have to take the info from pushup by navigateObj

  const title = "Start Now";
  const textTitle = "With your headphones on,";
  const text = `Continue reading 
    ${BookName} 
    book at the pace of the sound, for the next 3 minutes – we will notify you when time is up.`;

  const route = "/tr/exercise_clock";
  const objProps = {
    LPM_Pushup: lpmFromPushup,
    BookName: BookName,
    fromPath: "tr/exercise",
    // Add all the answers from pushup questions
  };
  function startFunction() {
    navigate(route, { state: objProps });
  }

  return (
    <>
      <div className="level_exercise">
        <img src={Headphone} alt="Headphone" />
      </div>
      <StartFooter
        title={title}
        subtitle={textTitle}
        explanation={text}
        startFunction={startFunction}
        img={FrameIcon}
      />
    </>
  );
};

export default Exercise;
