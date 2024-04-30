import React from 'react';
import { motion } from 'framer-motion';
import WebDesignIcon from "../../images/ServicesIcons/WebDesignIcon.png"
import GraphicDesignIcon from "../../images/ServicesIcons/GraphicDesignIcon.png"
import VideoEditingIcon from "../../images/ServicesIcons/VideoEditingIcon.png"
import PhotographyIcon from "../../images/ServicesIcons/PhotographyIcon.png"
import VideographyIcon from "../../images/ServicesIcons/VideographyIcon.png"


// Assuming cn is a utility function to concatenate class names effectively
// If it's not available in your project, you might need to implement or import it.
const cn = (...args) => args.filter(Boolean).join(' ');

export const BentoGrid = () => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-screen px-32 pt-12 bg-transparent")}>
      <BentoGridItem 
        title="Photography" 
        logo={PhotographyIcon}
        description="Offering a wide range of photo packages, aimed and curated for artists, content creators, and aesthetic businesses alike."
        priceDescription="$30 per hour for photo sessions."
        secondPriceDescription="3 hour minimum"
      />
      <BentoGridItem 
        title="Videography"
        logo={VideographyIcon} 
        description="Assist in creating astounding cinematography for musicians, developers, and creatives. We specialize in storytelling and captivating visuals."
        priceDescription="$40 per hour of recording."
        secondPriceDescription="3 hour minimum"
      />
      <BentoGridItem 
        title="Video Editing"
        logo={VideoEditingIcon} 
        description="This service includes video clipping, photo enhancement, animations and effects; Primarily utilizing Final Cut Pro."
        priceDescription="$25 per minute of footage requested. "
        secondPriceDescription=""
      />
      <BentoGridItem 
        title="Graphic Design" 
        logo={GraphicDesignIcon}
        description="Offering logo design services tailored to meet your needs; coupling captivating graphics with personalized typography."
        priceDescription="Logos = $40 each (2 revisions)"
      />
      <BentoGridItem 
        title="Web Design" 
        logo={WebDesignIcon}
        description="Offering web crafting, and brand development, we aim to help our clients design brand websites with both functionality and effective storytelling."
        priceDescription="Customizable packages available."
        secondPriceDescription=""
      />
      <BentoGridItem 
        title="Other Services" 
        logo={GraphicDesignIcon}
        description="Includes any combination of services listed as well as brand development, content strategy building, and writing."
        priceDescription="Customizable packages available."
        secondPriceDescription=""
      />
    </div>
  );
};

export const BentoGridItem = ({ title, description, priceDescription,secondPriceDescription,logo }) => {
  // Moving shadow animation
  const movingShadow = {
    rest: { 
      boxShadow: '0px 0px 70px rgba(0, 0, 0, 0.5)' 
    },
    hover: {
      boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.5)',
      scale: 1.05, // Optional: scale up the card slightly on hover for added effect
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      },
    },
  };

  return (
    <motion.div 
      className={cn("row-span-1 rounded-xl group p-4 bg-opacity-80 dark:border-white/[0.2] bg-cyan-700 border border-transparent flex flex-col justify-between space-y-4")}
      variants={movingShadow}
      initial="rest" // Use the rest variant as the initial state
      whileHover="hover" // Switch to the hover variant when hovered
      transition={{ duration: 0.5 }} // Apply this transition for the initial animation
    >
     {logo && (
        <div className="flex justify-center ">
        <img src={logo} alt={`${title} logo`} className="h-6 w-6 object-contain" />
      </div>
     )} <div className="flex-1 flex flex-col justify-start ">
        <div className="font-customeight font-bold tracking-widest  text-neutral-600 dark:text-green-300 mb-2 text-4xl">
          {title}
        </div>
        <div className="text-neutral-600 text-sm font-customnine dark:text-neutral-300 mt-4">
          {description}
        </div>
        <div className="mt-4 text-neutral-500 text-sm font-customnine dark:text-green-300">
          {priceDescription}
        </div>
        {secondPriceDescription && (
          <div className="mt-2 text-neutral-500 text-sm font-customnine dark:text-green-300">
            {secondPriceDescription}
          </div>
        )}
      </div>
    </motion.div>
  );
};
