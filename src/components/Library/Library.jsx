import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from "../Navbar/Navbar";
import "../../index.css";
import pattern from "../../images/svgs/pattern.svg";
import { Caustics, Danita, LetMeLoose } from '../../images/ImgAssets';
// import Section1 from "../Library/Sections/Section1"

const content = [
  { title: "Product Demos", description: "Product Demo Videos", content: <div>Detailed content for section 1</div>, image: Caustics, link: "/demo" },
  { title: "Lyric Videos", description: "Lyric Videos", content: <div>Detailed content for section 2</div>, image: Caustics, link: "/lyric" },
  { title: "Testimonials", description: "Testimonials", content: <div>Detailed content for section 3</div>, image: Caustics, link: "/testimonial" },
  { title: "Graphics", description: "Graphic Design", content: <div>Detailed content for section 4</div>, image: LetMeLoose, link: "/graphicdesign" },
  { title: "Founder Videos", description: "Founder Videos", content: <div>Detailed content for section 5</div>, image: Caustics, link: "/founder" },
  { title: "Motion Graphics", description: "Motion Graphics", content: <div>Detailed content for section 6</div>, image: Caustics, link: "/motion" },
  { title: "Photo Shoots", description: "Animations", content: <div>Detailed content for section 7</div>, image: Danita, link: "/photobook" },
  { title: "Event Videos", description: "Event videos", content: <div>Detailed content for section 8</div>, image: Caustics, link: "/event" },
  { title: "Explainer Videos", description: "Explainer videos", content: <div>Detailed content for section 9</div>, image: Caustics, link: "/explainer" },
  { title: "Wedding", description: "Wedding", content: <div>Detailed content for section 10</div>, image: Caustics, link: "/wedding" },
];

const Library = () => {
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let index = 0;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          index = i - 1; 
        }
      });

      setActiveSection(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (link) => {
    navigate(link);
  };

  // Define your animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '100vw',
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5,
  };

  return (
    <div className='relative min-h-screen bg-gradient-to-b from-cyan-800 via-teal-700 to-slate-800'>
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-30"
        style={{ backgroundImage: `url(${pattern})` }}
      ></div>

      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative z-10 mx-24 min-h-screen bg-gradient-to-b from-cyan-800 to-slate-900 shadow-sparkle via-teal-700"
      >
        <Navbar />
        <h1 className='text-center z-[70] pt-12 text-green-300 text-5xl md:text-7xl lg:text-9xl font-customnine tracking-widest'>
          LIBRARY
        </h1>
        <div className="flex justify-center items-center text-center z-50 flex-wrap mx-4 md:mx-12 lg:mx-24 mt-12">
          <div className="flex w-full">
            <div className="main w-2/3 m-5">
              {content.map((item, index) => (
                <div key={index} className="section w-full h-96 bg-gradient-to-r from-teal-600 to-cyan-700 mb-5 rounded-lg relative">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full p-12 object-cover rounded-xl opacity-75" />
                  <h2 className="relative text-3xl text-white z-10">{item.title}</h2>
                </div>
              ))}
            </div>
            <div className="sidebar z-[40] w-1/3 m-5 sticky top-40 h-screen">
              <div className="content-wrapper h-96 p-5 bg-gradient-to-tl from-cyan-900 to-teal-600 rounded-lg shadow-lg">
                <h2 className="text-3xl text-white">{content[activeSection].title}</h2>
                <p className="mt-4 text-white">{content[activeSection].description}</p>
                <div className="mt-4 text-white">{content[activeSection].content}</div>
                <button
                  className="mt-4 bg-green-500 hover:cursor-pointer z-[90] text-white py-2 px-4 rounded hover:bg-green-700"
                  onClick={() => handleButtonClick(content[activeSection].link)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Library;
