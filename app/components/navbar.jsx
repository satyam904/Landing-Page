'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 border-b border-white/30 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <Image 
              src="/Logo.svg" 
              alt="Logo" 
              width={40} 
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        {/* <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">Home</a>
          <a href="#about" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">About</a>
          <a href="#services" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">Services</a>
          <a href="#contact" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">Contact</a>
        </div> */}

        {/* CTA Button - Desktop */}
        <Link href="/">
          <button className="hidden md:block px-14 py-2 bg-white hover:bg-purple-700 hover:text-white hover:border hover:border-white text-purple-700 font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Preview Model
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-3 animate-fadeInDown">
          <a href="#home" className="block text-white hover:text-purple-300 transition-colors py-2 font-medium">Home</a>
          <a href="#about" className="block text-white hover:text-purple-300 transition-colors py-2 font-medium">About</a>
          <a href="#services" className="block text-white hover:text-purple-300 transition-colors py-2 font-medium">Services</a>
          <a href="#contact" className="block text-white hover:text-purple-300 transition-colors py-2 font-medium">Contact</a>
          <button className="w-full px-6 py-2 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-lg transition-all duration-300 mt-2 border  border-purple-500">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
