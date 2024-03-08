// HorizontalGallery.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../index.css'; // Import the CSS
import TimelineCarousel from '../About/TimelineCarousel';

const HorizontalGallery = () => {

  const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }, [controls, inView]);
      const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.75 },
      }

  return (
    <motion.div 
    ref={ref} 
    animate={controls}
    initial="hidden"
    variants={variants} className="horizontal-gallery h-[900px]">
      {/* Repeat this div for each item you want in the gallery */}
      <div className="gallery-item bg-transparent">
       <TimelineCarousel/>
      </div>
    </motion.div>
  );
};
export default HorizontalGallery