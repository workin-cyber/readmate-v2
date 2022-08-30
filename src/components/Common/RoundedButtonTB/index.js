import { useContext, useState } from "react";
import { clockContex } from "../../../pages/PushUpTimer2";
import styles from "./style.module.css";

// Creator : Team b- yossef&&shachar
export default function RoundedButtonTB(props) {
  const { play, setPlay } = useContext(clockContex)
  const [isplay, setIsPlay] = useState(1);
  console.log("button", play);
  return (
    <>
      <div className={styles.RoundB}>
        {isplay ? (
          <button
            className={styles.RoundedButton}
            onClick={() => {
              console.log("isplay");
              setIsPlay(!isplay);
              setPlay(!play);
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
              setPlay(!play);
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