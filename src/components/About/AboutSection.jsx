import React from 'react';
import { motion } from 'framer-motion';
import { WaveDrawing, watertexture, PortraitMainOne } from '../../images/ImgAssets';
// Import ScreenFitText if it's used for rendering text fitting the screen width
import { ScreenFitText } from './ScreenFitText';
import TimelineCarouselTwo from './TimelineCarouselTwo';
import ScrollArrow from "../ScrollArrow"
import Raindrop from '../../images/svgs/Raindrop';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Navbar/Navbar';

const About = () => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.5,
  // });

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
    initial: { y: 0 },
    animate: {
      y: 300,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 16,
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
    //   style={{
    //     backgroundImage: `url(${watertexture})`,
    //   }}
      className='bg-gradient-to-b from-cyan-700 via-cyan-300 to-white  h-screen text-center pt-8 text-8xl scroll-smooth'
    >
        <div className="w-full z-20">
    <Navbar />
  </div>
      {/* Existing content remains unchanged */}
      <div className='fixed top-10 right-[680px] font-customtwo text-9xl vision tracking-widest text-green-300 font-bold'>
        ABOUT
      </div>
      <motion.div 
      
      className='pr-48 rounded-lg'>
        <img src={PortraitMainOne} alt="Corey Marsh" className='mx-auto rounded-md  w-[600px] h-[475px] object-cover' />
      </motion.div>
      <div className='pt-96 w-full h-[300px]'>
        <ScreenFitText />
      </div>
      
      <div className="w-full">
        <TimelineCarouselTwo /> {/* First horizontal scrolling component */}
      </div>
      <ScrollArrow/>

      <div className="w-full">
       
      </div>

      {/* Continue with the rest of your AboutSection content... */}
    </motion.div>
  );
};

export default About;
