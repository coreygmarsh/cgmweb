import {useEffect, useRef,React} from 'react';
import { BentoGrid } from './utils/BentoGrid';
import Navbar from './Navbar/Navbar';
import PricingTable from './PricingTable';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pattern from "../images/svgs/pattern.svg";
import { BlackSea, CausLightning, watertexture } from '../images/ImgAssets';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRefs = useRef([]);
  const pricingRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered animation for each section
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Pricing table highlight animation on scroll
    gsap.fromTo(
      pricingRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: pricingRef.current,
          start: 'top 75%',
        },
      }
    );
  }, []);

  const addtoRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };
  return (
    <div className='bg-gradient-to-t h-[3000px] to-slate-800 via-teal-900 from-cyan-950'>
      <Navbar />
      <div className="relative w-full h-[3000px] text-white">
        <img 
          src={BlackSea} 
          alt="Pattern background" 
          className="fixed inset-0 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24 h-[3000px] w-auto object-cover mix-blend-overlay opacity-80 shadow-sparkle" 
        />

        {/* Main container within shadow sparkle border */}
        <div className='bg-gradient-to-b border-x border-teal-500 shadow-sparkle from-cyan-800 via-teal-700 to-slate-800 h-[3000px] mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 font-customnine tracking-wide text-center pt-20 text-white text-4xl'>
          
          {/* Existing Packaged Pricing content */}
          <div ref={addtoRefs} className="relative text-center py-10">
            <h2 className="text-6xl font-customtwo font-bold italic tracking-wider">Packaged Pricing</h2>
            <p className="mt-4 text-2xl font-customtwo text-green-300 italic">The CGM Process</p>
            
            {/* Pricing grid */}
            <div className="mt-10 grid  border-green-300 border-2 shadow-sparkle rounded-md grid-cols-4 gap-4 mx-auto w-[90%] max-w-6xl text-lg">
              <div className="text-center text-white pt-4">
              <div className="py-4 font-bold">-</div>
                <div className="py-4 font-bold">Planning</div>
                <div className="py-4 font-bold">Scripting</div>
                <div className="py-4 font-bold">Production</div>
                <div className="py-4 font-bold">Design</div>
                <div className="py-4 font-bold">Editing</div>
              </div>

              {/* Basic Column */}
              <div className="bg-gradient-to-br from-teal-600 to-slate-800 rounded-lg text-center text-white">
                <div className="py-4 font-bold border-b border-teal-600">Basic</div>
                <div className="py-4 text-red-400 text-2xl">✗</div>
                <div className="py-4 text-red-400 text-2xl">✗</div>
                <div className="py-4 text-red-400 text-2xl">✗</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
              </div>

              {/* Professional Column */}
              <div className="bg-gradient-to-tl to-green-700 from-slate-950 rounded-lg text-center text-white">
                <div className="py-4 font-bold border-b border-teal-600">Professional</div>
                <div className="py-4 text-red-400 text-2xl">✗</div>
                <div className="py-4 text-red-400 text-2xl">✗</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
              </div>

              {/* Enterprise Column */}
              <div className="bg-gradient-to-tl to-cyan-400 from-slate-950 rounded-lg text-center text-white">
                <div className="py-4 font-bold border-b border-teal-600">Enterprise</div>
                <div className="py-4 text-red-400 text-2xl">✗</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
                <div className="py-4 text-green-300 text-2xl">✔</div>
              </div>
            </div>
          </div>

          {/* Existing content */}
          <div ref={pricingRef} className='pt-16'>
            
            <div className="pt-16 pb-8">
              <PricingTable />
            </div>
            {/* <h1 className='text-3xl tracking-widest text-white italic font-bold'>
              Select the right plan for you..
            </h1> */}
          </div>
          <div className='shadow-sparkle py-4 border-green-600'></div>

          {/* New Individual Pricings content added at the bottom */}
          <div ref={addtoRefs} className="relative text-center py-20">
            <h2 className="text-6xl font-customtwo font-bold italic tracking-wider">Individual Pricings</h2>
            <p className="mt-4 text-2xl font-customtwo underline ">Video Services</p>
            
            {/* Individual Pricing grid */}
            <div className="mt-10 grid grid-cols-3 gap-6 mx-auto w-[90%] max-w-6xl text-lg">
              {/* Product Demos & Founders Video */}
              <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-slate-800">
                <h3 className="text-xl font-customtwo font-bold mb-8 text-center ">Product/Founders</h3>
                <p className='pb-4'>Stream (1 min max, 1 revision) <span className="float-right text-green-300">$300</span></p>
                <p className='py-4'>River (3 min max, 2 revisions) <span className="float-right text-green-300">$500</span></p>
                <p className='py-4'>Ocean (5 min max, 3 revisions) <span className="float-right text-green-300">$800</span></p>
              </div>

               {/* Short Form Social Media */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-slate-800">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Short Form Ads</h3>
      <p className='pb-4'>Stream (15-30 sec, 1 revision) <span className="float-right text-green-300">$200</span></p>
      <p className='py-4'>River (1 min max, 2 revisions) <span className="float-right text-green-300">$400</span></p>
      <p className='py-4'>Ocean (2 min max, 3 revisions) <span className="float-right text-green-300">$600</span></p>
    </div>

    {/* Training Videos */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-slate-800">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Training Videos</h3>
      <p className='pb-4'>Stream (3 min max, 1 revision) <span className="float-right text-green-300">$350</span></p>
      <p className='py-4'>River (5 min max, 2 revisions) <span className="float-right text-green-300">$600</span></p>
      <p className='py-4'>Ocean (10 min max, 3 revisions) <span className="float-right text-green-300">$900</span></p>
    </div>

    {/* Testimonials */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-slate-800">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Testimonials</h3>
      <p className='pb-4'>Stream (1 min max, 1 revision) <span className="float-right text-green-300">$250</span></p>
      <p className='py-4'>River (3 min max, 2 revisions) <span className="float-right text-green-300">$450</span></p>
      <p className='py-4'>Ocean (5 min max, 3 revisions) <span className="float-right text-green-300">$700</span></p>
    </div>

    {/* Explainer Videos */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-slate-800">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Explainer Videos</h3>
      <p className='pb-4'>Stream (2 min max, 1 revision) <span className="float-right text-green-300">$400</span></p>
      <p className='py-4'>River (4 min max, 2 revisions) <span className="float-right text-green-300">$700</span></p>
      <p className='py-4'>Ocean (6 min max, 3 revisions) <span className="float-right text-green-300">$1000</span></p>
    </div>

    {/* Event Videos */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-slate-800">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Event Videos</h3>
      <p className='pb-4'>Stream (3-5 min, 3 revisions) <span className="float-right text-green-300">$500</span></p>
      <p className='py-4'>River (10 min max, 5 revisions) <span className="float-right text-green-300">$900</span></p>
      <p className='py-4'>Ocean (15 min+, 8 revisions) <span className="float-right text-green-300">$1500</span></p>
    </div>
            </div>
            <p className="my-14 text-2xl font-customtwo underline ">Other Services</p>
            <div className="mt-10 grid grid-cols-3 gap-6 mx-auto w-[90%] max-w-6xl text-lg">
              {/* Branding & Logos */}
              <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-teal-950">
                <h3 className="text-xl font-customtwo font-bold mb-8 text-center ">Branding/Logos</h3>
                <p className='pb-4'>Level 1 (3 concepts, 1 revision) <span className="float-right text-green-300">$300</span></p>
                <p className='py-4'>Level 2 (5 concepts, 2 revisions) <span className="float-right text-green-300">$500</span></p>
                <p className='py-4'>Level 3 (10 concepts, 3 revisions) <span className="float-right text-green-300">$800</span></p>
              </div>

               {/* General Graphics */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-teal-950">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">General Graphics</h3>
      <p className='pb-4'>Single Design <span className="float-right text-green-300">$100</span></p>
      <p className='py-4'>Package of Five <span className="float-right text-green-300">$400</span></p>
      <p className='py-4'>Package of Ten <span className="float-right text-green-300">$750</span></p>
    </div>

    {/* Flyers & Brochures */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-teal-950">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Flyers & Brochures</h3>
      <p className='pb-4'>Single Page (1 revision) <span className="float-right text-green-300">$150</span></p>
      <p className='py-4'>Multi Page (5 pg. max, 2 revisions)  <span className="float-right text-green-300">$400</span></p>
      <p className='py-4'>Premium Brochure (10 pg. max, 3 revisions) <span className="float-right text-green-300">$600</span></p>
    </div>

    {/* Presentations */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-teal-950">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Presentations</h3>
      <p className='pb-4'>Level 1 (10 slides max)<span className="float-right text-green-300">$200</span></p>
      <p className='py-4'>Level 2 (20 slides max) <span className="float-right text-green-300">$350</span></p>
      <p className='py-4'>Level 3 (30 slides max) <span className="float-right text-green-300">$500</span></p>
    </div>

    {/* Audio Services */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-cyan-700">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Audio</h3>
      <p className='pb-4'>Voiceover Editing <span className="float-right text-green-300">$50/min</span></p>
      <p className='py-4'>Music Mixing/Editing <span className="float-right text-green-300">$100/track</span></p>
      <p className='py-4'>Soundtrack Curating <span className="float-right text-green-300">$75/track</span></p>
      <p className='py-4'>Podcasts (30 min max) <span className="float-right text-green-300">$150/episode</span></p>
    </div>

    {/* Consultative */}
    <div className="rounded-lg p-6 text-sm text-left text-white bg-gradient-to-br to-transparent from-blue-800">
      <h3 className="text-xl font-customtwo font-bold mb-8 text-center">Consultative Services</h3>
      <p className='pb-4'>Creative Consulting<span className="float-right text-green-300">$100/hour</span></p>
      <p className='py-4'>3 hour Package Deal (2 hour consulting) <span className="float-right text-green-300">$250</span></p>
      <p className='py-4'>5 hour Package Deal (5 hour consulting) <span className="float-right text-green-300">$450</span></p>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
