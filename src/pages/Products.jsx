import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

export default function Products() {
  const items = [
    { id: 1, name: 'Minimalist Oak Chair', price: 240, category: 'Furniture', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Ceramic Table Lamp', price: 95, category: 'Lighting', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Linen Lounge Sofa', price: 650, category: 'Furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Handwoven Jute Rug', price: 180, category: 'Decor', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=600' },
    { id: 5, name: 'Walnut Coffee Table', price: 320, category: 'Furniture', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600' },
    { id: 6, name: 'Brass Wall Sconce', price: 120, category: 'Lighting', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-serif text-4xl font-bold text-stone-900 mb-4">Curated Collection</h1>
          <p className="text-stone-600 text-sm">Explore our thoughtfully designed pieces crafted for modern living and timeless aesthetics.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-stone-700 hover:text-stone-900 shadow-sm">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">{product.category}</span>
                <h3 className="font-serif font-medium text-stone-900 mt-1">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-semibold text-stone-900">${product.price}</span>
                  <button className="bg-stone-900 text-white text-xs px-4 py-2 rounded-full hover:bg-stone-800 transition-colors flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}