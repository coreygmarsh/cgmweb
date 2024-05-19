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
import PricingTable from "./components/PricingTable"
import Professional from './Packages/Professional';
import Basic from './Packages/Basic';
import Enterprise from "./Packages/Enterprise"
import ParallaxGallery from './components/Library/ParallaxGallery';
const App = () => {
  return (
    <BrowserRouter className="">
        <Routes>
          <Route path="/">
            <Route index element={<Landing/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/library" element={<Library />} />

          <Route path="/testimonials" element={<Services/>} />
            <Route path="/basic" element={<Basic/>} />
            <Route path="/professional" element={<Professional/>} />
            <Route path="/enterprise" element={<Enterprise/>} />

          <Route path="/contact" element={<Contact />} />

          </Route>
        </Routes>
    </BrowserRouter>
    
  );
};

export default App;
