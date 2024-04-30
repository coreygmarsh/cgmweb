import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Import Tailwind CSS styles (ensure you've set this up in your project)

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const paginate = (newDirection) => {
        setCurrentIndex((prev) => (prev + newDirection + items.length) % items.length);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
                <motion.div
                    key={currentIndex}
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute"
                >
                    {items[currentIndex]}
                </motion.div>
                <button className="absolute left-0 z-10" onClick={() => paginate(-1)}>Prev</button>
                <button className="absolute right-0 z-10" onClick={() => paginate(1)}>Next</button>
            </div>
        </div>
    );
};

export default Carousel;
