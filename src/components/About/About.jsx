import React from 'react';
import { motion } from 'framer-motion'
import { WaveDrawing, watertexture } from '../../images/ImgAssets';
import { ScreenFitText } from './ScreenFitText';
import TimelineCarousel from './TimelineCarousel';
import { PortraitMainOne } from '../../images/ImgAssets';
import Raindrop from '../../images/svgs/Raindrop';
import { useInView } from 'react-intersection-observer';
const About = () => {
    // Use useInView hook to monitor when the section comes into view
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the item is in view
  });

  // Define your animation variants
  const pageVariants = {
    initial: {
      rotateY: 180,
      opacity: 0,
    },
    in: {
      rotateY: 0,
      opacity: 1,
    },
    out: {
      rotateY: 180,
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5,
  };
  const raindropVariants = {
    initial: { y: 0 }, // Starting at its original position
    animate: { 
      y: 300, // Adjust this value based on how far you want it to fall
      transition: { 
        repeat: Infinity, // Loop the animation
        repeatType: "loop",
        duration: 16, // Duration of one descent
        ease: "linear"
      }
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        backgroundImage: `url${watertexture}`,
        // Or, if you prefer the other texture:
        // backgroundImage: 'url("/path-to-your-image/noise.png")',
      }}
      
      className='bg-gradient-to-b from-cyan-300 via-cyan-700 to-white overflow-hidden h-screen text-center pt-8 text-8xl scroll-smooth'
    >
      <div className="w-full z-20">
        {/* <NavbarTwo /> */}
      </div>
      {/* <div className='font-customthree text-4xl text-green-300'>
        About
      </div> */}
      {/* <img src={WaveDrawing}/> */}
       <div 
      className="font-customtwo fixed top-40 left-0 -translate-y-1/2 transform rotate-90 text-2xl text-white"></div>
      {/* <div className="font-custom fixed top-80 right-80 -translate-y-1/2 transform  text-6xl text-white">Content Creator</div> */}
      <div className='mx-auto text-green-300 text-xl font-custom fixed top-0 right-32 pt-12'></div> 
      <motion.div 
      
      className='pr-60 rounded-lg sparkle'>
        <img src={PortraitMainOne} alt="Corey Marsh" className='mx-auto  rounded-md  w-[600px] h-[475px] object-cover' />
      </motion.div>
      <div className='flex'>
      <motion.div className='h-12 w-12 pt-12  pl-[100px]'
            variants={raindropVariants} initial="initial" animate="animate">
                
            </motion.div>
            <motion.div className='h-2 w-2 pl-[200px]'
            variants={raindropVariants} initial="initial" animate="animate">
              
            </motion.div>
            
            <motion.div className='h-24 w-24 pl-[130px]'
            variants={raindropVariants} initial="initial" animate="animate">
               
            </motion.div>

            <motion.div className='h-24 w-24 pt-32 pl-[200px]'
            variants={raindropVariants} initial="initial" animate="animate">
                
            </motion.div>

            <motion.div className='h-24 w-24 pl-[700px]'
            variants={raindropVariants} initial="initial" animate="animate">
                
            </motion.div>
            
            <motion.div className='h-24 w-24  pl-[100px]' 
            variants={raindropVariants} initial="initial" animate="animate">
               
            </motion.div>

            <motion.div className='h-24 w-2 pt-12 pl-[100px]'
            variants={raindropVariants} initial="initial" animate="animate">
               
            </motion.div>
            {/* <motion.div className='h-24 w-24'
            variants={raindropVariants} initial="initial" animate="animate">
                <Raindrop />
            </motion.div> */}
    </div>
    
            
      <div className='pt-96'>
         <ScreenFitText/>
         
      </div>
     
      <div className="w-[5000px]">
        
        
      </div>
      {/* <Footer/> */}
      <div/>
    
      </motion.div>
  )
};
export default About;