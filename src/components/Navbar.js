"use client";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Flag from "react-world-flags";

export default function Navbar() {
  // Separate states for language dropdown and mobile menu
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Default language is English
  const [selectedLanguage, setSelectedLanguage] = useState({ code: "CA", label: "English" });
  const langRef = useRef(null);

  // Toggle functions
  const toggleLang = () => {
    setIsLangOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLangOpen(false);
  };

  // Close language dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langRef]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Image
          src="/BCLogo1.png"
          alt="ModernBrand Logo"
          width={380}
          height={40}
          className="object-contain"
        />
        <h1 className="text-2xl font-bold">1-888-691-6887</h1>

        {/* Language Selector */}
        <div className="relative flex items-center" ref={langRef}>
          <button
            onClick={toggleLang}
            className="text-xl p-2 hover:text-blue-500 transition flex items-center"
          >
            <Globe />
            {/* Display the selected language flag with a larger size */}
            <Flag code={selectedLanguage.code} style={{ width: 30, height: 20 }} className="ml-2" />
          </button>
          {isLangOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black p-4 rounded-lg shadow-lg w-48">
              <ul>
                <li
                  onClick={() => handleLanguageSelect({ code: "CA", label: "English" })}
                  className="py-2 cursor-pointer hover:bg-gray-200 px-4 flex items-center"
                >
                  <Flag code="CA" style={{ width: 30, height: 20 }} className="mr-2" />
                  English
                </li>
                <li
                  onClick={() => handleLanguageSelect({ code: "CA", label: "Français" })}
                  className="py-2 cursor-pointer hover:bg-gray-200 px-4 flex items-center"
                >
                  <Flag code="CA" style={{ width: 30, height: 20 }} className="mr-2" />
                  Français
                </li>
                <li
                  onClick={() => handleLanguageSelect({ code: "ES", label: "Español" })}
                  className="py-2 cursor-pointer hover:bg-gray-200 px-4 flex items-center"
                >
                  <Flag code="ES" style={{ width: 30, height: 20 }} className="mr-2" />
                  Español
                </li>
                <li
                  onClick={() => handleLanguageSelect({ code: "RO", label: "Română" })}
                  className="py-2 cursor-pointer hover:bg-gray-200 px-4 flex items-center"
                >
                  <Flag code="RO" style={{ width: 30, height: 20 }} className="mr-2" />
                  Română
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-16 left-0 w-full glass p-5 flex flex-col space-y-5 text-center"
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a key={item} href="#" className="text-lg font-semibold">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
