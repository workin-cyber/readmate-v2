import styles from "./style.module.css";
import StartFooter from "../../../components/Common/StartFooter";
import group from "./Vector.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import UmooveApi from "../../../components/api/UmooveApi";
import mainContext from "../../../context/mainContext";

// Creator : Team A -efrat & Yehoantan
function Page3() {
   const navigate = useNavigate();
   const videoRef = useRef();
   const [count, setCount] = useState(0);

   const { header: { setPageName } } = useContext(mainContext)

   useEffect(() => { setPageName("camera setup") }, [])

   useEffect(() => {
      UmooveApi.API_loadUmooveLibrary()
         .then((st) => (videoRef.current.srcObject = st))
         .catch((e) => console.log(e));
   }, []);

   const nextPage = () => {
      let sucsses;
      UmooveApi.API_startUmoove();
      const interval = setInterval(() => {
         console.log(count);

         if (count < 100)
            clearInterval(interval);

         sucsses = UmooveApi.API_getUmooveTracking();
         console.log(sucsses);

         if (sucsses === true) {
            clearInterval(interval);
            navigate("/assessments/comprehension", { state: { data: " l.state.data" } });
         }
         setCount(count + 1);
      }, 1000);
   };

   return (
      <div className={styles.container}>
         <div>
            <div className={`${styles.camera} `}>
               <video ref={videoRef} autoPlay className="focus-video" />
            </div>
            <StartFooter
               subtitle="Clean the front facing camera"
               startFunction={() => nextPage()}
               title="Start now"
               explanation="hdnvdjnj rtnvjsd sdjkdfn jsnjknsd fjk nsdf jsdkf slaj aldsk asdlkas l sadl sadl asd kl"
               img={group}
            />
         </div>
      </div>
   );
}

export default Page3;