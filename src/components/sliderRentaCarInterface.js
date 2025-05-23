"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    '/rentaCarInterface1.png',
    '/rentaCarInterface2.png',
    '/rentaCarInterface3.png',
  
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

  return (
    <div className="relative w-full flex justify-center items-center py-6">
      {/* Centered container */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <AnimatePresence mode="popLayout">
          {visibleImages.map((img, i) => (
            <motion.div
              key={img}
              className="w-[350px] h-[120px] sm:w-[220px] sm:h-[280px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img
                src={img}
                alt={`Slide ${i}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
    
  );
}