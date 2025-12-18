
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Refreshing India, <br/>
              <span className="text-blue-400">One Sip</span> at a Time.
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10">
              Premium Cold Drinks & Beverages. Crafting flavors that celebrate the spirit of India.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setPage(Page.Products)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg shadow-blue-500/30"
              >
                View Products
              </button>
              <button 
                onClick={() => setPage(Page.Franchise)}
                className="bg-white hover:bg-slate-100 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg"
              >
                Become a Distributor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition hover:shadow-xl group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <i className="fas fa-leaf text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">100% Quality Ingredients</h3>
              <p className="text-slate-600">Sourced from the finest farms, ensuring every bottle is packed with natural goodness.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition hover:shadow-xl group">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                <i className="fas fa-certificate text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">FSSAI Certified</h3>
              <p className="text-slate-600">Strict adherence to national safety and hygiene standards for your peace of mind.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition hover:shadow-xl group">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">High Profit Margins</h3>
              <p className="text-slate-600">Our B2B model is designed to maximize ROI for our partners and distributors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl" 
              alt="Franchise Opportunity"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">The Future of Indian Beverages</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With India's beverage industry projected to grow by 20% annually, SipRefresh offers a golden opportunity to enter a high-growth market with a brand that consumers already trust.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-700">
                <i className="fas fa-check-circle text-blue-500 mr-3 text-xl"></i>
                <span>Complete Marketing & Branding Support</span>
              </li>
              <li className="flex items-center text-slate-700">
                <i className="fas fa-check-circle text-blue-500 mr-3 text-xl"></i>
                <span>Exclusive Territorial Rights</span>
              </li>
              <li className="flex items-center text-slate-700">
                <i className="fas fa-check-circle text-blue-500 mr-3 text-xl"></i>
                <span>Supply Chain & Logistics Excellence</span>
              </li>
            </ul>
            <button 
              onClick={() => setPage(Page.Franchise)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition shadow-lg"
            >
              Explore Franchise Models
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
