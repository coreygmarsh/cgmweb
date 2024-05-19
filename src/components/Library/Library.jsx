import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../Navbar/Navbar";
import ImageGrid from '../Library/ImageGrid';
import "../../index.css";

const Library = () => {
  // Define your animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '100vw',
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-gradient-to-b from-cyan-800 to-slate-800 via-teal-700 bg-opacity-10 min-h-screen"
    >
      <Navbar />
      <h1 className='text-center pt-12 text-green-300 text-5xl md:text-7xl lg:text-9xl font-customeight tracking-widest'>
        LIBRARY
      </h1>
      <div className="flex justify-center items-center text-center z-50 flex-wrap mx-4 md:mx-12 lg:mx-24 mt-12">
        <ImageGrid />
      </div>
    </motion.div>
  );
};

export default Library;
