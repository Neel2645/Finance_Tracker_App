import Header from "../components/Header"
import SignUpSignInComponent from "../components/SignUpSignIn"

const SignUp = () => {
  return (
    <>
      <Header/>
      <div className="wrapper">
        <SignUpSignInComponent/>
      </div>
    </>
  )
}

export default SignUp