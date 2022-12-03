import React from 'react'

// Assets
import PlayIcon from "../../assets/icons/play-icon.png"

export default function Hero() {
  return (
    <div id="home" className='h-screen text-white flex flex-col items-center justify-center'>
        <h1 className='md:text-5xl text-3xl text-center capitalize mt-20'>Welcome to <span className='font-bold'>Hira Assistant</span></h1>
        <h3 className='md:text-3xl text-xl text-center capitalize mt-6'>Your personal hiring assistant </h3>
        <button className='bg-tangBlue pr-7 pl-9 py-8 rounded-full mt-20 landing-shadow hover:bg-tangBlueDark'><img src={PlayIcon} alt="Play Icon" className='md:h-8 h-4' /></button>
        <button className='bg-tangBlue py-4 px-12 rounded-full md:text-2xl text-lg mt-12 landing-shadow hover:bg-tangBlueDark'>Start Now !</button>
    </div>
  )
}
