// BrandPhoto.js
import React from 'react';
import { Underwater, watertexture } from '../../images/ImgAssets';
import About from "../About/About"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionDeuce } from './SectionDuece';

const SectionTwo = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }, [controls, inView]);
      const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.75 },
      };    
  return (
    <div className="flex items-center justify-center mx-24 shadow-sparkle h-screen bg-gradient-to-l from-cyan-900 to-slate-800" 
    style={{
        backgroundImage: `url${watertexture}`,
        // Or, if you prefer the other texture:
        // backgroundImage: 'url("/path-to-your-image/noise.png")',
      }}
      >
        
      {/* <div className="text-center">
        <img src={Underwater} alt="Brand" className="mx-auto rounded-full w-48 h-48 object-cover" />
        <p className="mt-5 text-xl">Your message or testimonial here.</p>
      </div> */}
      {/* <About/> */}
      <SectionDeuce/>
    </div>
  );
};

export default SectionTwo;
