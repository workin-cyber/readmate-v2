import styles from "./style.module.css";
import { Link } from "react-router-dom";

// Creator : Team A - Shahar.
export function NavButton(props) {
  return (
    <Link
      to={props.link}
      style={{ textDecoration: "none" }}
      onClick={props.onClick}
    >
      <div className={`${styles.outerdiv}`}>
        <div className={`${styles.icon}`}>{props.icon}</div>
        <div className={`${styles.txt}`}> {props.text}</div>
      </div>
    </Link>
  );
}
