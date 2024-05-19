import React from 'react';

const PackageInfoCards = ({ name, cost, features, monthlyOutput }) => {
  // Get current date and time as a timestamp
  const timestamp = new Date().toLocaleString(); // You can customize this to show different date/time formats

  return (
    <div className="p-4 bg-black border-teal-500 border shadow-2xl bg-opacity-20 mx-96 h-[500px] rounded-lg ">
      <h3 className="text-6xl underline text-green-300 font-bold pt-8">{name}</h3>
      <p className="text-5xl pt-8 font-semibold">${cost} per month</p>
      <h4 className="underline text-3xl text-green-300 pt-4">This package includes:</h4>
      <div className="list-disc py-2 text-lg pl-5">
        {features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
      <p className="text-xl text-green-300 pt-4"> {timestamp}</p>
      {/* <h4 className="underline pb-32 ">Typical Monthly Output:</h4>
      <ul className='jjustify-between'>{monthlyOutput}</ul> */}
    </div>
  );
};

export default PackageInfoCards;
