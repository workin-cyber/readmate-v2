import styles from "./style.module.css";
import { BsFillPlayFill } from "react-icons/bs"
// Shira from Team G - Shmuel

// _____________________
// יש לשלוח לקומפוננטה הזו:

// props.startFunction   --->הפונקציה שתפעל בעת לחיצה על הכפתור, היא צריכה להעביר לדף הבא
//props.title
//props.subtitle ----> אם יש כותרת משנית- בתוך ההסבר- לשלוח. אם אין אז לא לשלוח
//props.explanation
//props.img  ------> צריך להוריד את התמונה ולהכניס לתקיית התמונות, ואז לייבא אותה בדף אליו מרנדרים את הקומפוננטה הזו
// _____________________
/**
 *
 * @param {{startFunction:Function,
 * title: string,
 * subtitle:string,
 * explanation:string,
 * img:string}} props
 * @returns
 */
function StartFooter(props) {
  return (
    <div className={styles["pageStartFooter"]}>
      <div className={styles["myAreaBtnStart"]}>

        <div className={styles["outBtn"]}>
          <button className={styles["startOrengeBtn"]} onClick={props.startFunction}>
            <BsFillPlayFill />
          </button>
        </div>

        <div className={styles["footer-start-box"]}>
          <div className={styles["startTitle"]}>{props.title}</div>
          <div className={styles["explanation"]}>

            {props.subtitle &&
              <p><b className={styles["explanationPB"]}>{props.subtitle}</b> </p>}

            <p className={styles["explanationP"]}>{props.explanation}</p>
            <div className={styles["myEmojiDiv"]}>
              <img src={props.img} className={styles["leftEmoji"]} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartFooter;
