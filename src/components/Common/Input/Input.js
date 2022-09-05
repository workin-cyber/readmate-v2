import { useState } from "react";
import styles from "./style.module.css";

// Creator : Team d - oriya
export default function Input({ valid, legend, value, type, content, name, onInput, onChange, span, defaultValue, ...props }) {
  const [focus, setFocus] = useState()
  const border = valid ? "" : "unvalid";
  const label = valid ? "" : "unvalidLabel";
  const text = valid ? "" : "unvalidLabel";
  const placeholder = valid ? "" : "unvalidPlaceholder";

  return (
    <>
      <fieldset className={`${focus ? styles.focus : ""} ${styles[border]} ${styles["fieldset"]}`}>
        <legend className={` ${styles[label]} ${styles["legend"]}`}>{legend}</legend>

        <input
          className={`${styles["allInputs"]} ${styles[placeholder]} ${styles[text]}`}
          value={value}
          type={type}
          placeholder={content}
          name={name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus()}
          onInput={onInput}
          onChange={onChange}
          valid={valid ? "true" : ""}
          defaultValue={defaultValue}
          {...props}
        />
        <div>{span}</div>
      </fieldset>
    </>
  );
}
