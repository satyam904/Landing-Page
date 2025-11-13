"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./navbar";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageTab, setMessageTab] = useState("text");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMessageSubmit = () => {
    if (message.trim() || messageTab !== "text") {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setMessage("");
        setIsSubmitted(false);
        setMessageTab("text");
      }, 2000);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image - scrolls with content */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      ></div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-transparent to-transparent opacity-40"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><filter id="blur"><feGaussianBlur in="SourceGraphic" stdDeviation="3"/></filter></defs><rect x="20" y="20" width="40" height="40" fill="rgba(255,255,255,0.05)" rx="10" filter="url(%23blur)"/><circle cx="70" cy="70" r="20" fill="rgba(255,255,255,0.03)" filter="url(%23blur)"/></svg>')`,
            backgroundSize: "300px 300px",
          }}
        ></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 md:py-20 pt-24 sm:pt-20 md:pt-28">
        <div className="w-full max-w-2xl space-y-6 sm:space-y-8 md:space-y-6">

          {/* Header Text */}
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 animate-fadeInDown">

            {/* Mobile-only heading */}
            <h1 className="mobile-only block md:hidden text-3xl font-bold text-white">
              Welcome to DelightLoop 💫
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Hello!
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto px-2">
              Every Color Tells A Story — And So Does Every Connection.
              This Color Astrology Book Is Our Way Of Letting You Feel What A 
              Truly Personal Gift Can Be — The Kind Delightloop Helps You Create.
            </p>
          </div>

          {/* Video Section */}
          <div
            className="w-full max-w-3xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <div className="relative bg-black/40 border-4 sm:border-6 md:border-8 border-white rounded-2xl sm:rounded-3xl overflow-hidden aspect-video hover:border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/m1FTtgaKBmk?list=PLFS7Df2fwmh2Kzhpca5WlIT5N0tWpWBC7"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="w-full space-y-2 sm:space-y-3 animate-fadeInUp"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <div className="w-full flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4">
              <Link href="https://www.delightloop.com/" className="w-full md:w-1/2">
                <button className="w-full h-12 sm:h-14 bg-[#6941C6] text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300">
                  DelightLoop 2.0 Intro
                </button>
              </Link>

              <Link href="https://app.delightloop.ai/" className="w-full md:w-1/2">
                <button className="w-full h-12 sm:h-14 bg-[#332060] text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg border border-white/30 transition-all duration-300">
                  Book A Meeting
                </button>
              </Link>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full h-12 sm:h-14 bg-white text-[#332060] rounded-lg font-medium border-2 border-[#6941C6] transition-all duration-300"
            >
              Leave Your Message To Host
            </button>
          </div>
        </div>
      </div>

      {/* Hide .mobile-only on desktop */}
      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-only {
            display: none !important;
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
