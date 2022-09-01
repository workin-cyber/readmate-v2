import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./style.css";

// Creator : Team D - Oriya
const PasswordInput = (props) => {
  const [icon, setIcon] = useState(true);

  const border = props.valid ? "" : "unvalid";
  const label = props.valid ? "" : "unvalidLabel";
  const text = props.valid ? "" : "unvalidLabel";
  const placeholder = props.valid ? "" : "unvalidPlaceholder";

  const changeIcon = () => setIcon(!icon);

  return (
    <>
      <fieldset className={border}>
        <legend className={label}>{props.legend}</legend>
        <input
          name={props.name}
          value={props.value}
          className={`password-input ${placeholder} ${text}`}
          type={icon ? "password" : "text"}
          placeholder={props.placeholder}
          valid={props.valid ? "true" : ""}
          onInput={props.onInput}
          onChange={props.onChange}
        />
        <span onClick={changeIcon} className="hide-icon">
          {icon ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </fieldset>
    </>
  );
};

export default PasswordInput;
