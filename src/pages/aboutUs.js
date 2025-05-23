import React, { useState } from 'react';
import DemoModal from '@/components/DemoModal';
import ContactUs from '@/components/ContactForm';

import { useTranslation } from "react-i18next";
import '../utils/i18n';

const csiSurvey = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'demo' or 'contact'
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t} = useTranslation();
 
  const closeScheduleModal = () => setIsScheduleModalOpen(false);
  const closeContactModal = () => setIsContactModalOpen(false);

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

      <h1 className="text-3xl font-bold text-center text-gray-400 mb-8"> 
        {t("BodyshopConnect Puts You in Drivers Seat Allowing You To Run Your Collision Repair Facility Efficiently")}
      </h1>
      <h3 className="text-2xl font-bold text-center text-gray-700 mb-8"> 
        {t("Customized Solutions From BodyshopConnect")}
      </h3>
      <h4 className="text-xl text-center text-gray-700 mt-2 mb-8">
      {t("BodyshopConnect by Micazen is an auto body shop management software designed to be customized for the real Collision Repair Process. We have connections to many 3rd applications. Using the CIECA standard, we are able to import estimates from AdjustRite, Audatex, CCC and Mitchell Estimating systems. These are North America's Premier estimating systems and used by most collision repair facilities.")}
       
      </h4>
      <h3 className="text-2xl  font-bold text-center text-gray-700 mt-2 mb-8"> 
        {t("YOU can customize the features of our auto body shop management software.")}
      </h3>

  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-500 text-left pl-0 mb-12"> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Parts Management")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Accounting Interfaces")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Job Costing")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("AR Payments Management (Bulk Payment Support)")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Estimating Management & Digital Check-In")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Labor & Time Management")}</li>
  <li className="flex items-start"><span className="mr-2">→</span>{t("Production Boards & Real-Time Stats")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Photo, Barcode & Online Photo Integration")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Internal Messaging & Integrated Email")}</li>
  <li className="flex items-start"><span className="mr-2">→</span>{t("Intelligent Scheduling (Appointments, Production & Delivery)")}</li>
  <li className="flex items-start"><span className="mr-2">→</span>{t("Real-Time Multi-Shop & Single Shop Analytics")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Technician Time Clock")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Estimate/Repair Order Compliance Rules")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Dealer Management System Interface to PBS")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Multi-Shop Connectivity & Central Management")}</li> 
</ul>

      <p className="font-semibold text-gray-700 text-center text-lg mb-12"> 
      {t("We Guarantee Your Satisfaction. Connect With Us for an Online Demonstration at No Cost.")}
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-8">{t("Manage YOUR Collision Repair Facility Efficiently")}</h2> 
      <p className="mb-4 text-gray-700">
      {t("Our vision is to allow shops to manage their businesses with tools that can be easily adapted to meet their goals and streamline operations.")}
      </p>

      <h5 className="text-xl text-center text-gray-700 mt-2 mb-12">
        {t("Manage YOUR Collision Repair Facility efficiently with management and workflow solutions that can be customized to fit YOUR needs.  Our vision is to allow shops to manage their businesses with tools that can be easily adapted to meet their business goals and help them streamline their businesses.")}
        
      </h5>

<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-500 text-left pl-0 mb-14"> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Create quick estimates and check in customers with ease.")}</li>
  <li className="flex items-start"><span className="mr-2">→</span>{t("Customized Reporting & Tools to Maximize Production.")}</li>
  <li className="flex items-start"><span className="mr-2">→</span>{t("Track & Manage Technicians' Time and Efficiency.")}</li>
  <li className="flex items-start"><span className="mr-2">→</span>{t("Ensure Vehicles are delivered on time.")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Manage Industry KPIs.")}</li> 
  <li className="flex items-start"><span className="mr-2">→</span>{t("Connect With Multiple Industry Third-Party Applications and Reduce Data Entry.")}</li> 
</ul>


      {/* Image Slider */}
    
     

      
                
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

     {/*
      {/* Buttons 
      <div className="text-center my-8 flex justify-center gap-4">
        <button onClick={openContactModal} className="bg-blue-500 text-white py-2 px-6 rounded-lg">
         {t("Contact Us")}
        </button>
      </div>
     */}

      {/* Schedule Modal */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={closeScheduleModal}>
          <div className="bg-white p-6 rounded-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeScheduleModal} className="text-red-500 absolute top-4 right-4 font-bold">
              X
            </button>
            <h2 className="text-xl font-bold text-gray-700 mb-4">Schedule a Demo</h2>
            <p>Fill in your details to schedule a demo.</p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <button type="submit" className="bg-black text-white py-2 px-6 rounded-lg w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={closeContactModal}>
          <div className="bg-white p-6 rounded-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeContactModal} className="text-red-500 absolute top-4 right-4 font-bold">
              X
            </button>
            <h2 className="text-xl font-bold text-gray-700 mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Message</label>
                <textarea className="w-full p-2 border rounded" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-black text-white py-2 px-6 rounded-lg w-full">
                Send Message
              </button>
            </form>
            <button onClick={closeContactModal} className="bg-red-500 text-white py-2 px-6 rounded-lg w-full mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default csiSurvey;