import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WavesThree } from '../../images/ImgAssets';
import Contact from '../Contact/Contact';
import { useNavigate } from 'react-router-dom';
import "../../index.css"
const FinalSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const navigate = useNavigate();
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.8 },
  };
  const handleNavigate = () => {
    navigate('/contact'); // Adjust this path as needed
  };
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
    >
      <video autoPlay loop muted className="absolute z-0 w-auto min-w-full h-screen max-w-none" style={{ objectFit: 'cover', height: '100%', width: '100%' }}>
        <source src={WavesThree} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick= {handleNavigate}
      className="z-10 text-white text-8xl font-customtwo border shadow-2xl shadow-white rounded-full p-8 hover:bg-cyan-900 vision">CONTACT ME </button>
      {/* Or if you want to include the Contact component instead of the text */}
      {/* <div className="z-10"><Contact /></div> */}
    </motion.div>
  );
};

export default FinalSection;
