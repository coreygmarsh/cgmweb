import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from "../Navbar/Navbar";
import "../../index.css";
import pattern from "../../images/svgs/pattern.svg";
import { Animations, BlackSea, CausLightning, CausticLightning, Caustics, Danita, EventVideos, ExplainerVideos, FounderVideos, Graphics, GreenLightning, LetMeLoose, LibraryBackground, LyricVideos, ProductDemos, Testimonials, WaveEyes, WavesThree, watertexture } from '../../images/ImgAssets';
import { Waves } from '@mui/icons-material';
import { warmGray } from 'tailwindcss/colors';
// import Section1 from "../Library/Sections/Section1"

const content = [
  { 
    title: "Product Demos", 
    content: (
      <div>
        {/* <h3>What is a Product Demo Video?</h3> */}
        {/* <p>Product demo videos are designed to showcase the features, benefits, and use cases of your products. They help potential customers understand how your product works and why it's valuable.</p> */}
        <h3>Why Use Product Demo Videos?</h3>
        <ul>
          <li>They engage potential customers</li>
          <li>Highlight key features</li>
          <li>Demonstrate use cases</li>
          <li>Increase conversions</li>
        </ul>
        {/* <h3>Examples:</h3> */}
        <p>Check out some of our previous product demo videos to see how we've helped other businesses showcase their products effectively.</p>
      </div>
    ), 
    image: ProductDemos, 
    link: "/demo" 
  },
  { 
    title: "Lyric Videos", 
    content: (
      <div>
        <h3>What is a Lyric Video?</h3>
        {/* <p>Lyric videos display the lyrics of a song on the screen in sync with the music. They are a popular way for artists to engage their audience and enhance the listening experience.</p> */}
        <h3>Benefits of Lyric Videos</h3>
        <ul>
          <li>Engage listeners</li>
          <li>Enhance music sharing</li>
          <li>Boost social media presence</li>
          <li>Increase song accessibility</li>
        </ul>
        <h3>Our Work:</h3>
        <p>Explore our portfolio of lyric videos to see how we've helped artists bring their lyrics to life visually.</p>
      </div>
    ), 
    image: LyricVideos, 
    link: "/lyric" 
  },
  { 
    title: "Testimonials", 
    content: (
      <div>
        <h3>What are Testimonial Videos?</h3>
        {/* <p>Testimonial videos feature real customers sharing their positive experiences with your products or services. They are a powerful tool for building trust and credibility with potential customers.</p> */}
        <h3>Why Testimonial Videos Work</h3>
        <ul>
          <li>Builds trust</li>
          <li>Showcases real experiences</li>
          <li>Increases credibility</li>
          <li>Boosts conversions</li>
        </ul>
        <h3>Client Stories:</h3>
        <p>Watch some of our testimonial videos to see how we've helped businesses like yours build trust with their audience.</p>
      </div>
    ), 
    image: Testimonials, 
    link: "/testimonial" 
  },
  { 
    title: "Graphics", 
    content: (
      <div>
        <h3>What is Graphic Design?</h3>
        {/* <p>Graphic design involves creating visual content to communicate messages. Our services include designing logos, infographics, promotional materials, and more.</p> */}
        <h3>Benefits of Professional Graphics</h3>
        <ul>
          <li>Captures attention</li>
          <li>Enhances brand identity</li>
          <li>Communicates information clearly</li>
          <li>Boosts marketing efforts</li>
        </ul>
        <h3>Our Designs:</h3>
        <p>Check out our portfolio to see the professional graphics we've created for various clients.</p>
      </div>
    ), 
    image: Graphics, 
    link: "/graphicdesign" 
  },
  { 
    title: "Founder Videos", 
    content: (
      <div>
        <h3>What are Founder Videos?</h3>
        {/* <p>Founder videos feature the founders of a company sharing their vision, mission, and the story behind the brand. They create a personal connection with the audience.</p> */}
        <h3>Why Founder Videos Matter</h3>
        <ul>
          <li>Personalize your brand</li>
          <li>Showcase your vision and mission</li>
          <li>Build a connection with your audience</li>
          <li>Enhance brand storytelling</li>
        </ul>
        <h3>Our Founders:</h3>
        <p>Watch some of the founder videos we've created to see how we've helped businesses tell their story.</p>
      </div>
    ), 
    image: FounderVideos, 
    link: "/founder" 
  },
  { 
    title: "Animations", 
    content: (
      <div>
        <h3>What are Animations?</h3>
        {/* <p>Animations are visual representations created using motion graphics. They are used to explain complex concepts, tell stories, and add an engaging element to your content.</p> */}
        <h3>Advantages of Using Animations</h3>
        <ul>
          <li>Engages viewers</li>
          <li>Explains complex concepts</li>
          <li>Enhances storytelling</li>
          <li>Adds visual appeal</li>
        </ul>
        <h3>Our Animation Work:</h3>
        <p>Take a look at our animation portfolio to see how we've brought ideas to life for our clients.</p>
      </div>
    ), 
    image: Animations, 
    link: "/motion" 
  },
  { 
    title: "Photo Shoots", 
    content: (
      <div>
        <h3>What are Photo Shoots?</h3>
        {/* <p>Photo shoots involve capturing professional-quality images for various purposes, including branding, events, and personal projects.</p> */}
        <h3>Benefits of Professional Photo Shoots</h3>
        <ul>
          <li>High-quality images</li>
          <li>Tailored to your needs</li>
          <li>Enhances visual appeal</li>
          <li>Supports branding efforts</li>
        </ul>
        <h3>Our Photography:</h3>
        <p>Explore our photo shoot portfolio to see the high-quality images we've captured for our clients.</p>
      </div>
    ), 
    image: Danita, 
    link: "/photobook" 
  },
  { 
    title: "Event Videos", 
    content: (
      <div>
        <h3>What are Event Videos?</h3>
        {/* <p>Event videos capture the highlights and important moments of special events, creating a lasting memory that can be shared and cherished.</p> */}
        <h3>Why Choose Event Videos?</h3>
        <ul>
          <li>Capture special moments</li>
          <li>Create lasting memories</li>
          <li>Share with friends and family</li>
          <li>Professional quality</li>
        </ul>
        <h3>Our Event Highlights:</h3>
        <p>Watch some of the event videos we've created to see how we've captured special moments for our clients.</p>
      </div>
    ), 
    image: EventVideos, 
    link: "/event" 
  },
  { 
    title: "Explainer Videos", 
    content: (
      <div>
        <h3>What are Explainer Videos?</h3>
        {/* <p>Explainer videos use visuals and narratives to break down complex concepts into easy-to-understand information, making it accessible to a broader audience.</p> */}
        <h3>Benefits of Explainer Videos</h3>
        <ul>
          <li>Simplifies complex information</li>
          <li>Engages viewers</li>
          <li>Increases understanding</li>
          <li>Enhances communication</li>
        </ul>
        <h3>Our Explainers:</h3>
        <p>Check out our portfolio of explainer videos to see how we've helped clients simplify their messages.</p>
      </div>
    ), 
    image: ExplainerVideos, 
    link: "/explainer" 
  },
  { 
    title: "Wedding", 
    content: <div>Detailed content for section 10</div>, 
    image: LibraryBackground, 
    link: "/wedding" 
  },
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
    <div className='relative min-h-screen bg-gradient-to-b from-teal-800 via-cyan-600 to-slate-900'>
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover  opacity-10"
        style={{ backgroundImage: `url(${pattern})` }}
      ></div>
    
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative z-10 mx-24 min-h-screen bg-gradient-to-b from-cyan-950 to-slate-900 shadow-sparkle via-teal-700"
      >  
      <div
        className="absolute top-0 left-0  w-full h-full bg-center bg-cover mix-blend-overlay opacity-80"
        style={{ backgroundImage: `url(${BlackSea})` }}
      ></div>
        <Navbar />
        <h1 className='text-center z-[70] pt-12 text-green-300 text-5xl md:text-7xl lg:text-9xl font-customnine tracking-widest'>
          LIBRARY
        </h1>
        <div className="flex justify-center items-center text-center z-50 flex-wrap mx-4 md:mx-12 lg:mx-24 mt-12">
          <div className="flex w-full">
            <div className="main w-1/2 m-5">
              {content.map((item, index) => (
                <div key={index} className="section w-full h-96 bg-gradient-to-r from-teal-600 to-cyan-700 mb-5 rounded-lg relative">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full px-8 border shadow-sparkle object-cover rounded-xl opacity-100" />
                </div>
              ))}
            </div>
            <div className="sidebar z-[50] w-1/2 m-2 sticky top-40 h-screen">
              <div className="content-wrapper shadow-sparkle h-96 p-5 bg-gradient-to-tl from-cyan-900 to-teal-600 rounded-lg ">
                <h2 className="text-3xl text-white">{content[activeSection].title}</h2>
                <div className="mt-4 mx-24 font-bold font-customnine text-white">{content[activeSection].content}</div>
                <button
                  className="mt-4 bg-green-500 hover:cursor-pointer  text-white py-2 px-4 rounded hover:bg-green-700"
                  onClick={() => handleButtonClick(content[activeSection].link)}
                >
                  Discover More
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
