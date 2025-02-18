"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    '/TechTracking1.png',
    '/techTracking2.png',
    '/TechTracking3.png',
  // Add more images as needed
];

export default function ImageSlider() {
  const [visibleImages] = useState(images.slice(0, 3));

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






