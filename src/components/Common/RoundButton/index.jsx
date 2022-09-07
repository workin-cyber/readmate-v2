import { BsPlayFill } from "react-icons/bs";
import { IoIosPause } from "react-icons/io";
import styles from "./style.module.css";

// Creator : Team H - batya
export default function RoundButton({ isPlay, setIsPlay }) {

  return (
    <button
      className={`${styles.btn} ${styles[isPlay ? "RoundedButton" : "RoundedButtonPlay"]}`}
      onClick={() => setIsPlay(!isPlay)}
    >
      {isPlay ? <IoIosPause /> : <BsPlayFill />}
    </button>
  );
}