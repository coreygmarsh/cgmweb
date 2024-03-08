import React from 'react';
import Navbar from '../Navbar/Navbar';
import "../../index.css"

const testimonials = [
  { name: "", text: "Corey is very compassionate and takes his work very seriously. His web design skills are truly unparalleled. His creativity not only captures the essence of the brand but also enhances user experience in ways I had not imagined. " },
  { name: "", text: "Working with Corey Marsh was a revelation in what web design could be. His innovative approach and keen eye for detail transformed our website into a vibrant, engaging platform that stands out in a crowded digital landscape. Corey's creativity is unmatched, and it shows in every project he delivers." },
  { name: "", text: "Corey Marsh's ability to blend aesthetics with functionality in web design is nothing short of genius. His creations are not just websites; they are experiences that captivate and engage users from the first click. Corey's work is a testament to his exceptional creativity and his commitment to pushing the boundaries of web design." },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className='pt-12 mx-36'>
    <div className="testimonial-card text-cyan-900 text-3xl font-customsix bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
      <p className="testimonial-text italic">"{testimonial.text}"</p>
      <div className="testimonial-author font-semibold">{testimonial.name}</div>
    </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="h-screen w-full flex flex-col z-10 "> 
    
      <div className='relative from-cyan-700 to-white bg-blend-screen h-screen flex bg-center bg-gradient-to-b'><Navbar/>
        {/* <video autoPlay loop muted style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}>
          <source src={Sub3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>   */}
       
        <div className='w-full z-10'>
          {/* <NavbarTwo/> */}
          <div className="text-center text-4xl pb-4 text-white font-custom "></div>
          <div className='flex flex-wrap justify-center gap-4'>
            <div className='w-full text-center pt-8 text-green-300 text-9xl vision font-customtwo'>
          TESTIMONIALS
        </div>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
        
      </div>  
    </div>
  )
}

export default Testimonials;
