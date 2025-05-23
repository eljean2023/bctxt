"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  '/accounting1.jpg',
  '/accounting2.png',
  '/accounting3.png',
  '/accounting4.png',
  '/accounting5.jpg',
  '/accounting6.png',
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[index % images.length],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  return (
    <div className="relative w-full flex justify-center items-center py-6">
      <div className="flex justify-center items-center flex-wrap md:flex-nowrap space-x-2 sm:space-x-4 md:space-x-12 w-full md:w-[800px] overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleImages.map((img, i) => (
            <motion.div
              key={img}
              className="w-[320px] h-[180px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg flex flex-col sm:flex-row justify-center items-center gap-4 mb-5"
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


