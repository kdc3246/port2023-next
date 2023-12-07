import { SignUp } from '@clerk/nextjs'
import styles from './SignUpPage.module.css'

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  )
}

export default SignUpPage