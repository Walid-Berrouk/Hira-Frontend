import React from 'react'
import About from '../components/landing/About'
import Hero from '../components/landing/Hero'
import "../styles/Landing.css"

export default function WelcomePage() {
  return (
    <div className='landing-body font-montserrat'>
        <Hero />
        <div className='h-screen'></div>
        <About />
    </div>
  )
}
