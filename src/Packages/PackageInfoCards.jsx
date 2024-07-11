import React from 'react';

const PackageInfoCards = ({ name, cost, features, monthlyOutput }) => {
  const timestamp = new Date().toLocaleString();

  return (
    <div className="p-4 bg-black border-teal-500 border shadow-sparkle bg-opacity-20 mx-auto max-w-3xl min-h-[500px] rounded-lg">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline text-green-300 font-bold pt-4 sm:pt-6 md:pt-8">{name}</h3>
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4 sm:pt-6 md:pt-8 font-semibold">${cost} per month</p>
      <h4 className="underline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-green-300 pt-3 sm:pt-4">This package includes:</h4>
      <ul className=" py-2 text-base sm:text-lg md:text-xl pl-5 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-300 pt-3 sm:pt-4">{timestamp}</p>
    </div>
  );
};

export default PackageInfoCards;