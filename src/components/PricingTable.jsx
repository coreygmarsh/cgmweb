import { useState } from "react";
import React from 'react';
import iicon from "../images/svgs/iicon.svg";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Enterprise from "../Packages/Enterprise";
import Professional from "../Packages/Professional";
import Basic from "../Packages/Basic";

const plans = [
  {
    name: 'Basic',
    price: '$900',
    description: 'Best for individual creators needing professional editing for single projects.',
    features: ['1080p', '5 Revisions', '1 simultaneous request max', '15 min consultation'],
    buttonText: 'Get Basic',
    buttonLink: '/basic',
    info: 'This plan is perfect for individuals looking to handle single projects without the need for extensive revisions.',
    workload: 'TBD',
    videos: ['1 x Product Video', '1 x Testimonial Video', '1 x Explainer Video']
  },
  {
    name: 'Professional',
    price: '$1500',
    description: 'Ideal for small teams or businesses requiring more complex edits and collaborative flexibility.',
    features: ['1080p, 4K', '10 Revisions', '2 simultaneous requests max', '30 mins consultations'],
    buttonText: 'Get Professional',
    buttonLink: '/professional',
    bestDeal: true,
    info: 'This package is tailored for small teams needing higher resolution edits and more revisions.',
    workload: 'TBD',
    videos: ['1 x Founders Video', '1 x Product Video', '1 x Explainer Video', '1 x Event video', '1 x Training Video']
  },
  {
    name: 'Enterprise',
    price: 'TBD',
    description: 'Perfect for large organizations or intensive projects demanding high-volume editing.',
    features: ['1080p, 4K', 'Unlimited Revisions', '4 simultaneous requests max', '60 minute conferences'],
    buttonText: 'Get Enterprise',
    buttonLink: '/enterprise',
    info: 'Designed for large organizations, offering extensive services including unlimited revisions and high-resolution edits.',
    workload: "",
    videos: ['1 x Testimonial Video','1 x Founders Video', '1 x Trainer Video','1 x Product Video', '1 x Explainer Video', '4 x Event Videos', '1 x Recruitment Video']
  }
];

const PricingPlan = ({ plan, isDropdownOpen, onToggle }) => (
  <div className={`z-[60] p-2 rounded-2xl max-w-xs pt-6 bg-gradient-to-br from-black via-cyan-700 to-slate-900 h-auto ${isDropdownOpen ? 'h-auto' : 'h-[32rem]'}`}>
    <h2 className="text-2xl text-center font-bold underline">{plan.name}</h2>
    <div className="flex justify-center items-center px-6">
      <p className="text-6xl">{plan.price}</p>
      <img src={iicon} alt="Info" className="z-[90] h-24 w-24 cursor-pointer" onClick={onToggle} />
    </div>
    <p className="text-sm p-2 mx-12">{plan.description}</p>
    <ul>
      {plan.features.map(feature => (
        <li key={feature} className="text-sm pt-3">{feature}</li>
      ))}
    </ul>
    <Link to={plan.buttonLink} className="block mt-6 px-6 py-2 text-base font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700">
      {plan.buttonText}
    </Link>
    {isDropdownOpen && (
      <div className="flex items-center justify-center">
      <div className=" mt-4 max-h-48 bg-gradient-to-br from-black via-cyan-700 to-slate-800 p-5 rounded-lg shadow-lg">
        <h3 className="text-2xl text-teal-300 font-bold">{plan.name} Plan Details</h3>
        {/* <p className="mt-2 text-xs mx-2">{plan.info}</p> */}
        {/* <p className="font-semibold text-lg underline my-4 text-green-300">{plan.workload}</p> */}
        <ul className="text-sm pl-5">
          {plan.videos.map(video => (
            <li key={video}>{video}</li>
          ))}
        </ul>
      </div> 
      </div>
    )}
  </div>
 
);

const PricingTable = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (planName) => {
    setOpenDropdown(openDropdown === planName ? null : planName);
  };

  return (
    <div className="p-6 space-x-4 flex justify-center items-stretch">
      {plans.map(plan => (
        <PricingPlan
          key={plan.name}
          plan={plan}
          isDropdownOpen={openDropdown === plan.name}
          onToggle={() => toggleDropdown(plan.name)}
        />
      ))}
    </div>
  );
};

export default PricingTable;
