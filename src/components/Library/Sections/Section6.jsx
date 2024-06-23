
import { motion } from 'framer-motion';

import Navbar from "../../Navbar/Navbar";
import "../../../index.css";
import pattern from "../../../images/svgs/pattern.svg";
import AnimationPanel from '../AnimationsPanel';




const Section6 = () => {
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
    <div className='relative min-h-screen bg-gradient-to-b from-cyan-800 via-teal-700 to-slate-800'>
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-30"
        style={{ backgroundImage: `url(${pattern})` }}
      ></div>

      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative z-10 mx-24 min-h-screen bg-gradient-to-b from-cyan-800 to-slate-900 shadow-sparkle via-teal-700"
      >
        <Navbar />
        <h1 className='text-center z-[100] pt-12 text-green-300 text-5xl md:text-7xl lg:text-9xl font-customnine tracking-widest'>
          Animations
        </h1>
        <div className="flex justify-center items-center text-center z-50 flex-wrap mx-4 md:mx-12 lg:mx-24 mt-12">
          <div className="flex w-full">
            <AnimationPanel/>
           
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section6;
