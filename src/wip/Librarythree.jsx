import React, { useState } from 'react';
import { ProductDemos, BlackSea } from '../images/ImgAssets';
import Navbar from '../components/Navbar/Navbar';

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
  { title: "S Hair Food", image: ProductDemos, category: "Beauty", videoUrl: "fW0J5vSZrag" },
];

const Card = ({ children }) => (
  <div className="relative z-10 h-full rounded-lg overflow-hidden shadow-sparkle group">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-purple-600 to-pink-600 bg-[length:200%_200%] bg-left-top transition-all duration-500 group-hover:animate-gradientMove"></div>
    <div className="relative  bg-teal-800">
      {children}
    </div>
  </div>
);



const ContentCard = ({ title, category, videoUrl }) => (
  <Card>
    <div className=" flex flex-col h-full">
      {/* <h3 className="font-bold text-center text-white text-sm mb-2">{title}</h3> */}
      {/* <p className='text-xs text-center text-white mb-4'>{category}</p> */}
      {videoUrl && (
        <div className="flex-grow">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            // title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="relative z-30 aspect-video"
          ></iframe>
        </div>
      )}
    </div>
  </Card>
);

const LibraryThree = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? itemsData
    : itemsData.filter(item => item.category === activeCategory);

  return (
    <div className='relative bg-gradient-to-b min-h-screen from-teal-800 font-customnine via-cyan-600 to-cyan-700'>
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
              className={`px-3 py-1 text-white text-xs sm:text-sm font-semibold rounded-lg ${
                activeCategory === cat.key ? 'bg-green-500' : 'bg-transparent'
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredItems.map((item, index) => (
            <ContentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryThree;