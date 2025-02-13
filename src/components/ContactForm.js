"use client";
import { useEffect, useRef } from "react";

export default function ContactUs({ isOpen, onClose }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (typeof event.data !== "string") return;
      const zf_ifrm_data = event.data.split("|");
      if (zf_ifrm_data.length < 2) return;

      const zf_perma = zf_ifrm_data[0];
      const newHeight = `${parseInt(zf_ifrm_data[1], 10) + 15}px`;

      if (
        iframeRef.current &&
        iframeRef.current.src.includes("formperma") &&
        iframeRef.current.src.includes(zf_perma)
      ) {
        if (iframeRef.current.style.height !== newHeight) {
          iframeRef.current.style.height = newHeight;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <>
      {/* Background Blur Effect */}
      <div className="fixed inset-0 backdrop-blur-lg z-40"></div>

      {/* Modal Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-[87%] max-w-xl max-h-[75vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
          >
            ✖
          </button>

          {/* Contact Form */}
          <iframe
            ref={iframeRef}
            src="https://forms.zohopublic.com/bodyshopconnect1/form/ContactUs/formperma/xY48IgWfH73eH-8qQUd1G1NY-GC05zBYJNEGu8RTT1g?zf_rszfm=1"
            title="Contact Us"
            aria-label="Contact Us"
            className="w-full h-[611px] border-none transition-all duration-500"
          />
        </div>
      </div>
    </>
  );
}
