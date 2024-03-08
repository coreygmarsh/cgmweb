import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../Navbar/Navbar"
import ImageGrid from '../Library/ImageGrid';
import "../../index.css"

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
      className="bg-cyan-700 bg-opacity-10 from-cyan-700 to-white bg-gradient-to-b h-screen"
      // style={{ backgroundImage: `url(${Eser})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar />
      <h1 className='text-center pt-12 text-green-300 text-9xl vision font-customtwo'>
        LIBRARY
      </h1>
      <div className="flex justify-center items-center text-center flex-wrap mx-24 h-screen pt-12">
        <ImageGrid />
      </div>
    </motion.div>
  );
};

export default Library;
