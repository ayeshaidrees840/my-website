import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#FAF9F5] border-b border-stone-200/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl shadow-md">
            H
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-stone-900">Habitat</span>
            <span className="text-[10px] tracking-widest uppercase text-stone-500 font-semibold">Living & Decor</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={`transition-colors py-1 ${isActive('/') ? 'text-stone-900 font-semibold border-b-2 border-stone-900' : 'text-stone-600 hover:text-stone-900'}`}>
            Home
          </Link>
          <Link to="/products" className={`transition-colors py-1 ${isActive('/products') ? 'text-stone-900 font-semibold border-b-2 border-stone-900' : 'text-stone-600 hover:text-stone-900'}`}>
  Shop
</Link>
          <Link to="/about" className={`transition-colors py-1 ${isActive('/about') ? 'text-stone-900 font-semibold border-b-2 border-stone-900' : 'text-stone-600 hover:text-stone-900'}`}>
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button className="p-2.5 rounded-full hover:bg-stone-200/60 text-stone-700 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-amber-700 rounded-full"></span>
          </button>
          <Link to="/login" className="text-sm font-medium text-stone-700 hover:text-stone-900 px-3 py-2">
            Login
          </Link>
          <Link to="/register" className="text-sm font-medium bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-full shadow-sm">
            Register
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="flex md:hidden items-center gap-3">
          <button className="p-2 rounded-full hover:bg-stone-200/60 text-stone-700">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/60">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-stone-200 px-6 py-5 space-y-4 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-base font-medium text-stone-800">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-base font-medium text-stone-800">Products</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-base font-medium text-stone-800">About</Link>
          <div className="pt-4 border-t border-stone-200 flex items-center gap-4">
            <Link to="/login" onClick={() => setIsOpen(false)} className="flex-1 text-center text-sm font-medium border border-stone-300 py-2.5 rounded-full text-stone-800">Login</Link>
            <Link to="/register" onClick={() => setIsOpen(false)} className="flex-1 text-center text-sm font-medium bg-stone-900 text-white py-2.5 rounded-full">Register</Link>
          </div>
        </div>
      )}
    </header>
  );
}