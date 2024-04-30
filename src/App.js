import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from './components/About/About'; 
import Library from './components/Library/Library'; 
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';
import Services from './components/Services';
import { BentoGrid, TypewriterEffect } from './components/utils/BentoGrid';
import Slider from './components/Carousel';
import Carousel from './components/Carousel';
import AboutPage from './components/About/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/library" element={<Library />} />
          <Route path="/testimonials" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          </Route>
        </Routes>
    </BrowserRouter>
    
  );
};

export default App;
