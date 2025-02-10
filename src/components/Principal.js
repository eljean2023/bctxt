import { useState, useEffect, useRef } from "react";
import DemoModal from "./DemoModal"; // Import the reusable modal

const texts = [
  {
    title: "Connecting To All Aspects Of The Entire Collision Repair Process",
    subtitle: "Connect With Us For A Demonstration.",
    button: true,
  },
  {
    title: "Customized For YOUR Workflow",
    subtitle: "Customize Key Aspects Of The System. Reporting, Departments, Business Rules & Workflows",
    button: true,
  },
];

export default function Principal() {
  const [currentText, setCurrentText] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const videoRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

{/*
  
    useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Make video fixed when scrolled past its height
      if (scrollTop > window.innerHeight * 0.75) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  */}

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div
        ref={videoRef}
        className={`left-0 w-full transition-all duration-300 ${isFixed ? "fixed top-0 h-[43vh] z-20" : "absolute top-0 h-screen z-10"}`}
      >
        <video className="object-cover  w-full h-full opacity-100" muted autoPlay loop>
          <source src="/VideoSlider.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-15"></div>

      {/* Hero Content with Text */}
      <div className="relative z-30 flex items-center justify-center h-screen text-white text-center">
        <div className="max-w-3xl p-5">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">{texts[currentText].title}</h1>
          {texts[currentText].subtitle && (
            <p className="text-lg md:text-xl mt-2">{texts[currentText].subtitle}</p>
          )}
          {texts[currentText].button && (
            <button onClick={() => setIsModalOpen(true)} className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
              SCHEDULE A DEMONSTRATION
            </button>
          )}
          
      {/* Reusable Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>

      {/* Gallery Section below Video */}
      <div > {/* Adjusted to ensure the gallery is below the video */}
        {/* Add your Gallery component or section here */}
        <div >
          {/* Example of Gallery Image */}
          <div >
           
            <div ></div>
          </div>
          {/* Repeat for other images */}
        </div>
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