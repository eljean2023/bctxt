"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import '../utils/i18n';


import DemoModal from "./DemoModal"; 
import Production from "@/pages/production"; 
import Scheduling from "@/pages/scheduling";
import MediaManagement from "@/pages/mediaManagement";
import TechTraking from "@/pages/techTracking";
import JobCosting from "@/pages/jobCosting";
import Parts from "@/pages/partsManagement";
import PartsTracking from "@/pages/partsTracking";
import QuickStimate from "@/pages/quickStimate";
import ExternalCummunication from "@/pages/externalCommunication";
import InternalCummunication from "@/pages/internalCommucation";
import Accounting from "@/pages/accounting";
import MultiLocation from "@/pages/multiLocation";
import DealerShip from "@/pages/dealerShipConnect";
import PainScaleInterface from "@/pages/paintScaleInterface";
import CsiSurvey from "@/pages/csi";
import RentalCar from "@/pages/rentalCarInterface";
import PrivacyPolicy from "@/pages/privacyPolicy";
import AboutUs from "@/pages/aboutUs";
import Inventory from "@/pages/inventory";
import Analytic from "@/pages/analytic";


export default function Navbar() {
  const languages = [
    { label: "LANGUAGES", fullLabel: "English", code: "en", flag: "CA" }, 
    { label: "FR", fullLabel: "FRANÇAIS", code: "fr", flag: "CA" }, 
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductionModalOpen, setIsProductionModalOpen] = useState(false); 
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false); 
  const [ismediaManagementModalOpen, setMediaManagementModalOpen] = useState(false); 
  const [istechTrakigModalOpen, setTechTrackingModalOpen] = useState(false); 
  const [isjobCostingModalOpen, setJobCostingModalOpen] = useState(false); 
  const [ispartsModalOpen, setPartsModalOpen] = useState(false); 
  const [ispartsTrackingModalOpen, setPartsTrackingModalOpen] = useState(false); 
  const [isquickEstimateModalOpen, setQuickEstimateModalOpen] = useState(false); 
  const [isexternalCommunicationModalOpen, setExternalCommunicationModalOpen] = useState(false); 
  const [isinternalCommunicationModalOpen, setInternalCommunicationModalOpen] = useState(false); 
  const [isaccountingModalOpen, setAccountingModalOpen] = useState(false); 
  const [ismultiLocationModalOpen, setMultiLocationModalOpen] = useState(false); 
  const [isdealerShipModalOpen, setDealearShipModalOpen] = useState(false);
  const [ispaintScaleInterfaceModalOpen, setPaintScaleInterfaceModalOpen] = useState(false);
  const [iscsiSurveyModalOpen, setCsiSurveyModalOpen] = useState(false);
  const [isrentalCarModalOpen, setRentalCarModalOpen] = useState(false);
  const [isprivatePolicyModalOpen, setPrivatePolicyModalOpen] = useState(false);
  const [isprivatePolicyxModalOpen, setPrivatePolicyxModalOpen] = useState(false);
  const [isaboutUsModalOpen, setAboutUsModalOpen] = useState(false);
  const [isiventoryModalOpen, setInventoryModalOpen] = useState(false);
  const [isanalyticModalOpen, setAnalyticModalOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  const langRef = useRef(null);
  const dropdownRef = useRef(null);
  
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleSubDropdown = () => setIsSubDropdownOpen((prev) => !prev);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Keep "fr" for translation
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
    <nav className="fixed top-0 left-0 w-full z-50 p-2 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white mb-3">
    
      <img src="/BCLogo2.png" alt="ModernBrand Logo" width="260" height="40" />
      
        {/* Links Menu */}
        <div className="hidden md:flex space-x-6 text-white-100 font-medium ">
      
        <button 
                onClick={() => setAccountingModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              > 
                {t("ACCOUNTING")}
              </button>
          
          <button 
                onClick={() => setIsSchedulingModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                {t("SCHEDULE")}
              </button>
          
              <button 
                onClick={() => setIsProductionModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              > 
                 {t("PRODUCTION")}
              </button>

              <button 
                onClick={() => setMultiLocationModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                {t("MULTI-STORE")}
              </button>
              <button 
                onClick={() => setPartsModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                 {t("PARTS")}
              </button>
              
              
          <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          {/* Dropdown for Extra Links */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-orange-500 transition hover:underline decoration-white"
            >
              ...
              <ChevronDown className="ml-1 w-4 h-4"/>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-95 mt-2 bg-gray-900 text-white-100 p-4 rounded-lg shadow-lg w-48">
                <ul>
                  <li className="py-2 px-4 cursor-pointer hover:text-orange text-white-10">
                  <button 
                onClick={() =>setPartsTrackingModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 text-white-100 text-center"
              >
                {t("PARTS TRACKING")} 
              </button>
                  </li>
                  <hr/>
                  <li className="py-2 px-4 cursor-pointer  hover:text-orange text-white-100">
                  <button 
                onClick={() => setJobCostingModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 text-white-100 text-center"
              >
                 {t("JOB COSTING")} 
              </button>
                  </li>
                  <hr/>


                  <button 
                onClick={() => setPaintScaleInterfaceModalOpen(true)} 
                className="hover:text-orange-400 transition text-white-100 mb-2 text-ms w-full text-left mb-2 mt-2 text-center"
              >
                 {t("PAINT SCALE")}
              </button>
              <hr/>
              <button 
                onClick={() => setQuickEstimateModalOpen(true)} 
                className="hover:text-orange-400 transition text-ms w-full text-left mb-2 mt-2 text-center"
              >
                  {t("ESTIMATING")}
              </button>    
              <hr/>  
              <button 
                onClick={() => setTechTrackingModalOpen(true)} 
                className="hover:text-orange-400 transition text-ms w-full text-left mb-2 mt-2 text-center"
              >
                  {t("TECHNICIAN TRACKING")}
              </button>
              <hr/>
              <button 
                onClick={() => setDealearShipModalOpen(true)} 
                className="hover:text-orange-400 text-ms transition w-full text-left mb-2 mt-2 text-center"
              >
               {t("DEALERSHIPS")}
              </button>
              <hr/>
              <button 
                onClick={() => setInternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
                 {t("INTERNAL COMMUNICATIONS")}
              </button>
              <hr/>
              <button 
                onClick={() => setExternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
                 {t("EXTERNAL COMMUNICATIONS")}
              </button>
              <hr/>
              <button 
                onClick={() => setMediaManagementModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
                 {t("MEDIA")}
              </button>
              <hr/>
              <button 
                onClick={() => setRentalCarModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
                 {t("RENTAL CAR")}
              </button>
              <hr/>
              <button 
                onClick={() => setAnalyticModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
                 {t("ANALYTICS")}
              </button>
              <hr/>
              <button 
                onClick={() => setInventoryModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
               {t("INVENTORY")}
              </button>
              <hr/>
              <button 
                onClick={() => setExternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
                 {t("CSI & REVIEWS")}
              </button>
              <hr/>

              <button 
                onClick={() => setPrivatePolicyModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
                {t("PRIVACY POLICY")}
              </button>
              <hr />
              <button 
                onClick={() => setAboutUsModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2 mt-2 text-center"
              >
                 {t("ABOUT US")}
              </button>
            
                </ul>
              </div>
              
            )}

             {/* Production Modal with Blur Effect */}
      {isProductionModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setIsProductionModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Production /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}
      {/* Scheduling Modal with Blur Effect */}
      {isSchedulingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setIsSchedulingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Scheduling /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

       {/* Media Management Modal with Blur Effect */}
       {ismediaManagementModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setMediaManagementModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <MediaManagement /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

      {/* Media Tecth Tracking Modal with Blur Effect */}
      {istechTrakigModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setTechTrackingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <TechTraking /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

      {/* Media Tecth Tracking Modal with Blur Effect */}
      {isjobCostingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setJobCostingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <JobCosting/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

      {/* Media Part Management Modal with Blur Effect */}
      {ispartsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setPartsModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Parts/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

      {/* Media Quick Estimate Modal with Blur Effect */}
           {isquickEstimateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setQuickEstimateModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <QuickStimate/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

     {/* Media External Communication Modal with Blur Effect */}
     {isexternalCommunicationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setExternalCommunicationModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <ExternalCummunication/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

      {/* Media Internal Communication Modal with Blur Effect */}
     {isinternalCommunicationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setInternalCommunicationModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <InternalCummunication/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 
       {/* Media Accounting Modal with Blur Effect */}
     {isaccountingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setAccountingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Accounting/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Multi Store Location Modal with Blur Effect */}
     {ismultiLocationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setMultiLocationModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <MultiLocation/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

      {/* Dealer System Integration Modal with Blur Effect */}
     {isdealerShipModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setDealearShipModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <DealerShip/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Paint Scales Interfaces Modal with Blur Effect */}
     {ispaintScaleInterfaceModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setPaintScaleInterfaceModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <PainScaleInterface/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* CSI Survey Modal with Blur Effect */}
     {iscsiSurveyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setCsiSurveyModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <CsiSurvey/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Rental Car Modal with Blur Effect */}
     {isrentalCarModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setRentalCarModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <RentalCar/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Private Policy with Blur Effect */}
     {isprivatePolicyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setPrivatePolicyModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <PrivacyPolicy /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 


       {/* Support with Blur Effect */}
     {isaboutUsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() =>setAboutUsModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <AboutUs /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 


       {/* Inventory with Blur Effect */}
     {isiventoryModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() =>setInventoryModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Inventory /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Analytic with Blur Effect */}
     {isanalyticModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() =>setAnalyticModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Analytic /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

      {/* Media Management with Blur Effect */}
     {ismediaManagementModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() =>setMediaManagementModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <MediaManagement /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Media Management with Blur Effect */}
     {ispartsTrackingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() =>setPartsTrackingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <PartsTracking /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

          </div>
        </div>

        {/* Language Selector */}
        <div className="relative flex items-center text-white-100   ml-6" ref={langRef}>
          
        <ul>
              {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            background: i18n.language === lang.code ? "#0000" : "#0000",
            borderRadius: "5px",
          
            color: "orange",
            textDecoration: "underline",
            transition: "text-decoration-color 0.3s ease-in-out", // Smooth transition
          }}
          onMouseEnter={(e) => (e.target.style.textDecorationColor = "white")}
          onMouseLeave={(e) => (e.target.style.textDecorationColor = "orange")}
        >  

          {/* Show the flag opposite of the current language */}
         {i18n.language === "en" && lang.code === "fr"  ? "FRENCH" : null}
        {i18n.language === "fr" && lang.code === "en" ? "ENGLISH" : null}
        </button>
      ))}
              </ul>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 bg-gray-900 text-white-100 p-4 rounded-lg shadow-lg w-48">
              <ul>
              {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            background: i18n.language === lang.code ? "#0000" : "#0000",
            borderRadius: "5px",
          
            color: "orange",
            textDecoration: "underline",
            transition: "text-decoration-color 0.3s ease-in-out", // Smooth transition
          }}
          onMouseEnter={(e) => (e.target.style.textDecorationColor = "white")}
          onMouseLeave={(e) => (e.target.style.textDecorationColor = "orange")}
        >  

          {/* Show the flag opposite of the current language */}
          {i18n.language === "en" && lang.code === "fr" ? "FRENCH" : null}
          {i18n.language === "fr" && lang.code === "en" ? "ENGLISH" : null}
        </button>
      ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-4"  onClick={toggleMenu}> 
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-16 left-0 w-full bg-black shadow-md p-5 flex flex-col space-y-5 text-center text-white md:hidden"
        >
          
          {isMenuOpen && (
            <div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setIsProductionModalOpen(true)} 
                  className="hover:text-orange-400 transition hover:underline decoration-white"
                >
                  {t("Production")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsSchedulingModalOpen(true)} 
                  className="hover:text-orange-400 transition hover:underline decoration-white"
                >
                   {t("Scheduling")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setMediaManagementModalOpen (true)} 
                  className="hover:text-orange-400 transition hover:underline decoration-white"
                >
                  {t("Media Management")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setTechTrackingModalOpen(true)} 
                  className="hover:text-orange-400 transition hover:underline decoration-white"
                >
                  {t("Technician Tracking")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setJobCostingModalOpen(true)} 
                  className="hover:text-orange-400 transition hover:underline decoration-white"
                >
                 {t("Job Costing")}
                </button>
              </li>
            </ul>
            <ul className="space-y-2">
          <li>
              <button 
                onClick={() => setPartsModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
              {t("Parts Management")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setQuickEstimateModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                 {t("Quick EStimate")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setExternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                {t("External Communications")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setInternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                {t("Internal Communications")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setAccountingModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                {t("Accounting")}
              </button>
            </li>
          </ul>
          <ul className="space-y-2">
          <li>
              <button 
                onClick={() => setMultiLocationModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                {t("Multi Store Location")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setDealearShipModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                {t("Dealer System Integration")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setPaintScaleInterfaceModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                  {t("Paint Scale Interfaces")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCsiSurveyModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
              {t("CSI-Google Servey")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setRentalCarModalOpen(true)} 
                className="hover:text-orange-400 transition hover:underline decoration-white"
              >
                 {t("Rental Car")} 
              </button>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="mt-4 px-5 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition hover:underline decoration-white"
              >
                {t("schedule_demo")}
              </button>
            </li>
            <li>
              <button className="mt-4 px-14 py-2 text-2xl text-orange-600 font-semibold rounded-full hover:bg-white-600 transition hover:underline decoration-white">
                1-888-691-6887  
              </button>
            </li>
          </ul>

              {/* Production Modal with Blur Effect */}
      {isProductionModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setIsProductionModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Production /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}
      {/* Scheduling Modal with Blur Effect */}
      {isSchedulingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setIsSchedulingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Scheduling /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

       {/* Media Management Modal with Blur Effect */}
       {ismediaManagementModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setMediaManagementModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <MediaManagement /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

      {/* Media Tecth Tracking Modal with Blur Effect */}
      {istechTrakigModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setTechTrackingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <TechTraking /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

      {/* Media Tecth Tracking Modal with Blur Effect */}
      {isjobCostingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setJobCostingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <JobCosting/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

      {/* Media Part Management Modal with Blur Effect */}
      {ispartsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setPartsModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Parts/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

      {/* Media Quick Estimate Modal with Blur Effect */}
           {isquickEstimateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setQuickEstimateModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <QuickStimate/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )}

     {/* Media External Communication Modal with Blur Effect */}
     {isexternalCommunicationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setExternalCommunicationModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <ExternalCummunication/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

      {/* Media Internal Communication Modal with Blur Effect */}
     {isinternalCommunicationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setInternalCommunicationModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <InternalCummunication/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 
       {/* Media Accounting Modal with Blur Effect */}
     {isaccountingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setAccountingModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Accounting/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Multi Store Location Modal with Blur Effect */}
     {ismultiLocationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setMultiLocationModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <MultiLocation/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

      {/* Dealer System Integration Modal with Blur Effect */}
     {isdealerShipModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setDealearShipModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <DealerShip/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Paint Scales Interfaces Modal with Blur Effect */}
     {ispaintScaleInterfaceModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setPaintScaleInterfaceModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <PainScaleInterface/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* CSI Survey Modal with Blur Effect */}
     {iscsiSurveyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setCsiSurveyModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <CsiSurvey/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Rental Car Modal with Blur Effect */}
     {isrentalCarModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setRentalCarModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <RentalCar/> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       {/* Private Policy with Blur Effect */}
     {isprivatePolicyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setPrivatePolicyModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <PrivacyPolicy /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

       

       {/* Support with Blur Effect */}
     {isaboutUsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() =>setAboutUsModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <AboutUs /> {/* Render the Production component inside the modal */}
          </div>
        </div>
      )} 

          </div>
          )}
        </motion.div>
          
      )}
      
    </nav>
    
  );
}


