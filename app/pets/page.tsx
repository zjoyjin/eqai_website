import React, { useState, useEffect } from 'react';

// Color palette options
const colorPalettes = {
  mintBlush: {
    name: "Mint & Blush",
    bg: "bg-gradient-to-br from-mint-50 to-pink-50",
    cardBg: "bg-white/70",
    primary: "bg-mint-400 hover:bg-mint-500",
    accent: "text-pink-400",
    heading: "text-gray-800",
    subtitle: "text-gray-600"
  },
  warmPeach: {
    name: "Warm Peach",
    bg: "bg-gradient-to-br from-orange-50 to-yellow-50",
    cardBg: "bg-white/80",
    primary: "bg-orange-400 hover:bg-orange-500",
    accent: "text-yellow-500",
    heading: "text-gray-800",
    subtitle: "text-gray-600"
  },
  lavenderCream: {
    name: "Lavender Cream",
    bg: "bg-gradient-to-br from-purple-50 to-blue-50",
    cardBg: "bg-white/75",
    primary: "bg-purple-400 hover:bg-purple-500",
    accent: "text-blue-400",
    heading: "text-gray-800",
    subtitle: "text-gray-600"
  }
};

export default function PlayfulPetPage() {
  const [currentPalette, setCurrentPalette] = useState<keyof typeof colorPalettes>('mintBlush');
  const [isVisible, setIsVisible] = useState(false);
  const [wiggleButton, setWiggleButton] = useState(false);

  const palette = colorPalettes[currentPalette];

  useEffect(() => {
    setIsVisible(true);
    
    // Add wiggle animation to button every few seconds
    const wiggleInterval = setInterval(() => {
      setWiggleButton(true);
      setTimeout(() => setWiggleButton(false), 600);
    }, 5000);

    return () => clearInterval(wiggleInterval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: currentPalette === 'mintBlush' 
        ? 'linear-gradient(135deg, #f0fdf4 0%, #fdf2f8 100%)'
        : currentPalette === 'warmPeach'
        ? 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)'
        : 'linear-gradient(135deg, #faf5ff 0%, #eff6ff 100%)'
    }}>
      
      {/* Color Palette Switcher - Demo Only */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        {Object.entries(colorPalettes).map(([key, pal]) => (
          <button
            key={key}
            onClick={() => setCurrentPalette(key as keyof typeof colorPalettes)}
            className={`w-8 h-8 rounded-full border-2 ${
              currentPalette === key ? 'border-gray-400' : 'border-gray-200'
            }`}
            style={{
              background: key === 'mintBlush' 
                ? 'linear-gradient(45deg, #a7f3d0, #fbb6ce)'
                : key === 'warmPeach'
                ? 'linear-gradient(45deg, #fed7aa, #fef3c7)'
                : 'linear-gradient(45deg, #ddd6fe, #bfdbfe)'
            }}
            title={pal.name}
          />
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft floating shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: currentPalette === 'mintBlush'
                ? '#a7f3d0'
                : currentPalette === 'warmPeach'
                ? '#fed7aa'
                : '#ddd6fe',
              animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

        {/* Pet paw prints scattered around */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`paw-${i}`}
            className="absolute opacity-10 transform rotate-12"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `gentleBob ${3 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            {/* Simple paw SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C21.6 9 22 9.4 22 10V11C22 11.6 21.6 12 21 12C20.4 12 20 11.6 20 11V10C20 9.4 20.4 9 21 9ZM3 9C3.6 9 4 9.4 4 10V11C4 11.6 3.6 12 3 12C2.4 12 2 11.6 2 11V10C2 9.4 2.4 9 3 9ZM6 7C6.6 7 7 7.4 7 8C7 8.6 6.6 9 6 9C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7ZM18 7C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9C17.4 9 17 8.6 17 8C17 7.4 17.4 7 18 7Z"/>
              <ellipse cx="12" cy="18" rx="8" ry="3"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className={`
          w-full max-w-md mx-auto p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/30
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
        `} style={{
          background: 'rgba(255, 255, 255, 0.75)'
        }}>
          
          {/* Cute Pet Illustration Container */}
          <div className={`
            relative mb-8 flex justify-center transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
          `} style={{ transitionDelay: '0.2s' }}>
            
            {/* Main pet illustration placeholder - you'll replace with actual SVG */}
            <div className={`
              w-24 h-24 rounded-full flex items-center justify-center relative
              shadow-lg transform hover:scale-105 transition-transform duration-300
            `} style={{
              background: currentPalette === 'mintBlush'
                ? 'linear-gradient(135deg, #a7f3d0, #fbb6ce)'
                : currentPalette === 'warmPeach'
                ? 'linear-gradient(135deg, #fed7aa, #fef3c7)'
                : 'linear-gradient(135deg, #ddd6fe, #bfdbfe)'
            }}>
              {/* Simple pet face - replace with actual illustration */}
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
            text-4xl font-bold text-center mb-4 leading-tight
            transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `} style={{ 
            transitionDelay: '0.4s',
            color: '#374151',
            fontFamily: 'ui-rounded, SF Pro Rounded, system-ui'
          }}>
            Pet Care Assessment
          </h1>

          {/* Subtitle */}
          <p className={`
            text-lg text-center mb-8 leading-relaxed
            transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `} style={{ 
            transitionDelay: '0.6s',
            color: '#6b7280'
          }}>
            Get personalized care recommendations for your pet in minutes
          </p>

          {/* CTA Button */}
          <div className={`
            text-center mb-6 transform transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `} style={{ transitionDelay: '0.8s' }}>
            <button className={`
              px-8 py-4 rounded-2xl text-white font-semibold text-lg
              shadow-lg hover:shadow-xl transform transition-all duration-300
              hover:-translate-y-1 hover:scale-105 active:scale-95
              ${wiggleButton ? 'animate-wiggle' : ''}
              focus:outline-none focus:ring-4 focus:ring-opacity-50
            `} style={{
              background: currentPalette === 'mintBlush'
                ? 'linear-gradient(135deg, #34d399, #10b981)'
                : currentPalette === 'warmPeach'
                ? 'linear-gradient(135deg, #fb923c, #f97316)'
                : 'linear-gradient(135deg, #a855f7, #9333ea)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
            }}>
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
              hover:bg-white/50
            ">
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>

          {/* Decorative elements inside card */}
          <div className="absolute top-4 right-4 opacity-20">
            <div className="w-8 h-8 rounded-full" style={{
              background: currentPalette === 'mintBlush'
                ? '#fbb6ce'
                : currentPalette === 'warmPeach'
                ? '#fef3c7'
                : '#bfdbfe'
            }} />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <div className="w-6 h-6 rounded-full" style={{
              background: currentPalette === 'mintBlush'
                ? '#a7f3d0'
                : currentPalette === 'warmPeach'
                ? '#fed7aa'
                : '#ddd6fe'
            }} />
          </div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gentleBob {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-5px) rotate(15deg); }
        }
        
        @keyframes wiggle {
          0%, 7%, 14%, 21%, 28%, 35%, 42%, 49%, 56%, 63%, 70%, 77%, 84%, 91%, 98%, 100% {
            transform: translateX(0px);
          }
          3.5%, 10.5%, 17.5%, 24.5%, 31.5%, 38.5%, 45.5%, 52.5%, 59.5%, 66.5%, 73.5%, 80.5%, 87.5%, 94.5% {
            transform: translateX(-2px);
          }
          7%, 14%, 21%, 28%, 35%, 42%, 49%, 56%, 63%, 70%, 77%, 84%, 91%, 98% {
            transform: translateX(2px);
          }
        }
        
        .animate-wiggle {
          animation: wiggle 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}