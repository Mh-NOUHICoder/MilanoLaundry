// src/components/Footer.jsx
import { Bubbles } from 'lucide-react';
import React from 'react';


function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-8 p-6 border-t border-indigo-500/50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Main Brand */}
        <div className="text-xl font-extrabold tracking-wider text-white mb-4 md:mb-0">
          <Bubbles className="h-6 w-6 inline-block text-primary mr-2" />
          Milano Laundry
        </div>
        
        {/* Quick Links / Navigation */}
        <nav className="flex space-x-6 text-sm text-gray-400">
          <a href="/about" className="hover:text-indigo-400 transition duration-150">About</a>
          <a href="/service-selection" className="hover:text-indigo-400 transition duration-150">Services</a>
          <a href="/pricing" className="hover:text-indigo-400 transition duration-150">Pricing</a>
          <a href="/contact" className="hover:text-indigo-400 transition duration-150">Contact</a>
        </nav>
        
        {/* Copyright */}
        <div className="text-xs text-gray-500 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Milano Laundry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;