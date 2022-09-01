
import FooterGoogle from '../../../components/Common/FooterGoogle'
import FormTitle from '../../../components/Common/FormTitle'
import Input from '../../../components/Common/Input/Input'
import PasswordInput from '../../../components/Common/PasswordInput/PasswordInput'
import SignButton from '../../../components/Common/SignButton/SignButton'
import SubTitleLogin from '../../../components/Common/SubTitleLogin'

import styles from './style.module.css'

export default function SignIn() {
  const handleSubmit = () => {

  }

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
          valid={true}
        />
        <PasswordInput
          legend="Password"
          content="Password"
          name="password"
          valid={true}
        />
        <SignButton content="sign in" type="submit" />

      </form>
      <FooterGoogle />
    </div>
  )
}


