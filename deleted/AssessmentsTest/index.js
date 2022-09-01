import SubmitBtn from "../../../components/common/SubmitBtn";
import styles from "./style.module.css";
import Result from "./Result.svg";
import RatingAndScore from "../../src/components/common/ReatingAndScore";
import { useLocation } from "react-router-dom";
// Creator : Team A - Efart
function Page6() {
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
        onclick={() => { }}
      />
    </div>
  );
}

export default Page6;
