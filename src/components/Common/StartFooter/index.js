import "./style.css";
// import { Link } from "react-router-dom";
// import img from "../../../assets/img/Frame.png"
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
 * @param {{startFunction:string,
 * title: string,
 * subtitle:string,
 * explanation:string,
 * img:string}} props
 * @returns
 */
function StartFooter(props) {
  return (
    <div className="pageStartFooter">
      <div className="myAreaBtnStart">
        <div className="outBtn">
          <button className="startOrengeBtn" onClick={props.startFunction}>
            <div className="playTriangle"></div>
          </button>
        </div>
        <div className="footer-start-box">
          <div className="startTitle">{props.title}</div>
          <div className="explanation">
            {props.subtitle && (
              <p>
                <b className="explanationPB">{props.subtitle}</b>
              </p>
            )}
            <p className="explanationP">{props.explanation}</p>
          </div>
          <div className="myEmojiDiv">
            <img src={props.img} className="leftEmoji" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartFooter;
