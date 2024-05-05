import { useState } from "react";
import React from 'react';
import iicon from "../images/svgs/iicon.svg";

const plans = [
  {
    name: 'Basic',
    price: '$900',
    description: 'Best for individual creators needing professional editing for single projects.',
    features: ['1080p', '5 Revisions', '1 simultaneous request max', '15 min consultation'],
    buttonText: 'Get Basic',
    buttonLink: '#basic',
    info: 'This plan is perfect for individuals looking to handle single projects without the need for extensive revisions.',
    workload: '9 hours ~ equivalent to:',
    videos: ['1 x Product Video', '1 x Testimonial Video', '1 x Explainer Video']
  },
  {
    name: 'Professional',
    price: '$1500',
    description: 'Ideal for small teams or businesses requiring more complex edits and collaborative flexibility.',
    features: ['1080p, 4K', '10 Revisions', '2 simultaneous requests max', '30 mins consultations'],
    buttonText: 'Get Professional',
    buttonLink: '#professional',
    bestDeal: true,
    info: 'This package is tailored for small teams needing higher resolution edits and more revisions.',
    workload: '15 hours ~ equivalent to:',
    videos: ['1 x Founders Video', '1 x Product Video', '1 x Explainer Video', '1 x Event video', '1 x Training Video']
  },
  {
    name: 'Enterprise',
    price: '$3000',
    description: 'Perfect for large organizations or intensive projects demanding high-volume editing.',
    features: ['1080p, 4K', 'Unlimited Revisions', '4 simultaneous requests max', '60 minute conferences'],
    buttonText: 'Get Enterprise',
    buttonLink: '#enterprise',
    info: 'Designed for large organizations, offering extensive services including unlimited revisions and high-resolution edits.',
    workload: '30 hours ~ equivalent to:',
    videos: ['1 x Testimonial Video','1 x Founders Video', '1 x Trainer Video','1 x Product Video', '1 x Explainer Video', '4 x Event Videos', '1 x Recruitment Video']
  }
];

const Modal = ({ content, onClose }) => (
  <div className="fixed inset-0 z-[90] px-96 bg-gray-600 bg-opacity-50 flex justify-center items-center">
    <div className="bg-gradient-to-br from-black via-cyan-700 to-slate-800 p-5  rounded-lg shadow-lg">
      <h3 className="text-4xl text-teal-300  font-bold">{content.name} Plan Details</h3>
      <p className="mt-2 text-xl mx-24">{content.info}</p>
      <p className="font-semibold text-lg underline my-4 text-green-300">{content.workload}</p>
      <ul className=" text-lg pl-5">
        {content.videos.map(video => (
          <li key={video}>{video}</li>
        ))}
      </ul>
      <button onClick={onClose} className="mt-6 bg-teal-900 text-white py-2 px-4 rounded text-lg hover:bg-teal-700">Close</button>
    </div>
  </div>
);

const PricingPlan = ({ plan }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`p-2 rounded-lg max-w-sm pt-6 bg-gradient-to-br from-black via-cyan-700 to-slate-900 h-[34rem] ${plan.bestDeal ? 'bg-cyan-500 text-white' : 'bg-gradient-to-br from-cyan-900 via-cyan-800 to-slate-800'}`}>
      <h2 className="text-2xl text-center font-bold underline mb-2">{plan.name}</h2>
      <div className="flex justify-center items-center px-6">
        <p className="text-6xl ">{plan.price}</p>
        <img src={iicon} alt="Info" className="z-[80] h-24 w-24 cursor-pointer" onClick={() => setIsModalOpen(true)} />
      </div>
      <p className="text-sm p-2 mx-12">{plan.description}</p>
      <ul>
        {plan.features.map(feature => (
          <li key={feature} className="text-sm pt-6">{feature}</li>
        ))}
      </ul>
      <a href={plan.buttonLink} className="mt-6 inline-block px-6 py-2 text-base font-medium rounded-md text-white bg-teal-600 hover:bg-indigo-700">
        {plan.buttonText}
      </a>
      {isModalOpen && <Modal content={plan} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const PricingTable = () => (
  <div className="p-6 space-x-4 flex justify-center items-stretch">
    {plans.map(plan => <PricingPlan key={plan.name} plan={plan} />)}
  </div>
);

export default PricingTable;
