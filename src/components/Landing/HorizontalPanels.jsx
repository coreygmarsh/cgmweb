import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css'; // Ensure you have proper CSS styles in this file
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
    <div className='mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle bg-gradient-to-t to-slate-950 from-transparent'>
      <div className="horizontal-panels-container flex w-full h-screen overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="panel mx-2 shadow-sparkle relative " // Relative position to add overlay
            style={{
              width: '25%',
              backgroundImage: `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem',
              position: 'relative',
              color: '#fff',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
          >
            {/* Overlay to make text more visible */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust transparency here
                zIndex: 1, // Ensure the overlay is behind the text
              }}
            ></div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h1 className='font-customtwo' style={{ fontSize: '3rem', fontWeight: 'bold' }}>{section.title}</h1>
              <p className='font-customnine tracking-widest' style={{ fontSize: '1.2rem', marginTop: '1rem', textAlign: 'center', maxWidth: '80%' }}>{section.subtitle}</p>
              <div className='font-customtwo text-teal-300' style={{ fontSize: '12rem', fontWeight: '100', opacity: 0.4, position: 'absolute', bottom: '10%', right: '10%' }}>
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
