// this button can get: backgroundColor, fontColor, onClick, title, width and height
// in this format:
// <Button bgColor = "pink" fontColor = "green" startFunction = {onPlay} title = "Next" width = "350px" height = "50px"> </Button>
import "./style.css";

export default function Button(props) {
  const myStyle = {
    backgroundColor: props.bgColor,
    width: props.width,
    height: props.height,
  };

  return (
    <div className="wrapButton">
      <button className="submit" onClick={props.startFunction} style={myStyle}>
        <div className="word" style={{ color: props.fontColor }}>
          {props.title}
        </div>
      </button>
    </div>
  );
}
