const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white text-center">
      {/* 3 Column Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left px-6 md:px-20">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-3">Company</h3>
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
          <h3 className="text-lg font-bold text-orange-500 mb-3">Services</h3>
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
          <h3 className="text-lg font-bold text-orange-500 mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Multi Store Locations</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Dealer System Integration</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Paint Scale Interfaces</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">CSI - Google Survey</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Rental Car Interface</a></li>
          </ul>
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
