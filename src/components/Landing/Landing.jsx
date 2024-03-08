import React from "react"
import HeroSection from "./HeroSection"
import SectionTwo from "./SectionTwo"
import HorizontalGallery from "./HorizontalGallery"
import FinalSection from "./FinalSection"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
const Landing = () => {
    return (
      <div className="App">
        <div className="w-full z-20">
        <Navbar />
      </div>
      {/* Video Background Section */}
      <HeroSection />
  
      {/* Brand Photo and Message Section */}
      <SectionTwo />
  
      {/* Horizontal Scrolling Gallery */}
      <HorizontalGallery />
  
      {/* Final Section for Graphic/Animation */}
      <FinalSection />

      {/* <Footer/> */}
    </div>
    )
  }
  export default Landing