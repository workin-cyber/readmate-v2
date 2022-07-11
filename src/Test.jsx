import React from "react";

import SignUp from "./components/Common/Signup/Signup";
import SelectInput from "./components/Common/SelectInput/SelectInput";
import SubTitleLogin from "./components/Common/SubTitleLogin";
const Test = () => {
  const opt = [1, 3, 4, 5];
  return (
    <div>
      {/* <SelectInput options={opt} title="Select The Reading Level" /> */}
      {/* <SignUp /> */}
      <SubTitleLogin
        title="Wellcome Back!"
        content="Don't have an account ?"
        link="/"
      />
    </div>
  );
};

export default Test;
