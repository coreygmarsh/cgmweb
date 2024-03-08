import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {motion} from "framer-motion"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // This function toggles the sidebar state between open and closed
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarVariants = {
    opened: {
      clipPath: `circle(150% at 40px 40px)`, // Adjust the circle size and position according to your layout
      opacity: 1,
    },
    closed: {
      clipPath: "circle(0px at 40px 40px)",
      opacity: 0,
    },
  };
  return (
    <div className="absolute inset-0 z-50 flex antialiased font-customtwo ">
      {/* Fullscreen Modal */}
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-start transition-opacity duration-300 bg-black bg-opacity-80"
        animate={isSidebarOpen ? 'opened' : 'closed'}
        variants={sidebarVariants}
        initial={false}
        transition={{ duration: 0.5 }}
      >
        {/* Sidebar content */}
        <div className="relative flex flex-col flex-1 max-w-screen mx-auto z-50">
          {/* Close button and navigation links */}
        </div>
      </motion.div>
      <div
        className={`fixed inset-0 z-50 flex justify-center items-start bg-cyan-800 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } bg-black bg-opacity-80`}
      >
        <div className="relative flex flex-col flex-1 text-white max-w-screen mx-auto z-50">
          {/* Close button inside the modal */}
          <div className=' text-white'>
          <button onClick={toggleSidebar} className="p-2 rounded-lg focus:outline-none focus:ring absolute top-5 right-5">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          </div>

          <div className="flex items-center justify-center flex-shrink-0 p-4 mt-4">
            <a href="#" className="text-white">
              {/* <img className="h-20 w-20" src={MyLogoone} alt="Logo"/> */}
            </a>
          </div>
          <nav className="flex flex-col font-customtwo items-center p-12">
            <Link to="/" className="py-4 text-8xl hover:text-green-300 text-white" onClick={() => setIsSidebarOpen(false)}>HOME</Link>
            <Link to="/about" className="py-4 text-8xl hover:text-green-300 text-white" onClick={() => setIsSidebarOpen(false)}>ABOUT</Link>
            <Link to="/testimonials" className="py-4 text-8xl hover:text-green-300 text-white" onClick={() => setIsSidebarOpen(false)}>TESTIMONIALS</Link>
            <Link to="/library" className="py-4 text-8xl hover:text-green-300 text-white" onClick={() => setIsSidebarOpen(false)}>LIBRARY</Link>
            <Link to="/contact" className="py-4 text-8xl hover:text-green-300 text-white" onClick={() => setIsSidebarOpen(false)}>CONTACT</Link>
          </nav>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center flex-1 relative z-10">
        {/* Toggle button */}
        <button onClick={toggleSidebar} className={`fixed p-2 bg-transparent rounded-lg top-5 left-5 z-50 ${isSidebarOpen ? 'hidden' : ''}`}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;