import React from "react"
import HeroSection from "./HeroSection"
import SectionTwo from "./SectionTwo"
import HorizontalGallery from "./HorizontalGallery"
import FinalSection from "./FinalSection"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { HeroParallax } from "./HeroParallax"
import { BlackSea, Earth, Eser, Outdoor, Palace, Pool, Subway, Swim, Tension, TwoSub, Underwater, UnderwaterRoad, Very, WaterPerson, WaterRoad, WaveEyes, Waves } from "../../images/ImgAssets"
import { TracingBeam } from "../../ui/TracingBeam"
import topography from "../../images/svgs/topography.svg"

const Landing = () => {
  const mockProducts = [
    { title: "Product 1", link: "/demo", thumbnail: Pool },
    { title: "Product 2", link: "/lyric", thumbnail:  Outdoor},
    { title: "Product 3", link: "/testimonial", thumbnail:  WaterPerson},
    { title: "Product 4", link: "/graphicdesign", thumbnail: TwoSub },
    { title: "Product 5", link: "/founder", thumbnail: Very },
    { title: "Product 6", link: "/motion", thumbnail: Swim },
    { title: "Product 7", link: "/photobook", thumbnail: UnderwaterRoad },
    { title: "Product 8", link: "/event", thumbnail: BlackSea },
    { title: "Product 9", link: "/explainer", thumbnail: Waves },
  
  ];
    return (
      <div className="bg-gradient-to-b from-cyan-800 to-slate-800 bg-opacity-50 h-[5000px]">
        <div className="w-full z-20">
        <Navbar />
       
      </div>
      <TracingBeam>
      {/* Video Background Section */}
      {/* <HeroSection /> */}
      <div>
      <HeroParallax products={mockProducts} />
    </div>
  
      {/* Brand Photo and Message Section */}
      <div
       className="bg-gradient-to-b from-slate-800 via-teal-700 to-cyan-800 "
       ><SectionTwo /></div>
  
      {/* Horizontal Scrolling Gallery */}
      {/* <HorizontalGallery /> */}
  
      {/* Final Section for Graphic/Animation */}
      <div 
      className="bg-gradient-to-b to-slate-800 via-teal-700 from-cyan-800 w-full h-[1100px]"
      ><FinalSection />
      </div>

      <div><Footer/></div>
      </TracingBeam>
    </div>
    )
  }
  export default Landing