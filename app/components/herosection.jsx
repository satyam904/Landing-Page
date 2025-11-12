"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./navbar";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageTab, setMessageTab] = useState("text"); // 'text', 'audio', 'video'
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleMessageSubmit = () => {
    if (message.trim() || messageTab !== "text") {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setMessage("");
        setIsSubmitted(false);
        setMessageTab("text");
        setIsRecording(false);
      }, 2000);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>
      {/* Background decorative elements */}
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

      {/* Navigation Bar Component */}
      <Navbar />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-4 py-8 sm:py-12 md:py-20 pt-20 sm:pt-24 md:pt-32">
        <div className="w-full max-w-2xl space-y-6 sm:space-y-8 md:space-y-2">
          {/* Header Content */}
          <div className="text-center space-y-2 sm:space-y-4 md:space-y-6 animate-fadeInDown ">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Hello!
            </h1>
            <p className="text-xs sm:text-sm md:text-[16px] text-white/90 leading-relaxed max-w-2xl mx-auto px-2">
              Every Color Tells A Story — And So Does Every Connection. This
              Color Astrology Book Is Our Way Of Letting You Feel What A Truly
              Personal Gift Can Be — The Kind Delightloop Helps You Create.
            </p>
          </div>

          {/* Video Section */}
          <div
            className="w-full max-w-3xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <div className="relative bg-black/40 border-4 sm:border-6 md:border-8 border-white rounded-2xl sm:rounded-3xl overflow-hidden aspect-video hover:border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer">
              {/* YouTube Embedded Video */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/m1FTtgaKBmk?list=PLFS7Df2fwmh2Kzhpca5WlIT5N0tWpWBC7"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Buttons Section */}
          <div
            className="w-full space-y-2 sm:space-y-3 animate-fadeInUp"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            {/* First Row - Two Buttons Side by Side (Desktop), Full Width (Mobile) */}
            <div className="w-full flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4">
              {/* Primary Button */}
              <Link
                href="https://www.delightloop.com/"
                className="w-full md:w-1/2"
              >
                <button className="w-full h-12 sm:h-14 py-2 sm:py-3 px-4 sm:px-6 bg-[#6941C6] text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg hover:from-purple-300 hover:to-purple-400 hover:-translate-y-1 hover:shadow-2xl active:-translate-y-0.5 transition-all duration-300 transform">
                  DelightLoop 2.0 Intro
                </button>
              </Link>

              {/* Secondary Button */}
              <Link
                href="https://app.delightloop.ai/"
                className="w-full md:w-1/2"
              >
                <button className="w-full h-12 sm:h-14 py-2 sm:py-3 px-4 sm:px-6 bg-[#332060] text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg border-2 border-white/20 hover:border-white/40 hover:-translate-y-1 hover:shadow-2xl active:-translate-y-0.5 transition-all duration-300 transform">
                  Book A Meeting
                </button>
              </Link>
            </div>

            {/* Full Width Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full h-12 sm:h-14 py-2 sm:py-3 px-4 sm:px-6 bg-white text-[#332060] rounded-lg text-sm sm:text-base md:text-lg border-2 border-[#6941C6] hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl active:-translate-y-0.5 transition-all duration-300 transform"
            >
              Leave Your Message To Host
            </button>
          </div>
        </div>
      </div>
      {/* Message Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeInUp">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeInUp">
            {!isSubmitted ? (
              <>
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Leave your message to Host
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Tab Buttons */}
                <div className="flex gap-2 md:gap-4 p-4 md:p-6 border-b border-gray-200 bg-gray-50">
                  <button
                    onClick={() => setMessageTab("text")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      messageTab === "text"
                        ? "bg-white text-gray-900 border-2 border-gray-300"
                        : "bg-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <span>💬</span>
                    <span className="hidden sm:inline">Text</span>
                  </button>
                  <button
                    onClick={() => setMessageTab("audio")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      messageTab === "audio"
                        ? "bg-white text-gray-900 border-2 border-gray-300"
                        : "bg-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <span>🎤</span>
                    <span className="hidden sm:inline">Audio</span>
                  </button>
                  <button
                    onClick={() => setMessageTab("video")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      messageTab === "video"
                        ? "bg-white text-gray-900 border-2 border-gray-300"
                        : "bg-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <span>📹</span>
                    <span className="hidden sm:inline">Video</span>
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 md:p-6">
                  {/* Text Tab */}
                  {messageTab === "text" && (
                    <div className="space-y-4 animate-fadeInUp">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          Write Your Text Message
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mb-4">
                          Type your message below to send to the host
                        </p>
                        <textarea
                          value={message}
                          onChange={(e) => {
                            if (e.target.value.length <= 1000) {
                              setMessage(e.target.value);
                            }
                          }}
                          placeholder="Type your message here..."
                          className="w-full h-40 md:h-48 p-3 md:p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none resize-none text-gray-700 text-sm md:text-base"
                        />
                        <div className="flex justify-between items-center mt-2 text-xs md:text-sm text-gray-600 bg-gray-50 p-2 md:p-3 rounded-lg">
                          <span>Maximum 1000 characters</span>
                          <span>{message.length}/1000</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Audio Tab */}
                  {messageTab === "audio" && (
                    <div className="space-y-6 animate-fadeInUp">
                      <div className="text-center">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          Record Your Audio Message
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mb-8">
                          Click the button below to start recording
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center py-8 md:py-12 bg-purple-50 rounded-xl">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                          <span className="text-4xl md:text-5xl">🎤</span>
                        </div>
                        <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          Ready to record
                        </p>
                        <p className="text-sm md:text-base text-gray-600">
                          Click the button below to start recording
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Video Tab */}
                  {messageTab === "video" && (
                    <div className="space-y-6 animate-fadeInUp">
                      <div className="text-center">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          Record Your Video Message
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mb-8">
                          Click the button below to start recording
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center py-8 md:py-12 bg-purple-50 rounded-xl">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                          <span className="text-4xl md:text-5xl">📹</span>
                        </div>
                        <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          Ready to record
                        </p>
                        <p className="text-sm md:text-base text-gray-600">
                          Click the button below to start recording
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="bg-gray-50 px-4 md:px-6 py-4 md:py-6 flex flex-col sm:flex-row gap-3">
                  {messageTab === "text" && (
                    <>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="order-2 sm:order-1 flex-1 py-2 md:py-3 px-4 bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-full transition-all duration-300 text-sm md:text-base"
                      >
                        ↶ Edit Message
                      </button>
                      <button
                        onClick={handleMessageSubmit}
                        disabled={!message.trim()}
                        className="order-1 sm:order-2 flex-1 py-2 md:py-3 px-4 bg-[#6941C6] hover:bg-[#5a35a0] disabled:bg-gray-400 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                      >
                        <span>✈️</span>
                        <span>Submit Message</span>
                      </button>
                    </>
                  )}
                  {(messageTab === "audio" || messageTab === "video") && (
                    <button
                      onClick={handleMessageSubmit}
                      className="w-full py-2 md:py-3 px-4 bg-[#6941C6] hover:bg-[#5a35a0] text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <span>{messageTab === "audio" ? "🎤" : "📹"}</span>
                      <span>Start Recording</span>
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Success Message */}
                <div className="p-8 md:p-16 text-center space-y-4 animate-fadeInUp">
                  <div className="text-6xl md:text-8xl mb-4">✨</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl">
                    Thanks for your contribution!
                  </p>
                  <p className="text-sm md:text-base text-gray-500">
                    We appreciate your feedback and will get back to you soon.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Tailwind Animation Styles */}
      <style jsx>{`
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

        @supports (background: radial-gradient(from 30% at center, red, blue)) {
          .bg-gradient-radial {
            background: radial-gradient(
                circle at 20% 80%,
                rgba(139, 92, 246, 0.3) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 80% 20%,
                rgba(147, 51, 234, 0.2) 0%,
                transparent 50%
              );
          }
        }

        @media (max-width: 640px) {
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
