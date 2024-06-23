import React from 'react';
import {BlackSea,
      Botanical,
       Danita,
        Palace,
         Eser,
          Waves,
           Swim,
            WaterRoad,
             PortraitThree,
              PortraitOne,
               GuitarOne,
                LetMeLoose,
                 Tension,
                  TwentyFive,
                  } from "../../images/ImgAssets"

const AnimationPanel = () => {
  const imageGroups = [
    [
        { src: Danita, name: "Portraits", description: "" },
        { src: Botanical, name: "Botanical", description: "" },
        { src: BlackSea, name: "Black Sea", description: "" },
    ],
    [
        { src: Eser, name: "Underwater Atmos", description: "" },
        { src: Palace, name: "Palace", description: "" },
        { src: Waves, name: "Waves", description: "" },
        { src: Swim, name: "Swim", description: "" },
      
    ],
    [ 
    { src: PortraitThree , name: "Portraits", description: "" },
    { src: PortraitOne , name: "Portraits", description: "" },
    { src: WaterRoad , name: "WaterRoad", description: "" },
    { src: GuitarOne, name: "GuitarOne", description: "" },
     
    ],
    [
    { src: LetMeLoose,  name: "Let Me Loose", description: "A cover drawn, captured, and editing for the release of the song Let Me Loose" },
    { src: Tension , name: "Tension", description: "A beautiful depiction of nature." },
    { src: TwentyFive , name: "Twenty-Five", description: " by the Downfall" },
     
    ],
    // [
    //     { src: Landscape,  name: "Let Me Loose", description: "A graphic creation for the song." },
    //     { src: Tension , name: "Tension", description: "A beautiful depiction of nature." },
    //     { src: TwentyFive , name: "Twenty-Five", description: "A beautiful depiction of nature." },
         
    //     ],
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  w-full h-full rounded-full z-[70] gap-2">
      {imageGroups.map((group, index) => (
        <div key={index} className="space-y-2 ">
          {group.map((image, imgIndex) => (
            <div key={imgIndex} className="relative">
              <img className="w-full h-auto object-cover" src={image.src} alt={image.name} />
              <div className="absolute inset-0 z-40  bg-cyan-950 bg-opacity-80  hover:opacity-80 opacity-0 flex justify-center items-center transition-opacity duration-300">
                <div className="text-white text-center hover:cursor-pointer hover:text-cyan-400 font-customnine text-3xl">
                  <p className="font-bold">{image.name}</p>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimationPanel;
