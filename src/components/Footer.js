import DemoModal from "./DemoModal"; // Import the reusable modal
import { useState} from "react";
const Footer = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="py-10 bg-black text-white text-center">
      {/* 3 Column Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left px-6 md:px-20">
        {/* Column 1 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Production</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Scheduling</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Media Management</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Technician Tracking</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Job Costing</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Parts Management</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Quick Estimate</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">External Communications</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Internal Communications</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Accounting</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Multi Store Locations</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Dealer System Integration</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Paint Scale Interfaces</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">CSI - Google Survey</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Rental Car Interface</a></li>
          </ul>
        </div>
    

      <div>
          <ul className="space-y-2">
            <li><button onClick={() => setIsModalOpen(true)} className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
              SCHEDULE A DEMONSTRATION
            </button>
            </li>
            <li><a onClick={() => setIsModalOpen(true)} className="hover:text-orange-400 transition cursor-pointer">SCHEDULE A DEMONSTRATION</a></li>
          </ul>
           {/* Reusable Modal */}
                <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
        </div>
      

      {/* Horizontal Links Section */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-orange-400 transition">Contact Us</a>
          <a href="#" className="hover:text-orange-400 transition">Support</a>
          <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400 transition">About Us</a>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} BodyshopConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
