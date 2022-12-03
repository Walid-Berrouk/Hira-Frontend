import React from 'react'
import About from '../components/welcome/About'
import Features from '../components/welcome/Features'
import Hero from '../components/welcome/Hero'
import Join from '../components/welcome/Join'
import LatestUpdates from '../components/welcome/LatestUpdates'
import Partners from '../components/welcome/Partners'
import "../styles/Welcome.css"

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
        <Join />
      </div>
    </div>
  )
}
