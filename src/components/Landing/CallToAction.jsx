import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlackSea, watertexture } from "../../images/ImgAssets"; // Adjust to your path

gsap.registerPlugin(ScrollTrigger);

export const CallToAction = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 75%',  // Trigger when top of element reaches 75% of viewport height
          toggleActions: 'play none none reverse',  // Only play once and reverse when out of view
        },
      });

      timeline
        .fromTo(
          '.cta-heading',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        .fromTo(
          '.cta-paragraph',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.5'  // Overlap animation for smoother effect
        )
        .fromTo(
          '.cta-button',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
          '-=0.5'
        );
    }, ctaRef);

    return () => ctx.revert();  // Clean up GSAP context
  }, []);

  return (
    <div
      className="min-h-screen py-16 md:py-24 overflow-hidden bg-center bg-cover mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle relative flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${BlackSea})` }}
      ref={ctaRef}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 via-teal-700 to-cyan-800 opacity-95" />

      <div className="relative z-0 text-center px-4 border-2 py-8 border-teal-500 rounded-md bg-black bg-opacity-40 shadow-sparkle sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="cta-heading text-4xl sm:text-5xl lg:text-7xl text-white font-customtwo tracking-widest mb-6">
          Ready to <span className="animate-glow text-green-300 ">Elevate</span> Your Brand?
        </h1>
        <p className="cta-paragraph text-lg sm:text-xl font-customnine text-white mb-12 max-w-2xl mx-auto">
          Whether you're looking for video creation, motion design, or creative consulting, our team is here to help you create content that stands out and tells your story. Let's work together to make your vision a reality.
        </p>
        
        <a
          href="#contact"
          className="cta-button inline-block px-8 py-4 text-lg sm:text-xl font-bold font-customtwo text-white rounded-lg bg-gradient-to-r from-teal-700 to-cyan-700 hover:from-teal-600 hover:to-cyan-600 shadow-sparkle transform transition-transform duration-300"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};
