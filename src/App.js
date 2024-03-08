import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from './components/About/About'; 
import Library from './components/Library/Library'; 
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';
import AboutSection from "./components/About/AboutSection"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing/>} />
          <Route path="/about" element={<AboutSection/>} />
          <Route path="/library" element={<Library />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />

          </Route>
        </Routes>
    </BrowserRouter>
    
  );
};

export default App;
