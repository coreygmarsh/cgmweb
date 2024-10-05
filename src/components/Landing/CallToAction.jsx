import React from "react";
import { motion } from "framer-motion";
import { BlackSea, watertexture } from "../../images/ImgAssets"; // You can adjust to the correct path

export const CallToAction = () => {
  return (
    <div
      className="min-h-screen py-16 md:py-24 overflow-hidden bg-center bg-cover mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle relative flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${BlackSea})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-slate-800 via-teal-700 to-cyan-800 opacity-95" />

      <motion.div 
        className="relative z-0 text-center px-4 border-2 py-8 border-teal-500 rounded-md bg-black bg-opacity-40 shadow-sparkle sm:px-6 lg:px-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-customtwo tracking-widest mb-6">
          Ready to <span className="animate-glow text-green-300">Elevate</span> Your Brand?
        </h1>
        <p className="text-lg sm:text-xl font-customnine text-white mb-12 max-w-2xl mx-auto">
          Whether you're looking for video creation, motion design, or creative consulting, our team is here to help you create content that stands out and tells your story. Let's work together to make your vision a reality.
        </p>
        
        <motion.a 
          href="#contact"
          className="inline-block px-8 py-4 text-lg sm:text-xl font-bold font-customtwo text-white rounded-lg bg-gradient-to-r from-teal-700 to-cyan-700 hover:from-teal-600 hover:to-cyan-600 shadow-sparkle transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </div>
  );
};
