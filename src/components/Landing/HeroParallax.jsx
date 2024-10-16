import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { BlackSea, CGMlogo, Caustics, Eser, LetMeLoose, Outdoor, Underwater, UnderwaterRoad, Very, Waves, watertexture } from "../../images/ImgAssets";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24 bg-gradient-to-b from-cyan-800 via-teal-700 to-slate-800">
      <div className="border-cyan-200 shadow-sparkle">    
        <div
          ref={ref}
          className="md:h-[250vh] h-[160vh] py-20 sm:py-12 overflow-hidden bg-center bg-cover w-full relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
          style={{ backgroundImage: `url(${Very})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-950 to-slate-800 opacity-80"></div>
          <div className="fixed top-0 left-4 sm:top-2 sm:left-10">
            <img src={CGMlogo} alt="Logo" className="h-8 sm:h-20"/>
          </div>
          <div className="fixed top-4 right-4 sm:top-10 sm:right-10 font-customseven text-lg sm:text-2xl italic vision text-white hover:underline">Cinematic Global Minds</div>
          <Header />
       
          <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 sm:space-x-4 mb-10 sm:mb-20">
              {firstRow.map((product) => (
                <ProductCard product={product} translate={translateX} key={product.title} />
              ))}
            </motion.div>
            <motion.div className="flex flex-row mb-10 sm:mb-20 space-x-2 sm:space-x-4 bg-transparent">
              {secondRow.map((product) => (
                <ProductCard product={product} translate={translateXReverse} key={product.title} />
              ))}
            </motion.div>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 sm:space-x-4">
              {thirdRow.map((product) => (
                <ProductCard product={product} translate={translateX} key={product.title} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const textRevealVariants = {
    hidden: { opacity: 0.5, x: 0, scale: 2.0 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { duration: 0, ease: "easeOut" }
    },
  };

  return (
    <div className="max-w-screen text-center relative py-10 sm:py-20 md:py-40 rounded-lg bg-transparent px-4 w-full left-0 top-0">
      <motion.h1 
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full font-customnine font-bold dark:text-white"
        variants={textRevealVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="leading-tight text-white">
          <span className="ml-1 text-white font-customtwo font-bold vision">CGM Creative Solutions</span>
          <div className="pt-2 sm:pt-4 text-3xl sm:text-4xl md:text-5xl ml-1 text-white">
            Imagine <span className="italic font-bold text-green-300">BIGGER.</span>
          </div>
        </p>
      </motion.h1>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group h-24 sm:h-32 md:h-36 lg:h-60 xl:h-72 w-32 sm:w-48 md:w-60 lg:w-72 xl:w-[28rem] hover:opacity-40 relative flex-shrink-0"
    >
      <Link to={product.link} className="block hover:shadow-2xl">
        <img
          src={product.thumbnail}
          className="object-cover object-left-top rounded-xl border-cyan-950 border shadow-2xl absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 hover:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 font-customnine opacity-0 group-hover:opacity-100 text-white text-xs sm:text-sm md:text-base">
        {product.title}
      </h2>
    </motion.div>
  );
};