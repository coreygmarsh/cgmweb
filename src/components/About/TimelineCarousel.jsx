import React, { useState,useRef,useEffect } from 'react';
import { motion } from 'framer-motion'
import { About, Botanical, CGMWEB4, Danita, LetMeLoose, PortraitOne, PortraitThree, Sub3, Tension, Underwater, UnderwaterRoad } from '../../images/ImgAssets';

const TimelineCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); // Reference to the carousel container
  // Define cardWidth and totalCards here
  const cardWidth = 500; // This should match the width of your cards
  const totalCards = 5; // Update this to match the number of cards you have

  // Now we define containerWidth based on cardWidth and totalCards
  const containerWidth = cardWidth * totalCards;

  const slideTo = (index) => {
    const safeIndex = Math.max(0, Math.min(index, totalCards - 1));
    setCurrentIndex(safeIndex);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (!carouselRef.current) return;
      // Normalize wheel to +1 or -1
      const delta = Math.sign(event.deltaY);
      // Scroll left/right
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
  }, [currentIndex, totalCards]); // Re-bind the effect if currentIndex or totalCards changes

 
  return (
    <div ref={carouselRef} className=" h-[900px] bg-cover relative bg-gradient-to-b to-white from-cyan-400 "
    //     style={{ 
    //     backgroundImage: `url(${Eser})`, // Set the background image
    //     backgroundSize: 'cover', // Cover the entire div
    //     backgroundPosition: 'center' // Center the background image
    //   }}
      >
      <motion.div
        className="flex cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: -((totalCards - 1) * cardWidth) }}
        dragElastic={0.05} // Adds a bit of elasticity to the dragging
        initial={{ x: 0 }}
        animate={{ x: -currentIndex * cardWidth }} // This will animate the slide movement
        >
        
        {/* Manually create each card here */}
        <motion.div className="min-w-[500px] h-screen p-4 m-2 rounded-xl bg-transparent text-black">
            <div className='rounded-full'>
                <img className='rounded-md' src={Botanical}/>
                </div>
          <div className="text-4xl "> 
          
            </div>
            
            <div className='font-custom'>
           </div>
 <div className="">
  <div className='pt-8 rounded-lg'>
        {/* Replacing the Race image with a video */}
        <motion.video 
          className='rounded-lg mx-auto' 
        //   src={Sub3} 
          autoPlay 
          loop 
          muted
        />
      </div>
</div>
          {/* Add more HTML content with custom styling as needed */}
        </motion.div>
        
        <motion.div className="min-w-[500px] h-[700px] p-4 m-2 rounded-lg bg-transparent text-black">
        <div className="">
  <div className='rounded-lg'>
        {/* Replacing the Race image with a video */}
        <motion.video 
          className='rounded-lg mx-auto' 
        //   src={AboutVid} 
          autoPlay 
          loop 
          muted
        />
      </div>
</div>
          <h2 className="text-4xl font-bold font-custom text-cyan-300">
            {/* Vision */}
            </h2>
          <div className=''>
            <img className="rounded-md h-[550px] w-[400px]" src={Danita}/>
          </div>
             
          {/* Custom HTML and styling */}
        </motion.div>
        
        <motion.div className="min-w-[500px] h-[700px] p-4 m-2 rounded-lg bg-transparent text-white">
          {/* Custom HTML and styling */} 
          <div className="">
  <div className='pt-8 rounded-lg'>
        
        <motion.video 
          className='rounded-lg mx-auto' 
          src={About} 
          autoPlay 
          loop 
          muted
        />
      </div> 
</div>
        </motion.div>
        
        <motion.div className="min-w-[500px] h-[700px] m-2 rounded-lg bg-transparent text-cyan-800 ">
          <h2 className="text-4xl font-bold pt-32 pb-8 font-custom pl-4 text-cyan-300">
            {/* Harmony */}
            </h2>
                    <div className='pt-8 rounded-lg'>
                        <motion.video 
                        className='rounded-lg mx-auto' 
                        src={CGMWEB4} 
                        autoPlay 
                        loop 
                        muted
                        />
                    </div> 
          {/* Custom HTML and styling */}
        </motion.div>
        
        <motion.div className="min-w-[500px] h-[700px] p-4 m-2 rounded-lg bg-transparent text-white">
          
            
            <div className='pt-8 rounded-lg'>
        
        <motion.video 
          className='rounded-lg mx-auto' 
        //   src={WaterBall} 
          autoPlay 
          loop 
          muted
        />
      </div>
             
               
             {/* <div className='pt-8 pl-8 rounded-lg'>
                <motion.video 
                className='rounded-lg ' 
                src={CGMWEB4} 
                autoPlay 
                loop 
                muted
                />
      </div>  */}
       <div className=''>
            <img className="rounded-md"src={PortraitThree}/>
          </div>
             
        </motion.div>

         <motion.div className="min-w-[500px] h-[700px] p-4 m-2 pt-24 rounded-lg bg-transparent text-white">
          
        
                {/* <div className='pt-8 rounded-lg'>
        
        <motion.video 
          className='rounded-lg mx-auto' 
          src={CGMWEB4} 
          autoPlay 
          loop 
          muted
        />
      </div>  */}
         <div className=''>
            <img className="rounded-md " src={PortraitOne}/>
          </div>

             
        </motion.div>

         <motion.div className="min-w-[500px] h-[700px] p-4 pt-32 m-2 rounded-lg bg-transparent text-white">
          {/* <div className='pt-8 rounded-lg'>
        
        <motion.video 
          className='rounded-lg mx-auto' 
          src={CGMWEB4} 
          autoPlay 
          loop 
          muted
        />
      </div>  */}
       <div className=''>
            <img className="rounded-md " src={Tension}/>
          </div>
        </motion.div> 
        

      </motion.div>
      <div className="flex justify-center space-x-2 mt-4">
        {/* Update these buttons according to the number of cards you have */}
        <button className={`w-4 h-4 rounded-full ${currentIndex === 0 ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => slideTo(0)}></button>
        <button className={`w-4 h-4 rounded-full ${currentIndex === 1 ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => slideTo(1)}></button>
        <button className={`w-4 h-4 rounded-full ${currentIndex === 2 ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => slideTo(2)}></button>
        <button className={`w-4 h-4 rounded-full ${currentIndex === 3 ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => slideTo(3)}></button>
        <button className={`w-4 h-4 rounded-full ${currentIndex === 4 ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => slideTo(4)}></button>
        <button className={`w-4 h-4 rounded-full ${currentIndex === 5 ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => slideTo(5)}></button>
        <button className={`w-4 h-4 rounded-full ${currentIndex === 6 ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => slideTo()}></button>
        {/* Add more buttons for additional cards */}
      </div>
    </div>
  );
};
function swipePower(offset, velocity) {
    return Math.abs(offset) * velocity;
  }
export default TimelineCarousel;
