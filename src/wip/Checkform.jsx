import React from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Checkform = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleButtonClick = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe.js has not yet loaded.');
      return;
    }

    console.log('Stripe and Elements are loaded, confirming payment...');

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://cgmweb-4.onrender.com/payments/success', // Replace with your success page URL
      },
    });

    if (error) {
      console.log('[error]', error);
      // Handle the error here
    } else {
      console.log('Payment confirmed successfully.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 md:px-8 py-6 border border-teal-500 bg-black bg-opacity-30 shadow-sparkle rounded-xl">
      <form className="z-10 space-y-4">
        <PaymentElement className="mb-4" />
        <button 
          onClick={handleButtonClick} 
          className="w-full bg-teal-600 text-white py-2 px-4 text-sm sm:text-base md:text-lg font-medium rounded-md hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Start now
        </button>
      </form>
    </div>
  );
};

export default Checkform;