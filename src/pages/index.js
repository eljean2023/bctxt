import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Principal from "../components/Principal";
import Footer from "../components/Footer";
import Gallery from "@/components/Gallery";
import Loader from "../components/Loader"; // Import Loader
import '../utils/i18n';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay as needed
  }, []);

  return (
    <div className="relative">
     
      {/* Show Loader before main content */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Dark Blur Overlay */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg transition-all duration-500 z-40"></div>
          )}

          {/* Main Content */}
          <div className={`${isModalOpen ? "blur-lg opacity-50" : "opacity-100"} transition-all duration-500`}>
            <Navbar />
            <Principal />
            <Gallery setIsModalOpen={setIsModalOpen} />
            <Footer />
          </div>
        </>
      )}

    </div>
  );
}




