import React from "react";
import { Avatar, Waves, watertexture  } from "../../images/ImgAssets";
import { TracingBeam } from "../../ui/TracingBeam"
import TimelineCarousel from "../About/TimelineCarousel";
import { StickyScroll } from "./StickyScrollReveal";
import { PortraitMainOne } from "../../images/ImgAssets";

export const SectionDeuce = () => {
  return ( 
      <div
      className="h:[30vh] xl:h-[100vh]  py-40 overflow-hidden bg-center bg-cover w-full relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      style={{ backgroundImage: `url(${watertexture})` }}
      >
        <div 
        className=' rounded-lg z-50 justify-center flex '>
        <img src={Avatar} alt="Corey Marsh" className='shadow-sparkle rounded-md  xl:w-[700px] md:w-[400px] sm:w-[275px] w-[300px] xl:h-[475px] lg:[300px] md:[300px] object-cover' />
      </div>
      <div className="flex flex-col items-center z-50">
      <p className="text-[2rem] xl:text-[6rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem] md: text-white font-customnine tracking-widest  uppercase z-50 text-center ">Corey G. Marsh</p>
      {/* <p className="text-4xl z-50 text-white font-customnine text-center pt-4 mb-24">Graphic Designer </p>        */}
        </div>

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 via-teal-700 to-cyan-800 opacity-95"/>
    {/* <div className="fixed top-10 right-10 font-customseven text-2xl italic vision text-white">Corey G. Marsh</div> */}
    </div>
    
   
    
  );
};

