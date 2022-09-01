import "./shira.css";

// Shira from Team G - Shmuel

// יש לשלוח לקומפוננטה הזו:
//props.route  ----> להכניס את הראוט אליו הלינק צריך ללכת
// props.startFunction   --->הפונקציה שתפעל בעת לחיצה על הכפתור, היא צריכה להעביר לדף הבא
//props.title
//props.explanation
//props.img

function StartComponent(props) {
  return (
    <div className="bottomStart">
      <div className="outBtn">
      <Link to={props.route}>  <button
          className="startBtn"
          onClick={() => {props.startFunction}}
        >
          <div className="play"></div>
        </button></Link>
      </div>
      <div className="box">
        <div className="startTitle">{props.title}MY TITLE</div>
        <div className="explanation">
          <p>
            {props.explanation}my explanation... blablablablablablablablabla
          </p>
        </div>
        <div className="myEmoji">
          <img src={props.img}></img>
        </div>
      </div>
    </div>
  );
}

export default StartComponent;
