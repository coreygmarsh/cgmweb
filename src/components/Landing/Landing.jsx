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
    { title: "Product Demos", link: "/demo", thumbnail: Pool },
    { title: "Lyric Videos", link: "/lyric", thumbnail:  Outdoor},
    { title: "Testimonial Videos", link: "/testimonial", thumbnail:  WaterPerson},
    { title: "Graphics", link: "/graphicdesign", thumbnail: TwoSub },
    { title: "Founder Videos", link: "/founder", thumbnail: Very },
    { title: "Animation", link: "/motion", thumbnail: Swim },
    { title: "Photo Shoots", link: "/photobook", thumbnail: UnderwaterRoad },
    { title: "Event Videos", link: "/event", thumbnail: BlackSea },
    { title: "Explainer Videos", link: "/explainer", thumbnail: Waves },
  
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