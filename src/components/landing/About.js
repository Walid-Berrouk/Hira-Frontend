import React from 'react'

// Assets
import PlayIcon from "../../assets/icons/play-icon.png"
import Logo from '../../assets/imgs/logo.png'
import LogoBiMotion from '../general/LogoBiMotion'

export default function About() {
  return (
    <div id="about" className='h-screen text-white flex flex-col items-center justify-center mt-32'>
        <h1 className='md:text-5xl text-3xl text-center capitalize mt-20 mx-24'><span className='font-bold'>Hira,</span> A sure Way to Get Hired</h1>
        <LogoBiMotion />
        <p className='md:mx-24 mx-16 md:text-xl text-md text-center mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus tempora repellat quasi eaque eligendi exercitationem itaque numquam libero sapiente, iusto, velit atque autem nihil voluptatum tempore, sint maxime eveniet adipisci. Fugit obcaecati incidunt voluptatem voluptates quos molestiae doloribus vitae laborum, recusandae error. Cumque praesentium ipsam facere dolores quos. Officia.</p>
    </div>
  )
}
