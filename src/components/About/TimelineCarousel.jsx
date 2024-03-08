import React, { useState,useRef,useEffect } from 'react';
import { motion } from 'framer-motion';

import { ScreenFitText } from './ScreenFitText';
import { About, Botanical, CGMWEB4, Danita, LetMeLoose, Sub3, Tension, Underwater, UnderwaterRoad } from '../../images/ImgAssets';

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
    <div ref={carouselRef} className=" h-[900px] bg-cover relative bg-gradient-to-b from-white via-cyan-700 to-cyan-300 "
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
          
          <div className='pt-8 font-custom text-3xl text-cyan-800'>
             {/* Let me take you on a little journey through my world, where creativity meets technology. */}

             <p className='pt-8 '>
                 {/* At the heart of it, I'm a storyteller and a technologist, deeply passionate about crafting 
            immersive web experiences that go beyond the conventional. */}
            </p>
           
          </div>
         

          <p className='pt-12 font-custom text-cyan-900 text-4xl'>
            {/* Below the Surface */}
            </p>
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
          <h2 className="text-4xl font-bold font-custom  text-cyan-300">
            {/* Vision */}
            </h2>

          <div className='text-3xl text-cyan-800 font-custom pl-6 '>
          {/* I Imagine the web as a canvas, not just for information, but as a space for artistic expression.
          I aim to bring a help you build a unique blend of functionality and emotion in every project. */}
          
          </div>
          <div className=''>
            <img className="rounded-md h-[550px] w-[400px]" src={Danita}/>
          </div>
             
          {/* Custom HTML and styling */}
        </motion.div>
        
        <motion.div className="min-w-[500px] h-[700px] p-4 m-2 rounded-lg bg-transparent text-white">
          <h2 className="text-4xl text-cyan-300 pb-4 font-bold pl-2 font-custom">
            {/* Arsenal */}
            
            </h2>
          <p className='text-3xl text-cyan-800 font-custom pt-4'>
            {/* With a toolbox that includes the */}
          <div className='mt-6 text-center '>
            
           <p className='text-cyan-800 py-4'>
            {/* MERN stack, */}
            </p>
            <p className='text-cyan-800 py-4'>
                {/* Adobe Creative Suite, */}
                </p>
             <p className='text-cyan-800 py-4'>
                {/* FL Studio, */}
                </p>
              <p className='text-cyan-800 py-4'>
                {/* Final Cut Pro, */}
                </p>
              <p className='text-cyan-800 py-4'>
                {/* Blender, */}
                </p>
               <p className='text-cyan-800 py-4'>
                {/* Unreal, */}
                </p>
                <p className='text-cyan-800 py-4'>
                    {/* ProCreate Dreams */}
                    </p>
                <p className='pt-12 text-black'>
                    {/* and More! */}
                    </p> 
               </div>
          
          </p>
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
          <p className='text-3xl font-custom border-l-2 pl-8 text-cyan-800 '>
                 {/* But it's not just about the tools; it's how you use them to connect, to evoke feelings, and to tell a story that matters.
                 My journey here was shaped by melodies and harmonies, as my background as a musician taught me the art of storytelling.
                  This artistic perspective is my guiding light, influencing how I approach web design—not just as a technical challenge
                   but as an opportunity to make a real emotional impact. */}
                   </p>
                    <div className='pt-8 rounded-lg'>
                        <motion.video 
                        className='rounded-lg mx-auto' 
                        src={Sub3} 
                        autoPlay 
                        loop 
                        muted
                        />
                    </div> 
          {/* Custom HTML and styling */}
        </motion.div>
        
        <motion.div className="min-w-[500px] h-[700px] p-4 m-2 rounded-lg bg-transparent text-white">
          <h2 className="text-4xl pb-8 font-bold font-custom text-cyan-800">
            {/* Roots */}
            </h2>
          <p className='text-3xl font-custom text-cyan-800'>
            {/* But life isn't all about work, right? When I'm not behind the screen, you might find me on the soccer field. 
            Playing soccer competitively has taught me more than just how to score or defend; */}
            <div className='pt-8 rounded-lg'>
        
        <motion.video 
          className='rounded-lg mx-auto' 
        //   src={WaterBall} 
          autoPlay 
          loop 
          muted
        />
      </div>
             {/* it's where I learned the value 
            of teamwork, discipline, and the relentless pursuit of excellence. These lessons from the field have become
             invaluable in my professional life, empowering me to tackle challenges with a team spirit and a drive to 
             always push the limits. */}
             </p>   
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
            <img className="rounded-md"src={LetMeLoose}/>
          </div>
             
        </motion.div>

         <motion.div className="min-w-[500px] h-[700px] p-4 m-2 pt-24 rounded-lg bg-transparent text-white">
          
          
          {/* <h2 className="text-4xl pb-8 font-bold font-custom text-green-300">Roots</h2>
          <p className='text-3xl font-custom'>But life isn't all about work, right? When I'm not behind the screen, you might find me on the soccer field. 
            Playing soccer competitively has taught me more than just how to kick a ball; it's where I learned the value 
            of teamwork, discipline, and the relentless pursuit of excellence. These lessons from the field have become
             invaluable in my professional life, empowering me to tackle challenges with a team spirit and a drive to 
             always push the limits.</p> */}
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
            <img className="rounded-md " src={UnderwaterRoad}/>
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
          {/* <h2 className="text-4xl pb-8 font-bold font-custom text-green-300">Roots</h2>
          <p className='text-3xl font-custom'>But life isn't all about work, right? When I'm not behind the screen, you might find me on the soccer field. 
            Playing soccer competitively has taught me more than just how to kick a ball; it's where I learned the value 
            of teamwork, discipline, and the relentless pursuit of excellence. These lessons from the field have become
             invaluable in my professional life, empowering me to tackle challenges with a team spirit and a drive to 
             always push the limits.</p> */}

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
