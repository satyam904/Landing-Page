'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#332060] text-white relative overflow-hidden">
      {/* Background Pattern */}

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          {/* Footer Grid */}
          <div className="">
            {/* Brand Section */}
            {/* <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/Logo.svg" 
                  alt="DelightLoop Logo" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  DelightLoop
                </span>
              </div>
              <p className="text-purple-200 text-sm leading-relaxed">
                Create truly personal gifts with our color astrology book and personalization guides.
              </p>
            </div> */}

            {/* Company Links */}
            {/* <div>
              <h3 className="text-lg font-bold mb-4 text-purple-100">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#partnerships" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Partnerships
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Resources Links */}
            {/* <div>
              <h3 className="text-lg font-bold mb-4 text-purple-100">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#support" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#service" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#corporate" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Corporate Sales
                  </a>
                </li>
                <li>
                  <a href="#financing" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Financing
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Account Links */}
            {/* <div>
              <h3 className="text-lg font-bold mb-4 text-purple-100">Account</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#login" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Log-In
                  </a>
                </li>
                <li>
                  <a href="#orders" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#downloads" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="#settings" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm md:text-base">
                    Settings
                  </a>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Divider */}
          {/* <div className="border-t border-purple-700 my-8"></div> */}

          {/* Bottom Footer */}
          {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4"> */}
            {/* Social Links */}
            {/* <div className="flex gap-4 md:gap-6">
              <a href="#linkedin" className="text-purple-300 hover:text-white transition-colors duration-300 text-lg">
                <span>💼</span>
              </a>
              <a href="#instagram" className="text-purple-300 hover:text-white transition-colors duration-300 text-lg">
                <span>📷</span>
              </a>
              <a href="#tiktok" className="text-purple-300 hover:text-white transition-colors duration-300 text-lg">
                <span>🎵</span>
              </a>
              <a href="#youtube" className="text-purple-300 hover:text-white transition-colors duration-300 text-lg">
                <span>📺</span>
              </a>
            </div> */}

            {/* Legal Links */}
            {/* <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
              <a href="#media" className="text-purple-300 hover:text-white transition-colors duration-300">
                MEDIA INQUIRIES
              </a>
              <a href="#terms" className="text-purple-300 hover:text-white transition-colors duration-300">
                TERMS
              </a>
              <a href="#privacy" className="text-purple-300 hover:text-white transition-colors duration-300">
                PRIVACY
              </a>
              <a href="#supplier" className="text-purple-300 hover:text-white transition-colors duration-300">
                SUPPLIER TERMS
              </a>
            </div>
          </div> */}

          {/* Copyright */}
          <div className="text-center mt-1 pt-1 ">
            <p className="">
              © 2025 DelightLoop. All rights reserved. Made with <span className="text-pink-400">❤️</span> for personalization
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        footer {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
