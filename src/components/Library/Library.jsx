import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import "../../index.css";
import pattern from "../../images/svgs/pattern.svg";
import { Animations, BlackSea, Danita, EventVideos, ExplainerVideos, FounderVideos, Graphics, LyricVideos, ProductDemos, Testimonials } from '../../images/ImgAssets';

const content = [
  {
    title: "Product Demos",
    content: (
      <div>
        Elevate your brand with our professional product videos that highlight your product's
        unique features and benefits, captivating your audience and driving engagement.
        Our expert video editing team will bring your product to life, showcasing its practical
        uses and advantages in a visually compelling way. Partner with us to create powerful
        product videos that convert viewers into loyal customers.
      </div>
    ),
    image: ProductDemos,
    link: "/demo"
  },
  {
    title: "Lyric Videos",
    content: (
      <div>
        Transform your music with our stunning lyric videos that captivate
        and engage your audience. Our talented video editing team will bring
        your lyrics to life with visually appealing animations and synchronized
        text, enhancing your song's impact. Partner with us to create compelling
        lyric videos that resonate with listeners and elevate your brand.
      </div>
    ),
    image: LyricVideos,
    link: "/lyric"
  },
  {
    title: "Testimonials",
    content: (
      <div>
        Boost your credibility with our powerful testimonial videos that showcase
        authentic customer experiences. Our skilled video editing team will craft
        engaging narratives that highlight positive feedback and build trust with
        your audience. Partner with us to create compelling testimonial videos that
        convert prospects into loyal customers.
      </div>
    ),
    image: Testimonials,
    link: "/testimonial"
  },
  {
    title: "Graphics",
    content: (
      <div>
        Enhance your brand's visual appeal with our expertly designed graphics
        that capture and engage your audience. Our creative team will craft
        stunning visuals tailored to your brand, ensuring consistency and
        professionalism across all platforms. Partner with us to create
        eye-catching graphics that elevate your brand and leave a lasting impression.
      </div>
    ),
    image: Graphics,
    link: "/graphicdesign"
  },
  {
    title: "Founder Videos",
    content: (
      <div>
        Showcase the heart of your company with our engaging founder videos
        that tell your unique story. Our expert video editing team will highlight
        your vision, values, and journey, creating a personal connection with your
        audience. Partner with us to create inspiring founder videos that build trust
        and resonate with viewers.
      </div>
    ),
    image: FounderVideos,
    link: "/founder"
  },
  {
    title: "Animations",
    content: (
      <div>
        Bring your ideas to life with our captivating animations that engage
        and delight your audience. Our skilled animation team will create dynamic,
        visually stunning animations tailored to your brand's message and goals.
        Partner with us to create memorable animations that elevate your content
        and leave a lasting impact.
      </div>
    ),
    image: Animations,
    link: "/motion"
  },
  {
    title: "Photo Shoots",
    content: (
      <div>
        Capture the essence of your brand with our professional photo shoots
        that highlight your products and services. Our experienced photography
        team will create stunning visuals that tell your story and connect with
        your audience. Partner with us for high-quality photo shoots that elevate
        your brand's image and drive engagement.
      </div>
    ),
    image: Danita,
    link: "/photobook"
  },
  {
    title: "Event Videos",
    content: (
      <div>
        Relive your special moments with our expertly crafted event videos that capture
        every highlight. Our skilled video editing team will transform your event footage
        into a dynamic, engaging narrative that showcases the best moments. Partner with
        us to create memorable event videos that connect with your audience and preserve
        the excitement.
      </div>
    ),
    image: EventVideos,
    link: "/event"
  },
  {
    title: "Explainer Videos",
    content: (
      <div>
        Simplify complex concepts with our engaging explainer videos that effectively
        communicate your message. Our expert video editing team will create clear,
        concise, and visually appealing videos that break down your ideas and captivate
        your audience. Partner with us to produce impactful explainer videos that enhance
        understanding and drive action.
      </div>
    ),
    image: ExplainerVideos,
    link: "/explainer"
  }
];

const Library = () => {
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let index = 0;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          index = i;
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
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-10"
        style={{ backgroundImage: `url(${pattern})` }}
      ></div>
    
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative z-10 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 min-h-screen bg-gradient-to-b from-cyan-950 to-slate-900 shadow-sparkle via-teal-700"
      >  
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover mix-blend-overlay opacity-80"
          style={{ backgroundImage: `url(${BlackSea})` }}
        ></div>
        <Navbar />
        <h1 className='text-center z-[70] pt-12 text-green-300 text-5xl md:text-7xl lg:text-9xl font-customnine tracking-widest'>
          LIBRARY
        </h1>
        <div className="flex justify-center items-center text-center z-50 flex-wrap mx-4 md:mx-12 lg:mx-24 mt-12">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="main w-full md:w-1/2 m-5">
              {content.map((item, index) => (
                <div key={index} className="section w-full h-96 bg-gradient-to-r from-teal-600 to-cyan-700 mb-5 rounded-lg relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-60" />
                </div>
              ))}
            </div>
            <div className="sidebar z-[50] w-full lg:w-1/2 m-2 lg:sticky top-40 h-auto lg:h-screen">
              <div className="content-wrapper shadow-sparkle h-auto lg:h-96 p-5 bg-gradient-to-tl from-cyan-900 to-teal-600 rounded-lg overflow-y-auto">
                <h2 className="text-3xl text-white">{content[activeSection]?.title}</h2>
                <div className="mt-4 text-base font-bold font-customnine text-white text-justify">{content[activeSection]?.content}</div>
                <button
                  className="mt-4 bg-green-500 hover:cursor-pointer text-white py-2 px-4 rounded hover:bg-green-700"
                  onClick={() => handleButtonClick(content[activeSection]?.link)}
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
