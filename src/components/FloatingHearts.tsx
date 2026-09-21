import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-15),
        {
          id: Date.now(),
          left: Math.random() * 100,
          duration: 10 + Math.random() * 15
        }
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-5%] text-rose-gold/20 text-2xl md:text-3xl"
          style={{ left: `${heart.left}%` }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{ 
            y: '-120vh', 
            x: ['-20px', '20px', '-20px'],
            opacity: [0, 0.4, 0],
            rotate: [-10, 10, -10]
          }}
          transition={{ 
            duration: heart.duration, 
            ease: 'linear',
            x: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(253,216,204,0.8)] text-pastel-blush">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
