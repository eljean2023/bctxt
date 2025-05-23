"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    '/analytic1.jpg',
    '/analytic2.jpg',
    '/analytic3.jpg',
    '/analytic4.jpg',
];

export default function ImageSlider() {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 5));

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
    <div className="relative w-full flex justify-center items-center bg-white-100 py-6 flex flex-col sm:flex-row justify-center items-center gap-4 mb-5">
      <div className="flex space-x-4 screen-md overflow-hidden">
        <AnimatePresence>
          {visibleImages.map((img, index) => (
            <motion.img
              key={img}
              src={img}
              alt={`Slide ${index}`}
              className="w-1/5 h-auto rounded-lg shadow-lg overflow-hidden"
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