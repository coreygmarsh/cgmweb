import React from 'react';
import Carousel from '../Carousel'; // Adjust the path as necessary
import { Caustics, Eser, Outdoor, Pool, Subway, WaterPerson, WaterRoad } from '../../images/ImgAssets';

import Navbar from '../Navbar/Navbar';


const aboutItems = [
  {
    id: 1,
    title: "Roots",
    content: "1", // existing content
    description: "My journey into graphic design and content creation, sparked by a deep love for music, taught me the power of storytelling and expression, evolving my skills from creating harmonies to designing digital experiences. This transition wasn't merely a shift in mediums but a continuation of my desire to communicate, leading me naturally into videography, photography, and digital design. Each project I undertake carries the passion and dedication of my early musical exploration, making my work a personal narrative. ",
    backgroundImage: WaterRoad
  },
  {
    id: 2,
    title: "Vision",
    content: "2", // existing content
    description: "At the heart of my vision is bridging the gap between imagination and digital functionality, creating stories that not only meet but surpass client expectations, breathing life into their visions. I aim to create a boundless creative space, driving towards a vibrant community of creators, clients, and audiences united by a passion for innovation and artistry. Through this website, I aspire to showcase my capabilities and welcome others into our expanding circle of creativity and collaboration.",
    backgroundImage: WaterPerson
  },
  {
    id: 3,
    title: "Arsenal",
    content: "3", // existing content
    description: "My toolkit encompasses expertise in Photoshop and Canva, for graphic design to Final Cut Pro and Premiere Pro for video editing, reflects the diversity of my digital creation skills. With additional expertise in Capcut, After Effects for enhancements, and proficiency in the MERN Stack and Blender for web design and 3D modeling, I can bring almost any idea to life. This array of software and technologies is a testament to my commitment to versatility and excellence in my field.",
    backgroundImage: Outdoor
  },
  {
    id: 4,
    title: "Harmony",
    content: "4", // existing content
    description: "Music was my first love, and it continues to influence my work as a digital designer in profound ways. The rhythms and melodies that once filled my world now find their expression in the visual stories I create. Music taught me the importance of harmony, not just in sound, but in the stories we tell and the emotions we share. It has given me a unique perspective on design, allowing me to blend colors, shapes, and movements with the same care and intention that I would a musical composition.", 
    // This musical past is not just a part of my history; it's a cornerstone of my creative process, enabling me to design with emotion, rhythm, and flow.    ",
    backgroundImage:Pool
  },
  {
    id: 5,
   title: "Values",
    content: "5", // existing content
    description: "At the heart of my work are the values that guide every project I embark on: creativity, community, and connection. I believe in creating not just with skill, but with heart, ensuring that every piece tells a story, evokes an emotion, or captures a moment. Building a community of creators and clients is paramount, as it fosters an environment of support and inspiration. It's important to me that this space serves as a haven for creative minds to explore, share, and grow together.",
    //  By prioritizing these values, I aim to not only succeed as a graphic designer and content creator but to contribute to a larger narrative of collective creativity and innovation.",
    backgroundImage: Eser
  },
  
  
  
];

const About = () => {
  return (
    <div className="bg-gradient-to-b px-24 from-cyan-800 via-teal-700 to-slate-800 h-[100vh] flex-col w-[100vw]">
      <Navbar/> 
    {/* <p className='text-9xl font-customeight tracking-widest text-green-300 font-bold mb-4 pt-8 text-center'>About</p> */}
      {/* <div className='pt-24'><CardStack items={aboutItems} /></div> */}
      
    </div>
  );
};


export default About