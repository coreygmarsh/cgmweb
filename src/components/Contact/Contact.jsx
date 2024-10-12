import React, { useState, useEffect, useRef } from 'react';
import "../../index.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../Navbar/Navbar';
import { BlackSea, GreenLightning } from '../../images/ImgAssets';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef(null);

  useEffect(() => {
    // GSAP Animation: Fade in form and background on load
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

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
      <div className='bg-gradient-to-b border-teal-500 from-cyan-800 shadow-sparkle via-teal-700 to-slate-800 min-h-screen w-full font-customnine tracking-wide text-center text-white'>
        
        {/* Background Images */}
        <img 
          src={BlackSea} 
          alt="Topography background" 
          className="absolute inset-0 w-full h-screen px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24 bg-repeat object-cover mix-blend-overlay" 
          style={{ opacity: '0.50' }} 
        />
        <img 
          src={GreenLightning} 
          alt="Green Lightning" 
          className="absolute inset-0 w-full h-screen px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24 bg-repeat object-cover mix-blend-overlay" 
          style={{ opacity: '0.50' }} 
        />
        
        {/* Navbar */}
        <Navbar />

        {/* Contact Form */}
        <div className="relative z-[60] flex flex-col items-center justify-center pt-32 h-full">
          <div ref={formRef} className="pb-16 w-[90%] sm:w-[70vh] p-8 bg-gradient-to-br from-slate-950 via-cyan-950 bg-opacity-20 rounded-lg shadow-sparkle">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-customtwo text-green-300 text-center mb-4">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 pl-4 block w-full rounded-md bg-white focus:border-teal-500 focus:ring-teal-500 shadow-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 pl-4 block w-full rounded-md bg-white shadow-md focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 pl-4 block w-full rounded-md bg-white shadow-md focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className='pt-4'>
                <button
                  type="submit"
                  className="w-full py-2 px-4 font-medium rounded-md bg-teal-600 hover:bg-cyan-700 text-white transition-all duration-300 shadow-md"
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
