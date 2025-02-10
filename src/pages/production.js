import React, { useState } from 'react';
import ImageSlider from '@/components/sliderPro';
import DemoModal from '@/components/DemoModal';

const Production = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleScheduleModal = () => setIsScheduleModalOpen(!isScheduleModalOpen);
  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen);

  const closeScheduleModal = () => setIsScheduleModalOpen(false);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="container mx-auto max-w-dvw px-12">
      
      {/*
      
      {/* Logo Image 
      <div className="text-center mb-8 bg-black shadow-md rounded-3xl py-5">
        <img src="/BCLogo1.png" alt="Company Logo" width={280} height={40} className="object-contain mx-auto bg-black-500" />
      </div>
      
      
      */}

      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5">
        Your Shop, Your Choice, Maximize Your Production
      </h1>
      <h4 className="text-xl text-center text-gray-700 mt-2 mb-8">
        Track Departments, Statistics, and more with customizable Graphs and other visuals to keep everyone updated and engaged.
        Plus even more customizable Display boards to get the right information to the right people when they need it.
      </h4>

      {/* Image Slider */}
      <ImageSlider />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
        {/* Left Column */}
        <div className="p-6 rounded-lg shadow bg-white">
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-black">Integration With Akzo's Carbeat™</li>
            <li className="text-black">No Double Entry. Live Data From YOUR Files.</li>
            <li className="text-black">Unlimited Departments, Unlimited Customizable Display Boards</li>
          </ul>
        </div>

        {/* Middle Column (Company Logos) */}
        <div className="p-6 rounded-lg shadow bg-white">
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-black">Integration To Test Drive Copilot™</li>
            <li className="text-black">Unlimited Departments, Unlimited Customizable Display Boards</li>
            <li className="text-black">Drag and Drop with Touch Screen Technology</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="p-6 rounded-lg shadow bg-white">
          <ul className="space-y-2 list-disc pl-6">
            <li className="text-black">Schedule Production Start Dates</li>
            <li className="text-black">Customer Delivery Schedule</li>
            <li className="text-black">Unlimited Job Classes or 'types of repairs'</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-500">
        Customized Solutions From BodyshopConnect -- ProductionConnect
      </h2>
      <h4 className="text-xl text-center text-gray-700 mt-2">
        BodyshopConnect by Micazen is an auto body shop management software designed to be customized for the Collision Repair Process. No two repairs are the same, so why be forced into a process by other body shop management tools available? 
        ProductionConnect allows shops to maximize their productivity. We have unlimited departments and different views to manage files moving through production. We also allow for customized Production Boards for use at the desktop or large screen TVs located in the shop.
      </h4>

                
      {/* Reusable Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Buttons */}
      <div className="text-center my-8 flex justify-center gap-4">
        <button onClick={() => setIsModalOpen(true)} className="bg-orange-500 text-white py-2 px-6 rounded-lg">
          Schedule a Demo
        </button>
        <button onClick={toggleContactModal} className="bg-blue-500 text-white py-2 px-6 rounded-lg">
          Contact Us
        </button>
       {/*
       
        <button onClick={() => { closeScheduleModal(); closeContactModal(); }} className="bg-red-500 text-white py-2 px-6 rounded-lg">
          Close
        </button>
       
       */}
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

export default Production;








{/*
  
  
import React, { useState } from 'react';
import ImageSlider from '@/components/sliderPro'; // Adjust this path to your project structure

const Production = ({ onClose, title, imageSrc }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="container relative bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Image Space at the Top *//*}
      {imageSrc && (
        <div className="w-full flex justify-center mb-4">
          <img src={imageSrc} alt={title} className="w-full max-h-60 object-cover rounded-lg" />
        </div>
      )}

      {/* Dynamic Title *//*}
      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5">
        {title}
      </h1>

      <h4 className="text-xl text-center txtColor mt-2 mb-8">
        Track Departments, Statistics and more with customizable Graphs and other visuals to keep everyone updated and engaged.
        <br />
        Plus even more customizable Display boards to get the right information to the right people when they need it.
      </h4>

      {/* Image Slider *//*}
      <ImageSlider />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-11 gap-4">
          {/* Left Column *//*}
          <div className="col-span-4 p-6 rounded-lg shadow">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Integration With Akzo's Carbeat™</li>
              <li>No Double Entry. Live Data From YOUR Files.</li>
              <li>Unlimited Departments, Unlimited Customizable Display Boards</li>
            </ul>
          </div>

          {/* Middle Column *//*}
          <div className="col-span-3 p-6 rounded-lg shadow">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Integration To Test Drive Copilot™</li>
              <li>Unlimited Departments, Unlimited Customizable Display Boards</li>
              <li>Drag and Drop with Touch Screen Technology</li>
            </ul>
          </div>

          {/* Right Column *//*}
          <div className="col-span-4 p-6 rounded-lg shadow">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Schedule Production Start Dates</li>
              <li>Customer Delivery Schedule</li>
              <li>Unlimited Job Classes or "types of repairs"</li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5">
        Customized Solutions From BodyshopConnect -- ProductionConnect
      </h1>
      <h4 className="text-xl text-center txtColor mt-2">
        BodyshopConnect by Micazen is an auto body shop management software designed to be customized for the Collision Repair Process.
        No two repairs are the same, so why be forced into a process by other body shop management tools available?
        <br />
        ProductionConnect allows shops to maximize their productivity. We have unlimited departments and different views to manage files moving through production.
        <br />
        We also allow for customized Production Boards for use at the desktop or large screen TVs located in the shop.
      </h4>

      {/* Bottom Buttons *//*}
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
          Schedule a Demo
        </button>
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
        >
          Contact Us
        </button>

        {/* Close Button to Close the Production Modal *//*}
        <button
          onClick={onClose} // This calls the onClose function passed from the parent component
          className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
        >
          Close
        </button>
      </div>

      {/* Contact Us Modal *//*}
      {isContactModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            {/* Close Button for Contact Us Modal *//*}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-3 right-3 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
            <p className="text-gray-600 text-center mb-4">
              Get in touch with us for more details!
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Production;


  
  */}
