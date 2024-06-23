import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PackagesOverview from './PackagesOverview';
import pattern from "../images/svgs/pattern.svg";
import CreativeSolutionsForm from './CreativeForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkform from '../wip/Checkform';
import { BlackSea } from '../images/ImgAssets';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PKoV7P1oisciUmNK6ppXPVEBJjL4HOFE5kJ83YxJMzAsIfd31MReWTfme2kvaPcCFprZZtN3IzHgjnHCdKRaA5O00KXGXWYp1'); // Replace with your Stripe publishable key

const Basic = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const { data } = await axios.post('https://cgmweb-4.onrender.com/api/payments/create-payment-intent', { amount: 90000 }); // Adjust the amount as needed
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };

    fetchClientSecret();
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#0570de',
      colorBackground: '#000000',
      colorText: '#ffffff',
      colorDanger: '#df1b41',
      borderRadius: '4px',
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
    },
    rules: {
      '.Label': {
        color: '#ffffff',
      },
      '.Input': {
        borderColor: '#d1d1d1',
      },
    },
  };

  return (
    <div className='bg-gradient-to-b to-slate-800 via-teal-700 from-cyan-800'>
      <div className='bg-gradient-to-b border-x shadow-sparkle border-teal-500 from-cyan-800 via-teal-700 to-slate-800 h-[5000px] mx-24 font-customnine tracking-wide text-center pt-32 text-white text-4xl'>
        <div>
          <img 
            src={pattern} 
            alt="Topography background" 
            className="absolute inset-0 w-full h-[5000px] bg-repeat object-cover mix-blend-overlay" 
            style={{ opacity: '0.05' }} 
          />
          <img 
            src={BlackSea} 
            alt="Topography background" 
            className="absolute inset-0 w-full h-[5000px] bg-repeat px-24 object-cover mix-blend-overlay" 
            style={{ opacity: '0.7' }} 
          />
          <Navbar />
          <div className='pt-2 flex-col'>
            <PackagesOverview selectedPackage="Professional" />
          </div>
          <div className='border-b-2 border-teal-500'></div>
          <div className='pt-16'>
            <CreativeSolutionsForm />
          </div>
          <div className='border-b-2 mx-24 pt-32 border-teal-500'></div>
          <div className='pt-16'>
            {clientSecret ? (
              <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                <Checkform />
              </Elements>
            ) : (
              <p>Loading payment details...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
