import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-[#FAF9F5]">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-stone-900">Welcome Back</h2>
          <p className="text-stone-600 text-sm mt-2">Please enter your details to sign in.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">Email Address</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-900 text-sm" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">Password</label>
            <input type="password" required className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-900 text-sm" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-stone-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-stone-600 mt-6">
          Don't have an account? <Link to="/register" className="text-stone-900 font-semibold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}