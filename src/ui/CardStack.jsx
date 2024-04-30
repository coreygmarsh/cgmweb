import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

 const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // Create a copy of the array
        newArray.unshift(newArray.pop()); // Move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-[90vh] w-[100vw] rounded-3xl flex justify-center bg-transparent md:h-[50vh] md:w-[100vw]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex items-center justify-center w-[75vw] h-[75vh] md:h-[80vh] md:w-[60vw] rounded-3xl  shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05]"
            style={{
              transformOrigin: "top center",
              backgroundImage: `url(${card.backgroundImage})`, // Set the background image from the card's data
              backgroundSize: 'cover', // Cover the entire card with the image
              backgroundPosition: 'center', // Center the background image
            }}
            animate={{
              top: index * -CARD_OFFSET, // Move each subsequent card up to create the stack effect
              scale: 1 - index * SCALE_FACTOR, // Decrease scale for cards that are behind
              zIndex: cards.length - index, // Decrease z-index for the cards that are behind to ensure proper stacking
            }}
          >
            {/* This container centers the text vertically in the middle of the card */}
            <div className="flex flex-col justify-center items-center h-full text-center w-full bg-black bg-opacity-80 rounded-3xl">
              <p className="text-black font-medium text-8xl font-customnine  dark:text-green-400">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal text-3xl font-customnine  dark:text-neutral-200">
                {card.designation}
              </p>
              <p className="text-neutral-400 tracking-widest font-normal py-4 text-3xl font-customnine mx-32 dark:text-neutral-200">
                {card.description}
              </p>
              <div className="font-normal text-neutral-700 w-full mt-4 dark:text-neutral-200 overflow-y-auto">
                {card.content}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
export default CardStack