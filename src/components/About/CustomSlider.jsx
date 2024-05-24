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
    <div className="relative h-[1000px] mx-24 ">
      <button onClick={prevSlide} className="absolute left-0 z-50 text-4xl h-12 w-12 bg-gray-800 bg-opacity-50 rounded-full text-white flex items-center justify-center">
        {'<'}
      </button>
      <button onClick={nextSlide} className="absolute right-0 z-50 text-4xl h-12 w-12 bg-gray-800 bg-opacity-50 rounded-full text-white flex items-center justify-center">
        {'>'}
      </button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {index === currentSlide && (
            <div className="bg-transparent flex flex-col justify-center items-center pt-2 ">
              <img src={slide.imgSrc} alt={slide.imgAlt} className="w-[200px] xl:w-[500px] lg:w-[350px] md:w-[900px] sm:w-[350px] rounded-lg h-[370px] xl:h-[300px] lg:h-[500px] md:h-[700px] sm:h-[500px]" />
              <div className="text-white p-4">
                <h2 className="xl:text-4xl lg:text-2xl md:text-lg sm:text-sm text-center py-1 font-bold">{slide.title}</h2>
                <p className='mx-6 xl:mx-72 lg:mx-16 sm:mx-2 md:mx-96 text-xs xl:text-xl lg:text-lg md:text-md sm:text-sm'>{slide.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer h-2 w-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
