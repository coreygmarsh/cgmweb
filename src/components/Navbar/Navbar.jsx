import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogMain from '../../wip/Blog/BlogMain';
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const zIndexClass = isSidebarOpen ? 'z-[80]' : 'z-[50]';

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarVariants = {
    opened: {
      clipPath: `circle(150% at 40px 40px)`,
      opacity: 1,
    },
    closed: {
      clipPath: 'circle(0px at 40px 40px)',
      opacity: 0,
    },
  };

  return (
    <div className={`absolute inset-0 ${zIndexClass} flex antialiased font-customtwo`}>
      {/* Fullscreen Modal */}
      <motion.div
        className="fixed inset-0 z-0 flex justify-center items-start transition-opacity duration-300 bg-black bg-opacity-90"
        animate={isSidebarOpen ? 'opened' : 'closed'}
        variants={sidebarVariants}
        initial={false}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex flex-col flex-1 max-w-screen mx-auto z-50">
          {/* Sidebar content */}
        </div>
      </motion.div>

      <div
        className={`fixed inset-0 z-50 flex justify-center items-start bg-gradient-to-r from-cyan-800 via-teal-700 to-slate-800 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative flex flex-col flex-1 text-white max-w-screen mx-auto z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:shadow-sparkle focus:outline-none focus:ring absolute top-5 right-5"
            aria-label="Close sidebar"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center justify-center flex-shrink-0 p-4 mt-4">
            <a href="#" className="text-white">
              {/* <img className="h-20 w-20" src={MyLogoone} alt="Logo" /> */}
            </a>
          </div>

          <nav className="flex flex-col font-customtwo tracking-widest z-[70] pt-14 items-center p-12">
            <Link
              to="/"
              className="py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hover:text-green-300 nav-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hover:text-green-300 nav-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/blog"
              className="py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hover:text-green-300 nav-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              BLOG
            </Link>
            <Link
              to="/testimonials"
              className="py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hover:text-green-300 nav-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              to="/library"
              className="py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hover:text-green-300 nav-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              LIBRARY
            </Link>
            <Link
              to="/contact"
              className="py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hover:text-green-300 nav-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center flex-1 relative z-10">
        <button
          onClick={toggleSidebar}
          className={`fixed p-2 bg-transparent rounded-full hover:shadow-sparkle top-5 left-10 md:top-5 md:left-5 z-50 ${isSidebarOpen ? 'hidden' : ''}`}
          aria-label="Open sidebar"
        >
          <svg className="md:w-6 md:h-6 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
