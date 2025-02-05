import { useState, useEffect, useRef } from "react";
import VerticalSlider from "@/components/VerticalSlider"; // Assuming this is used in your gallery.
import Gallery from "./Gallery"; // Keep using the existing Gallery component

const texts = [
  {
    title: "Connecting To All Aspects Of The Entire Collision Repair Process",
    subtitle: "",
  },
  {
    title: "Connecting To All Aspects Of The Entire Collision Repair Process",
    subtitle: "",
  },
  {
    title: "Customized For YOUR Workflow",
    subtitle: "Customize Key Aspects Of The System. Reporting, Departments, Business Rules & Workflows",
    
  },
  {
    title: "Customized For YOUR Workflow",
    subtitle: "Customize Key Aspects Of The System. Reporting, Departments, Business Rules & Workflows",
    
  },
];

export default function Principal() {
  const [currentText, setCurrentText] = useState(0);
  const [opacity, setOpacity] = useState(1); // Controls visibility of the text
  const [galleryOpacity, setGalleryOpacity] = useState(0); // Start gallery as invisible
  const textRef = useRef(null);
  const galleryRef = useRef(null);

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval); // Clean up the interval
  }, []);

  // Handle visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position

      // Control text visibility based on scroll position
      if (textRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        const offset = 120; // Set the offset for the fade effect

        // Fade text as it reaches near the top
        if (scrollPosition > textRect.top - offset) {
          setOpacity(Math.max(0, 1 - (scrollPosition - (textRect.top - offset)) / 120)); // Fade out gradually
        } else {
          setOpacity(1); // Reset to full opacity when it's not near the top
        }
      }

      // Control gallery visibility based on scroll position
      if (galleryRef.current) {
        const galleryRect = galleryRef.current.getBoundingClientRect();
        const offset = 120; // Set the offset for the fade effect

        // Fade gallery in when it becomes visible
        if (scrollPosition > galleryRect.top - offset) {
          setGalleryOpacity(Math.min(1, (scrollPosition - galleryRect.top + offset) / 120)); // Fade in gradually
        } else {
          setGalleryOpacity(0); // Fade out when not visible
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up the scroll event listener
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <video className="object-cover w-full h-full opacity-80" muted autoPlay loop>
            <source src="/VideoSlider.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Hero Content with Multiple Fade-In/Fade-Out Texts */}
        <div
          ref={textRef}
          className="relative z-10 max-w-3xl p-5 text-white transition-opacity duration-300"
          style={{ opacity }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">{texts[currentText].title}</h1>
          {texts[currentText].subtitle && (
            <p className="text-lg md:text-xl mt-2">{texts[currentText].subtitle}</p>
          )}
        </div>
      </div>

      {/* Gallery - Fixed below the navbar */}
      <div
        ref={galleryRef}
        style={{
          opacity: galleryOpacity,
          transition: "opacity 0.3s",
          position: "fixed",
          top: "80px", // Adjust this based on the height of your navbar (80px is an example)
          left: "0",
          right: "0",
          zIndex: 10, // Ensure it stays above other content
          pointerEvents: galleryOpacity === 0 ? "none" : "auto", // Prevent interaction when invisible
        }}
      >
      </div>
    </div>
  );
}




/*
import { useState, useEffect } from "react";
import VerticalSlider from "@/components/VerticalSlider";

const texts = [
  "Elevate Your Brand",
  "Body Shop Connect Web Site",
  "Innovative design solutions",
  "Your business in digital era",
  "Transforming your online presence",
];

// Array of video file paths (store them inside "public/videos/")
const videos = [
  "/bsc1.mp4",
  "/bsc2.mp4",
  "/bsc3.mp4",
  "/bsc4.mp4",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 7000); // Change text and video every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Background (Cycled) *//*}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          key={currentVideo} // Forces reloading the video
          className="object-cover w-full h-full opacity-80 transition-all duration-1000 ease-in-out"
          muted
          autoPlay
          loop
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay for Better Text Visibility *//*}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Hero Content with Multiple Fade-In/Fade-Out Texts *//*}
      <div className="relative z-10 max-w-3xl p-5 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold animate-fadeInOut">
          {texts[currentText]}
        </h1>
        <p className="mt-5 text-lg md:text-xl animate-fadeInOut">
          Building digital experiences that stand out.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>

      <VerticalSlider />
    </div>
  );
}




/*
import { useState, useEffect } from "react";
import VerticalSlider from "@/components/VerticalSlider";
const texts = [
  "Elevate Your Brand",
  "Body Shop Connect Web Site",
  "Innovative design solutions",
  "Your business in digital era",
  "Transforming your online presence",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Background *//*}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="object-cover w-full h-full opacity-80"
          muted
          autoPlay
          loop
        >
          <source src="/bsc1.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Dark Overlay for Better Text Visibility *//*}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Hero Content with Multiple Fade-In/Fade-Out Texts *//*}
      <div className="relative z-10 max-w-3xl p-5 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold animate-fadeInOut">
          {texts[currentText]}
        </h1>
        <p className="mt-5 text-lg md:text-xl animate-fadeInOut">
          Building digital experiences that stand out.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-white-600 transition">
          Get Started
        </button>
      </div>
      <VerticalSlider />
    </div>
  );
}

  */