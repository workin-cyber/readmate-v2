import styles from "./style.module.css";
import Vector from "./image/Vector.svg";
import Brain from "./image/Brain.svg";
import Time from "./image/Time.svg";
import VectorOrange from "./image/VectorOrange.svg";

// Creator : Team A - Keren and Efrat
function RatingAndScore({ wpm, std, compScore }) {
  return (
    <div className={`${styles.front} back-purple left `}>
      <div className={styles.left}>
        <img src={Time} alt="" className={styles.time} />
        <div className={styles.sText}>Reading Rate</div>
        <div className={styles.bText}>
          {wpm}WPM <br />
          (+/-{std})
        </div>
        <div className={styles.bText}></div>
      </div>
      <div>
        <img src={Vector} alt="" className={styles.vector} />
        <img src={VectorOrange} alt="" className={styles.VectorOrange} />
      </div>
      <div>
        <img src={Brain} alt="" className={styles.brain} />
        <div className={styles.sText}>Comprehension Score</div>

        <div className={styles.bText}>
          <div style={{ fontSize: "25px" }}>{compScore}</div>/10
        </div>
      </div>
    </div>
  );
}

export default RatingAndScore;
