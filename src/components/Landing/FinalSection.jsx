import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CGMBizCard, WavesThree } from '../../images/ImgAssets';
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
    <div
      ref={ref}
      className="relative flex items-center  mx-6 xl:mx-24 lg:mx-24 md:mx-12 sm:mx-6  shadow-sparkle justify-center h-screen overflow-hidden"
    >
      <video autoPlay loop muted className="absolute z-0 w-auto min-w-full h-screen max-w-none" style={{ objectFit: 'cover', height: '100%', width: '100%' }}>
        <source src={WavesThree} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img src={CGMBizCard} className='h-60 w-60'/> */}
      <button onClick= {handleNavigate}
      className="z-10 text-white md:mx-24 text-2xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl font-customnine tracking-wide border shadow-2xl shadow-white rounded-full p-8 hover:bg-cyan-900 vision">CONTACT ME </button>
      {/* Or if you want to include the Contact component instead of the text */}
      {/* <div className="z-10"><Contact /></div> */}
    </div>
  );
};

export default FinalSection;
