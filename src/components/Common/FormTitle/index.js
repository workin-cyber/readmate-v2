import "./style.css";

import React from "react";
// Creator : Team D - Dov
export const FormTitle = (props) => {
  return (
    <div className="FormTitle">
      <div className="title">
        {props.content}
        {props.optionalName}
      </div>
    </div>
  );
};

export default FormTitle;
