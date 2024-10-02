import React from 'react';

const PackageInfoCards = ({ name, cost, features, monthlyOutput }) => {
  const timestamp = new Date().toLocaleString();

  return (
    <div className="p-4 bg-gradient-to-br from-slate-950 to-teal-600 border-teal-500 border shadow-sparkle bg-opacity-20 mx-auto max-w-6xl min-h-[500px] rounded-lg">
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-customtwo font-bold pt-4 sm:pt-6 md:pt-8">{name}</h3>
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pt-4 sm:pt-6 md:pt-8 text-green-300 font-semibold">${cost}</p>
      <h4 className="underline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-green-300 pt-3 sm:pt-4">This package includes:</h4>
      <ul className=" py-2 text-base sm:text-lg md:text-xl pl-5 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-300 pt-3 sm:pt-4">{timestamp}</p> */}
    </div>
  );
};

export default PackageInfoCards;