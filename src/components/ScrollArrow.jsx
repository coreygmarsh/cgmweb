import React from 'react';
import { motion } from 'framer-motion';

// Arrow animation variants
const arrowVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: [0, 20, 0, 20, 0, 20, 0], transition: { yoyo: Infinity, duration: 2 } }
};

// Text animation variants
const textVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      delay: 0.5, 
      duration: 1.5, 
      repeat: Infinity, 
      repeatType: "reverse" 
    }
  }
};

const ScrollArrow = () => (
  <div>
    <motion.div
      variants={arrowVariants}
      initial="initial"
      animate="animate"
      className="fixed bottom-20 left-[900px] transform -translate-x-1/2 cursor-pointer"
    >
      <div className='w-full border-4 rounded-full border-cyan-500  '>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="text-cyan-800 hover:cursor-pointer shadow-2xl">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
      </div>
    </motion.div>
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="text-cyan-500 shadow-vision vision font-customfive text-9xl w-full fixed right-0 bottom-40 sparkle"
    >
      Dive Under Water
    </motion.div>
  </div>
);

export default ScrollArrow;
