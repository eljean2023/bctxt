"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Flag from "react-world-flags";

export default function Navbar() {
  const languages = [
    { code: "CA", label: "EN", fullLabel: "English" },
    { code: "CA", label: "FR", fullLabel: "Français" },
    { code: "ES", label: "ES", fullLabel: "Español" },
    { code: "RO", label: "RO", fullLabel: "Română" },
  ];

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const langRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleSubDropdown = () => setIsSubDropdownOpen((prev) => !prev);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsSubDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-5 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo */}
        <Image
          src="/BCLogo1.png"
          alt="ModernBrand Logo"
          width={280}
          height={40}
          className="object-contain"
        />

         {/* Phone Number */}
           {/*<h1 className="text-2xl font-bold text-orange-500">1-888-691-6887</h1>*/}

        {/* Links Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <a href="#" className="hover:text-orange-500 transition">ACCOUNTING</a>
          <a href="#" className="hover:text-orange-500 transition">SCHEDULE</a>
          <a href="#" className="hover:text-orange-500 transition">PRODUCTION</a>
          <a href="#" className="hover:text-orange-500 transition">MULTI-STORE</a>
          <a href="#" className="hover:text-orange-500 transition">PARTS</a>
     


          {/* Dropdown for Extra Links */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-orange-500 transition"
            >
              ...
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-48">
                <ul>
                  <li className="py-2 px-4 cursor-pointer hover:bg-orange-500 hover:text-black">
                    <a href="#">PARTS TRACKING</a>
                  </li>
                  <li className="py-2 px-4 cursor-pointer hover:bg-orange-500 hover:text-black">
                    <a href="#">JOB COSTING</a>
                  </li>
                

                  {/* Sub-dropdown for Tracking Parts */}
                  <li className="relative group">
                    <button
                     onMouseOver={toggleSubDropdown} 
                      className="w-full flex justify-between py-2 px-4 cursor-pointer hover:bg-orange-500 hover:text-black"
                    >
                      ....<ChevronRight className="w-4 h-4" />
                    </button>
                    {isSubDropdownOpen && (
                      <div className="absolute left-full top-0 ml-2 bg-gray-800 text-white p-3 rounded-lg shadow-lg w-48">
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         PAINT SCALE
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         ESTIMATING
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         TECHNICIAN
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         DEALERSHIPS
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         COMMUNICATE
                         </a>
                         <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         MEDIA
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         REANTAL CAR
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         ANALYTICS
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         INVENTORY
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         CSI-CONNECT
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                        PRIVACY POLICY
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                         SUPPORT
                        </a>
                        <a href="#" className="block py-1 px-4 hover:bg-orange-500 hover:text-black">
                        ABOUT US
                        </a>
                      </div>
                    )}
                  </li>
                    
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Language Selector */}
        <div className="relative flex items-center ml-6" ref={langRef}>
          <button
            onClick={toggleLang}
            className="text-xl p-2 hover:text-orange-500 transition flex items-center"
          >
            <Flag code={selectedLanguage.code} style={{ width: 30, height: 20 }} className="mr-2" />
            {selectedLanguage.label}
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-48">
              <ul>
                {languages.map((lang) => (
                  <li
                    key={lang.label}
                    onClick={() => handleLanguageSelect(lang)}
                    className="py-2 cursor-pointer hover:bg-orange-500 hover:text-black px-4 flex items-center"
                  >
                    <Flag code={lang.code} style={{ width: 30, height: 20 }} className="mr-2" />
                    {lang.fullLabel}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-4"  onMouseMove={toggleMenu}> 
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-16 left-0 w-full bg-black shadow-md p-5 flex flex-col space-y-5 text-center text-white"
        >
          {["Accounting", "Scheduling", "Production", "Multi-Store", "Parts"].map((item) => (
            <a key={item} href="#" className="text-lg font-semibold hover:text-orange-500">
              {item}
            </a>
          ))}

          {/* Dropdown in Mobile Menu */}
          <button onClick={toggleDropdown} className="text-lg font-semibold hover:text-orange-500">
            More...
          </button>
          {isDropdownOpen && (
            <div className="mt-2 bg-gray-800 p-3 rounded-lg">
              <a href="#" className="block py-1 hover:bg-orange-500 hover:text-black">PARTS</a>
              <a href="#" className="block py-1 hover:bg-orange-500 hover:text-black">INCOMING PARTS</a>
              <a href="#" className="block py-1 hover:bg-orange-500 hover:text-black">Job Costing</a>

              {/* Submenu in Mobile */}
              <button onMouseMove={toggleSubDropdown} className="block w-full py-1 hover:bg-orange-500 hover:text-black"> 
                MUCH MORE
              </button>
              {isSubDropdownOpen && (
                <div className="mt-2 bg-gray-700 p-3 rounded-lg">
                  <a href="#" className="block py-1 hover:bg-orange-500 hover:text-black">Incoming Parts</a>
                  <a href="#" className="block py-1 hover:bg-orange-500 hover:text-black">Outgoing Parts</a>
                </div>
              )}

            </div>
          )}
        </motion.div>
      )}
    </nav>
  );
}



/*
"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Flag from "react-world-flags";

export default function Navbar() {
  const languages = [
    { code: "CA", label: "EN", fullLabel: "English" },
    { code: "CA", label: "FR", fullLabel: "Français" },
    { code: "ES", label: "ES", fullLabel: "Español" },
    { code: "RO", label: "RO", fullLabel: "Română" },
  ];

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const langRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-5 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo *//*}
        <Image
          src="/BCLogo1.png"
          alt="ModernBrand Logo"
          width={380}
          height={40}
          className="object-contain"
        />

        {/* Phone Number *//*}
        <h1 className="text-2xl font-bold text-orange-500">1-888-691-6887</h1>

        {/* Links Menu *//*}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <a href="#" className="hover:text-orange-500 transition">ACCOUNTING</a>
          <a href="#" className="hover:text-orange-500 transition">SCHEDULE</a>
          <a href="#" className="hover:text-orange-500 transition">PRODUCTION</a>
          <a href="#" className="hover:text-orange-500 transition">MULTI-STORE  </a>
          

          {/* Dropdown for Extra Links *//*}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-orange-500 transition"
            >
              ...
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-48">
                <ul>
                <li className="py-2 px-4 cursor-pointer hover:bg-orange-500 hover:text-black">
                    <a href="#">PARTS </a>
                  </li>
                  <li className="py-2 px-4 cursor-pointer hover:bg-orange-500 hover:text-black">
                    <a href="#">TRACKING Parts </a>
                  </li>
                  <li className="py-2 px-4 cursor-pointer hover:bg-orange-500 hover:text-black">
                    <a href="#">Job Costing</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Language Selector *//*}
        <div className="relative flex items-center ml-6" ref={langRef}>
          <button
            onClick={toggleLang}
            className="text-xl p-2 hover:text-orange-500 transition flex items-center"
          >
            <Flag code={selectedLanguage.code} style={{ width: 30, height: 20 }} className="mr-2" />
            {selectedLanguage.label}
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-48">
              <ul>
                {languages.map((lang) => (
                  <li
                    key={lang.label}
                    onClick={() => handleLanguageSelect(lang)}
                    className="py-2 cursor-pointer hover:bg-orange-500 hover:text-black px-4 flex items-center"
                  >
                    <Flag code={lang.code} style={{ width: 30, height: 20 }} className="mr-2" />
                    {lang.fullLabel}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button *//*}
        <button className="md:hidden ml-4" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu *//*}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-16 left-0 w-full bg-black shadow-md p-5 flex flex-col space-y-5 text-center text-white"
        >
          {["Accounting", "Scheduling", "Production", "Multi-Store", "Parts"].map((item) => (
            <a key={item} href="#" className="text-lg font-semibold hover:text-orange-500">
              {item}
            </a>
          ))}
          {/* Dropdown in Mobile Menu *//*}
          <button onClick={toggleDropdown} className="text-lg font-semibold hover:text-orange-500">
            More...
          </button>
          {isDropdownOpen && (
            <div className="mt-2 bg-gray-800 p-3 rounded-lg">
              <a href="#" className="block py-1 hover:bg-orange-500 hover:text-black">Parts Tracking</a>
              <a href="#" className="block py-1 hover:bg-orange-500 hover:text-black">Job Costing</a>
            </div>
          )}
        </motion.div>
      )}
    </nav>
  );
}
*/