"use client";
import React, { useState, useEffect } from 'react';

export default function PetsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [wiggleButton, setWiggleButton] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add wiggle animation to button every 5 seconds
    const wiggleInterval = setInterval(() => {
      setWiggleButton(true);
      setTimeout(() => setWiggleButton(false), 600);
    }, 5000);

    return () => clearInterval(wiggleInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-mint-blush relative overflow-hidden">
      
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft floating shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 bg-mint-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

        {/* Pet paw prints scattered around */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`paw-${i}`}
            className="absolute opacity-10 text-gray-400 text-2xl animate-gentle-bob"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            🐾
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className={`
          w-full max-w-md mx-auto p-8 rounded-3xl shadow-2xl glass-card
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
        `}>
          
          {/* Cute Pet Illustration Container */}
          <div className={`
            relative mb-8 flex justify-center transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
          `} style={{ transitionDelay: '0.2s' }}>
            
            {/* Main pet illustration */}
            <div className="w-24 h-24 bg-gradient-to-br from-mint-400 to-pink-300 rounded-full flex items-center justify-center relative shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-3xl">🐾</div>
            </div>

            {/* Floating mini pet icons around main illustration */}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
              <span className="text-sm">🐱</span>
            </div>
            <div className="absolute -bottom-1 -left-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
              <span className="text-sm">🐶</span>
            </div>
            <div className="absolute top-1/2 -right-6 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center animate-bounce" style={{animationDelay: '1.5s'}}>
              <span className="text-xs">🐦</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className={`
            text-4xl font-bold font-rounded text-center mb-4 leading-tight text-gray-800
            transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `} style={{ transitionDelay: '0.4s' }}>
            Pet Care Assessment
          </h1>

          {/* Subtitle */}
          <p className={`
            text-lg text-center mb-8 leading-relaxed text-gray-600
            transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `} style={{ transitionDelay: '0.6s' }}>
            Get personalized care recommendations for your pet in minutes
          </p>

          {/* CTA Button */}
          <div className={`
            text-center mb-6 transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `} style={{ transitionDelay: '0.8s' }}>
            <button className={`
              px-8 py-4 rounded-2xl text-white font-semibold text-lg btn-gradient-mint
              shadow-lg hover:shadow-xl transform transition-all duration-300
              hover:-translate-y-1 hover:scale-105 active:scale-95
              focus:outline-none focus:ring-4 focus:ring-mint-400 focus:ring-opacity-50
              ${wiggleButton ? 'animate-wiggle' : ''}
            `}>
              Take the Test ✨
            </button>
          </div>

          {/* Back Link */}
          <div className={`
            text-center transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `} style={{ transitionDelay: '1s' }}>
            <button className="
              group flex items-center mx-auto space-x-2 text-gray-500 hover:text-gray-700 
              transition-colors duration-200 text-sm font-medium py-2 px-4 rounded-full
              hover:bg-white hover:bg-opacity-50
            ">
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>

          {/* Decorative elements inside card */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-pink-200 rounded-full opacity-20" />
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-mint-200 rounded-full opacity-20" />
        </div>
      </div>
    </div>
  );
}