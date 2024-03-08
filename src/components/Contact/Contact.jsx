import React from 'react';
import "../../index.css"
import Navbar from '../Navbar/Navbar';
import { WaveDrawing } from '../../images/ImgAssets';

const Contact = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-screen bg-cover bg-blend-screen bg-gradient-to-b from-cyan-700 to-white"
        // Uncomment the next line and ensure WaterRoad is correctly imported to use as background
        // style={{ backgroundImage: `url(${WaterRoad})` }}
      >
        <Navbar/>
        <div className='text-center pt-4 text-green-300 font-customtwo text-8xl vision'>CONTACT</div>
        <div className="max-w-4xl mx-auto p-12 pt-24 font-customtwo py-16">
          <div className="grid md:grid-cols-2 gap-8 px-4">
            <div>
              
              <h2 className="text-4xl font-bold mb-4 text-green-300">GET IN TOUCH</h2>
              <p><strong>EMAIL:</strong> COREYMARSHPM@GMAIL.COM</p>
              
              {/* Social Media Links */}
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-green-300">FOLLOW US</h3>
                {/* Example social media links */}
                <p>INSTAGRAM, FACEBOOK, LINKEDIN, AND MORE!</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-green-300">SEND ME A MESSAGE</h2><img src={WaveDrawing}/>
              <form>
                <div className="mb-4">
                  {/* <label className="block text-sm font-medium mb-1 " htmlFor="name">Name</label> */}
                  <input type="text" id="name" placeholder=" Name " className="w-full border-gray-300 shadow-sm"/>
                </div>
                <div className="mb-4">
                  {/* <label className="block text-sm font-medium mb-1 " htmlFor="email">Email</label> */}
                  <input type="email" id="email" placeholder=" Email " className="w-full border-gray-300 shadow-lg"/>
                </div>
                <div className="mb-4">
                  {/* <label className="block text-sm font-medium mb-1  text-green-300" htmlFor="message">Message</label> */}
                  <textarea id="message" rows="4" placeholder=" Message " className="w-full border-gray-300 shadow-sm"></textarea>
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
