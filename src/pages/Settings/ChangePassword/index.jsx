import styles from "./style.module.css";
import { useContext, useEffect, useState } from "react";

import Input from "../../../components/Common/Input/Input";


// import dataContext from "../../../context/dataContext";
import { validate } from "../../Signup/Signup/validate";
import SignButton from "../../../components/Common/SignButton/SignButton";
import mainContext from "../../../context/mainContext";

import { Link, useNavigate } from "react-router-dom";

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
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    ClassroomID: formData.get("ClassroomID"),
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
      console.log(body);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => navigate("/")


  return (
    <form className={styles["ChangePassword"]} onSubmit={onSubmit}>
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
      <Input
        legend="Classroom ID"
        content="Classroom ID"
        type="text"
        name="ClassroomID"
        valid={!valid.includes("email")}
      />

      <Link to="change-password">Change Password</Link>

      <div className={styles.btnHolder}>
        <SignButton content="submit" type="submit" />
        <SignButton onClick={handleCancel} content="cancel" style={{ background: "#fff", color: "#000" }} type="button" />
      </div>
    </form>
  );
}

