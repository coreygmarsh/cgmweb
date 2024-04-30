import React, { useState } from 'react';

const CustomSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative">
      <button onClick={prevSlide} className="absolute left-0 z-50 text-4xl border-2 h-12 w-12 border-green-300 vision rounded-full">{'<'}</button>
      <button onClick={nextSlide} className="absolute right-0 z-50 text-4xl border-2 border-green-300 h-12 w-12 vision rounded-full">{'>'}</button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {index === currentSlide && (
            <div className="h-full flex flex-col justify-center items-center pt-32">
              <img src={slide.imgSrc} alt={slide.imgAlt} className="w-[500px] rounded-lg h-[500px] " />
              <div className="text-white p-4">
                <h2 className="text-4xl text-center py-1 font-bold">{slide.title}</h2>
                <p className='mx-24 text-xl'>{slide.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute pt-[500px] mx-96 flex justify-center p-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`mx-2 cursor-pointer h-2 w-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
