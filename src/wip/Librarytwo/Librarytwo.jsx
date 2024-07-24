import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Animations, BlackSea, EventVideos, ExplainerVideos, FounderVideos, Graphics, LyricVideos, ProductDemos, Testimonials } from '../../images/ImgAssets';
import pattern from "../../images/svgs/pattern.svg";

const Librarytwo = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const projects = [
    { id: 1, title: "", description: "Description for Project 1", image:ProductDemos },
    { id: 2, title: "", description: "Description for Project 2", image: LyricVideos },
    { id: 3, title: "", description: "Description for Project 3", image: Testimonials },
    { id: 4, title: "", description: "Description for Project 4", image: Graphics},
    { id: 5, title: "", description: "Description for Project 5", image: FounderVideos },
    { id: 6, title: "", description: "Description for Project 6", image: Animations },
    { id: 7, title: "Photo Shoots", description: "Description for Project 7", },
    { id: 8, title: "", description: "Description for Project 8", image: EventVideos },
    { id: 9, title: "", description: "Description for Project 9", image: ExplainerVideos },
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return ( 
    <div className='relative min-h-screen font-customnine bg-gradient-to-b from-teal-800 via-cyan-600 to-slate-900'>
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-10"
        style={{ backgroundImage: `url(${pattern})` }}
      ></div>
    
      <div className="relative z-10 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 min-h-screen bg-gradient-to-b from-cyan-950 to-slate-900 shadow-sparkle via-teal-700">  
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover mix-blend-overlay opacity-80"
          style={{ backgroundImage: `url(${BlackSea})` }}
        ></div>
        <div className="relative z-10">
          <header className="p-4">
            <Navbar />
          </header>
          
          <main className="p-4">
            <p className='text-center text-6xl text-green-300 tracking-widest pb-12'>LIBRARY</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className={`aspect-video bg-teal-800 rounded-lg overflow-hidden shadow-sparkle cursor-pointer transition-all duration-300 ${expandedCard === project.id ? 'col-span-full row-span-2' : ''}`}
                  onClick={() => handleCardClick(project.id)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-teal-700 to-teal-900 flex flex-col items-center justify-center relative">
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-100" />
                    <span className="text-3xl font-bold text-cyan-300 z-10">{project.title}</span>
                    {expandedCard === project.id && (
                      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </main>
          
          <footer className="p-4 mt-8">
            <p className="text-sm text-gray-400">&copy; 2024 Corey G. Marsh</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Librarytwo;