import React from 'react';
import { Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="text-white font-semibold text-xl tracking-tight">
            <span className="text-white">Sign</span>
            <span className="text-[#3498DB]">alyze</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Professional AI-powered cryptocurrency trading signals and tools for traders and developers.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#community" className="hover:text-white">Community</a></li>
            <li><a href="#status" className="hover:text-white">Status</a></li>
            <li><a href="#api" className="hover:text-white">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Connect With Us</h4>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" aria-label="Telegram" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-[#3498DB]"><Send size={18} /></a>
            <a href="#" aria-label="Twitter" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-[#3498DB]"><Twitter size={18} /></a>
            <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-[#3498DB]"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
        <p>© 2024-2025 Signalyze. All rights reserved.</p>
        <p className="mt-1">Founded and developed with ❤️ by 👨‍💻 @Webrekas</p>
      </div>
    </footer>
  );
};

export default Footer;
