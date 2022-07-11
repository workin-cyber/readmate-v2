import React from "react";

import SignUp from "./components/Common/Signup/Signup";
import SelectInput from "./components/Common/SelectInput/SelectInput";
import SubTitleLogin from "./components/Common/SubTitleLogin";
import Header from "./components/Common/Header";
const Test = () => {
  const opt = [1, 3, 4, 5];
  return (
    <div>
      {/* <SelectInput options={opt} title="Select The Reading Level" /> */}
      <SignUp />
      {/* <SubTitleLogin
        title="Wellcome Back!"
        content="Don't have an account ?"
        link="/"
      /> */}
      {/* <Header pageName="Dashbord" /> */}
    </div>
  );
};

export default Test;
