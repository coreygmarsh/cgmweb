import React from 'react';
import '../../index.css'; // Ensuring CSS imports
import { CGMWEB4 } from '../../images/ImgAssets';
import Navbar from '../Navbar/Navbar';

const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="w-full z-20">
        <Navbar />
      </div>
      <video autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
        <source src={CGMWEB4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 font-customthree text-white h-screen flex justify-center w-full absolute">
        {/* Ensure the container allows for full width and centering */}
        <div className="animate-slideIn items-center flex">
          <h1 className="text-8xl font-customtwo vision text-center font-bold pr-18 whitespace-nowrap">Welcome To</h1>
          
          <h1 className="text-8xl font-customtwo text-center vision font-bold pl-12 animate-glow whitespace-nowrap">A World Under Water</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
