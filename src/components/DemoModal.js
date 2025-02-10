import { useState } from "react";

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <>
      {/* Background Blur Effect */}
      <div className="fixed inset-0 backdrop-blur-lg z-40"></div>

      {/* Modal Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-3xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
          >
            ✖
          </button>

          {/* Zoho Form */}
          <iframe
            src="https://forms.zohopublic.com/bodyshopconnect1/form/Site/formperma/VwRFnoTnHEZgsiLYm16Fk9WFpawGj9ttcXsO0vKnqY4?zf_rszfm=1"
            style={{
              border: "none",
              width: "100%",
              height: "611px",
              transition: "all 0.5s ease",
            }}
            title="Schedule a Demo"
          ></iframe>
        </div>
      </div>
    </>
  );
}
