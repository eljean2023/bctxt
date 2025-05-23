"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    '/inventory1.png',
    '/inventory2.png', 
    '/inventory3.png', // last image
];

export default function ImageSlider() {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => {
        const lastIndex = images.indexOf(prev[prev.length - 1]);
        const nextImage = images[(lastIndex + 1) % images.length];
        console.log("Next Image:", nextImage);  // Log to check the image

        return [...prev.slice(1), nextImage];
      });
    }, 6000); // Every 6 seconds, remove one from the left and add one to the right

    return () => clearInterval(interval);
  }, []);

  
"w-[250px] sm:w-[220px] h-[180px] sm:h-[280px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg"

  return (
    <div className="relative w-full flex justify-center items-center bg-white-100 py-6 flex flex-col sm:flex-row justify-center items-center gap-4 mb-5">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <AnimatePresence>
          {visibleImages.map((img, index) => (
            <motion.img
              key={img}
              src={img}
              alt={`Slide ${index}`}
              className="w-[250px] sm:w-[220px] h-[180px] sm:h-[280px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg"
              layout // Helps with smooth transitions
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}