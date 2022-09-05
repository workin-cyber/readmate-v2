// this button can get: backgroundColor, fontColor, onClick, title, width and height
// in this format:
// <Button bgColor = "pink" fontColor = "green" startFunction = {onPlay} title = "Next" width = "350px" height = "50px"> </Button>
import styles from "./style.module.css";

export default function Button({ title, bgColor, width, height, startFunction, fontColor, disabled }) {
  const myStyle = {
    backgroundColor: bgColor,
    width: width,
    height: height,
    color: fontColor
  };

  return (
    <div className={styles["wrapButton"]}>
      <button disabled={disabled} className={styles["submit"]} onClick={startFunction} style={myStyle}>
        {title}
      </button>
    </div>
  );
}
