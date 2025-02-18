import { useState } from "react";
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
import AboutUs from "@/pages/aboutUs"

import { useTranslation } from "react-i18next";
import '../utils/i18n';

const Footer = () => {
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
  const { t, i18n } = useTranslation();


  return (
    <footer className="py-10 bg-black text-white text-center relative">
      {/* 3 Column Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left px-6 md:px-20">
        {/* Column 1 */}
        <div>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setIsProductionModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Production")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setIsSchedulingModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                 {t("Scheduling")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setMediaManagementModalOpen (true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Media Management")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setTechTrackingModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Technician Tracking")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setJobCostingModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
               {t("Job Costing")}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-2">
          <li>
              <button 
                onClick={() => setPartsModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
              {t("Parts Management")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setQuickEstimateModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                 {t("Quick EStimate")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setExternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("External Communications")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setInternalCommunicationModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Internal Communications")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setAccountingModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Accounting")}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-2">
          <li>
              <button 
                onClick={() => setMultiLocationModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Multi Store Location")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setDealearShipModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Dealer System Integration")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setPaintScaleInterfaceModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                  {t("Paint Scale Interfaces")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCsiSurveyModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
              {t("CSI-Google Servey")}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setRentalCarModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                 {t("Rental Car")} 
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="mt-4 px-5 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition"
              >
                {t("schedule_demo")}
              </button>
            </li>
            <li>
              <button className="mt-4 px-14 py-2 text-2xl text-orange-600 font-semibold rounded-full hover:bg-white-600 transition">
                1-888-691-6887  
              </button>
            </li>
          </ul>
          {/* Reusable Modal */}
          
        </div><DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
      
      {/* Horizontal Links Section */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a onClick={() => setIsModalOpen(true)}  className="hover:text-orange-400 transition cursor-pointer">{t("Contact Us")} </a>
          <li>
              <button 
                onClick={() => setSupportModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Support")} 
              </button>
            </li>
          <li>
              <button 
                onClick={() => setPrivatePolicyModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("Privacy Policy")} 
              </button>
            </li>
            <li>
            <button 
                onClick={() => setAboutUsModalOpen(true)} 
                className="hover:text-orange-400 transition"
              >
                {t("About Us")}  
              </button>
              </li>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()}{t("BodyshopConnect. All Rights Reserved.")}</p>   
      </div>

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

    </footer>
  );
};




export default Footer;





/*
import DemoModal from "./DemoModal"; // Import the reusable modal
import { useState} from "react";
import Production from "@/pages/production";
import Link from "next/link";

const Footer = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="py-10 bg-black text-white text-center">
      {/* 3 Column Section *//*}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left px-6 md:px-20">
        {/* Column 1 *//*}
        <div>
          <ul className="space-y-2">
          <Link href="/production" className="hover:text-orange-400 transition">
                 Production
               </Link>
            <li><a href="#" className="hover:text-orange-400 transition">Scheduling</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Media Management</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Technician Tracking</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Job Costing</a></li>
          </ul>
        </div>

        {/* Column 2 *//*}
        <div>
          <ul className="space-y-2">
            <li><a  href="#" className="hover:text-orange-400 transition">Parts Management</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Quick Estimate</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">External Communications</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Internal Communications</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Accounting</a></li>
          </ul>
        </div>

        {/* Column 3 *//*}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Multi Store Locations</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Dealer System Integration</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Paint Scale Interfaces</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">CSI - Google Survey</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Rental Car Interface</a></li>
          </ul>
        </div>


    
                    
                        
                      

      <div>    {/* Phone Number *//*}
     
          <ul className="space-y-2">
            <li><button onClick={() => setIsModalOpen(true)} className="mt-4 px-5 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
              SCHEDULE A DEMONSTRATION
            </button>
            </li>
            <li><button className="mt-4 px-14 py-2  text-2xl text-orange-600 font-semibold rounded-full hover:bg-white-600 transition">
                   1-888-691-6887
            </button>
            </li>

          </ul>
           {/* Reusable Modal *//*}
                <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
        </div>
      

      {/* Horizontal Links Section *//*}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-orange-400 transition">Contact Us</a>
          <a href="#" className="hover:text-orange-400 transition">Support</a>
          <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400 transition">About Us</a>
        </nav>
      </div>

      {/* Copyright Section *//*}
      <div className="mt-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} BodyshopConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

*/