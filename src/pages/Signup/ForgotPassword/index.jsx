import React, { useState } from 'react'

import FormTitle from '../../../components/Common/FormTitle'
import Input from '../../../components/Common/Input/Input'
import SignButton from '../../../components/Common/SignButton/SignButton'
import SubTitleLogin from '../../../components/Common/SubTitleLogin'

import { validate } from '../Signup/validate'

import styles from "./style.module.css"

export default function ForgotPassword() {
   const [valid, setValid] = useState([]);


   const getDatafromForm = (formData) => ({ email: formData.get("email") })

   const handleSubmit = async (e) => {
      e.preventDefault();

      const body = getDatafromForm(new FormData(e.currentTarget))

      const checkResult = validate(body)

      setValid(checkResult)

      if (checkResult.length) return;

      try {
         // const { data } = await axios.post( "http://localhost:3001/api/users/register", formData);
         console.log(body);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className={styles.forgot}>
         <FormTitle content="Forgot your password?" />
         <SubTitleLogin content="Enter your email id and we will share a link to create a new password" />
         <form onSubmit={handleSubmit}>
            <Input
               legend="Email"
               content="Email"
               type="email"
               name="email"
               valid={!valid.includes("email")}
            />

            <span className={styles.btnHolder}>
               <SignButton content="sign in" type="submit" />
            </span>
         </form>
      </div>
   )
}
