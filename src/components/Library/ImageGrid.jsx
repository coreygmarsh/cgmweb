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

const ImageGrid = () => {
  const imageGroups = [
    [
        { src: Danita, name: "Danita", description: "A beautiful depiction of nature." },
        { src: Botanical, name: "Botanical", description: "Botanical garden views." },
        { src: BlackSea, name: "Black Sea", description: "The serene Black Sea." },
    ],
    [
        { src: Eser, name: "Eser", description: "A beautiful depiction of nature." },
        { src: Palace, name: "Palace", description: "A beautiful depiction of nature." },
        { src: Waves, name: "Waves", description: "A beautiful depiction of nature." },
        { src: Swim, name: "Swim", description: "A beautiful depiction of nature." },
      
    ],
    [ 
    { src: PortraitThree , name: "PortraitThree", description: "A beautiful depiction of nature." },
    { src: PortraitOne , name: "PortraitOne", description: "A beautiful depiction of nature." },
    { src: WaterRoad , name: "WaterRoad", description: "A beautiful depiction of nature." },
    { src: GuitarOne, name: "GuitarOne", description: "A beautiful depiction of nature." },
     
    ],
    [
    { src: LetMeLoose,  name: "Let Me Loose", description: "A graphic creation for the song." },
    { src: Tension , name: "Tension", description: "A beautiful depiction of nature." },
    { src: TwentyFive , name: "Twenty-Five", description: "A beautiful depiction of nature." },
     
    ],
    // [
    //     { src: Landscape,  name: "Let Me Loose", description: "A graphic creation for the song." },
    //     { src: Tension , name: "Tension", description: "A beautiful depiction of nature." },
    //     { src: TwentyFive , name: "Twenty-Five", description: "A beautiful depiction of nature." },
         
    //     ],
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  w-full h-full z-40 gap-2">
      {imageGroups.map((group, index) => (
        <div key={index} className="space-y-2 ">
          {group.map((image, imgIndex) => (
            <div key={imgIndex} className="relative">
              <img className="w-full h-auto object-cover" src={image.src} alt={image.name} />
              <div className="absolute inset-0 z-40  bg-black bg-opacity-50 hover:opacity-100 opacity-0 flex justify-center items-center transition-opacity duration-300">
                <div className="text-white text-center ">
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

export default ImageGrid;
