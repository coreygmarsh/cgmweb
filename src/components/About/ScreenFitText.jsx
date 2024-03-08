import { motion } from "framer-motion";
import React, { useEffect, useRef,  } from "react";
import { useState } from "react";
import "../../index.css"
export const ScreenFitText = () => {

  const [reveal, setReveal] = useState(false);

  const handleClick = () => {
    setReveal(true);
    // Optionally reset the animation state after it completes
    setTimeout(() => setReveal(false), 3000); // Match the animation duration
  };
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <motion.div

      className="flex w-full items-center overflow-hidden bg-transparent sparkle"
      ref={containerRef}
    >
      <span
        className="absolute top-80 left-05 mx-auto whitespace-nowrap text-center font-bold uppercase font-customtwo text-white"
        ref={textRef}
      >
        COREY <span className="pl-[450px] sparkle "></span> Marsh
      </span>
    </motion.div>
  );
}
export default ScreenFitText