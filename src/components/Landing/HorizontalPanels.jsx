import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css';
import { BirdSoaring, BlackSea, BlossomingF, SkyClouds, Wavey } from '../../images/ImgAssets';

gsap.registerPlugin(ScrollTrigger);

const HorizontalPanels = () => {
  const panelsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      panelsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.horizontal-panels-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  const sections = [
    { title: 'INSPIRE', subtitle: 'Push the boundaries of traditional design.', number: '1', image: BlossomingF },
    { title: 'TRANSFORM', subtitle: 'Transcend the ordinary and introduce innovation.', number: '2', image: BirdSoaring },
    { title: 'AMPLIFY', subtitle: 'Challenge conventions and redefine boundaries.', number: '3', image: SkyClouds },
    { title: 'ILLUMINATE', subtitle: 'Engage with spaces designed to captivate and envelop.', number: '4', image: Wavey },
  ];

  return (
    <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle bg-gradient-to-t to-slate-950 from-transparent">
      <div className="horizontal-panels-container flex w-full h-screen overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="panel mx-2 shadow-sparkle relative w-1/4 flex flex-col justify-center items-center p-4 cursor-pointer transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center">
              <h1 className="font-customtwo font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                {section.title}
              </h1>
              
              <p className="font-customnine tracking-widest text-white mt-4 mx-auto max-w-[80%] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {section.subtitle}
              </p>
              
              <div className="font-customtwo text-teal-300 opacity-40 absolute -bottom-8 right-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl">
                {section.number}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalPanels;