import React from 'react';
// Import your logos here if they are stored locally in your src directory
// Example: import logo1 from './assets/logos/logo1.png';
import { MernStackTwo } from '../images/ImgAssets';
const logos = [
  // Replace these paths with the actual paths to your logo images
  { id: 1, src: {MernStackTwo}, alt: 'Logo 1' },
//   { id: 2, src: 'path/to/your/logo2.png', alt: 'Logo 2' },
//   { id: 3, src: 'path/to/your/logo3.png', alt: 'Logo 3' },
//   { id: 4, src: 'path/to/your/logo4.png', alt: 'Logo 4' },
//   { id: 5, src: 'path/to/your/logo5.png', alt: 'Logo 5' },
//   { id: 6, src: 'path/to/your/logo6.png', alt: 'Logo 6' },
//   { id: 7, src: 'path/to/your/logo7.png', alt: 'Logo 7' },
//   { id: 8, src: 'path/to/your/logo8.png', alt: 'Logo 8' },
//   { id: 9, src: 'path/to/your/logo9.png', alt: 'Logo 9' },
//   { id: 10, src: 'path/to/your/logo10.png', alt: 'Logo 10' },
];

const LogoGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {logos.map((logo) => (
        <div key={logo.id} className="flex justify-center items-center p-2">
          <img src={logo.src} alt={logo.alt} className="h-72 w-90" /> {/* Adjust size as needed */}
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
