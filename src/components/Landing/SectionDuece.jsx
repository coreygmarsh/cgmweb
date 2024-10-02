import React from "react";
import { BlackSea, VideoG, GraphicG, AudioG, ConsultationG } from "../../images/ImgAssets"; // Imported image
import { Waves, watertexture } from "../../images/ImgAssets";

export const SectionDeuce = () => {
  return (
    <div
      className="h-[30vh] xl:h-[100vh] sm:py-10 py-20 overflow-hidden bg-center bg-cover w-full relative flex flex-col self-auto"
      style={{ backgroundImage: `url(${watertexture})` }}
    >
      {/* Services Guide Section */}
      <div className="relative z-50 flex flex-col items-center justify-center text-center px-8">
        <h2 className="text-5xl xl:text-6xl text-green-300 font-customtwo tracking-widest mt-0">
          SERVICES
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
          {/* Video Creation & Editing */}
          <div className="bg-gradient-to-br to-teal-900 from-slate-950 p-6 rounded-lg shadow-sparkle transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-2 animate-fadeIn">
            <img
              src={VideoG} // Using the BlackSea image as the placeholder
              alt="Video Creation & Editing"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-green-200 font-customtwo">
              🎬 Video Creation & Editing
            </h3>
            <p className="mt-4 text-xs font-customnine text-white">
              We specialize in creating captivating video content, including corporate videos,
              product demos, event coverage, and case studies, to tell your brand's story and engage your audience.
            </p>
          </div>

          {/* Graphic & Motion Design */}
          <div className="bg-gradient-to-br to-teal-900 from-slate-950 p-6 rounded-lg shadow-sparkle transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-2 animate-fadeIn">
            <img
              src={GraphicG}
              alt="Graphic & Motion Design"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-customtwo font-bold text-green-200">
              ✨ Graphic & Motion Design
            </h3>
            <p className="mt-4 text-xs font-customnine text-white">
              Our team crafts eye-catching graphic designs and motion graphics, including brand identities,
              social media visuals, and animated elements that elevate your brand's digital presence.
            </p>
          </div>

          {/* Audio & Sound Design */}
          <div className="bg-gradient-to-br to-teal-900 from-slate-950 p-6 rounded-lg shadow-sparkle transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-2 animate-fadeIn">
            <img
              src={AudioG}
              alt="Audio & Sound Design"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold font-customtwo text-green-200">
              🎧 Audio & Sound Design
            </h3>
            <p className="mt-4 text-xs font-customnine text-white">
              Enhance your content with professional sound design, and benefit from our strategic consulting
              services to optimize your storytelling, content strategy, and platform performance.
            </p>
          </div>

          {/* Creative Solutions */}
          <div className="bg-gradient-to-br to-teal-900 from-slate-950 p-6 rounded-lg shadow-sparkle transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-2 animate-fadeIn">
            <img
              src={ConsultationG}
              alt="Creative Solutions"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold font-customtwo text-green-200">
              🛠️ Creative Solutions
            </h3>
            <p className="mt-4 text-xs font-customnine text-white">
              We offer end-to-end content management, creative workshops, and one-on-one consulting to help
              you refine your approach, maximize your content's impact, and elevate your brand.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 via-teal-700 to-cyan-800 opacity-95" />
    </div>
  );
};
