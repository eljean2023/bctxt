import React, { useState } from 'react';
import ImageSlider from '@/components/sliderScheduling';
import DemoModal from '@/components/DemoModal';
import ContactUs from '@/components/ContactForm';

import { useTranslation } from "react-i18next";
import '../utils/i18n';

const scheduling = () => {
  //const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
   const [modalType, setModalType] = useState(''); // 'demo' or 'contact'
  //const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t} = useTranslation();

  const openScheduleModal = () => {
    setModalType('demo'); // Set modal type to demo
    setIsModalOpen(true); // Open modal
  };
  
  const openContactModal = () => {
    setModalType('contact'); // Set modal type to contact
    setIsModalOpen(true); // Open modal
  };
  
  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setModalType(''); // Reset modal type
  };


  return (
    <div className="container mx-auto max-w-dvw px-12">
      
      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5">
      {t("Schedule The Way You Want To - By Hours, Number of Jobs, Types of Repair & More")}
      </h1>
      <h4 className="text-xl text-center text-gray-700 mt-2 mb-8 text-justify sm:text-justify md:text-justify ">
      {t("Schedule all work in process and new repairs with our Capacity Scheduling. Multiple Views are Available To Customize Both Your Estimate Appointments and Repair Order Scheduling. Keep on top of Your Dates to help you meet or exceed Your Delivery Targets.")}
      </h4>

      {/* Image Slider */}
      <ImageSlider />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
        {/* Left Column */}
        <div className="p-6 rounded-lg shadow bg-white">
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-black">{t("Vehicle Arrival Scheduling")}</li> 
            <li className="text-black">{t("Production Scheduling.")}</li> 
            <li className="text-black">{t("Automate Drop Off Reminders by Email or Text Message")}</li> 
          </ul>
        </div>

        {/* Middle Column (Company Logos) */}
        <div className="p-6 rounded-lg shadow bg-white">
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-black">{t("Schedule Appointments")}</li> 
            <li className="text-black">{t("Schedule Appraisals")}</li> 
            <li className="text-black">{t("Schedule Other Non Repair Order Appointments")}</li> 
          </ul>
        </div>

        {/* Right Column */}
        <div className="p-6 rounded-lg shadow bg-white">
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-black">{t("Balance and Maximize your shop's Capacity")} </li> 
            <li className="text-black"> {t("Schedule Production Start Dates")}</li>
            <li className="text-black">{t("Customer Delivery Schedule")}</li>  
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-500">  
      {t("Customized Solutions From BodyshopConnect -- ScheduleConnect")}
      </h2>
      <h4 className="text-xl text-center text-gray-700 mt-2 text-justify sm:text-justify md:text-justify ">
      {t("BodyshopConnect by Micazen is an auto body shop management software designed to be customized for the Collision Repair Process. No two repairs are the same so why be forced into a process by other body shop management tools available. ScheduleConnect allows shops to maximize their productivity. We have multiple Schedulers available to use. Appointment Calendar, Arrival Scheduler, Production Scheduler and Delivery Scheduler. We also allow for customized Display Boards for use at the desktop or large screen TV's located in the shop.")}
      </h4>

      {/* Reusable Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center backdrop-blur-lg" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="text-red-500 absolute top-4 right-4 font-bold">
              X
            </button>
            {modalType === 'demo' && <DemoModal isOpen={isModalOpen} onClose={closeModal} />}
            {modalType === 'contact' && <ContactUs isOpen={isModalOpen} onClose={closeModal} />}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="text-center my-8 flex justify-center gap-4">
        <button onClick={openScheduleModal} className="bg-orange-500 text-white py-2 px-6 rounded-lg">
           {t("Schedule a Demo")}
        </button>
        <button onClick={openContactModal} className="bg-blue-500 text-white py-2 px-6 rounded-lg">
          {t("Contact Us")}
        </button>
      </div>
     
    </div>
  );
};


export default scheduling;
