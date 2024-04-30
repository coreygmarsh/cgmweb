import React, { useState } from 'react';
import "../../index.css"
import Navbar from '../Navbar/Navbar';
import ContactLayout from "../../images/ContactLayout.png"

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
    console.log(formData); // For now, we'll just log the form data to the console.
    // Here you would typically send the form data to a server or email service.
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="relative h-screen overflow-hidden ">
      <div className="absolute top-0 h-screen w-full left-0 right-0 bg-no-repeat bg-cover bg-center opacity-95" 
          style={{ backgroundImage: `url(${ContactLayout})` }} >
      </div>

      <Navbar className="absolute top-0 left-0 right-0 z-70"/>

      {/* Contact Form */}
      <div className="absolute font-customnine top-1/2 right-0 shadow-sparkle transform -translate-x-1/2 -translate-y-1/2 z-70 w-full max-w-md p-8 bg-gradient-to-br from-cyan-800 bg-opacity-90 rounded-lg ">
        <h2 className="text-4xl font-bold text-green-300 text-center mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              className="mt-1 pl-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className="mt-1 pl-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              placeholder='Message'
              onChange={handleChange}
              className="mt-1 pl-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

