import React from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Checkform = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleButtonClick = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe.js has not yet loaded.');
      return; // Stripe.js has not yet loaded.
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
//team
  return (
    <div className='flex border-teal-500 bg-black bg-opacity-30 shadow-sparkle mx-[30rem] py-6 rounded-xl justify-center'>
      <form className="z-[40]">
        <PaymentElement />
        <button onClick={handleButtonClick} className="mt-4 bg-teal-600 text-white py-2 px-4 text-sm cursor-pointer z-[80] rounded-md">
          Start now
        </button>
      </form>
    </div>
  );
};

export default Checkform;
