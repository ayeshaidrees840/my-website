import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-3 inline-block">
          Our Heritage & Philosophy
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-stone-900 mb-6 tracking-tight">
          Redefining Modern Living Spaces
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          At Habitat, we believe your home should be your personal sanctuary. We curate minimalist, sustainable, and handcrafted furniture and decor pieces that bring peace, warmth, and timeless elegance to everyday life.
        </p>
      </section>

      {/* 2. Brand Story / Craftsmanship Section (Added for a rich look) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/60 shadow-sm">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Crafted with Intention and Sustainable Materials
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Every item in our collection is hand-selected from master artisans around the globe who prioritize sustainable forestry, ethical labor, and durable craftsmanship. We focus on neutral palettes and organic textures that age gracefully.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-100">
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">100%</h4>
                <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Sustainable Wood</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">15+</h4>
                <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Global Artisans</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
              alt="Interior Aesthetic" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 3. Card Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-3">Why Choose Habitat</h2>
          <p className="text-stone-600 text-sm">We ensure a seamless experience from our studio to your living room.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-semibold text-xl text-stone-900 mb-3">Express Shipping</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Reliable and fast white-glove delivery straight to your doorstep with secure packaging.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-semibold text-xl text-stone-900 mb-3">Handcrafted Quality</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Every single piece is built using premium natural materials designed to last a lifetime.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-semibold text-xl text-stone-900 mb-3">Easy Returns</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Not completely in love with the piece? Enjoy hassle-free returns within 30 days.</p>
          </div>
        </div>
      </section>

    </div>
  );
}