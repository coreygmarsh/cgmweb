import React from 'react';
import { BrowserRouter as Link,  } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: '$900',
    description: 'For single project individual creators editing needs.', 
    features: ['5 Revisions per project', '1 simultaneous request', '(1) 15 min consultation', 'Up to 4 edits per month','Up to 4 minutes each'],
    buttonText: 'Get Basic',
    buttonLink: '/basic',  
    
  },
  {
    name: 'Professional',
    price: '$1500',
    description: 'For small teams/businesses with complex editing needs',
    features: ['10 Revisions', '2 simultaneous requests', '(1) 30 mins consultation', 'Up to 8 edits per month', 'Up to 10 minutes each'],
    buttonText: 'Get Professional',
    buttonLink: '/professional',
   
  },
  {
    name: 'Enterprise',
    price: '3000',
    description: 'For large organizations/commercial high-volume edits.',
    features: [ 'Unlimited Revisions', '3 simultaneous requests', '(1)60 minute conference', 'Up to 15 edits per month', 'Up to 20 minutes each'],
    buttonText: 'Get Enterprise',
    buttonLink: '/enterprise',
    
  }
]

const PricingPlan = ({ plan,  }) => (
  <div className="z-[60] p-2 rounded-2xl w-full sm:w-80 md:w-64 lg:w-80 pt-6 bg-gradient-to-br border-2 border-teal-500 shadow-sparkle from-black via-cyan-700 to-slate-900">
    <h2 className="text-2xl text-center font-bold underline">{plan.name}</h2>
    <div className="flex justify-center items-center px-6">
      <p className="text-5xl pt-2">{plan.price}</p>
      {/* <img src={iicon} alt="Info" className="z-[90] h-24 w-24 cursor-pointer" onClick={onToggle} /> */}
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
    
  </div>
);

const PricingTable = () => {
  



  return (
    <div className="p-2 flex flex-col items-center lg:flex-row justify-center gap-4 border-teal-600">
      {plans.map(plan => (
        <PricingPlan
          key={plan.name}
          plan={plan}
          
        />
      ))}
    </div>
  );
};

export default PricingTable;
