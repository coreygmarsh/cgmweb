import React from 'react';
import topography from "../../images/svgs/topography.svg";
import { Eser, Harmony, Outdoor, Pool, PortraitMainOne, Roots, Rootstwo, Very, WaterPerson, WaterRoad } from '../../images/ImgAssets';
import Corey from "../../images/Corey.png"
import CustomSlider from './CustomSlider';
import Navbar from '../Navbar/Navbar';
import pattern from "../../images/svgs/pattern.svg";

const slides = [
  {
    title: "Roots",
    imgAlt: "",
    content: "1", // existing content
    description: "Greetings, I am Corey Marsh, a seasoned digital creative with over a decade of experience harnessing cutting-edge tools like Final Cut Pro, Premiere Pro, After Effects, Canva, and Blender to produce captivating visuals. My journey began in the realm of music as a passionate musician and songwriter, where every harmony and lyric woven together formed a narrative awaiting expression. This foundational expertise in storytelling, coupled with my fervent interests in soccer and basketball, has fostered a unique approach to digital design. ",
    imgSrc: Rootstwo
  },
  {
    title: "Vision",
    imgAlt: "",
    content: "2", // existing content
    description: "My mission is unequivocal: to empower artists and businesses in articulating their narratives through the most compelling visual media. I vividly recall my former aspirations as an artist, yearning for a dedicated team to manage the ancillary demands, allowing me to focus solely on my craft. Today, I have become that invaluable resource for others, ensuring they can channel their creative energies without the distractions of maintaining a digital presence. Whether you are an artist seeking to concentrate on your artistic pursuit or a business striving to amplify your online visibility and credibility, I am committed to supporting your vision.",
    imgSrc: WaterPerson
  },
  {
   
    title: "Arsenal",
    imgAlt: "",
    content: "3", // existing content
    description: "My approach is distinguished by an unwavering commitment to understanding your unique story and translating it into a visually compelling narrative. Through meticulous attention to detail and a keen eye for aesthetics, I ensure that every element, from color palettes to motion graphics, harmoniously aligns to convey your message with maximum impact.I take immense pride in my versatility as a creator, adeptly catering to a diverse array of artistic endeavors across various creative disciplines. ",
    imgSrc: Outdoor
  },
  {
    
    title: "Harmony",
    imgAlt: "",
    content: "4", // existing content
    description: "Music was my first love, and it continues to influence my work as a digital designer in profound ways. The rhythms and melodies that once filled my world now find their expression in the visual stories I create. Music taught me the importance of harmony, not just in sound, but in the stories we tell and the emotions we share. It has given me a unique perspective on design, allowing me to blend colors, shapes, and movements with the same care and intention that I would a musical composition. This musical past is not just a part of my history; it's a cornerstone of my creative process, enabling me to design with emotion, rhythm, and flow.    ",
    imgSrc:Harmony
  },
  {
    id: 5,
    title: "Values",
    imgAlt: "",
    content: "5", // existing content
    description: "At the heart of my work are the values that guide every project I embark on: creativity, community, and connection. I believe in creating not just with skill, but with heart, ensuring that every piece tells a story, evokes an emotion, or captures a moment. Building a community of creators and clients is paramount, as it fosters an environment of support and inspiration. It's important to me that this space serves as a haven for creative minds to explore, share, and grow together. By prioritizing these values, I aim to not only succeed as a graphic designer and content creator but to contribute to a larger narrative of collective creativity and innovation.",
    imgSrc: Eser
  },
  
  
  
];

const AboutPage = () => {
  return (
    <div className="w-full h-screen flex flex-col font-customnine md:flex-row">
      <Navbar/>
      <div className="md:w-1/2 relative bg-gradient-to-b from-cyan-900 to-teal-700 bg-opacity-80 flex flex-col justify-center items-center p-8"> {/* Adjusted for flexbox centering */}
        <img 
          src={topography} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
          style={{ opacity: '0.2' }} 
        />
        <div className="z-10 text-center"> {/* Center text and remove padding */}
          <img 
            src={Corey} 
            alt="Corey G. Marsh" 
            className=" rounded-lg " // Center the image horizontally
            style={{ maxWidth: '100%', maxHeight: '100%' }} // Adjust the size as required
          />
          <h1 className="text-8xl pt-8 text-white font-bold">Corey G. Marsh</h1>
          <p className="text-6xl pt-8 text-green-300">Creative Designer</p>
        </div>
      </div>
      
      <div className="md:w-1/2 bg-teal-700 text-white p-8 overflow-y-auto">
      <img 
          src={pattern} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
          style={{ opacity: '0.2' }} 
        />
        <h2 className="text-7xl font-bold mb-3 text-center pb-48">About</h2>
        <CustomSlider className="rounded-full " slides={slides} />
        {/* <p className="text-lg mb-4">
          I am a tech-savvy individual with a Bachelor's degree in Software Development, seeking employment as a
          mobile game developer. I am passionate about consistently advancing my knowledge and skills. I have attended multiple seminars and boot camps on
          coding and game development.
        </p> */}
        {/* Include other elements like navigation arrows here */}

      </div>
    </div>
  );
};

export default AboutPage;
