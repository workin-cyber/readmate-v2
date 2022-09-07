import styles from "./style.module.css";
import { useContext, useEffect, useState } from "react";

import Input from "../../../components/Common/Input/Input";


// import dataContext from "../../../context/dataContext";
import { validate } from "../../Signup/Signup/validate";
import SignButton from "../../../components/Common/SignButton/SignButton";
import mainContext from "../../../context/mainContext";

import { useNavigate } from "react-router-dom";

export default function ChangePassword() {

  const navigate = useNavigate();
  const [valid, setValid] = useState([]);
  const { header: { setPageName } } = useContext(mainContext)

  useEffect(() => {
    setPageName("Change Password");
    return () => setPageName("")
  }, [])

  // const { setUserDetails } = useContext(dataContext)

  const getDatafromForm = (formData) => ({
    oldPassword: formData.get("oldPassword"),
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  })

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = getDatafromForm(new FormData(e.currentTarget))

    const checkResult = validate(body)

    setValid(checkResult)

    if (checkResult.length) return;

    try {
      // const { data } = await axios.post( "http://localhost:3001/api/users/register", formData);
      // navigate("../classroom", { replace: true, state: body });
      // setUserDetails(fakeData.userDetails)
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles["ChangePassword"]} onSubmit={onSubmit}>
      <Input
        legend="Old Password"
        content="Enter old password"
        type="password"
        name="oldPassword"
        valid={!valid.includes("oldPassword")}
      />
      <Input
        legend="New Password"
        content="Enter new password"
        type="password"
        name="newPassword"
        valid={!valid.includes("newPassword")}
      />
      <Input
        legend="Confirm Password"
        content="Enter confirm password"
        type="password"
        name="confirmPassword"
        valid={!valid.includes("confirmPassword")}
      />


      <div className={styles.btnHolder}>
        <SignButton content="submit" type="submit" />
      </div>
    </form>
  );
}

