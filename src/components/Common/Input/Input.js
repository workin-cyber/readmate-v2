import "./style.css";

// Creator : Team d - oriya
export default function Input(props) {
  const border = props.valid ? "" : "unvalid";
  const label = props.valid ? "" : "unvalidLabel";
  const text = props.valid ? "" : "unvalidLabel";
  const placeholder = props.valid ? "" : "unvalidPlaceholder";

  return (
    <>
      <fieldset className={border}>
        <legend className={label}>{props.legend}</legend>

        <input
          className={`allInputs ${placeholder} ${text}`}
          value={props.value}
          type={props.type}
          placeholder={props.content}
          name={props.name}
          onInput={props.onInput}
          onChange={props.onChange}
          valid={props.valid}
        />
        <div>{props.span}</div>
      </fieldset>
    </>
  );
}
