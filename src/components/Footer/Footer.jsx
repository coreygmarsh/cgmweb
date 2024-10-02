import React from 'react';

const Footer = () => {
  return (
    <footer className=" min-h-screen flex-grow text-center px-2 md:px-4 lg:px-4 bg-slate-950 py-10 text-white">
      <div className="flex items-center justify-center py-6  dark:border-neutral-500 lg:justify-between">
        {/* <div className="mr-12 lg:block text-2xl md:text-3xl lg:text-4xl font-customnine">
          Get connected with me on social networks:
        </div> */}
       
      </div>

      <div className="mx-6 md:mx-12 lg:mx-36 md:py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-customeight tracking-widest font-semibold uppercase">
              About
            </h6>
            <p className="font-customnine hover:underline tracking-wide text-sm md:text-md lg:text-lg">
            <a href="/about" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
                About Us
              </a>
            </p>
          </div>
          {/* Library items */}
          <div>
            <h6 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-customeight tracking-widest font-semibold uppercase">
              Library
            </h6>

            <p className="mb-4">
              <a href="/demos" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
                Product Demos
              </a>
            </p>

            <p className="mb-4">
              <a href="/lyric" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
              Short Form Ads
              </a>
            </p>
            
            <p className="mb-4">
              <a href="/testimonials" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
              Training Videos
              </a>
            </p>

            <p className="mb-4">
              <a href="/graphicdesign" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
              Testimonials
              </a>
            </p>

            <p className="mb-4">
              <a href="/founder" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
                Founder Videos
              </a>
            </p>

            <p className="mb-4">
              <a href="/motions" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
                Soundtracks
              </a>
            </p>

            {/* <p className="mb-4">
              <a href="/photobook" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customnine dark:text-neutral-200">
                Photo Shoots
              </a>
            </p> */}

            <p className="mb-4">
              <a href="/event" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
              Explainer
              </a>
            </p>

            <p className="mb-4">
              <a href="/explainer" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
              Graphics
              </a>
            </p>

          </div>
          {/* Service Items */}
          <div>
            <h6 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-customeight tracking-widest font-semibold uppercase">
              Services
            </h6>
            <p className="mb-4">
              <a href="/basic" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
                Basic Package
              </a>
            </p>
            <p className="mb-4">
              <a href="/professional" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
                Professional Package
              </a>
            </p>
            <p className="mb-4">
              <a href="/enterprise" className="text-white hover:underline text-sm md:text-md lg:text-lg tracking-widest font-customthree dark:text-neutral-200">
                Enterprise Package
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-customeight tracking-widest font-semibold uppercase">
              Contact
            </h6>
           
            <p className="mb-4 flex items-center hover:underline font-customthree tracking-widest text-sm md:text-md lg:text-lg justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a href="/contact">Contact Me</a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-transparent p-6 text-center font-customtwo dark:bg-slate-950">
        <span>© 2024 Copyright:</span>
        <a className="font-semibold text-neutral-600 text-md pl-1 dark:text-neutral-400 font-customtwo" href="https://cgmcreativesolutions.com/">
          Cinematic Global Minds
        </a>
      </div>
    </footer>
  );
}

export default Footer;
