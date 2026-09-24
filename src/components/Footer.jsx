import React from 'react';

export default function Footer({ setCurrentPage, showToast }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold">A</div>
            <span className="font-bold text-lg text-white">ApexStore</span>
          </div>
          <p className="text-sm">High-performance tech gear and everyday accessories curated for modern lifestyles.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition">Home</button></li>
            <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Catalog</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition">About Us</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Customer Care</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="hover:text-white transition cursor-pointer">Shipping Policy</span></li>
            <li><span className="hover:text-white transition cursor-pointer">Returns & Exchanges</span></li>
            <li><span className="hover:text-white transition cursor-pointer">Help Center</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Stay Updated</h4>
          <p className="text-sm mb-3">Subscribe for exclusive deals.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 flex-grow" />
            <button onClick={() => showToast('Subscribed successfully!')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-800 text-xs text-center">
        &copy; {new Date().getFullYear()} ApexStore Inc. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}