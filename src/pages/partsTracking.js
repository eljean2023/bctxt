import React, { useState } from 'react';
import ImageSlider from '@/components/sliderPartsTracking';
import DemoModal from '@/components/DemoModal';
import ContactUs from '@/components/ContactForm';
import { useTranslation } from "react-i18next";
import '../utils/i18n';

const partsTracking = () => {
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
      
      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5"> 
      {t("Parts Track Connect")}
      </h1>
      <h4 className="text-xl text-center text-gray-700 mt-2 mb-8"> 
      {t("The application allows one to scan parts, identify their location in the Bodyshop and track their movements. It also helps to organize all storage places within the facility. Finding parts has never been easier.")}
      </h4>

      {/* Image Slider */}
      <ImageSlider />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 py-8">
        {/* Left Column */}
        <div className="p-6 rounded-lg shadow bg-white">
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-black">{t("Download the APP for any user in the shop.")}</li>  
            <li className="text-black">{t("Assign QR codes to part storage locations in your shop.")}</li>   
          </ul>
        </div>

        {/* Right Column */}
        <div className="p-6 rounded-lg shadow bg-white">
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-black">{t("Scan parts by barcode to assign their location right from the APP.")}</li> 
            <li className="text-black">{t("Locate parts easily when ready to install.")}</li> 
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-500">  
      {t("Customized Solutions From BodyshopConnect -- Data Analytics")}
      </h2>
      <h4 className="text-xl text-center text-gray-700 mt-2">
      {t("BodyshopConnect by Micazen is an auto body shop management software designed to be customized for the Collision Repair Process. No two repairs are the same so why be forced into a process by other body shop management tools available. Parts Track Connect allows shops to manage the status of their parts quickly and easily.")}
      
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


export default partsTracking;
