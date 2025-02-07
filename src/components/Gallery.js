"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import dynamic from "next/dynamic"; 
const Production = dynamic(() => import("@/pages/production"), { ssr: false });

const images = [
  { id: 1, src: "/images/accounting.jpg", title: "Production", description: "Visual Production Management with Unlimited Departments and Display Board Configuration" },
  { id: 2, src: "/images/schedule.jpg", title: "Scheduling", description: "Full Scheduling System including Appointments, Estimates, Vehicles Arriving, Vehicles Starting Production and Vehicles Being Delivered" },
  { id: 3, src: "/images/mediamanachement.jpg", title: "Media Management", description: "Technician Tracking and Management Connecting the Back of the Shop to the Front Office." },
  { id: 4, src: "/images/tecnicianTracking.jpeg", title: "Technician Tracking", description: "The calming waves of the deep blue ocean." },
  { id: 5, src: "/images/jobCosting.jpeg", title: "Job Costing", description: "Job cost repair orders easily against your sale. Ensure you are profiting on every job." },
  { id: 6, src: "/images/partmanagement.jpg", title: "Parts Management", description: "Manage purchase orders, parts invoices, vendor discounts and more." },
  { id: 7, src: "/images/quickstimate.jpg", title: "Quick Estimate", description: "Quick Estimating for PDR & Menu Priced Items plus Quick Easy Photo Management." },
  { id: 8, src: "/images/externalComunication.jpeg", title: "External Communications", description: "Automated Communications & Online Customer Portals Keeps Customers Updated On The Status Of The Vehicle Repair." },
  { id: 9, src: "/images/internationCommunication.jpg", title: "Internal Communications", description: "Communicate directly with staff via internal messages. Update multiple staff members within seconds on repair orders or non-repair order related issues and updates." },
  { id: 10, src: "/images/accounting.jpg", title: "Accounting", description: "Accounts Receivable Management and Accounting Integrations to a variety of Accounting Systems" },
  { id: 11, src: "/images/multistorelocation.jpg", title: "Multi Store Locations", description: "Multiple Locations Management including Central Management, Ability to easily transfer files between locations and much more" },
  { id: 12, src: "/images/dealership-e1570837755549.jpeg", title: "Dealer System Integration", description: "Integrated PBS Dealer Management System. Manage your Collision Shop better and remove the double entry between systems" },
  { id: 13, src: "/images/painScaleInterface.png", title: "Paint Scale Interfaces", description: "Automated Paint Job Costing from Akzo Nobel, BASF and PPG Paint Scales" },
  { id: 14, src: "/images/googlesurvey.png", title: "CSI - Google Survey", description: "Google Reviews and more with Integration to One Local and Podium." },
  { id: 15, src: "/images/rentalCarInterface.png", title: "Rental Car Interface", description: "Save time and duplicate entry by updating statuses with ARMS Integration." },
];

export default function GalleryComponent() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto p-6 bg-white transition-none">

<div className="mt-3 text-center">
              <h1 className="text-xl md:text-2xl rounded-xl font-bold text-gray-500 mb-5 ">Connecting The Dots Through The Collision Repair Process</h1>
              <p className="text-base md:text-lg text-gray-600 mb-10">Helping Collision Repair Facilities Exceed By Connecting Their Shops To The Future With The Right Technology. No Two Repair Shops Are The Same So Why Be Forced Into A Process By Other Body Shop Management Systems</p>
       
        
      </div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-color-orange">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer transition-opacity duration-700"
            onClick={() => setSelectedImage(image)}
          >
            <div className="rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-72 object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
              />
              {/* Learn More Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold bg-orange-500 px-4 py-2 rounded-md">
                  Learn More
                </span>
              </div>
            </div>
            {/* Image Title & Description */}
            <div className="mt-3 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-orange-500">{image.title}</h3>
              <p className="text-base md:text-lg text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal Popup */}
      {selectedImage && (
        <Dialog open={true} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <Dialog.Panel className="bg-white rounded-xl p-8 shadow-lg max-w-4xl overflow-auto max-h-[80vh] relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* ✅ If "Production" is selected, show Production.js */}
            {selectedImage.title === "Production" ? (
              <Production />
            ) : (
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">{selectedImage.title}</h1>
                <p className="text-lg text-gray-600 mt-4">{selectedImage.description}</p>
                <button onClick={() => setSelectedImage(null)} className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
                  Close
                </button>
              </div>
            )}
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}





/*
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import VerticalSlider from "@/components/VerticalSlider";

const images = [
  { id: 1, src: "/images/accounting.jpg", title: "Production", description: "Visual Production Management with Unlimited Departments and Display Board Configurations" },
  { id: 2, src: "/images/schedule.jpg", title: "Scheduling", description: "Full Scheduling System including Appointments, Estimates, Vehicles Arriving, Vehicles Starting Production and Vehicles Being Delivered" },
  { id: 3, src: "/images/mediamanachement.jpg", title: "Media Management", description: "Technician Tracking and Management Connecting the Back of the Shop to the Front Office." },
  { id: 4, src: "/images/tecnicianTracking.jpeg", title: "Technician Tracking", description: "The calming waves of the deep blue ocean." },
  { id: 5, src: "/images/jobCosting.jpeg", title: "Job Costing", description: "Job cost repair orders easily against your sale. Ensure you are profiting on every job." },
  { id: 6, src: "/images/partmanagement.jpg", title: "Parts Management", description: "Manage purchase orders, parts invoices, vendor discounts and more." },
  { id: 7, src: "/images/quickstimate.jpg", title: "Quick Estimate", description: "Quick Estimating for PDR & Menu Priced Items plus Quick Easy Photo Management." },
  { id: 8, src: "/images/externalComunication.jpeg", title: "External Communications", description: "Automated Communications & Online Customer Portals Keeps Customers Updated On The Status Of The Vehicle Repair.." },
  { id: 9, src: "/images/internationCommunication.jpg", title: "Internal Communications", description: "Communicate directly with staff via internal messages. Update multiple staff members within seconds on repair orders or non repair order related issues and updates." },
  { id: 10, src: "/images/accounting.jpg", title: "Accounting", description: "Accounts Receivable Management and Accounting Integrations to a variety of Accounting Systems" },
  { id: 11, src: "/images/multistorelocation.jpg", title: "Multi Store Locations", description: "Multiple Locations Management including Central Management, Ability to easily transfer files between locations and much more" },
  { id: 12, src: "/images/dealership-e1570837755549.jpeg", title: "Dealer System Integration", description: "Integrated PBS Dealer Management System. Manage your Collision Shop better and remove the double entry between systems" },
  { id: 13, src: "/images/painScaleInterface.png", title: "Paint Scale Interfaces", description: "Automated Paint Job Costing from Akzo Nobel, BASF and PPG Paint Scales" },
  { id: 14, src: "/images/googlesurvey.png", title: "CSI - Google Survey", description: "Google Reviews and more with Integration to One Local and Podium." },
  { id: 15, src: "/images/rentalCarInterface.png", title: "Rental Car Interface", description: "Save time and duplicate entry by updating statuses with ARMS Integration.." },
];

export default function GalleryComponent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    "Accounting",
    "Scheduling",
    "Production",
    "Multi-Store",
    "Parts",
    "Parts Tracking",
    "Job Costing",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Sticky Navbar *//*}
      <nav className="sticky top-40 z-10 bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center space-x-6">
          {navItems.map((item) => (
            <span key={item} className="text-lg font-semibold text-gray-800 hover:text-orange-500 cursor-pointer">
              {item}
            </span>
          ))}
          {/* Dropdown for "..." *//*}
          <div className="relative">
            <button
              onMouseMove={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-lg font-semibold text-gray-800 hover:text-orange-500"
            >
              ...
            </button>
            {isDropdownOpen && (
              <ul className="absolute mt-2 bg-blue shadow-md rounded-lg py-2 w-40">
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Paint Scale</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Estimating</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Technician</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">DealerShips</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Communicate</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Media</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Rental Car</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Analytics</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Inventory</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">CSI Connect</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Privacy Policy</li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Support </li>
                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">About Us</li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      

      {/* Grid Layout for Gallery *//*}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => {
          const fadeThreshold = 700; // Adjust this to control when fading starts
          const fadeGroup = Math.floor(index / 3) * fadeThreshold;
          const fadeOpacity = scrollY > fadeGroup ? 1 - (scrollY - fadeGroup) / fadeThreshold : 1;
          
          return (
            <div
              key={image.id}
              className="relative group cursor-pointer transition-opacity duration-700"
              style={{ opacity: Math.max(fadeOpacity, 0) }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Gallery Card with Image *//*}
              <div className="rounded-lg shadow-lg overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
                />
                {/* Learn More Overlay (Shows on Hover) *//*}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg font-semibold bg-orange-500 px-4 py-2 rounded-md">
                    Learn More
                  </span>
                </div>
              </div>
              {/* Image Title and Description *//*}
              <div className="mt-3 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-orange-500">
                  {image.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300">
                  {image.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Popup *//*}
      {selectedImage && (
        <Dialog open={true} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <Dialog.Panel className="bg-white rounded-xl p-8 shadow-lg max-w-4xl overflow-auto max-h-[80vh] relative">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold">{selectedImage.title}</h1>
              <p className="text-lg text-gray-600 mt-4">{selectedImage.description}</p>
              <button onClick={() => setSelectedImage(null)} className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
                Close
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}


*/


/*
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

const images = [
  { id: 1, src: "/images/accounting.jpg", title: "Production", description: "Visual Production Management with Unlimited Departments and Display Board Configurations" },
  { id: 2, src: "/images/schedule.jpg", title: "Scheduling", description: "Full Scheduling System including Appointments, Estimates, Vehicles Arriving, Vehicles Starting Production and Vehicles Being Delivered" },
  { id: 3, src: "/images/mediamanachement.jpg", title: "Media Management", description: "Technician Tracking and Management Connecting the Back of the Shop to the Front Office." },
  { id: 4, src: "/images/tecnicianTracking.jpeg", title: "Technician Tracking", description: "The calming waves of the deep blue ocean." },
  { id: 5, src: "/images/jobCosting.jpeg", title: "Job Costing", description: "Job cost repair orders easily against your sale. Ensure you are profiting on every job." },
  { id: 6, src: "/images/partmanagement.jpg", title: "Parts Management", description: "Manage purchase orders, parts invoices, vendor discounts and more." },
  { id: 7, src: "/images/quickstimate.jpg", title: "Quick Estimate", description: "Quick Estimating for PDR & Menu Priced Items plus Quick Easy Photo Management." },
  { id: 8, src: "/images/externalComunication.jpeg", title: "External Communications", description: "Automated Communications & Online Customer Portals Keeps Customers Updated On The Status Of The Vehicle Repair.." },
  { id: 9, src: "/images/internationCommunication.jpg", title: "Internal Communications", description: "Communicate directly with staff via internal messages. Update multiple staff members within seconds on repair orders or non repair order related issues and updates." },
  { id: 10, src: "/images/accounting.jpg", title: "Accounting", description: "Accounts Receivable Management and Accounting Integrations to a variety of Accounting Systems" },
  { id: 11, src: "/images/multistorelocation.jpg", title: "Multi Store Locations", description: "Multiple Locations Management including Central Management, Ability to easily transfer files between locations and much more" },
  { id: 12, src: "/images/dealership-e1570837755549.jpeg", title: "Dealer System Integration", description: "Integrated PBS Dealer Management System. Manage your Collision Shop better and remove the double entry between systems" },
  { id: 13, src: "/images/painScaleInterface.png", title: "Paint Scale Interfaces", description: "Automated Paint Job Costing from Akzo Nobel, BASF and PPG Paint Scales" },
  { id: 14, src: "/images/googlesurvey.png", title: "CSI - Google Survey", description: "Google Reviews and more with Integration to One Local and Podium." },
  { id: 15, src: "/images/rentalCarInterface.png", title: "Rental Car Interface", description: "Save time and duplicate entry by updating statuses with ARMS Integration.." },
];

export default function GalleryComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to calculate opacity based on scroll position
  const getOpacity = (index) => {
    const fadeStart = 200; // Adjust this value to start fading earlier or later
    const fadeEnd = fadeStart + 300; // Adjust this value to control fade duration

    const imageTop = index * 200; // Approximate each image height (adjust as needed)
    const scrollFade = (scrollY - imageTop + fadeStart) / (fadeEnd - fadeStart);

    return Math.max(0, 1 - scrollFade);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Sticky Navbar *//*}
      <nav className="sticky top-0 z-10 bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
        </div>
      </nav>

      {/* Gallery Grid *//*}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer transition-opacity duration-500 ease-in-out"
            style={{ opacity: getOpacity(index) }}
          >
            {/* Gallery Card with Image *//*}
            <div className="rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-72 object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
              />
              {/* Learn More Overlay (Shows on Hover) *//*}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold bg-orange-500 px-4 py-2 rounded-md">
                  Learn More
                </span>
              </div>
            </div>
            {/* Image Title and Description *//*}
            <div className="mt-3 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-orange-500">
                {image.title}
              </h3>
              <p className="text-base md:text-lg text-gray-300">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/

/*
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import VerticalSlider from "@/components/VerticalSlider";

const images = [
  { id: 1, src: "/images/accounting.jpg", title: "Production", description: "Visual Production Management with Unlimited Departments and Display Board Configurations" },
  { id: 2, src: "/images/schedule.jpg", title: "Scheduling", description: "Full Scheduling System including Appointments, Estimates, Vehicles Arriving, Vehicles Starting Production and Vehicles Being Delivered" },
  { id: 3, src: "/images/mediamanachement.jpg", title: "Media Management", description: "Technician Tracking and Management Connecting the Back of the Shop to the Front Office." },
  { id: 4, src: "/images/tecnicianTracking.jpeg", title: "Technician Tracking", description: "The calming waves of the deep blue ocean." },
  { id: 5, src: "/images/jobCosting.jpeg", title: "Job Costing", description: "Job cost repair orders easily against your sale. Ensure you are profiting on every job." },
  { id: 6, src: "/images/partmanagement.jpg", title: "Parts Management", description: "Manage purchase orders, parts invoices, vendor discounts and more." },
  { id: 7, src: "/images/gallery7.jpg", title: "Serene Lake", description: "A peaceful lake reflecting the beauty of nature." },
  { id: 8, src: "/images/gallery8.jpg", title: "Historic Castle", description: "A medieval castle standing tall in history." },
  { id: 9, src: "/images/gallery9.jpg", title: "Cherry Blossoms", description: "Springtime with vibrant cherry blossoms in bloom." },
  { id: 10, src: "/images/gallery10.jpg", title: "Jungle Waterfall", description: "A hidden waterfall deep in the jungle." },
  { id: 11, src: "/images/gallery11.jpg", title: "Northern Lights", description: "Dancing auroras in the Arctic sky." },
  { id: 12, src: "/images/gallery12.jpg", title: "Ancient Ruins", description: "Remnants of an ancient civilization." },
  { id: 13, src: "/images/gallery13.jpg", title: "Autumn Forest", description: "Golden leaves covering the forest floor." },
  { id: 14, src: "/images/gallery14.jpg", title: "Tropical Paradise", description: "A dream island getaway with clear blue waters." },
  { id: 15, src: "/images/gallery15.jpg", title: "Modern Architecture", description: "A futuristic building with sleek design." },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items for the navbar
  const navItems = [
    "Accounting",
    "Scheduling",
    "Production",
    "Multi-Store",
    "Parts",
    "Parts Tracking",
    "Job Costing",
    "..."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundFade = `bg-gray-900 transition-all duration-300 ease-in-out ${
    scrollY > 50 ? "bg-opacity-90" : "bg-opacity-50"
  }`;

  return (
    <div className="container mx-auto p-6">
      {/* Navbar *//*}
      <nav className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center">
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item} className="text-lg font-semibold text-gray-800 hover:text-orange-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col items-center space-y-2">
            {navItems.map((item) => (
              <li key={item} className="text-lg font-semibold text-gray-800 hover:text-orange-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Grid Layout for Gallery *//*}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            {/* Gallery Card with Image *//*}
            <div className="rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-72 object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
              />
              {/* Learn More Overlay (Shows on Hover) *//*}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold bg-orange-500 px-4 py-2 rounded-md">
                  Learn More
                </span>
              </div>
            </div>
            {/* Image Title and Description *//*}
            <div className="mt-3 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-orange-500">{image.title}</h3>
              <p className="text-base md:text-lg text-gray-300">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup *//*}
      {selectedImage && (
        <Dialog
          open={true}
          onClose={() => setSelectedImage(null)}
          className={`${backgroundFade} fixed inset-0 flex items-center justify-center`}
        >
          <Dialog.Panel className="bg-white rounded-xl p-8 shadow-lg max-w-4xl overflow-auto max-h-[80vh] relative">
            {/* Popup Content *//*}
            <div className="flex flex-col justify-center items-center">
              {/* Header *//*}
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold">{selectedImage.title}</h1>
              </div>
              {/* Body *//*}
              <div className="mb-6 text-gray-600 text-lg">
                <p>{selectedImage.description}</p>
                <p className="mt-4">
                  More interesting details about this feature.
                  <VerticalSlider />
                </p>
              </div>
              {/* Footer *//*}
              <div className="mt-4 text-center">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}
*/

/*
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import VerticalSlider from "@/components/VerticalSlider";

const images = [
  { id: 1, src: "/images/accounting.jpg", title: "Production", description: "Visual Production Management with Unlimited Departments and Display Board Configurations" },
  { id: 2, src: "/images/schedule.jpg", title: "Scheduling", description: "Full Scheduling System including Appointments, Estimates, Vehicles Arriving, Vehicles Starting Production and Vehicles Being Delivered" },
  { id: 3, src: "/images/mediamanachement.jpg", title: "Media Management", description: "Technician Tracking and Management Connecting the Back of the Shop to the Front Office." },
  { id: 4, src: "/images/tecnicianTracking.jpeg", title: "Technician Tracking", description: "The calming waves of the deep blue ocean." },
  { id: 5, src: "/images/jobCosting.jpeg", title: "Job Costing", description: "Job cost repair orders easily against your sale. Ensure you are profiting on every job." },
  { id: 6, src: "/images/partmanagement.jpg", title: "Parts Management", description: "Manage purchase orders, parts invoices, vendor discounts and more." },
  { id: 7, src: "/images/gallery7.jpg", title: "Serene Lake", description: "A peaceful lake reflecting the beauty of nature." },
  { id: 8, src: "/images/gallery8.jpg", title: "Historic Castle", description: "A medieval castle standing tall in history." },
  { id: 9, src: "/images/gallery9.jpg", title: "Cherry Blossoms", description: "Springtime with vibrant cherry blossoms in bloom." },
  { id: 10, src: "/images/gallery10.jpg", title: "Jungle Waterfall", description: "A hidden waterfall deep in the jungle." },
  { id: 11, src: "/images/gallery11.jpg", title: "Northern Lights", description: "Dancing auroras in the Arctic sky." },
  { id: 12, src: "/images/gallery12.jpg", title: "Ancient Ruins", description: "Remnants of an ancient civilization." },
  { id: 13, src: "/images/gallery13.jpg", title: "Autumn Forest", description: "Golden leaves covering the forest floor." },
  { id: 14, src: "/images/gallery14.jpg", title: "Tropical Paradise", description: "A dream island getaway with clear blue waters." },
  { id: 15, src: "/images/gallery15.jpg", title: "Modern Architecture", description: "A futuristic building with sleek design." },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundFade = `bg-gray-900 transition-all duration-300 ease-in-out ${
    scrollY > 50 ? "bg-opacity-90" : "bg-opacity-50"
  }`;

  return (
    <div className="container mx-auto p-6">
      {/* Grid Layout *//*}
      <div className="grid grid-cols-3 gap-6">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            {/* Gallery Card with Image *//*}
            <div className="rounded-lg shadow-lg overflow-hidden relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-72 object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
              />
              {/* Learn More Overlay (Shows on Hover) *//*}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold bg-orange-500 px-4 py-2 rounded-md">
                  Learn More
                </span>
              </div>
            </div>
            {/* Image Title and Description *//*}
            <div className="mt-3 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-orange-500">{image.title}</h3>
              <p className="text-base md:text-lg text-gray-300">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup *//*}
      {selectedImage && (
        <Dialog
          open={true}
          onClose={() => setSelectedImage(null)}
          className={`${backgroundFade} fixed inset-0 flex items-center justify-center`}
        >
          <Dialog.Panel className="bg-white rounded-xl p-8 shadow-lg max-w-4xl overflow-auto max-h-[80vh] relative">
            {/* Popup Content *//*}
            <div className="flex flex-col justify-center items-center">
              {/* Header *//*}
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold">{selectedImage.title}</h1>
              </div>

              {/* Body *//*}
              <div className="mb-6 text-gray-600 text-lg">
                <p>{selectedImage.description}</p>
                <p className="mt-4">
                  More interesting details about this feature.
                  <VerticalSlider />
                </p>
              </div>

              {/* Footer *//*}
              <div className="mt-4 text-center">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}

*/

/*
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import VerticalSlider from "@/components/VerticalSlider";

const images = [
  { id: 1, src: "/images/accounting.jpg", title: "Production", description: "Visual Production Management with Unlimited Departments and Display Board Configurations" },
  { id: 2, src: "/images/schedule.jpg", title: "Scheduling", description: "Full Scheduling System including Appointments, Estimates, Vehicles Arriving, Vehicles Starting Production and Vehicles Being Delivered" },
  { id: 3, src: "/images/mediamanachement.jpg", title: "Media Management", description: "Technician Tracking and Management Connecting the Back of the Shop to the Front Office." },
  { id: 4, src: "/images/tecnicianTracking.jpeg", title: "Technician Tracking", description: "The calming waves of the deep blue ocean." },
  { id: 5, src: "/images/jobCosting.jpeg", title: "Job Costing", description: "Job cost repair orders easily against your sale. Ensure you are profiting on every job." },
  { id: 6, src: "/images/partmanagement.jpg", title: "Parts Management", description: "Manage purchase orders, parts invoices, vendor discounts and more." },
  { id: 7, src: "/images/gallery7.jpg", title: "Serene Lake", description: "A peaceful lake reflecting the beauty of nature." },
  { id: 8, src: "/images/gallery8.jpg", title: "Historic Castle", description: "A medieval castle standing tall in history." },
  { id: 9, src: "/images/gallery9.jpg", title: "Cherry Blossoms", description: "Springtime with vibrant cherry blossoms in bloom." },
  { id: 10, src: "/images/gallery10.jpg", title: "Jungle Waterfall", description: "A hidden waterfall deep in the jungle." },
  { id: 11, src: "/images/gallery11.jpg", title: "Northern Lights", description: "Dancing auroras in the Arctic sky." },
  { id: 12, src: "/images/gallery12.jpg", title: "Ancient Ruins", description: "Remnants of an ancient civilization." },
  { id: 13, src: "/images/gallery13.jpg", title: "Autumn Forest", description: "Golden leaves covering the forest floor." },
  { id: 14, src: "/images/gallery14.jpg", title: "Tropical Paradise", description: "A dream island getaway with clear blue waters." },
  { id: 15, src: "/images/gallery15.jpg", title: "Modern Architecture", description: "A futuristic building with sleek design." },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundFade = `bg-gray-900 transition-all duration-300 ease-in-out ${
    scrollY > 50 ? "bg-opacity-90" : "bg-opacity-50"
  }`;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-4xl font-extrabold mb-8 text-white-900">
      </h2>

      {/* Grid Layout *//*}
      <div className="grid grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="relative group cursor-pointer">
            {/* Gallery Card with Image *//*}
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-72 object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
              />
            </div>
            {/* Image Title and Description *//*}
            <div className="mt-2 text-center">
              <h3 className="text-lg font-semibold text-orange-500">{image.title}</h3>
              <p className="text-sm text-white-700">{image.description}</p>
            </div>
            {/* Learn More Button *//*}
            <button
              onClick={() => setSelectedImage(image)}
              className="mt-2 block mx-auto bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal Popup *//*}
      {selectedImage && (
        <Dialog
          open={true}
          onClose={() => setSelectedImage(null)}
          className={`${backgroundFade} fixed inset-0 flex items-center justify-center`}
        >
          <Dialog.Panel className="bg-white rounded-xl p-8 shadow-lg max-w-4xl overflow-auto max-h-[80vh] relative">

            {/* Popup Content *//*}
            <div className="flex flex-col justify-center items-center">
              {/* Header *//*}
              <div className="text-center mb-6">
                Hi
                <h1 className="text-3xl font-bold">{selectedImage.title}</h1>
              </div>

              {/* Body *//*}
              <div className="mb-6 text-gray-600">
                <p>{selectedImage.description}</p>
                <p className="mt-4">
                  Here are more interesting details about this beautiful image. Feel free to scroll down if the content exceeds the page!
                  <VerticalSlider/>
                </p>
                <p className="mt-4">
                  Another paragraph to demonstrate scrolling content inside the modal popup. Scroll and see how the background fades!
                </p>
              </div>

              {/* Footer *//*}
              <div className="mt-4 text-center">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}
*/


