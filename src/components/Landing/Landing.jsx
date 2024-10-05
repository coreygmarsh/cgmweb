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
import { CallToAction } from "./CallToAction"


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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-800 to-slate-800">
      <div className="w-full z-20">
        <Navbar />
      </div>
      <TracingBeam className="flex-grow">
        <div>
          <HeroParallax products={mockProducts} />
        </div>
  
        <div className="bg-gradient-to-b from-slate-800 via-teal-700 to-cyan-800">
          <SectionTwo />
        </div>
        <div className="bg-gradient-to-b to-slate-800 via-teal-700  from-cyan-800">
          <CallToAction />
        </div>
  
        <div className="bg-gradient-to-b to-slate-800 via-teal-700 pb-2 md:pb-4  from-cyan-800">
          <FinalSection />
        </div>
      </TracingBeam>
      <Footer />
    </div>
  )
}

export default Landing