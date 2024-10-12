import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BirdSoaring, CGMlogo, watertexture } from '../../images/ImgAssets'; // Adjust paths as necessary

gsap.registerPlugin(ScrollTrigger);

const EndPageAnimation = () => {
  const textRef1 = useRef(null);
  const logoRef = useRef(null); // Create a reference for the logo

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.end-page', // Ensure this targets the right section of your page
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animate the text
    tl.fromTo(
      textRef1.current,
      { opacity: 0, scale: 0.5, rotation: -45 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'power4.out',
      }
    );

    // Animate the logo fade-in and scale
    gsap.fromTo(
      logoRef.current, // Reference to the logo element
      { opacity: 0, scale: 0.5 }, // Start with invisible and scaled down
      {
        opacity: 0.2,
        scale: 1, // Full size and visible
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top 80%', // Logo will fade in when 80% of the page is scrolled
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="end-page relative min-h-screen font-customtwo bg-gradient-to-b from-slate-900 to-teal-600 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle flex items-center justify-center">
      {/* Background Image */}
      <img 
        src={BirdSoaring} 
        alt="Pattern background" 
        className="fixed inset-0 h-screen w-full object-cover mix-blend-overlay opacity-20 shadow-sparkle" 
      />

      <div className="relative z-10 flex flex-col items-center justify-center shadow-sparkle bg-black bg-opacity-40 p-4">
        {/* Cinematic Global Minds Title */}
        <div className="flex flex-col items-center text-center">
          <h1
            ref={textRef1}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-bold  font-customtwo"
          >
            <span className='text-green-300 vision animate-glow'>C</span>inematic <span className='block text-left'><span className='text-green-300 vision animate-glow'>G</span>lobal</span> <span className='block text-left'><span className='text-green-300 vision animate-glow'>M</span>inds</span>
          </h1>
        </div>
      </div>

      {/* Logo with fade-in animation */}
      <img
        ref={logoRef} // Attach the logoRef to the logo image
        src={CGMlogo} 
        alt="CGM Logo"
        className="absolute center w-64 h-64 sm:w-96 sm:h-96 opacity-0" // Set initial opacity to 0 for fade-in
      />
    </div>
  );
};

export default EndPageAnimation;
