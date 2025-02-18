"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  '/Production1.png',
  '/Production2.jpg',
  '/Production3.png',
// Add more images as needed
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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    '/Production1.png',
    '/Production2.jpg',
    '/Production3.png',
    '/Production5.png',
  // Add more images as needed
];

export default function ImageSlider() {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 3));
  
  return (
    <div className="relative w-full flex justify-center items-center  py-6">  {/* bg-gray-100 *//*}
      <div className="flex space-x-4 screen-full overflow-hidden">
        <AnimatePresence>
          {visibleImages.map((img, index) => (
            <motion.img
              key={img}
              src={img}
              alt={`Slide ${index}`}
              className="w-1/3 h-auto rounded-lg shadow-lg overflow-hidden"   
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
*/