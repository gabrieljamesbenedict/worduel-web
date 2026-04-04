import LoginForm from "../components/LoginForm"
import SubtitleHeader from "../components/SubtitleHeader"
import TitleLogo from "../components/TitleLogo"

const LoginPage = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className="flex flex-col gap-4 text-center">

            <TitleLogo/>

            <SubtitleHeader>Create A New Account</SubtitleHeader>

            {/* <LoginForm/> */}

        </div>
    </div>
  )
}

export default LoginPage