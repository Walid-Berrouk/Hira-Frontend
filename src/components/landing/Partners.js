import React from 'react'

// Assets
import Lenovo from '../../assets/imgs/lenovo.png'
import Hilti from '../../assets/imgs/hilti.png'
import Google from '../../assets/imgs/google.png'

export default function Partners() {
  return (
    <div className='h-screen text-white flex flex-col items-center justify-center'>
        <h1 className='md:text-5xl text-3xl text-center capitalize mx-24 font-bold'>They Trusted Us Along the way</h1>
        <div className='flex gap-x-28 justify-center mt-24 mx-24'>
            <img src={Lenovo} alt="Lenovo" className='h-12'/>
            <img src={Hilti} alt="Hilti" className='h-16'/>
            <img src={Google} alt="Google" className='h-16'/>
        </div>
    </div>
  )
}