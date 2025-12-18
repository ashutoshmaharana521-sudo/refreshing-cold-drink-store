
import React from 'react';
import { Page } from '../types';

interface FranchiseProps {
  setPage: (page: Page) => void;
}

const Franchise: React.FC<FranchiseProps> = ({ setPage }) => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Grow With Us</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6">
            Partner with <span className="text-blue-600">SipRefresh</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join India's fastest-growing beverage brand. We provide the blueprint, the products, and the support; you provide the ambition.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: 'fa-money-bill-trend-up', title: 'Low Investment', desc: 'Start your journey with a manageable capital outlay.' },
            { icon: 'fa-percent', title: 'High ROI', desc: 'Competitive margins ensuring quick recovery of your investment.' },
            { icon: 'fa-bullhorn', title: 'Marketing Support', desc: 'National campaigns and localized branding materials provided.' },
            { icon: 'fa-truck-fast', title: 'Reliable Logistics', desc: 'Uninterrupted supply chain across Tier-1, Tier-2, and Tier-3 cities.' },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100 hover:border-blue-200 transition">
              <i className={`fas ${benefit.icon} text-4xl text-blue-500 mb-6`}></i>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Models */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Available Partnership Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-2 border-blue-500 rounded-3xl p-10 bg-blue-50 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 group-hover:scale-150 transition duration-700"></div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">District Distributorship</h3>
              <p className="text-blue-800 mb-8">Be the sole supplier for an entire district. Manage wholesale orders and retail fulfillment.</p>
              <ul className="space-y-3 mb-10 text-slate-700">
                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Area exclusivity</li>
                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Direct warehouse supply</li>
                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> B2B focus</li>
                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Storage req: 1000+ sq. ft.</li>
              </ul>
              <button onClick={() => setPage(Page.Contact)} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">Enquire Now</button>
            </div>
            
            <div className="border-2 border-slate-200 rounded-3xl p-10 bg-white relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-100 rounded-full opacity-50 group-hover:scale-150 transition duration-700"></div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Retail Franchise</h3>
              <p className="text-slate-600 mb-8">Open a branded SipRefresh experience store. Focus on direct consumer sales and local events.</p>
              <ul className="space-y-3 mb-10 text-slate-700">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> High footfall locations</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Branded store design</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Training provided</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Shop size: 200-500 sq. ft.</li>
              </ul>
              <button onClick={() => setPage(Page.Contact)} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition">Get Started</button>
            </div>
          </div>
        </div>

        {/* Investment Table */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Investment Breakdown (Estimated)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-slate-700">
                <tr>
                  <th className="py-4 px-4 font-semibold text-blue-400">Category</th>
                  <th className="py-4 px-4 font-semibold text-blue-400">Franchise</th>
                  <th className="py-4 px-4 font-semibold text-blue-400">Distributor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-6 px-4">Investment Capital</td>
                  <td className="py-6 px-4">₹5 Lakhs - ₹10 Lakhs</td>
                  <td className="py-6 px-4">₹15 Lakhs - ₹30 Lakhs</td>
                </tr>
                <tr>
                  <td className="py-6 px-4">Brand Fee</td>
                  <td className="py-6 px-4">₹2 Lakhs</td>
                  <td className="py-6 px-4">₹5 Lakhs</td>
                </tr>
                <tr>
                  <td className="py-6 px-4">Estimated ROI</td>
                  <td className="py-6 px-4">12-18 Months</td>
                  <td className="py-6 px-4">18-24 Months</td>
                </tr>
                <tr>
                  <td className="py-6 px-4">Net Profit Margin</td>
                  <td className="py-6 px-4">15% - 25%</td>
                  <td className="py-6 px-4">8% - 12% (High Volume)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
