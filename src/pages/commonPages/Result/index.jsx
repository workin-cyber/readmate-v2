import styles from "./style.module.css";
import ResultImg from "./Result.svg";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mainContext from "../../../context/mainContext";
import Button from "../../../components/Common/Button";
import RatingAndScore from "../../../components/Common/ReatingAndScore";

// Creator : Team A - Efart

function Result({ children, submit: { path, name, onClick = () => { } } = {} }) {
   const { state } = useLocation()
   const navigate = useNavigate()
   const { header: { setPageName } } = useContext(mainContext)

   useEffect(() => { setPageName("Result Summary") }, [])


   // TODO - print result from the state
   console.log("state", state);


   return (
      <div className={styles.result}>
         <img src={ResultImg} alt="result" className={styles.img} />
         <RatingAndScore wpm={120} std={5} compScore={8} />
         <Button title="Go to Dashboard" startFunction={() => navigate("/dashboard")} />
      </div>
   );
}

export default Result;