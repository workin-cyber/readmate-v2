import styles from "./style.module.css";

import React from "react";

// Creator : Team D - Dov

export const FormTitle = ({ optionalName, content }) => {

  return (
    <div className={styles["FormTitle"]}>
      <div className={styles["title"]}>
        {content}
        {optionalName}
      </div>
    </div>
  );
};

export default FormTitle;
