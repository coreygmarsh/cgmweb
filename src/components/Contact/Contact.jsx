import React, { useState } from 'react';
import "../../index.css";
import Navbar from '../Navbar/Navbar';
import pattern from "../../images/svgs/pattern.svg"; // Adjust the path as necessary
import { Caustics, GreenLightning } from '../../images/ImgAssets';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    try {
      await axios.post('https://cgmweb-4.onrender.com/api/messages/send', { name, email, message });
      alert('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
    }
  };

  return (
    <div className='bg-gradient-to-t z-[60] px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24 to-slate-800 via-teal-700 from-cyan-800'>
      <div className='bg-gradient-to-b border-teal-500 from-cyan-800 shadow-sparkle via-teal-700 to-slate-800 h-screen w-full font-customnine tracking-wide text-center text-white'>
        <img 
          src={pattern} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-screen bg-repeat object-cover mix-blend-overlay" 
          style={{ opacity: '0.05' }} 
        />
        <img 
          src={GreenLightning} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-screen bg-repeat object-cover mix-blend-overlay" 
          style={{ opacity: '0.50' }} 
        />
        <Navbar className=" " />
        <div className="relative z-[60]  flex flex-col items-center justify-center h-full">
          <div className="pb-16 w-[50vh] md:w-[70vh] p-8 bg-gradient-to-br from-cyan-800 bg-opacity-20 rounded-lg shadow-sparkle">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-300 text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm pt-2 md:text-base font-medium text-white"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 pl-2 block w-full rounded-md bg-white focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-medium text-white"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 pl-2 block w-full rounded-md bg-white z-90 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-medium text-white"></label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 pl-2 block w-full rounded-md bg-white border-gray-300  focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className='pt-4'>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm md:text-base font-medium rounded-md text-white bg-teal-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
