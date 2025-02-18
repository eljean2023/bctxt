import { useTranslation } from "react-i18next";
import '../utils/i18n';
import { useState } from "react";

const Navbar2 = () => {
    const { t, i18n } = useTranslation();
  return (
    <div>{/* Horizontal Links Section */}
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
    </div></div>
  )
}

export default Navbar2