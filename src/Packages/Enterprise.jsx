import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PackagesOverview from './PackagesOverview';
import pattern from "../images/svgs/pattern.svg";
import CreativeSolutionsForm from './CreativeForm';

const  Enterprise = () => {
  return (
    <div className='bg-gradient-to-t  to-slate-800 via-teal-700 from-cyan-800'>
      <div className='bg-gradient-to-b border-x border-teal-500 from-cyan-800 via-teal-700 to-slate-800 h-[5000px] mx-32 font-customnine tracking-wide text-center pt-32
    text-white text-4xl' >
      <div>
      <img 
          src={pattern} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-[5000px] bg-repeat object-cover mix-blend-overlay" 
          style={{ opacity: '0.05' }} 
        />

       
        <Navbar/>
 {/* Pass the selected package name to the PackagesOverview */}
 <div className='pt-2 flex-col '>
            <PackagesOverview selectedPackage="Enterprise Package"/>
          </div>
          <div className='border-b-2 border-teal-500'></div>

          <div className='pt-16'>
            <CreativeSolutionsForm/>
          </div>
          <div className='border-b-2 pt-4 border-teal-500'></div>
        </div>
      </div>
    </div>
  );
}

export default Enterprise
