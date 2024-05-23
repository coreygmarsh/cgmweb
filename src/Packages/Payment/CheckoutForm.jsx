import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [billingDetails, setBillingDetails] = useState({
    country: 'United States',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        address: {
          country: billingDetails.country,
          line1: billingDetails.address,
          city: billingDetails.city,
          state: billingDetails.state,
          postal_code: billingDetails.postalCode,
        },
      },
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Handle the payment method or pass it to your server here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-screen px-24 p-4">
      <h2 className="text-3xl font-bold mb-4">Billing information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Country</label>
        <select
          name="country"
          value={billingDetails.country}
          onChange={handleInputChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>United States</option>
          {/* Add more country options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Address</label>
        <input
          type="text"
          name="address"
          value={billingDetails.address}
          onChange={handleInputChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white">City</label>
          <input
            type="text"
            name="city"
            value={billingDetails.city}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-lg border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-white">State</label>
          <input
            type="text"
            name="state"
            value={billingDetails.state}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-lg border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-white">Zip / Postal code</label>
        <input
          type="text"
          name="postalCode"
          value={billingDetails.postalCode}
          onChange={handleInputChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-lg border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>

      <h2 className="text-3xl text-white font-bold mb-4">Payment details</h2>
      <CardElement className="p-4 border text-white border-gray-300 rounded mb-4" />

      <button type="submit" disabled={!stripe} className="mt-4 bg-cyan-700 text-white py-2 px-4 rounded-xl text-xl">
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
