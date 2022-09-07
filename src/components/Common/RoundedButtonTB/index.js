
import styles from "./style.module.css";

// Creator : Team b- yossef&&shachar
export default function RoundedButtonTB({ setPlay, play }) {

  console.log("button", play);

  return (
    <>
      <div className={styles.RoundB}>
        <button className={`${styles.RoundedButton} ${play ? styles.RoundedButtonPlay : ""}`} onClick={() => setPlay(old => !old)}> {play ? "||" : "▶"}</button>
      </div>
    </>
  );
}