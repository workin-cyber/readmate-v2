import React from "react";
import "./style.css";

function SubmitForm(props) {
  return (
    <form
      className="form-box"
      id={props.id}
      action={props.action}
      onSubmit={props.onSubmit}
      method={props.method}
    >
      {props.children}
    </form>
  );
}

export default SubmitForm;
