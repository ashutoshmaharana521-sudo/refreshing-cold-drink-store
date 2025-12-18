
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const navItems = [
    { id: Page.Home, label: 'Home' },
    { id: Page.Products, label: 'Products' },
    { id: Page.Franchise, label: 'Franchise & Dealership' },
    { id: Page.About, label: 'About Us' },
    { id: Page.Contact, label: 'Apply Now' },
  ];

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setPage(Page.Home)}>
            <div className="bg-blue-600 p-2 rounded-lg mr-2">
              <i className="fas fa-glass-whiskey text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-blue-800 tracking-tight">SipRefresh</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`${
                  currentPage === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-slate-600 hover:text-blue-500'
                } px-1 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-slate-600 hover:text-blue-600">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
