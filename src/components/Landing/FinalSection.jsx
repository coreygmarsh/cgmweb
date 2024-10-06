import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CGMBizCard, WavesThree } from '../../images/ImgAssets';
import "../../index.css";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We specialize in video creation, graphic design, motion graphics, and audio engineering to elevate your brand.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply contact us through our platform, and we’ll schedule a consultation to understand your needs and develop a custom plan.'
  },
  {
    question: 'Do you offer consulting services?',
    answer: 'Yes, we offer creative consulting services to help you strategize and optimize your content for the best results.'
  },
  {
    question: 'Can I request a custom package?',
    answer: 'Absolutely! We understand that every project is unique, and we’re happy to offer custom solutions tailored to your specific needs.'
  }
];

const FAQSection = () => {
  const faqRefs = useRef([]);
  faqRefs.current = [];

  const addToRefs = (el) => {
    if (el && !faqRefs.current.includes(el)) {
      faqRefs.current.push(el);
    }
  };

  useEffect(() => {
    faqRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, height: 0 },
        {
          opacity: 1,
          height: 'auto',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  return (
    <div className="relative flex flex-col mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 justify-center py-8">
      <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl text-green-300 font-customtwo mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 pb-6 font-customnine">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br to-teal-900 from-slate-950 p-6 rounded-lg shadow-lg"
            ref={addToRefs}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-white text-lg">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FinalSection = () => {
  return (
    <div
      className="relative flex flex-col items-center mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle justify-center sm:h-screen h-[70vh] overflow-hidden"
    >
      <video autoPlay loop muted className="absolute z-0 w-auto min-w-full sm:h-screen h-[50vh] max-w-none" style={{ objectFit: 'cover', height: '100%', width: '100%' }}>
        <source src={WavesThree} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* FAQ Section */}
      <div className="relative z-10 w-full mt-12">
        <FAQSection />
      </div>
    </div>
  );
};

export default FinalSection;
