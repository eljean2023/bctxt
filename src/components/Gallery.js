"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import '../utils/i18n';

const Production = dynamic(() => import("@/pages/production"), { ssr: false });
const Scheduling = dynamic(() => import("@/pages/scheduling"), { ssr: false })
const MediaManagement = dynamic(() => import("@/pages/mediaManagement"), { ssr: false })
const TechTracking = dynamic(() => import("@/pages/techTracking"), { ssr: false })
const JobCosting = dynamic(() => import("@/pages/jobCosting"), { ssr: false })
const Parts = dynamic(() => import("@/pages/partsManagement"), { ssr: false })
const Accounting = dynamic(() => import("@/pages/accounting"), { ssr: false })
const QuickStimate = dynamic(() => import("@/pages/quickStimate"), { ssr: false })
const ExternalCommunication = dynamic(() => import("@/pages/externalCommunication"), { ssr: false })
const InternalCommunication = dynamic(() => import("@/pages/internalCommucation"), { ssr: false })
const MultiLocation = dynamic(() => import("@/pages/multiLocation"), { ssr: false })
const DealerShip = dynamic(() => import("@/pages/dealerShipConnect"), { ssr: false })
const PaintScaleInterface = dynamic(() => import("@/pages/paintScaleInterface"), { ssr: false })
const CSISurvey= dynamic(() => import("@/pages/csi"), { ssr: false })
const RentaCarInterface= dynamic(() => import("@/pages/rentalCarInterface"), { ssr: false })

export default function Gallery({ setIsModalOpen }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const { t, i18n } = useTranslation();

    const images = [
      { id: 1, src: "/images/Production.png", title: "Production", description: t("Visual Production Management with Unlimited Departments and Display Board Configuration.") },
      { id: 2, src: "/images/Schedule.png", title: t("Scheduling"), key: "Scheduling", description: t("Full Scheduling System including Appointments, Estimates, Vehicles Arriving, Vehicles Starting Production and Vehicles Being Delivered.") },
      { id: 3, src: "/images/MediaManagement.png", title: t("Media Management"),key: "Media Management", description: t("Automate the Process of Shooting and Sorting Your Photos with APPS and store locally with integrations to several third-party applications.") },
      { id: 4, src: "/images/TechConnect.png", title: t("Technician Tracking"),key: "Technician Tracking", description: t("Technician Tracking and Management Connecting the Back of the Shop to the Front Office." )},
      { id: 5, src: "/images/jobCosting.jpeg", title: t("Job Costing"), key: "Job Costing", description: t("Job cost repair orders easily against your sale. Ensure you are profiting on every job.") },
      { id: 6, src: "/images/PartsManagement.png", title: t("Parts Management"), key: "Parts Management", description: t("Manage purchase orders, parts invoices, vendor discounts and more." )},
      { id: 7, src: "/images/QuickEstimate.png", title: t("Quick Estimate"), key: "Quick Estimate", description: t("Quick Estimating for PDR & Menu Priced Items plus Quick Easy Photo Management.") },
      { id: 8, src: "/images/ExternalCommunicatons.png", title: t("External Communications"), key: "External Communications", description: t("Automated Communications & Online Customer Portals Keeps Customers Updated On The Status Of The Vehicle Repair.") },
      { id: 9, src: "/images/Internal Communications.png", title: t("Internal Communications"), key: "Internal Communications", description: t("Communicate directly with staff via internal messages. Update multiple staff members within seconds on repair orders or non-repair order related issues and updates.") },
      { id: 10, src: "/images/accounting.jpg", title: t("Accounting"), key: "Accounting", description: t("Accounts Receivable Management and Accounting Integrations to a variety of Accounting Systems.") },
      { id: 11, src: "/images/Multi Store Locations.png", title: t("Multi Store Locations"), key: "Multi Store Locations", description: t("Multiple Locations Management including Central Management, Ability to easily transfer files between locations and much more.") },
      { id: 12, src: "/images//Dealership.png", title: t("Dealer System Integration"), key: "Dealer System Integration", description: t("Integrated PBS Dealer Management System. Manage your Collision Shop better and remove the double entry between systems.") },
      { id: 13, src: "/images/Paint Scale Interface.png", title: t("Paint Scale Interfaces"), key: "Paint Scale Interfaces", description: t("Automated Paint Job Costing from AkzoNobel, BASF, Sherwin Williams and PPG Paint Scales." )},
      { id: 14, src: "/images/CSI.png", title: t("CSI & REVIEWS"), key: "CSI & REVIEWS", description: t("Google Reviews and more with Integration to OneLocal, Podium, and Chatter.") },
      { id: 15, src: "/images/RentalCar.png", title: t("Rental Car Interface"), key: "Rental Car Interface", description: t("Save time and duplicate entry by updating statuses with ARMS Integration.") },
    ];   


    return (
      <div className="container mx-auto p-6 bg-white transition-none">  

<div className="text-center my-10">
  <h2 className="text-5xl md:text-6xl font-bold text-gray-500">
  {t("Connecting The Dots Through The Collision Repair Process")}
  </h2>
  <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto"> 
  {t("Helping Collision Repair Facilities Exceed By Connecting Their Shops To The Future With The Right Technology. No Two Repair Shops Are The Same So Why Be Forced Into A Process By Other Body Shop Management Systems")}
  </p>
</div>

        {/* Gallery Grid */}
          
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer transition-opacity duration-700"
              onClick={() => {
                setSelectedImage(image);
                setIsModalOpen(true);
              }}
            >
              <div className="rounded-lg shadow-lg overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg font-semibold bg-orange-500 px-4 py-2 rounded-md">
                    {t("Learn More")}
                  </span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-orange-500">{image.title}</h3>
                <p className="text-base md:text-lg text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
          
  
        {/* Modal Popup */}
        {selectedImage && (
          <Dialog
            open={true}
            onClose={() => {
              setSelectedImage(null);
              setIsModalOpen(false);
            }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <Dialog.Panel className="bg-white rounded-xl p-8 shadow-lg max-w-5xl overflow-auto max-h-[80vh] relative">
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setIsModalOpen(false);
                }}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
  
              {/* Conditional Rendering for Components */}
              {selectedImage.title === "Production" ? (
                <Production />
              ) : selectedImage.key === "Scheduling" ? (
                <Scheduling />
              ) : selectedImage.key === "Media Management" ? (
                <MediaManagement />
            ) :  selectedImage.key === "Technician Tracking" ? (
                <TechTracking />
            ) :  selectedImage.key === "Job Costing" ? (
                <JobCosting />
            ) :  selectedImage.key === "Parts Management" ? (
                <Parts />
            ) :  selectedImage.key === "Accounting" ? (
                <Accounting />
            ) :  selectedImage.key === "Quick Estimate" ? (
                <QuickStimate />
            ) :  selectedImage.key === "External Communications" ? (
                <ExternalCommunication />
            ) :  selectedImage.key === "Internal Communications" ? (
                <InternalCommunication/>
            ) :  selectedImage.key === "Multi Store Locations" ? (
                <MultiLocation />
            ) : selectedImage.key === "Dealer System Integration" ? (
                <DealerShip />
            ) : selectedImage.key === "Paint Scale Interfaces" ? (
                <PaintScaleInterface />
            )   : selectedImage.key === "CSI & REVIEWS" ? (
                <CSISurvey />
            )  : selectedImage.key === "Rental Car Interface" ? (
                <RentaCarInterface /> 
            ) : (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-4xl font-bold">{selectedImage.title}</h1>
                  <ul className="list-disc text-lg text-gray-600 mt-4 pl-6">
                    {selectedImage.description.split(". ").map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
  
                  {/* Buttons */}
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setIsModalOpen(false);
                    }}
                    className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600"
                  >
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


