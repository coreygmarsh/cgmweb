import React, { useState } from 'react';
import "../../index.css";
import Navbar from '../Navbar/Navbar';
import ContactLayout from "../../images/ContactLayout.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-cyan-800 to-white">
      <div
        className="absolute top-0 h-screen w-full left-0 right-0 bg-no-repeat bg-cover bg-center opacity-95"
        style={{ backgroundImage: `url(${ContactLayout})` }}
      ></div>

      <Navbar className="absolute top-0 left-0 right-0 z-70" />

      <div className="relative z-70 flex flex-col lg:flex-row items-center justify-center h-full">
        {/* Spacer for left side */}
        <div className="hidden lg:block lg:flex-1"></div>

        {/* Contact Form */}
        <div className="font-customnine w-full max-w-md p-8 bg-gradient-to-br from-cyan-800 bg-opacity-20 rounded-lg shadow-sparkle">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-300 text-center mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm md:text-base font-medium text-black">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm md:text-base font-medium text-black">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm md:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Spacer for right side */}
        <div className="hidden lg:block lg:flex-1"></div>
      </div>
    </div>
  );
};

export default Contact;
