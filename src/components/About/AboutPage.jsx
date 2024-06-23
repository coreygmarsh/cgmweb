import React from 'react';
import topography from "../../images/svgs/topography.svg";
import { CausLightning, watertexture } from '../../images/ImgAssets';
import Corey from "../../images/Corey.png";
import Navbar from '../Navbar/Navbar';

const AboutPage = () => {
  return (
    <div className="relative w-full h-screen  font-customnine bg-gradient-to-t from-teal-600 to-slate-900 ">
      <Navbar />
      
      <div className="fixed top-0 right-0 left-0 inset-0 bg-gradient-to-b mx-24 shadow-sparkle from-cyan-900 to-teal-700  bg-opacity-10"></div>
      <div className="relative w-full h-auto bg-transparent text-white p-8">

        <img 
          src={watertexture} 
          alt="Pattern background" 
          className="fixed top-0 px-24 right-0 shadow-sparkle left-0 h-screen mix-blend-overlay" 
          style={{ opacity: '0.2' }} 
        />
        <div className="relative z-10 max-w-7xl pt-12 ml-52 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-2/3 ml-32 flex justify-center lg:justify-start">
            <img 
              src={Corey} 
              alt="Corey G. Marsh" 
              className="rounded-lg w-full max-w-4xl md:max-w-md lg:max-w-screen mt-6 shadow-sparkle h-[420px] object-cover" 
            />
          </div>
          <div className='pt-48'></div>
          <div className="w-full md:w-3/3 bg-gradient-to-tl  shadow-sparkle from-transparent via-transparent to-slate-800 p-4 rounded-lg">
           <div className='p-4 '> 
            <p className="text-lg md:text-md lg:text-lg xl:text-md">
              <span className=' block text-center text-xl text-teal-500'>Corey G. Mar<span className="underline">sh</span></span> is a seasoned digital creative with over a decade of experience in harnessing cutting-edge tools like Final Cut Pro, Premiere Pro, After Effects, Canva, and Blender to produce captivating visuals. His mission is to empower artists and businesses in articulating their narratives through the most compelling visual media. Corey’s approach is distinguished by an unwavering commitment to understanding unique stories and translating them into visually compelling narratives.
            </p>
            <p className="text-lg md:text-md lg:text-lg xl:text-md mt-4">
              Music, Corey’s first love, continues to influence his work as a digital designer profoundly. This musical background enriches his creativity, allowing him to blend auditory and visual elements seamlessly. The fusion of these art forms enables Corey to craft <span className='text-green-300 italic'>harmonious</span> and <span className='text-green-300 italic'>impactful designs </span>that resonate deeply with audiences.
            </p>
            <p className="text-lg md:text-md lg:text-lg xl:text-md mt-4">
              At the heart of Corey’s work are the values that guide every project he embarks on: <span className='text-green-300 italic'>creativity, community, and connection.</span> These values ensure that each project not only meets but exceeds expectations, fostering a sense of community and engagement. Corey Marsh remains dedicated to pushing the boundaries of digital design, continuously seeking new ways to connect and inspire through his creative endeavors.
            </p>
            </div>
            {/* <div className="text-white text-center italic">CGM Creative Solutions</div> */}
          </div>
          
        </div>
        <div className='mx-24 text-center pt-12 text-6xl'>Adding <span className='text-green-300 italic vision'>Energy</span> to every story... </div>
      </div>
    </div>
  );
};

export default AboutPage;
