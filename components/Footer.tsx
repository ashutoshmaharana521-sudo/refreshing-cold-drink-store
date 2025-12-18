
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <i className="fas fa-glass-whiskey text-blue-500 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-white">SipRefresh</span>
            </div>
            <p className="text-sm leading-relaxed">
              Refreshing India, one sip at a time. Premium beverages crafted for the modern Indian palate.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 underline decoration-blue-500 underline-offset-8">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Product Catalog</a></li>
              <li><a href="#" className="hover:text-white transition">Investment Guide</a></li>
              <li><a href="#" className="hover:text-white transition">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 underline decoration-blue-500 underline-offset-8">Trust Factors</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-blue-400 font-bold">FSSAI:</span> 12345678901234</p>
              <p><span className="text-blue-400 font-bold">GST:</span> 27AAACS1234A1Z1</p>
              <p className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-blue-500"></i>
                <span>SipRefresh Corporate Tower, Plot 42, Gachibowli, Hyderabad, Telangana - 500032</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 underline decoration-blue-500 underline-offset-8">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="text-xs text-slate-500">Support: +91 98765 43210</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} SipRefresh Beverages Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
