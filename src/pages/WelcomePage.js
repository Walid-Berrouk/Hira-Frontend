import React from 'react'
import About from '../components/landing/About'
import Features from '../components/landing/Features'
import Hero from '../components/landing/Hero'
import LatestUpdates from '../components/landing/LatestUpdates'
import Partners from '../components/landing/Partners'
import "../styles/Landing.css"

export default function WelcomePage() {
  return (
    <div>
      <div className='landing-body font-montserrat'>
          <Hero />
          <div className='h-40'></div>
          <About />
      </div>
      <div className='bg-blackRussian'>
        <LatestUpdates />
        <Partners />
        <Features />
      </div>
    </div>
  )
}
