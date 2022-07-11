import styles from "./style.module.css";
import FooterStart from "../../../components/Common/StartFooter";
// import './style.css';
// import  useContext from 'react';
// import { pageNameContext } from '../../../components/common/';
// import FooterStart from '../../../components/common/FooterStart';
import group from "./group.jpg";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import UmooveApi from "../../../components/api/UmooveApi";
// Creator : Team A -efrat & Yehoantan
function Page3() {
  const l = useLocation();
  console.log(l);
  const navigate = useNavigate();
  let videoRef = useRef();
  const [count, setCount] = useState(0);

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
      console.log(count);
      if (count < 100) {
        clearInterval(interval);
      }
      sucsses = UmooveApi.API_getUmooveTracking();
      console.log(sucsses);
      if (sucsses === true) {
        clearInterval(interval);
        navigate("/teama/page4", { state: { data: " l.state.data" } });
      }
      setCount(count + 1);
    }, 1000);
  };
  // const [pageName, setPageName] = useContext(pageNameContext) //adduming contect is in use
  return (
    <div>
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
          explanation="hdnvdjnjrtnvjsdsdjkdfnjsnjknsdfjknsdfjsdkf"
          img={group}
        />
      </div>
    </div>
  );
}

export default Page3;
