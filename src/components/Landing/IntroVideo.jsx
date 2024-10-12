import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlackSea } from "../../images/ImgAssets"; // Adjust to your path

gsap.registerPlugin(ScrollTrigger);

export const IntroVideo = () => {
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
          '.youtube-video',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
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
      <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-slate-800 via-teal-700 to-cyan-800 opacity-95" />

      <div className="relative z-0 text-center border-2 border-teal-500 rounded-md bg-black bg-opacity-40 shadow-sparkle max-w-7xl w-full mx-auto">
        {/* Embedded YouTube video */}
        <div className="youtube-video relative w-full" style={{ paddingBottom: '37.25%' }}>
          <iframe
            className="absolute top-0 aspect-video left-0 w-full h-full"
            src="https://www.youtube.com/embed/8jD2PkiFNfY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
