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

