import React, { useState } from "react";

import FormTitle from "../../../components/Common/FormTitle";
import FooterGoogle from "../../../components/Common/FooterGoogle";
import SignButton from "../../../components/Common/SignButton/SignButton";
import Input from "../../../components/Common/Input/Input";
import SubTitleLogin from "../../../components/Common/SubTitleLogin";
import SubmitForm from "../../../components/Common/forms/SubmitForm/SubmitForm";
import PasswordInput from "../../../components/Common/PasswordInput/PasswordInput";

import "./style.css";
import { useContext } from "react";
import dataContext from "../../../context/dataContext";
import { fakeData } from "../../../context/fakeData";
import { validate } from "./validate";


// import { useNavigate } from "react-router-dom";
// import axios from "axios";

const SignUp = () => {
  const [valid, setValid] = useState([]);
  // let navigate = useNavigate();

  const { setUserDetails } = useContext(dataContext)

  const getDatafromForm = (formData) => ({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    "confirm-password": formData.get("confirm-password"),
  })

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = getDatafromForm(new FormData(e.currentTarget))

    const checkResult = validate(body)

    setValid(checkResult)

    if (body["password"] !== body["confirm-password"])
      checkResult.push("password", "confirm-password")

    if (checkResult.length) return;

    try {
      // const { data } = await axios.post( "http://localhost:3001/api/users/register", formData);
      // navigate("../classroom", { replace: true, state: body });
      setUserDetails(fakeData.userDetails)
      console.log(body);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="wrap">
      <div className="sign-up">
        <FormTitle content="Create an Acount" />
        <SubTitleLogin content="Already have an account?" link="login" sign="In" />
        <SubmitForm onSubmit={onSubmit}>
          <Input
            legend="First Name"
            content="First Name"
            type="text"
            name="firstName"
            valid={!valid.includes("firstName")}
          />
          <Input
            content="Last Name"
            type="text"
            name="lastName"
            legend="Last Name"
            valid={!valid.includes("lastName")}
          />
          <Input
            legend="Email"
            content="Email"
            type="email"
            name="email"
            valid={!valid.includes("email")}
          />
          <PasswordInput
            legend="Password"
            content="Password"
            name="password"
            valid={!valid.includes("password")}
          />
          <PasswordInput
            legend="Confirm Password"
            content="Confirm Password"
            name="confirm-password"
            valid={!valid.includes("confirm-password")}
          />
          <SignButton content="Sign Up" type="submit" />
        </SubmitForm>
      </div>
      <FooterGoogle CreateAccount />
    </div>
  );
};

export default SignUp;
