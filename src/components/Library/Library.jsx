import React, {useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import Navbar from "../Navbar/Navbar"
import ImageGrid from '../Library/ImageGrid';
import "../../index.css"
import  LayoutGrid from '../Library/LayoutGrid.jsx';

// const carouselImages = [TwentyFive, Tension, Landscape, Botanical, Aaron, GuitarOne, AA3, Danita, PortraitThree, PortraitOne];


const Library = () => {
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
      rotateY: -180,
      opacity: 0,
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
      className="bg-gradient-to-b from-cyan-800 to-slate-800 via-teal-700 bg-opacity-10  h-[2000px]"
      // style={{ backgroundImage: `url(${Eser})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar />
      <h1 className='text-center pt-12 text-green-300 text-[10rem] vision font-customeight tracking-widest'>
        LIBRARY
      </h1>
      <div className="flex justify-center items-center text-center z-50 flex-wrap mx-24 h-screen mt-12 shadow-sparkle">
        <ImageGrid />
      {/* <LayoutGrid/> */}
      </div>
    </motion.div>
  );
};

export default Library;
