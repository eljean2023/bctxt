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
      {/* Centered container */}
      <div className="flex justify-center items-center space-x-12 w-[800px] overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleImages.map((img, i) => (
            <motion.div
              key={img}
              className="w-[120px] h-[170px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg"
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






/*
"use client";
import { useState } from "react";
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
  const [visibleImages] = useState(images.slice(0, 6));

  return (
    <div className="relative w-full flex justify-center items-center py-6 overflow-hidden">
      <div className="flex justify-center items-center space-x-3 flex-nowrap">
        <AnimatePresence>
          {visibleImages.map((img, index) => (
            <motion.img
              key={img}
              src={img}
              alt={`Slide ${index}`}
              className="w-auto max-w-[13%] h-auto rounded-lg shadow-lg overflow-hidden"
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
*/
