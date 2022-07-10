import "./style.css";
import FormTitle from "../../../components/Common/FormTitle";
import FooterGoogle from "../../../components/Common/FooterGoogle";
import SignButton from "../../../components/Common/SignButton/SignButton";
import React, { useEffect } from "react";
import Input from "../../../components/Common/Input/Input";
import SubTitleLogin from "../../../components/Common/SubTitleLogin";
import SubmitForm from "../forms/SubmitForm/SubmitForm";
import PasswordInput from "../../../components/Common/PasswordInput/PasswordInput";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [formData, setFormData] = useState(null);
  const [valid, setValid] = useState(true);
  // let navigate = useNavigate();

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const validate = (obj) => Object.values(obj).every((f) => f.length > 0);
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(data);
    const f = validate(body);
    if (f) {
      setFormData(body);
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/users/register",
          formData
        );

        // navigate("../classroom", { replace: true, state: body });
        console.log(data);
      } catch (err) {
        checkIfValid(err);
        console.log(err);
      }
    } else {
      setValid(false);
    }

    console.log(formData);
  };

  const checkIfValid = (data) => {
    data ? setValid(false) : setValid(true);
  };
  return (
    <div className="sign-up">
      <FormTitle content="Create an Acount" />
      <SubTitleLogin content="Already have an account?" sign="In" />
      <SubmitForm onSubmit={onSubmit}>
        <Input
          legend="First Name"
          content="First Name"
          type="text"
          name="firstName"
          valid={valid}
        />
        <Input
          content="Last Name"
          type="text"
          name="lastName"
          legend="Last Name"
          valid={valid}
        />
        <Input
          legend="Email"
          content="Email"
          type="email"
          name="email"
          valid={valid}
        />
        <PasswordInput
          legend="Password"
          content="Password"
          name="password"
          w2eecdfdedcbdc
          valid={valid}
        />
        <PasswordInput
          legend="Confirm Password"
          content="Confirm Password"
          name="confirm-password"
          valid={valid}
        />
        <SignButton content="Sign Up" type="submit" />
      </SubmitForm>
      <FooterGoogle />
    </div>
  );
};

export default SignUp;
