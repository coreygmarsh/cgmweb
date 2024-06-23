import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Library from './components/Library/Library'; 
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';
import Services from './components/Services';
import { BentoGrid, TypewriterEffect } from './components/utils/BentoGrid';
import AboutPage from './components/About/AboutPage';
import PricingTable from "./components/PricingTable"
import Professional from './Packages/Professional';
import Basic from './Packages/Basic';
import Enterprise from "./Packages/Enterprise"
import ParallaxGallery from './components/Library/ParallaxGallery';
import Section1 from "./components/Library/Sections/Section1"
import Section2 from "./components/Library/Sections/Section2"
import Section3 from "./components/Library/Sections/Section3"
import Section4 from "./components/Library/Sections/Section4"
import Section5 from "./components/Library/Sections/Section5"
import Section6 from "./components/Library/Sections/Section6"
import Section7 from "./components/Library/Sections/Section7"
import Section8 from "./components/Library/Sections/Section8"
import Section9 from "./components/Library/Sections/Section9"
import Section10 from "./components/Library/Sections/Section10"
import Success from './wip/Success';
import Cancel from './wip/Cancel';
const App = () => {
  return (
    <BrowserRouter className="">
        <Routes>
          <Route path="/">
            <Route index element={<Landing/>} />
          <Route path="/about" element={<AboutPage/>} />
          
          <Route path="/library" element={<Library />} />
            <Route path="/demo" element={<Section1 />} />
            <Route path="/lyric" element={<Section2 />} />
            <Route path="/testimonial" element={<Section3 />} />
            <Route path="/graphicdesign" element={<Section4 />} />
            <Route path="/founder" element={<Section5 />} />
            <Route path="/motion" element={<Section6 />} />
            <Route path="/photobook" element={<Section7 />} />
            <Route path="/event" element={<Section8 />} />
            <Route path="/explainer" element={<Section9/>} />
            <Route path="/wedding" element={<Section10 />} />

          <Route path="/testimonials" element={<Services/>} />
            <Route path="/basic" element={<Basic/>} />
            <Route path="/professional" element={<Professional/>} />
            <Route path="/enterprise" element={<Enterprise/>} />
            <Route path="/success" element={<Success/>} />
            <Route path="/cancel" element={<Cancel/>} />
          <Route path="/contact" element={<Contact />} />

          </Route>
        </Routes>
    </BrowserRouter>
    
  );
};

export default App;
