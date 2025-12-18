
import React, { useState } from 'react';
import { InquiryForm } from '../types';
import { STATES_OF_INDIA } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<InquiryForm>({
    fullName: '',
    city: '',
    state: '',
    phone: '',
    currentBusiness: '',
    interest: 'Franchise',
    budget: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="py-40 flex items-center justify-center bg-slate-50 min-h-screen">
        <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-md border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-4xl"></i>
          </div>
          <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
          <p className="text-slate-600 mb-8">Thank you for your interest in SipRefresh. Our team will contact you within 24-48 business hours.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-bold hover:underline"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
              <h2 className="text-2xl font-bold mb-8">Business Inquiry Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone (WhatsApp Preferred) *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">State *</label>
                    <select 
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none bg-white"
                    >
                      <option value="">Select State</option>
                      {STATES_OF_INDIA.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">City *</label>
                    <input 
                      type="text" 
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Interest *</label>
                  <div className="flex gap-4">
                    {['Franchise', 'Distributorship'].map(opt => (
                      <label key={opt} className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition ${formData.interest === opt ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:bg-slate-50'}`}>
                        <input 
                          type="radio" 
                          name="interest" 
                          value={opt} 
                          checked={formData.interest === opt}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span className={`font-semibold ${formData.interest === opt ? 'text-blue-700' : 'text-slate-600'}`}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Investment Capacity *</label>
                  <select 
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none bg-white"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="5-10L">₹5 Lakhs - ₹10 Lakhs</option>
                    <option value="10-20L">₹10 Lakhs - ₹20 Lakhs</option>
                    <option value="20L+">₹20 Lakhs+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Current Business / Experience</label>
                  <textarea 
                    name="currentBusiness"
                    value={formData.currentBusiness}
                    onChange={handleChange}
                    placeholder="Briefly tell us about your background..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-blue-500/20"
                >
                  Apply Now
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">By clicking apply, you agree to be contacted by our sales team.</p>
              </form>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We are screening for dedicated partners who share our passion for high-quality beverages and sustainable business growth.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Call Us Directly</h4>
                  <p className="text-slate-600">+91 98765 43210 (Toll Free)</p>
                  <p className="text-xs text-slate-500">Mon - Sat, 9 AM - 7 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">WhatsApp Inquiry</h4>
                  <p className="text-slate-600">+91 90000 11111</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Email Address</h4>
                  <p className="text-slate-600">partnership@siprefresh.in</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-900 rounded-3xl text-white">
              <h4 className="font-bold mb-4">Why fill this form?</h4>
              <p className="text-sm text-blue-100 leading-relaxed">
                Filling this form helps us understand your market potential and eligibility. Serious applicants with completed forms are given priority during the regional selection process.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
