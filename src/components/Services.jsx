import React from 'react'
import { BentoGrid } from './utils/BentoGrid'
import Navbar from './Navbar/Navbar'
import PricingTable from './PricingTable'
import pattern from "../images/svgs/pattern.svg";
import { BlackSea, CausLightning, watertexture } from '../images/ImgAssets';
const Services = () => {
  return (
    <div className='bg-gradient-to-t h-[2000px] to-slate-800 via-teal-900 from-cyan-950'>
      <div className="relative w-full h-[2000px] text-white">
        <img 
          src={BlackSea} 
          alt="Pattern background" 
          className="fixed inset-0 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24 h-[2000px] w-auto object-cover mix-blend-overlay opacity-80 shadow-sparkle" 
        />

      <div className='bg-gradient-to-b border-x border-teal-500 shadow-sparkle from-cyan-800 via-teal-700 to-slate-800 h-[2000px] mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 font-customnine tracking-wide text-center pt-20
    text-white text-4xl' >
      <div>
      <img 
          src={pattern} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-screen object-cover mix-blend-overlay" 
          style={{ opacity: '0.05' }} 
        />

        <h1 className='text-5xl tracking-widest text-white italic font-bold '>
            Select the right plan for you..
        </h1>
        <Navbar/>
        <div>
          <div className="">

          </div>
        </div>
        <div className='pt-16 '>
        <PricingTable/>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services
