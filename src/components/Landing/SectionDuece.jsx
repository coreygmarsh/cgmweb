import React from "react";
import { motion } from "framer-motion";
import { BlackSea, VideoG, GraphicG, AudioG, ConsultationG, watertexture } from "../../images/ImgAssets";

export const SectionDeuce = () => {
  const services = [
    {
      title: "🎬 Video Creation & Editing",
      image: VideoG,
      description: "We specialize in creating captivating video content, including corporate videos, product demos, event coverage, and case studies, to tell your brand's story and engage your audience."
    },
    {
      title: "✨ Graphic & Motion Design",
      image: GraphicG,
      description: "Our team crafts eye-catching graphic designs and motion graphics, including brand identities, social media visuals, and animated elements that elevate your brand's digital presence."
    },
    {
      title: "🎧 Audio & Sound Design",
      image: AudioG,
      description: "Enhance your content with professional sound design, and benefit from our strategic consulting services to optimize your storytelling, content strategy, and platform performance."
    },
    {
      title: "🛠️ Creative Solutions",
      image: ConsultationG,
      description: "We offer end-to-end content management, creative workshops, and one-on-one consulting to help you refine your approach, maximize your content's impact, and elevate your brand."
    }
  ];

  return (
    <div
      className="min-h-screen py-12 md:py-20 overflow-hidden bg-center bg-cover w-full relative flex flex-col"
      style={{ backgroundImage: `url(${watertexture})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 via-teal-700 to-cyan-800 opacity-95" />

      {/* Services Guide Section */}
      <div className="relative z-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-8xl text-green-300 font-customtwo tracking-widest mb-8 sm:mb-12">
          SERVICES
        </h2>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br to-teal-900 from-slate-950 p-4 sm:p-6 rounded-lg shadow-sparkle transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 2, y: -10, transition: { duration: 0.3 } }} // Custom hover with motion
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 sm:h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-green-200 font-customtwo mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm font-customnine text-white">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
