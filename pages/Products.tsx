
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Soda', 'Juice', 'Water', 'Energy'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Refreshing Range</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From fizzy sodas to natural nectars, find your perfect refreshment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100">
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">₹[Contact for Pricing]</span>
                  <button className="text-slate-400 hover:text-blue-500 transition">
                    <i className="fas fa-info-circle text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
