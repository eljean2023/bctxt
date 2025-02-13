"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    '/externalCommunication1.jpg',
    '/externalCommunication2.jpg',
    '/externalCommunication3.jpg',
  // Add more images as needed
];

export default function ImageSlider() {
  const [visibleImages] = useState(images.slice(0, 3));

  return (
    <div className="relative w-full flex justify-center items-center  py-6">  {/* bg-gray-100 */}
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
