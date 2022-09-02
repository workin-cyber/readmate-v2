
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FooterGoogle from '../../../components/Common/FooterGoogle'
import FormTitle from '../../../components/Common/FormTitle'
import Input from '../../../components/Common/Input/Input'
import PasswordInput from '../../../components/Common/PasswordInput/PasswordInput'
import SignButton from '../../../components/Common/SignButton/SignButton'
import SubTitleLogin from '../../../components/Common/SubTitleLogin'
import dataContext from '../../../context/dataContext'

import { fakeData } from "../../../context/fakeData";
import { validate } from '../Signup/validate'

import styles from './style.module.css'

export default function SignIn() {
  const [valid, setValid] = useState([]);
  const navigate = useNavigate();

  const { setUserDetails } = useContext(dataContext)

  const getDatafromForm = (formData) => ({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = getDatafromForm(new FormData(e.currentTarget))

    const checkResult = validate(body)

    setValid(checkResult)

    if (checkResult.length) return;

    try {
      // const { data } = await axios.post( "http://localhost:3001/api/users/register", formData);
      navigate("/", { replace: true, state: body });
      setUserDetails(fakeData.userDetails)
      console.log(body);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.signin}>
      <FormTitle content="Welcome back!" />
      <SubTitleLogin content="Don’t have an account?" link="/" sign="up" />

      <form onSubmit={handleSubmit}>
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
        <p style={{ textAlign: "right" }} className={styles.forgot}><Link to="/forgot-password"> forgot password?</Link></p>
        <div className={styles.btnHolder}>
          <SignButton content="sign in" type="submit" />
        </div>

      </form>
      <FooterGoogle />
    </div>
  )
}


