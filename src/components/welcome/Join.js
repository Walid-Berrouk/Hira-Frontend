import React from 'react'

export default function Join() {
  return (
    <div className='bg-darkBlue max-w-7xl py-12 px-16 rounded-lg text-white flex items-center justify-between mx-auto mb-12'>
        <div>
            <h1 className='md:text-4xl text-2xl font-bold'>Join For Free!</h1>
            <p className='md:text-xl text-lg mt-4'>You want it all? Purchase Premium and get full Hira Assistance</p>
        </div>
        <div>
            <button className='bg-tangBlue py-4 px-12 rounded-full md:text-2xl text-lg landing-shadow hover:bg-tangBlueDark'>Start Now !</button>
        </div>
    </div>
  )
}
