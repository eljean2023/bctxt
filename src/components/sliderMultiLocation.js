"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    '/multiStoreLocation1.png',
    '/multiStoreLocation2.png',
    '/multiStoreLocation3.png',
];

export default function ImageSlider() {
  const [visibleImages] = useState(images.slice(0, 3));

  return (
    <div className="relative w-full flex justify-center items-center py-6">
      {/* Centered container */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <AnimatePresence mode="popLayout">
          {visibleImages.map((img, i) => (
            <motion.div
              key={img}
              className="w-[250px] sm:w-[220px] h-[180px] sm:h-[280px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg"
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
