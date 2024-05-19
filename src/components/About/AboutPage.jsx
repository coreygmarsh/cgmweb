import React from 'react';
import topography from "../../images/svgs/topography.svg";
import { Eser, Harmony, Outdoor, Rootstwo, WaterPerson } from '../../images/ImgAssets';
import Corey from "../../images/Corey.png";
import CustomSlider from './CustomSlider';
import Navbar from '../Navbar/Navbar';
import pattern from "../../images/svgs/pattern.svg";

const slides = [
  {
    title: "Roots",
    imgAlt: "Roots Image",
    content: "1",
    description: "Greetings, I am Corey Marsh, a seasoned digital creative with over a decade of experience harnessing cutting-edge tools like Final Cut Pro, Premiere Pro, After Effects, Canva, and Blender to produce captivating visuals...",
    imgSrc: Rootstwo,
  },
  {
    title: "Vision",
    imgAlt: "Vision Image",
    content: "2",
    description: "My mission is unequivocal: to empower artists and businesses in articulating their narratives through the most compelling visual media...",
    imgSrc: WaterPerson,
  },
  {
    title: "Arsenal",
    imgAlt: "Arsenal Image",
    content: "3",
    description: "My approach is distinguished by an unwavering commitment to understanding your unique story and translating it into a visually compelling narrative...",
    imgSrc: Outdoor,
  },
  {
    title: "Harmony",
    imgAlt: "Harmony Image",
    content: "4",
    description: "Music was my first love, and it continues to influence my work as a digital designer in profound ways...",
    imgSrc: Harmony,
  },
  {
    title: "Values",
    imgAlt: "Values Image",
    content: "5",
    description: "At the heart of my work are the values that guide every project I embark on: creativity, community, and connection...",
    imgSrc: Eser,
  },
];

const AboutPage = () => {
  return (
    <div className="w-full h-screen flex flex-col font-customnine lg:flex-row md:flex-row sm:flex-row overflow-hidden">
      <Navbar />
      <div className="md:w-1/2 relative bg-gradient-to-b from-cyan-900 to-teal-700 bg-opacity-80 flex flex-col justify-center items-center p-8 md:min-h-screen">
        <img 
          src={topography} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
          style={{ opacity: '0.2' }} 
        />
        <div className="z-10 text-center">
          <img 
            src={Corey} 
            alt="Corey G. Marsh" 
            className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-lg" 
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl pt-8 text-white font-bold">Corey G. Marsh</h1>
          <p className="text-2xl md:text-3xl lg:text-4xl pt-8 text-green-300">Creative Designer</p>
        </div>
      </div>
      
      <div className="md:w-1/2 bg-gradient-to-tl from-teal-700 to-cyan-900 text-white p-8 overflow-y-auto relative md:min-h-screen">
        <img 
          src={pattern} 
          alt="Pattern background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
          style={{ opacity: '0.2' }} 
        />
        <div className='pb-4 xl:pb-72 lg:pb-60'></div>
        <CustomSlider slides={slides} />
      </div>
    </div>
  );
};

export default AboutPage;
