// the button can get: backgroundColor, fontColor, title, onClick, width && height

import "./style.css";
export default function Button(props) {
 const myStyle = {
  backgroundColor: props.bgColor,
  width: props.width,
  height: props.height
 }

  return (
    <div className="wrapButton">
    <button className="submit" type={props.type} onClick={props.startFunction} style = {myStyle}>
      <div className="word" style={{color: props.fontColor}} >{props.title}</div>
    </button></div>
  )
}

