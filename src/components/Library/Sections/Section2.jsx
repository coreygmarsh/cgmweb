import { motion } from 'framer-motion';
import Navbar from "../../Navbar/Navbar";
import "../../../index.css";
import pattern from "../../../images/svgs/pattern.svg";

const Section2 = () => {
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

  const videos = [
    "https://www.youtube.com/embed/vlFqThlpCBs?si=GmsEm2hPAHkZ7dyd",
    // Add more video URLs as needed
  ];

  return (
    <div className='relative min-h-screen bg-gradient-to-b  from-cyan-800 via-teal-700 to-slate-800'>
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
        <h1 className='text-center z-[100] py-12 mx-48 border-teal-300 text-green-300 border-b-2 text-5xl md:text-7xl lg:text-9xl font-customnine tracking-widest'>
          Lyric Videos
        </h1>
        <div className="flex flex-col justify-center items-center  text-center z-50 mx-4 md:mx-12 lg:mx-24 mt-12">
          {videos.map((video, index) => (
            <div key={index} className="h-96 z-[60] shadow-sparkle border-y-2 border-teal-400 w-2/5 mb-4">
              <iframe
                className="w-full h-full "
                src={video}
                title={`YouTube video player ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Section2;
