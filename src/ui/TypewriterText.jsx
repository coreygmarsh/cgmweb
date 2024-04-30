import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';

const MagicOcean = ["Corey G. Marsh", "Graphic Designer", "Content Creator","Video Editing"];
let index = 0;

const TypewriterText = () => {
  const [magicName, setMagicName] = useState("Corey G. Marsh");
  const name = useTypewriter(magicName);

  useEffect(() => {
    const interval = setInterval(() => {
      index = index > 1 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 4000);

    return () => clearInterval(interval);
  }, [magicName]);

  return <div className='text-[7rem] py-2 font-customeight uppercase tracking-widest  md:text-[10rem] text-white'>{name}</div>;
};
export default TypewriterText
