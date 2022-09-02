import { useState } from "react";
import styles from "./style.module.css";

// Creator : Team d - oriya
export default function Input(props) {
  const [focus, setFocus] = useState()
  const border = props.valid ? "" : "unvalid";
  const label = props.valid ? "" : "unvalidLabel";
  const text = props.valid ? "" : "unvalidLabel";
  const placeholder = props.valid ? "" : "unvalidPlaceholder";

  return (
    <>
      <fieldset className={`${focus ? styles.focus : ""} ${styles[border]} ${styles["fieldset"]}`}>
        <legend className={` ${styles[label]} ${styles["legend"]}`}>{props.legend}</legend>

        <input
          className={`${styles["allInputs"]} ${styles[placeholder]} ${styles[text]}`}
          value={props.value}
          type={props.type}
          placeholder={props.content}
          name={props.name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus()}
          onInput={props.onInput}
          onChange={props.onChange}
          valid={props.valid ? "true" : ""}
        />
        <div>{props.span}</div>
      </fieldset>
    </>
  );
}
