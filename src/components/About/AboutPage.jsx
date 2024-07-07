import React from 'react';
import { watertexture } from '../../images/ImgAssets';
import Corey from "../../images/Corey.png";
import Navbar from '../Navbar/Navbar';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen font-customnine bg-gradient-to-t from-teal-600 to-slate-900">
      <Navbar />
      
      <div className="fixed inset-0 mx-24 bg-gradient-to-b from-cyan-900 to-teal-700 bg-opacity-10 shadow-sparkle"></div>
      <div className="relative w-full min-h-screen text-white">
        <img 
          src={watertexture} 
          alt="Pattern background" 
          className="fixed inset-0 mx-24 h-screen w-auto object-cover mix-blend-overlay opacity-20 shadow-sparkle" 
        />
        <div className="relative z-10 mx-24 py-12 flex flex-col items-center">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="w-full lg:w-1/2 pt-24 flex justify-center lg:justify-start">
              <img 
                src={Corey} 
                alt="Corey G. Marsh" 
                className="rounded-lg w-full max-w-md shadow-sparkle h-[500px] object-cover" 
              />
            </div>
            <div className="w-full lg:w-1/2 bg-gradient-to-tl shadow-sparkle from-transparent via-transparent to-slate-800 p-6 rounded-lg">
              <p className="text-lg mb-4">
                <span className="block text-center text-xl text-teal-500 mb-4">Corey G. Mar<span className="underline">sh</span></span>
                is a seasoned digital creative with over a decade of experience in harnessing cutting-edge tools like Final Cut Pro, Premiere Pro, After Effects, Canva, and Blender to produce captivating visuals. His mission is to empower artists and businesses in articulating their narratives through the most compelling visual media. Corey's approach is distinguished by an unwavering commitment to understanding unique stories and translating them into visually compelling narratives.
              </p>
              <p className="text-lg mb-4">
                Music, Corey's first love, continues to influence his work as a digital designer profoundly. This musical background enriches his creativity, allowing him to blend auditory and visual elements seamlessly. The fusion of these art forms enables Corey to craft <span className='text-green-300 italic'>harmonious</span> and <span className='text-green-300 italic'>impactful designs </span>that resonate deeply with audiences.
              </p>
              <p className="text-lg">
                At the heart of Corey's work are the values that guide every project he embarks on: <span className='text-green-300 italic'>creativity, community, and connection.</span> These values ensure that each project not only meets but exceeds expectations, fostering a sense of community and engagement. Corey Marsh remains dedicated to pushing the boundaries of digital design, continuously seeking new ways to connect and inspire through his creative endeavors.
              </p>
            </div>
          </div>
          <div className='text-center pt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
            Adding <span className='text-green-300 italic vision'>Energy</span> to every story...
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;