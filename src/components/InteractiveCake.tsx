import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface CakeProps {
  prompt: string[];
  wishMessage: string;
  postBlowMessage: string;
}

export const InteractiveCake: React.FC<CakeProps> = ({ prompt, wishMessage, postBlowMessage }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlow = () => {
    setCandlesBlown(true);
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#F7CAD0', '#FDE2E4', '#E4C1F9', '#B76E79', '#C9184A']
    });
  };

  return (
    <section className="py-32 px-4 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-2xl mx-auto text-center">
        {!candlesBlown ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-ballet text-accent-purple mb-4">{prompt[0]}</h2>
            <p className="text-2xl font-windsong text-slate-500 mb-16">{prompt[1]}</p>
            
            <div className="relative w-64 h-64 mx-auto cursor-pointer group" onClick={handleBlow}>
              {/* Simple CSS Cake */}
              <div className="absolute bottom-0 w-64 h-28 bg-blush-pink rounded-lg border-b-8 border-rose-gold shadow-lg group-hover:scale-[1.02] transition-transform duration-300"></div>
              <div className="absolute bottom-28 left-8 w-48 h-20 bg-baby-pink rounded-t-lg shadow-inner group-hover:scale-[1.02] transition-transform duration-300"></div>
              
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
            className="text-center absolute w-full top-[20%] pointer-events-none z-20 drop-shadow-sm"
          >
            <h2 className="text-6xl md:text-7xl font-serif text-espresso mb-4">{postBlowMessage}</h2>
            <p className="text-3xl font-serif italic text-espresso-light">{wishMessage}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
