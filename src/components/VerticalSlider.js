"use client"; // Required for Next.js App Router
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Local images inside "public/images" folder
const images = [
  "/Production1.png", 
  "/Production2.jpg",
  "/QB-online.png", // Third Image
  "/SAGE50C.jpg", // Fourth Image
  "/Production3.png", 
];

export default function VerticalImageSlider() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    // Beautiful transitions for each image
    const variants = [
      { initial: { y: "100%", opacity: 0, scale: 0.95 }, animate: { y: "0%", opacity: 1, scale: 1 }, exit: { y: "-100%", opacity: 0, scale: 0.95 } }, // Bottom → Top
      { initial: { x: "-100%", opacity: 0, scale: 0.95 }, animate: { x: "0%", opacity: 1, scale: 1 }, exit: { x: "100%", opacity: 0, scale: 0.95 } }, // Left → Right
      { initial: { y: "-100%", opacity: 0, scale: 0.95 }, animate: { y: "0%", opacity: 1, scale: 1 }, exit: { y: "100%", opacity: 0, scale: 0.95 } }, // Top → Bottom
      { initial: { x: "100%", opacity: 0, scale: 0.95 }, animate: { x: "0%", opacity: 1, scale: 1 }, exit: { x: "-100%", opacity: 0, scale: 0.95 } }, // Right → Left
    ];
  
    return (
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-[300px] aspect-[3/4] overflow-hidden rounded-2xl shadow-lg border-1 border-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slider Image ${index + 1}`}
            initial={variants[index % 4].initial}
            animate={variants[index % 4].animate}
            exit={variants[index % 4].exit}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute w-full h-full object-contain rounded-2xl"
          />
        </AnimatePresence>
      </div>
    );
  }