import React from "react";

function ClickForm(props) {
  return (
    <form className={props.className} id={props.id} onClick={props.onclick}>
      {props.children}
    </form>
  );
}

export default ClickForm;
