import FooterStart from "../../../components/Common/StartFooter";

import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import UmooveApi from "../../../components/api/UmooveApi";
import styles from "./style.module.css";
import group from "./group.jpg";
import mainContext from "../../../context/mainContext";

// Creator : Team A -efrat & Yehoantan
function CameraSetup() {
  const l = useLocation();
  const navigate = useNavigate();
  let videoRef = useRef();
  const [count, setCount] = useState(0);

  const { header: { setPageName } } = useContext(mainContext)

  useEffect(() => {
    setPageName("Camera Setup")
    return () => setPageName("")
  }, [])

  // let count = 0;
  let sucsses;

  useEffect(() => {
    UmooveApi.API_loadUmooveLibrary()
      .then((st) => (videoRef.current.srcObject = st))
      .catch((e) => alert("error"));
  }, []);

  const nextPage = () => {
    UmooveApi.API_startUmoove();
    const interval = setInterval(() => {
      // console.log(count);
      if (count < 100) {
        clearInterval(interval);
      }
      sucsses = UmooveApi.API_getUmooveTracking();
      // console.log(sucsses);
      if (sucsses === true) {
        clearInterval(interval);
        navigate("/teama/page4", { state: { data: " l.state.data" } });
      }
      setCount(count + 1);
    }, 1000);
  };

  return (
    <div>
      <div className={styles.camera}>
        <video ref={videoRef} autoPlay className="focus-video" />
      </div>
      <FooterStart
        route=""
        startFunction={() => {
          nextPage();
        }}
        title="Start now"
        explanation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio velit beatae asperiores dolore explicabo!"
        img={group}
      />
    </div>
  );
}

export default CameraSetup;
