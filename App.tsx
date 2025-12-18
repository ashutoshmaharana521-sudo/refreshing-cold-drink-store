
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Franchise from './pages/Franchise';
import Contact from './pages/Contact';
import AIChatBot from './components/AIChatBot';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setPage={setCurrentPage} />;
      case Page.Products:
        return <Products />;
      case Page.Franchise:
        return <Franchise setPage={setCurrentPage} />;
      case Page.About:
        return (
          <div className="py-24 bg-white min-h-screen flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Our Vision</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Founded in 2020, SipRefresh was born from a simple idea: that premium, healthy, and refreshing beverages should be accessible to every corner of India. We combine traditional Indian flavor profiles with modern carbonation and extraction techniques to create something truly unique.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                className="rounded-3xl shadow-xl mb-8 mx-auto"
                alt="Our Team"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Cities</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">5M+</div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Bottles Sold</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Dealers</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Natural</div>
                </div>
              </div>
            </div>
          </div>
        );
      case Page.Contact:
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default App;
