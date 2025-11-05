import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-xl tracking-tight">
          <span className="text-white">Sign</span>
          <span className="text-[#3498DB]">alyze</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#community" className="text-gray-300 hover:text-white transition">Community</a>
          <a href="#status" className="text-gray-300 hover:text-white transition">Status</a>
          <a href="#api" className="text-[#3498DB] hover:text-white transition font-medium">API Docs</a>
        </nav>
        <a href="#api" className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium bg-[#3498DB] text-white">
          API
        </a>
      </div>
    </header>
  );
};

export default Header;
