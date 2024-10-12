import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProductDemos, BlackSea } from '../images/ImgAssets';
import Navbar from '../components/Navbar/Navbar';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: 'All', key: 'all' },
  { name: 'Product Demos', key: 'Tech' },
  { name: 'Short Form Ads', key: 'entertainment' },
  { name: 'Training Videos', key: 'trainingvideos' },
  { name: 'Testimonials', key: 'testimonials' },
  { name: 'Explainer', key: 'explainer' },
  { name: 'Graphics', key: 'graphics' },
  { name: 'Soundtracks', key: 'soundtracks' },
];

const itemsData = [
  { title: "Tech X Squared", image: ProductDemos, category: "Tech", videoUrl: "vlFqThlpCBs" },
  { title: "Traveler's Voyage", image: ProductDemos, category: "Tech", videoUrl: "RUoFXveMhzM" },
  { title: "P Sonar Plus", image: ProductDemos, category: "Tech", videoUrl: "yITOKo-HQOY" },
  { title: "S Hair Food", image: ProductDemos, category: "Tech", videoUrl: "fW0J5vSZrag" },
  { title: "S Hair Food", category: "Tech", videoUrl: "fW0J5vSZrag" },
  { title: "S Hair Food", category: "Tech", videoUrl: "fW0J5vSZrag" },
  
  { title: "Tension", image: "https://res.cloudinary.com/dslyk2gn3/image/upload/v1728441540/Wavey_f2vzvw.png", category: "graphics",  },
  { title: "Tension", image: "https://res.cloudinary.com/dslyk2gn3/image/upload/v1728441539/BlossomingF_fm6z3h.png", category: "graphics",  },
  { title: "Tension", image: "https://res.cloudinary.com/dslyk2gn3/image/upload/v1728441538/BirdSoaring_ydtoef.png", category: "graphics",  },
  { title: "Tension", image: "https://res.cloudinary.com/dslyk2gn3/image/upload/v1728441538/Tension_viiyna.jpg", category: "graphics",  },

];

const Card = ({ children }) => (
  <div className="relative z-10 h-full rounded-lg overflow-hidden shadow-sparkle group">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-purple-600 to-pink-600 bg-[length:200%_200%] bg-left-top transition-all duration-500 group-hover:animate-gradientMove"></div>
    <div className="relative bg-teal-800">
      {children}
    </div>
  </div>
);

const ContentCard = ({ title, category, videoUrl, image }) => (
  <Card>
    <div className="flex flex-col h-full">
      {videoUrl ? (
        <div className="flex-grow">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="relative z-30 aspect-video"
          ></iframe>
        </div>
      ) : image ? (
        <div className="flex-grow">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}
    </div>
    
  </Card>
);

const LibraryThree = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Background animation
    gsap.to(containerRef.current, {
      backgroundPosition: "center 30%",
      duration: 20,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Staggered card animation
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardRefs.current,
          start: "top 80%",
        },
      }
    );
  }, [activeCategory]);

  const filteredItems = activeCategory === 'all'
    ? itemsData
    : itemsData.filter(item => item.category === activeCategory);

  return (
    <div ref={containerRef} className='relative bg-gradient-to-b min-h-screen from-teal-800 font-customnine via-cyan-600 to-cyan-700'>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover mix-blend-overlay opacity-100"
        style={{ backgroundImage: `url(${BlackSea})` }}
      ></div>
      <div className="relative z-10 bg-gradient-to-tr min-h-screen via-slate-900 from-teal-600 to-cyan-900 mx-auto max-w-7xl shadow-sparkle p-4 sm:p-6 md:p-8 lg:p-12">
        <h1 className='text-4xl sm:text-5xl md:text-6xl tracking-widest font-customnine text-center pt-6 text-green-300'>LIBRARY</h1>
        
        <div className="flex flex-wrap justify-center mt-6 gap-2">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`px-3 py-1 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 ${
                activeCategory === cat.key ? 'bg-green-500 scale-105 shadow-lg' : 'bg-transparent'
              } hover:bg-green-400 hover:scale-105`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredItems.map((item, index) => (
            <div ref={el => cardRefs.current[index] = el} key={index}>
              <ContentCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryThree;
