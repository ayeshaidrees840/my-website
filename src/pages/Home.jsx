import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#FAF9F5] text-stone-900 font-sans">
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-200 py-2.5 text-xs text-center font-medium tracking-wide">
        Elevate Your Living Space | Free Express Shipping on Orders Over $150
      </div>

      {/* Hero Section with Large Interior Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-900 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
            alt="Modern Living Room"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
          
          <div className="relative z-10 text-center px-4 max-w-2xl space-y-4">
            <span className="bg-stone-800/80 backdrop-blur-md text-stone-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-stone-700">
              New Collection 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
              Design Your Dream Sanctuary
            </h1>
            <p className="text-stone-300 text-sm md:text-base font-light max-w-lg mx-auto">
              Curated furniture, minimalist lighting, and handcrafted decor pieces engineered for modern aesthetic living.
            </p>
            <div className="pt-2">
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-stone-100 hover:bg-white text-stone-950 font-medium py-3.5 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
              >
                Explore Collection <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Aesthetic Grid Section (Inspired by your reference) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
            Artisanal Craftsmanship & Living
          </h2>
          <p className="text-stone-600 text-sm">
            Explore our signature categories designed to bring warmth, elegance, and character to every corner of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/60 p-4 space-y-4 transition-transform hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
              alt="Sofas & Living"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="space-y-1 px-2">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Living Space</span>
              <h3 className="text-xl font-serif font-bold text-stone-900">Modular Velvet Sofas</h3>
              <p className="text-stone-500 text-xs leading-relaxed">Crafted for ultimate comfort and timeless luxury appeal.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/60 p-4 space-y-4 transition-transform hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80"
              alt="Lighting"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="space-y-1 px-2">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Ambience</span>
              <h3 className="text-xl font-serif font-bold text-stone-900">Minimalist Pendant Lights</h3>
              <p className="text-stone-500 text-xs leading-relaxed">Warm illumination designed to set the perfect mood indoors.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/60 p-4 space-y-4 transition-transform hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80"
              alt="Decor"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="space-y-1 px-2">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Accents</span>
              <h3 className="text-xl font-serif font-bold text-stone-900">Handcrafted Ceramic Vases</h3>
              <p className="text-stone-500 text-xs leading-relaxed">Unique textures and earthy tones for tabletop styling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-stone-100/70 border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <Truck className="w-8 h-8 mx-auto text-stone-700" strokeWidth={1.5} />
            <h4 className="font-semibold text-stone-900 text-sm">White Glove Delivery</h4>
            <p className="text-xs text-stone-500">Safe handling for all large furniture pieces.</p>
          </div>
          <div className="space-y-2">
            <ShieldCheck className="w-8 h-8 mx-auto text-stone-700" strokeWidth={1.5} />
            <h4 className="font-semibold text-stone-900 text-sm">5-Year Warranty</h4>
            <p className="text-xs text-stone-500">Built with durable, premium materials.</p>
          </div>
          <div className="space-y-2">
            <RefreshCw className="w-8 h-8 mx-auto text-stone-700" strokeWidth={1.5} />
            <h4 className="font-semibold text-stone-900 text-sm">Easy Returns</h4>
            <p className="text-xs text-stone-500">30-day trial period on home decor.</p>
          </div>
          <div className="space-y-2">
            <Sparkles className="w-8 h-8 mx-auto text-stone-700" strokeWidth={1.5} />
            <h4 className="font-semibold text-stone-900 text-sm">Exclusive Designs</h4>
            <p className="text-xs text-stone-500">Hand-selected by professional interior stylists.</p>
          </div>
        </div>
      </section>
    </div>
  );
}