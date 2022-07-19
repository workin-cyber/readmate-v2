import { useState } from "react";
import styles from "./style.module.css";

// Creator : Team b- yossef&&shachar
export default function RoundedButtonTB(props) {
  const [isplay, setIsPlay] = useState(1);
  console.log("button", props.play);
  return (
    <>
      <div className={styles.RoundB}>
        {isplay ? (
          <button
            className={styles.RoundedButton}
            onClick={() => {
              console.log("isplay");
              setIsPlay(!isplay);
              props.setPlay(!props.play);
            }}
          >
            {" "}
            ||{" "}
          </button>
        ) : (
          <button
            className={styles.RoundedButtonPlay}
            onClick={() => {
              setIsPlay(!isplay);
              props.setPlay(!props.play);
            }}
          >
            {" "}
            <div id="play-icon">▶</div>{" "}
          </button>
        )}
      </div>
    </>
  );
}