import React from 'react'
import { BentoGrid } from './utils/BentoGrid'
import Navbar from './Navbar/Navbar'

const Services = () => {
  return (
    <div>
      <div className='bg-gradient-to-b from-cyan-800 via-teal-700 to-slate-800 h-screen font-customeight tracking-wide text-center pt-12
    text-white text-4xl' >
        <h1 className='text-9xl tracking-widest text-green-300 vision'>
            SERVICES
        </h1>
        <Navbar/>
        {/* <ul>
            <p>Photo</p>
            <p>Video</p>
            <p>Editing</p>
            <p>Logos</p>
            <p>Web Development</p>
            <p></p>
        </ul> */}
        <BentoGrid/>
      </div>
    </div>
  )
}

export default Services
