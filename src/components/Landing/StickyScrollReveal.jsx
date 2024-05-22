import React, { useEffect } from 'react';


const StickyScrollReveal = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector('.sidebar');
      const sidebarContent = document.querySelector('.content-wrapper');

      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
      const contentHeight = sidebarContent.getBoundingClientRect().height;

      if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
        sidebarContent.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
        sidebarContent.style.position = 'fixed';
      } else {
        sidebarContent.style.transform = '';
        sidebarContent.style.position = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-center bg-transparent text-white font-sans text-lg min-h-screen w-screen z-0">
      <div className="main w-2/3 m-5">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="w-full h-96 bg-gradient-to-r from-teal-600 to-cyan-700 mb-5 rounded-lg"></div>
        ))}
      </div>
      <div className="sidebar w-2/5 m-5">
        <div className="content-wrapper">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-96 h-96 bg-gradient-to-r from-green-600 to-teal-400 mb-5 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollReveal;
