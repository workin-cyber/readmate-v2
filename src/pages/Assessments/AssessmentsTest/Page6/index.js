import SubmitBtn from "../../../components/common/SubmitBtn";
import styles from "./style.module.css";
import Result from "./Result.svg";
import RatingAndScore from "../../../components/common/ReatingAndScore";
import { useContext } from "react";
import pageNameContext from "../../../components/layout/Layout";
import { useLocation } from "react-router-dom";
// Creator : Team A - Efart
function Page6() {
  console.log("222");
  // const [pageName, setPageName] = useContext(pageNameContext);
  // setPageName("Result Summary");
  const l = useLocation()
  console.log(l.state);
  return (
    <div className={styles.page6}>
      <div>
        <img src={Result} alt="" className={styles.img} />
      </div>
      <div className={styles.ratingAndScore}>
        <RatingAndScore wpm={120} std={5} compScore={8} />
      </div>
      <SubmitBtn
        path={"/dashboard"}
        name={"Go to Dashboard"}
        onclick={() => {}}
      />
    </div>
  );
}

export default Page6;
