import React from 'react'
// Assets
import PlayIcon from "../assets/icons/play-icon.png"
import LogoMonoMotion from '../components/general/LogoMonoMotion'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

// Styles
import "../styles/SignIn.css"

function SignUpPage() {

    const navigate = useNavigate()

    const handleSignUp = (event) => {
        // Some API fetching

        event.preventDefault()
        navigate("/signUpAssistance")
    }


  return (
    <div className='signIn-body font-montserrat'>
      <div className='h-screen text-white flex flex-col items-center justify-start pt-12'>
          <LogoMonoMotion width={"200"}/>
          <h1 className='md:text-5xl text-3xl text-center capitalize mt-6'>Welcome to <span className='font-bold'>Hira Assistant</span></h1>
          <h3 className='md:text-2xl text-lg text-center capitalize mt-2'>Your personal hiring assistant </h3>
          <h3 className='md:text-3xl text-xl text-center capitalize mt-10'>Before we start, Please introduce your <span className='font-bold'>Credentials</span></h3>
          <form action="" className='flex flex-col gap-y-4 mt-12 w-1/3'>
            <div className='flex flex-col gap-y-6'>
              <input type="text" name="username" id="username" className='special-input px-8 py-5 w-full' placeholder='Username'/>
              <input type="password" name="username" id="username" className='special-input px-8 py-5' placeholder='Password'/>
            </div>
            <Link to="/signInPortal" className='-mt-8 hover:underline'>Have Already an Account ? Sign In Now</Link>
            <input type="button" className='bg-tangBlue py-4 px-12 rounded-full md:text-2xl text-lg landing-shadow hover:bg-tangBlueDark hover:cursor-pointer' value="Submit" onClick={handleSignUp} />
          </form>
      </div>
    </div>
  )
}

export default SignUpPage