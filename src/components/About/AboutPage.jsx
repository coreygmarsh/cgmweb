import React from 'react';
import { CGMlogo, watertexture } from '../../images/ImgAssets';
import Navbar from '../Navbar/Navbar';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen font-customnine bg-gradient-to-t from-teal-600 to-slate-900">
      <Navbar />
      
      {/* Background Gradient */}
      <div className="fixed inset-0 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:px-24 bg-gradient-to-b from-cyan-900 to-teal-700 bg-opacity-10 shadow-sparkle"></div>
      
      {/* Main Content */}
      <div className="relative w-full min-h-screen text-white">
        {/* Background Image */}
        <img 
          src={watertexture} 
          alt="Pattern background" 
          className="fixed inset-0 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 h-screen w-auto object-cover mix-blend-overlay opacity-20 shadow-sparkle" 
        />
        
        {/* Content Wrapper */}
        <div className="relative z-10 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 py-12 flex flex-col items-center">
          <div className="w-full max-w-6xl flex flex-col items-center gap-8">
            
            {/* Description Container */}
            <div className="relative w-full lg:w-3/5 bg-gradient-to-tl from-transparent via-slate-800 to-slate-800 shadow-sparkle p-6 rounded-lg mx-auto">
              
              {/* Logo Badge */}
              <img 
                src={CGMlogo}
                alt="Logo Badge"
                className="absolute top-0 right-0 -mt-12 -mr-12 h-24 w-24"
              />
              
              {/* Description Text */}
              <p className="text-sm md:text-lg mb-4">
                <span className="block text-center text-4xl font-customtwo underline text-green-300 mb-4">
                  CGM Creative Solutions
                </span>
                At CGM Creative Solutions, we are passionate storytellers dedicated to bringing your vision to life through exceptional creative digital services. Founded by Corey Marsh, CGM combines over a decade of industry expertise with a commitment to innovation, helping businesses of all sizes captivate their audiences and elevate their brand presence.

                <span className='block pt-4'>
                  We specialize in a wide range of services, including video editing, graphic design, sound design, and more. Whether you’re looking to create a compelling corporate video, eye-catching social media content, or a dynamic brand identity, our talented team is here to deliver high-quality, customized solutions that resonate.

                  Our approach is rooted in collaboration and creativity.
                </span>
                <span className='block pt-4'>
                  We take the time to understand your unique goals, crafting content that not only meets your needs but exceeds expectations. From individual creators to large enterprises, CGM Creative Solutions is your go-to partner for impactful visual storytelling.

                  At CGM, your success is our mission. Let’s work together to transform your ideas into engaging experiences that inspire, connect, and drive results.
                </span>
              </p>
            </div>
          </div>
          
          {/* Closing Statement */}
          <div className='text-center pt-12 text-xl sm:text-4xl md:text-5xl lg:text-6xl'>
            Adding <span className='text-green-300 italic vision'>Energy</span> to every story...
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
