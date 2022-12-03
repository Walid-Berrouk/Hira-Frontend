import React from 'react'
// Assets
import PlayIcon from "../assets/icons/play-icon.png"
import LogoMonoMotion from '../components/general/LogoMonoMotion'

// Styles
import "../styles/SignIn.css"

function SignUpPage() {
  return (
    <div className='signIn-body font-montserrat'>
      <div className='h-screen text-white flex flex-col items-center justify-start pt-12'>
          <LogoMonoMotion width={"200"}/>
          <h1 className='md:text-5xl text-3xl text-center capitalize mt-6'>Welcome to <span className='font-bold'>Hira Assistant</span></h1>
          <h3 className='md:text-2xl text-lg text-center capitalize mt-2'>Your personal hiring assistant </h3>
          <h3 className='md:text-3xl text-xl text-center capitalize mt-10'>Before we start, Please introduce your <span className='font-bold'>Credentials</span></h3>
          <form action="" className='flex flex-col gap-y-6 mt-10 w-1/3'>
            <input type="text" name="username" id="username" className='special-input px-8 py-5 w-full' placeholder='Username'/>
            <input type="password" name="username" id="username" className='special-input px-8 py-5' placeholder='Password'/>
            <input type="submit" className='bg-tangBlue py-4 px-12 rounded-full md:text-2xl text-lg mt-6 landing-shadow hover:bg-tangBlueDark' value="Submit" />
          </form>
      </div>
    </div>
  )
}

export default SignUpPage