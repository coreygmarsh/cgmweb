import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import "../../index.css"; // Assuming you have global styles here

const sections = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
  { title: 'Section 4', content: 'Content for section 4' },
  { title: 'Section 5', content: 'Content for section 5' },
  { title: 'Section 6', content: 'Content for section 6' },
];

const backgrounds = [
  { id: 1, src: 'url-to-background-image-1' },
  { id: 2, src: 'url-to-background-image-2' },
  { id: 3, src: 'url-to-background-image-3' },
  { id: 4, src: 'url-to-background-image-4' },
];

const ParallaxGallery = () => {
  return (
    <ParallaxProvider>
      <Navbar />
      <div className="relative">
        {backgrounds.map((bg, index) => (
          <Parallax key={bg.id} className="absolute inset-0 z-0" y={[-20, 20]} tagOuter="figure">
            <img src={bg.src} alt={`Background ${index + 1}`} className="w-full h-full object-cover" />
          </Parallax>
        ))}

        <div className="relative z-10">
          {sections.map((section, index) => (
            <section key={index} className="h-screen flex items-center justify-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 bg-gradient-to-br from-cyan-800 to-teal-700 bg-opacity-90 rounded-lg shadow-lg"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{section.title}</h2>
                <p className="text-lg md:text-xl lg:text-2xl">{section.content}</p>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxGallery;
