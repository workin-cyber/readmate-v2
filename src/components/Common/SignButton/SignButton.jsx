import styles from "./style.module.css";

// Creator : Team d - oriya
export default function SignButton({ onClick, content, type, style = {} }) {
  return (
    <div className={styles["btn-box"]}>
      <button style={style} onClick={onClick} className={styles["sign-button"]} type={type}>
        {content}
      </button>
    </div>
  );
}
