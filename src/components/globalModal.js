"use client";

import { Dialog } from "@headlessui/react";
import dynamic from "next/dynamic";

// Dynamic imports for all 15 pages
const pages = {
  Production: dynamic(() => import("@/pages/production"), { ssr: false }),
  Scheduling: dynamic(() => import("@/pages/scheduling"), { ssr: false }),
  "Media Management": dynamic(() => import("@/pages/mediaManagement"), { ssr: false }),
  "Technician Tracking": dynamic(() => import("@/pages/techTracking"), { ssr: false }),
  "Job Costing": dynamic(() => import("@/pages/jobCosting"), { ssr: false }),
  "Parts Management": dynamic(() => import("@/pages/partsManagement"), { ssr: false }),
  Accounting: dynamic(() => import("@/pages/accounting"), { ssr: false }),
  "Quick Estimate": dynamic(() => import("@/pages/quickStimate"), { ssr: false }),
  "External Communications": dynamic(() => import("@/pages/externalCommunication"), { ssr: false }),
  "Internal Communications": dynamic(() => import("@/pages/internalCommucation"), { ssr: false }),
  "Multi Store Locations": dynamic(() => import("@/pages/multiLocation"), { ssr: false }),
  "Dealer System Integration": dynamic(() => import("@/pages/dealerShipConnect"), { ssr: false }),
  "Paint Scale Interfaces": dynamic(() => import("@/pages/paintScaleInterface"), { ssr: false }),
  "CSI - Google Survey": dynamic(() => import("@/pages/csi"), { ssr: false }),
  "Rental Car Interface": dynamic(() => import("@/pages/rentalCarInterface"), { ssr: false }),
};

export default function DetailsModal({ isOpen, setIsOpen, selectedPage }) {
  const PageComponent = pages[selectedPage] || null;

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center z-50">
      <Dialog.Panel className="bg-white rounded-xl p-8 shadow-lg max-w-5xl overflow-auto max-h-[80vh] relative">
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl">
          ✕
        </button>

        {/* Render the selected page */}
        {PageComponent ? <PageComponent /> : <p className="text-lg text-gray-600">No content available.</p>}
      </Dialog.Panel>
    </Dialog>
  );
}
