"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Flag from "react-world-flags";
import Navbar2 from "./navbar2";

import { useTranslation } from "react-i18next";
import '../utils/i18n';


import DemoModal from "./DemoModal"; 
import Production from "@/pages/production"; 
import Scheduling from "@/pages/scheduling";
import MediaManagement from "@/pages/mediaManagement";
import TechTraking from "@/pages/techTracking";
import JobCosting from "@/pages/jobCosting";
import Parts from "@/pages/partsManagement";
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
import Support from "@/pages/support";
import AboutUs from "@/pages/aboutUs";
import Inventory from "@/pages/inventory";
import Analytic from "@/pages/analytic";



export default function Navbar() {
  const languages = [
    { label: "languages", fullLabel: "English", code: "en"},
    { label: "FR", fullLabel: "FRANÇAIS", code: "fr", Flag: "ca" },  
    
    {/*
      { code: "CA", label: "EN", fullLabel: "English" },
    { code: "CA", label: "FR", fullLabel: "Français" },
      { code: "ES", label: "ES", fullLabel: "Español" },
    { code: "RO", label: "RO", fullLabel: "Română" },
      */}
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductionModalOpen, setIsProductionModalOpen] = useState(false); 
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false); 
  const [ismediaManagementModalOpen, setMediaManagementModalOpen] = useState(false); 
  const [istechTrakigModalOpen, setTechTrackingModalOpen] = useState(false); 
  const [isjobCostingModalOpen, setJobCostingModalOpen] = useState(false); 
  const [ispartsModalOpen, setPartsModalOpen] = useState(false); 
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
  const [issupportModalOpen, setSupportModalOpen] = useState(false);
  const [isaboutUsModalOpen, setAboutUsModalOpen] = useState(false);
  const [isiventoryModalOpen, setInventoryModalOpen] = useState(false);
  const [isanalyticModalOpen, setAnalyticModalOpen] = useState(false);

  const { t, i18n } = useTranslation();

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

  const handleLanguageSelectw = (language) => {
    setSelectedLanguage(language);
    setIsLangOpen(false);
  };

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language.code) // Change language
      .then(() => {
        setSelectedLanguage(language); // Update selected language
        setIsLangOpen(false); // Close dropdown
      })
      .catch((error) => console.error("Error changing language:", error));
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
      
        <button 
                onClick={() => setAccountingModalOpen(true)} 
                className="hover:text-orange-400 transition"
              > 
                {t("ACCOUNTING")}
              </button>
          
          <button 
                onClick={() => setIsSchedulingModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("SCHEDULE")}
              </button>
          
              <button 
                onClick={() => setIsProductionModalOpen(true)} 
                className="hover:text-orange-400 transition"
              > 
                 {t("PRODUCTION")}
              </button>

              <button 
                onClick={() => setMultiLocationModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("MULTI-STORE")}
              </button>
              <button 
                onClick={() => setPartsModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                 {t("PARTS")}
              </button>

              

     
          <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          {/* Dropdown for Extra Links */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-orange-500 transition "
            >
              ...
              <ChevronDown className="ml-1 w-4 h-4"/>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-48">
                <ul>
                  <li className="py-2 px-4 cursor-pointer  hover:text-orange">
                  <button 
                onClick={() =>setPartsModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
               TRACKING {t("PARTS")} 
              </button>
                  </li>
                  <hr/>
                  <li className="py-2 px-4 cursor-pointer  hover:text-orange">
                  <button 
                onClick={() => setJobCostingModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                 {t("JOB Costing")} 
              </button>
                  </li>
                  <hr/>
            
                  {/* Sub-dropdown for Tracking Parts */}
                  <li className="relative group">
                    <button
                     onMouseOver={toggleSubDropdown} 
                      className="w-88 flex justify-between py-2 px-14 cursor-pointer  hover:text-orange"
                    >
                       <button onMouseOver={toggleSubDropdown} >.... </button>

                    </button>
                    {isSubDropdownOpen && (
                      <div className="absolute left-full top-0 ml-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-88">
              <button 
                onClick={() => setPaintScaleInterfaceModalOpen(true)} 
                className="hover:text-orange-400 transition text-white-500 mb-2 text-ms w-full text-left mb-2"
              >
                 {t("PAINT SCALE")}
              </button>
              <hr/>
              <button 
                onClick={() => setQuickEstimateModalOpen(true)} 
                className="hover:text-orange-400 transition text-ms w-full text-left mb-2"
              >
                  {t("ESTIMATING")}
              </button>    
              <hr/>  
              <button 
                onClick={() => setInternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition text-ms w-full text-left mb-2"
              >
                  {t("TECHNICIAN TRACKING")}
              </button>
              <hr/>
              <button 
                onClick={() => setDealearShipModalOpen(true)} 
                className="hover:text-orange-400 text-ms transition w-full text-left mb-2"
              >
               {t("PAINT SCALE")}
              </button>
              <hr/>
              <button 
                onClick={() => setInternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                 {t("INTERNAL COMMUNICATIONS")}
              </button>
              <hr/>
              <button 
                onClick={() => setExternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                 {t("EXTERNAL COMMUNICATIONS")}
              </button>
              <hr/>
              <button 
                onClick={() => setMediaManagementModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                 {t("MEDIA")}
              </button>
              <hr/>
              <button 
                onClick={() => setRentalCarModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                 {t("RENTAL CAR")}
              </button>
              <hr/>
              <button 
                onClick={() => setAnalyticModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                 {t("ANALYTICS")}
              </button>
              <hr/>
              <button 
                onClick={() => setInventoryModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
               {t("INVENTORY")}
              </button>
              <hr/>
              <button 
                onClick={() => setSupportModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                {t("SUPPORT")}
              </button>
              <hr/>
              <button 
                onClick={() => setExternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                 {t("CSI-CONNECT")}
              </button>
              <hr/>
              <button 
                onClick={() => setPrivatePolicyModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                {t("PRIVACY POLICY")}
              </button>
              <hr/>
              <button 
                onClick={() => setSupportModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                {t("SUPPORT")}
              </button>
              <hr/>
              <button 
                onClick={() => setAboutUsModalOpen(true)} 
                className="hover:text-orange-400 transition w-full text-left mb-2"
              >
                 {t("ABOUT US")}
              </button>
                      </div>
                    )}
                  </li>
                 
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
     {issupportModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
          
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative z-10">
            <button 
              onClick={() => setSupportModalOpen(false)} 
              className="absolute top-4 right-4 text-black text-lg"
            >
              ✖
            </button>
            <Support /> {/* Render the Production component inside the modal */}
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


           
          </div>
        </div>

        {/* Language Selector */}
        <div className="relative flex items-center  ml-6" ref={langRef}>
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
                    <Flag code={lang.id} style={{ width: 30, height: 15 }} className="mr-2" />
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