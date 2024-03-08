import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AfterEffects, Blender, FinalCutPro, MernStack, ThreeJs, WaterRoad, WaveEyes, watertexture } from '../../images/ImgAssets';
import LogoGridTwo from '../LogoGridTwo';
import "../../index.css"


const TimelineCarouselTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const slideTo = (index) => {
    const safeIndex = Math.max(0, Math.min(index, 4)); // Assuming 5 slides, index range is 0-4
    setCurrentIndex(safeIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!carouselRef.current) return;
      const delta = Math.sign(event.deltaY);
      slideTo(currentIndex + delta);
    };

    const element = carouselRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentIndex]);

  // Calculate the progress bar width
  const progressBarWidth = ((currentIndex + 1) / 5) * 100; // Assuming 5 slides

  const waveAnimation = {
    hidden: { opacity: 0, scale: 0.30,  },
    visible: { opacity: 1, scale: 1, rotate:180, transition: { duration: 1.5, ease: "easeInOut" } }
  };
  return (
    <div ref={carouselRef} className="relative bg-black h-screen overflow-hidden">
      
      {/* slides here */}
      <motion.div
        className="flex cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: -(viewportWidth * (4)) }} // Adjust based on the number of slides -1
        dragElastic={0.05}
        animate={{ x: -currentIndex * viewportWidth }}
        
      >
        {/* Example Slide 1 */}
        <motion.div
         className="min-w-full h-screen flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${WaterRoad})` }}
          variants={waveAnimation}
          initial="hidden"
          animate="visible"
          exit="visible">
            
          <h2 className="text-6xl text-white font-bold">
          <motion.div
            className="min-w-[800px] h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"
            variants={waveAnimation}
            initial="hidden"
            animate="visible"
            exit="visible"
            > 

          <h2 className="text-9xl pt-8  text-green-300 vision tracking-widest font-customtwo sparkle ">THE BEGINNINGS</h2>
          
          <div className='pt-12 mx-60 pl-12 font-customsix
           text-7xl text-white tracking-wide'>
             Let us take a little journey through an underwater world, 
             <span className= 'italic text-green-300 pl-2'>where experience fosters creativity.</span>

             <p className='pt-12  '> At the heart of it, I'm a
              <span className='text-green-300 pl-6 italic text-7xl '>storyteller</span> who uses 
              <span className='text-green-300 pl-6 italic text-7xl'>technology</span> to create deeply passionate 
            immersive web experiences that go beyond the conventional.</p>
           
          </div>
          </motion.div>
            </h2>
        </motion.div>
        
        {/* Example Slide 2 */}
        <motion.div
         className="min-w-full h-screen flex justify-center items-center bg-cover bg-center "
          style={{ backgroundImage: `url(${WaterRoad})` }}
          
          >
          <h2 className="text-6xl text-white ">
            <div className='w-full bg-black bg-opacity-40 h-screen'>
            
            <h2 className="text-9xl font-bold font-customtwo tracking-widest pt-8 text-green-300 vision">VISION</h2>
            <div className='pl-96 font-bold '></div>
              <div className='pt-12 text-7xl tracking-wide font-bold  pl-4 text-white font-customsix  pb-4 mx-60'>
           In water, lies <span className='text-green-300 pr-6 italic'>peace,</span> 
           <span className='text-green-300 italic pr-6'>reflection,</span> 
            and a <span className='text-green-300 italic pr-6'>relentlessness</span>
            like no other. Like water I bring tenocity, a unique 
            splash  
          in creativity, and a consistent effort to iteration. 
          <p className='pt-8'>
          I envision offering my unique blend of dedication,
           creativity, experience and emotion to our next project together.
              </p>
              </div>
                  
          </div>
          </h2>
        </motion.div>

        {/* Example Slide 3 */}
        <motion.div className="min-w-full h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${WaterRoad})` }}>
          <h2 className="text-6xl text-white font-bold">
            
          </h2>
          <div className="w-full h-screen pt-12 m-2 rounded-lg  bg-black bg-opacity-40 text-white">
          <h2 className="text-9xl text-green-300 pb-12 vision font-bold pl-2 tracking-widest font-customtwo">ARSENAL</h2>
          <p className='text-8xl italic text-white font-customsix pt-4 font-bold'>Some of my tools include </p>
          
               <div className='flex mx-0 items-center pl-96'>
                <img src={MernStack} className=''/>
                </div>
                <div className='flex space-x-0 pl-96'> 
                    <img src={Blender} className='h-48 w-60'/>
                    <div>
                      <img src={AfterEffects} className='h-48 w-90'/>
                      </div>
                    <div className='pl-8 pt-6'>
                      <img src={FinalCutPro} className='h-32 w-32'/>
                    </div>
                    <div className='pl-32 pt-6'>
                      <img src={ThreeJs} className='h-32 w-32'/>
                    </div>
                  </div>
                
               <LogoGridTwo/> 
               
               </div>
        </motion.div>

        {/* Example Slide 4 */}
        <motion.div className="min-w-full h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${WaterRoad})` }}>
          <div className="text-7xl text-white font-bold">
        <motion.div className="min-w-[2000px] h-screen m-2 rounded-lg  bg-black bg-opacity-40 text-cyan-800 ">
          <h2 className="text-9xl w-full font-bold pt-8 pb-12 vision tracking-widest font-customtwo pl-4 text-green-300">HARMONY</h2>
          <p className='text-7xl font-customsix tracking-wid pl-8 mx-60 text-white '>
                <p className="pb-8">
                  It is not just about the tech; it's how we use them to connect, create great experiences, and to tell a story that matters.
                 
                  </p>My personal journey is shaped by <span className='text-green-300  italic ' >melodies</span> and <span className='text-green-300  italic'> harmonies.</span> My background as a musician taught me the art of storytelling. 
                  
                    The Waves helped me foster the harmony required to create and produce unique content. 
                    </p>
          {/* Custom HTML and styling */}
        </motion.div>
        </div>
        </motion.div>

        {/* Example Slide 5 */}
        <motion.div className="min-w-[2000px] h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${WaterRoad})` }}>
        <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg font-bold bg-black bg-opacity-40 text-white">
          <h2 className="text-9xl pb-12 pt-4 font-bold vision font-customtwo tracking-widest text-green-300">ROOTS</h2>
          <p className='text-7xl font-customsix tracking-wide pl-8 text-white mx-48 '>
          
One of my passions is soccer.
          <p>
            Through soccer, I learned the value of <span className='text-green-300 italic tracking-widest' >teamwork,</span> 
            <span className='text-green-300 italic tracking-widest ' > discipline, </span> 
            and the <span className='text-green-300 pl-1 italic tracking-widest' >relentless</span> pursuit of excellence.
          </p>
          <p className='pt-12'>These lessons have been invaluable, empowering me to face
          challenges with team spirit and a drive to always reach for new heights.</p>
          
            <div className='pt-8 rounded-lg'>
              </div>
              </p>
        </motion.div>
      </motion.div>
      </motion.div>
      
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gray-300">
        <div className="h-4 bg-cyan-500" style={{ width: `${progressBarWidth}%` }}></div>
      </div>
    </div>
  );
};

export default TimelineCarouselTwo;
