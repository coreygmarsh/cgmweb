import React from 'react'
import { BentoGrid } from './utils/BentoGrid'
import Navbar from './Navbar/Navbar'
import PricingTable from './PricingTable'
import pattern from "../images/svgs/pattern.svg";
const Services = () => {
  return (
    <div className='bg-gradient-to-t h-[1000px] to-slate-800 via-teal-700 from-cyan-800'>
      <div className='bg-gradient-to-b border-x border-teal-500 from-cyan-800 via-teal-700 to-slate-800 h-[1000px] mx-32 font-customnine tracking-wide text-center pt-32
    text-white text-4xl' >
      <div>
      <img 
          src={pattern} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-[1000px] object-cover mix-blend-overlay" 
          style={{ opacity: '0.05' }} 
        />

        <h1 className='text-5xl tracking-widest text-white italic font-bold '>
            Select the right plan for you..
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
        {/* <BentoGrid/> */}
        <div className='pt-16 '>
        <PricingTable/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services
