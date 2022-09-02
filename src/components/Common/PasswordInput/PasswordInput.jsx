import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./style.module.css";

// Creator : Team D - Oriya
const PasswordInput = (props) => {
  const [icon, setIcon] = useState(true);
  const [focus, setFocus] = useState()

  const border = props.valid ? "" : "unvalid";
  const label = props.valid ? "" : "unvalidLabel";
  const text = props.valid ? "" : "unvalidLabel";
  const placeholder = props.valid ? "" : "unvalidPlaceholder";

  const changeIcon = () => setIcon(!icon);

  return (
    <>
      <fieldset className={`${styles[border]} ${styles.fieldset} ${focus ? styles.focus : ""}`}>
        <legend className={`${styles[label]} ${styles.legend}`}>{props.legend}</legend>
        <input
          name={props.name}
          value={props.value}
          className={`${styles["password-input"]} ${placeholder} ${text}`}
          type={icon ? "password" : "text"}
          placeholder={props.placeholder}
          valid={props.valid ? "true" : ""}
          onInput={props.onInput}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus()}
          onChange={props.onChange}
        />
        <span onClick={changeIcon} className={styles["hide-icon"]}>
          {icon ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </fieldset>
    </>
  );
};

export default PasswordInput;
