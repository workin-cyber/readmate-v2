import styles from "./style.module.css";
import ResultImg from "./Result.svg";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mainContext from "../../../context/mainContext";
import Button from "../../../components/Common/Button";
import RatingAndScore from "../../../components/Common/ReatingAndScore";
import tfSrc from "./TrainFocusResultIcon.png"
// Creator : Team A - Efart

function Result({ children, from, submit: { path, name, onClick = () => { } } = {} }) {
   const { state } = useLocation()
   const navigate = useNavigate()
   const { header: { setPageName } } = useContext(mainContext)

   useEffect(() => {
      setPageName("Result Summary");
      return () => setPageName("")
   }, [])


   // TODO - print result from the state
   // there few options to that page
   console.log("state", state);


   return (
      <div className={`${styles.result} pages`}>
         <img src={ResultImg} alt="result" className={styles.img} />
         {from === "assessments" && <RatingAndScore wpm={120} std={5} compScore={8} />}
         {from === "train-focus" && <div className={`result--div two-colored-div`} >
            <div className="twistBoxChildren">
               <img src={tfSrc} alt="FrameBookTime" />
               <span>Comfortable Distance</span>
               <span>{10} CM</span>
            </div>
         </div>
         }
         <div className={styles.btnHolder}>
            <Button title="Go to Dashboard" startFunction={() => navigate("/")} />
         </div>
      </div>
   );
}

export default Result;