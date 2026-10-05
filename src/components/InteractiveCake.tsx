import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface CakeProps {
  prompt: string[];
  wishMessage: string;
  postBlowMessage: string;
}

const BuntingBanner = () => {
  const line1 = "HAPPY".split('');
  const line2 = "BIRTHDAY".split('');

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl pointer-events-none z-0 flex flex-col items-center gap-1 md:gap-2 opacity-90 pt-4 md:pt-8">
      {/* HAPPY string */}
      <div className="relative flex justify-center items-start pt-2 w-[50%]">
        <svg className="absolute top-0 left-0 w-full h-8 overflow-visible" preserveAspectRatio="none">
           <path d="M 0,0 Q 50%,20 100%,0" fill="transparent" stroke="#eabbb9" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
        <div className="flex justify-center gap-2 md:gap-4 relative z-10 w-full" style={{ transform: 'translateY(2px)' }}>
          {line1.map((char, i) => (
            <motion.div 
              key={i}
              className="relative w-6 md:w-9 aspect-[3/4.5] bg-gradient-to-b from-[#fdfbf9] to-[#eae1d8] shadow-sm border border-[#eabbb9]/20 flex justify-center pt-1.5 md:pt-2 text-cocoa/80 font-serif font-medium text-sm md:text-base"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%)',
                rotate: (i - 2) * 3 + 'deg',
                transformOrigin: 'top center'
              }}
              animate={{ rotate: [(i - 2) * 3, (i - 2) * 3 + 2, (i - 2) * 3 - 2, (i - 2) * 3] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-0.5 md:top-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 md:w-1 md:h-1 bg-[#eabbb9] rounded-full"></div>
              {char}
            </motion.div>
          ))}
        </div>
      </div>

      {/* BIRTHDAY string */}
      <div className="relative flex justify-center items-start pt-2 w-[80%]">
        <svg className="absolute top-0 left-0 w-full h-12 overflow-visible" preserveAspectRatio="none">
           <path d="M 0,0 Q 50%,35 100%,0" fill="transparent" stroke="#eabbb9" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
        <div className="flex justify-center gap-1.5 md:gap-3 relative z-10 w-full" style={{ transform: 'translateY(4px)' }}>
          {line2.map((char, i) => (
            <motion.div 
              key={i}
              className="relative w-5 md:w-8 aspect-[3/4.5] bg-gradient-to-b from-[#fdfbf9] to-[#eae1d8] shadow-sm border border-[#eabbb9]/20 flex justify-center pt-1 md:pt-1.5 text-cocoa/80 font-serif font-medium text-xs md:text-sm"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%)',
                rotate: (i - 3.5) * 2 + 'deg',
                transformOrigin: 'top center'
              }}
              animate={{ rotate: [(i - 3.5) * 2, (i - 3.5) * 2 + 2, (i - 3.5) * 2 - 2, (i - 3.5) * 2] }}
              transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute top-0.5 md:top-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 md:w-1 md:h-1 bg-[#eabbb9] rounded-full"></div>
              {char}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const InteractiveCake: React.FC<CakeProps> = ({ prompt, wishMessage, postBlowMessage }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlow = () => {
    setCandlesBlown(true);
    
    const colors = ['#9f6a59', '#eabbb9', '#f3d5d5', '#fdfbf9', '#d4b4aa'];

    // Left edge
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { x: 0, y: 0.6 },
      angle: 60,
      startVelocity: 70,
      colors
    });

    // Right edge
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { x: 1, y: 0.6 },
      angle: 120,
      startVelocity: 70,
      colors
    });

    // Center
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { x: 0.5, y: 0.6 },
      colors,
      startVelocity: 50
    });
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#fdfbf9] via-[#f9f3ef] to-[#f4ebe1] relative z-10 border-t border-cocoa/5 min-h-[80vh] flex flex-col justify-center overflow-hidden">
      <BuntingBanner />
      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        {!candlesBlown ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-ballet text-accent-purple mb-4">{prompt[0]}</h2>
            <p className="text-2xl font-windsong text-slate-500 mb-16">{prompt[1]}</p>
            
            <div className="relative w-64 h-64 mx-auto cursor-pointer group" onClick={handleBlow}>
              {/* Red Velvet Cake Design */}
              {/* Bottom Tier */}
              <div className="absolute bottom-0 w-64 h-28 bg-gradient-to-r from-[#8a1927] to-[#b32435] rounded-lg border-b-8 border-[#5e0d18] shadow-[0_10px_40px_-10px_rgba(179,36,53,0.5)] group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              </div>
              
              {/* Middle Frosting Layer */}
              <div className="absolute bottom-[6.5rem] left-6 w-52 h-5 bg-gradient-to-r from-[#fffcf8] to-[#f5e6d3] rounded-full shadow-sm z-10 group-hover:scale-[1.02] transition-transform duration-300"></div>

              {/* Top Tier */}
              <div className="absolute bottom-28 left-8 w-48 h-20 bg-gradient-to-r from-[#8a1927] to-[#b32435] rounded-t-lg shadow-inner group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden border-t border-[#5e0d18]/20">
                <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              </div>

              {/* Top Cream Cheese Frosting & Colorful Sprinkles */}
              <div className="absolute bottom-[11.5rem] left-7 w-[13rem] h-8 bg-gradient-to-r from-[#ffffff] to-[#fff5eb] rounded-full shadow-md z-10 group-hover:scale-[1.02] transition-transform duration-300">
                {/* Sprinkles */}
                <div className="absolute top-2 left-6 w-2.5 h-1 rounded-full bg-pink-400 rotate-45"></div>
                <div className="absolute top-4 left-12 w-2.5 h-1 rounded-full bg-yellow-400 -rotate-12"></div>
                <div className="absolute top-2 left-20 w-2.5 h-1 rounded-full bg-blue-400 rotate-90"></div>
                <div className="absolute top-4 left-28 w-2.5 h-1 rounded-full bg-purple-400 rotate-12"></div>
                <div className="absolute top-3 left-36 w-2.5 h-1 rounded-full bg-emerald-400 -rotate-45"></div>
                <div className="absolute top-5 left-44 w-2.5 h-1 rounded-full bg-orange-400 rotate-45"></div>
              </div>
              
              {/* Candles */}
              <div className="absolute bottom-48 left-1/2 -translate-x-1/2 flex space-x-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="relative w-4 h-16 bg-white rounded-t-sm shadow-sm group-hover:scale-105 transition-transform">
                    {/* Flame */}
                    <motion.div 
                      className="absolute -top-8 left-1/2 -translate-x-1/2 w-5 h-8 bg-yellow-400 rounded-full"
                      animate={{ scale: [1, 1.1, 1], rotate: [-3, 3, -3] }}
                      transition={{ repeat: Infinity, duration: 0.2 + (i*0.1) }}
                      style={{ filter: 'blur(2px)' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center absolute left-0 w-full top-1/2 -translate-y-1/2 pointer-events-none z-20 px-4"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-cocoa mb-6 drop-shadow-sm">{postBlowMessage}</h2>
            <p className="text-2xl md:text-3xl font-serif italic text-cocoa/70">{wishMessage}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
