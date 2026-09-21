import React from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onEnter: () => void;
  lines: string[];
  ctaText: string;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter, lines, ctaText }) => {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center animated-gradient-bg relative z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="text-center px-4 max-w-2xl">
        {lines.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 1.5, duration: 1 }}
            className={`${idx === 0 ? 'font-serif italic font-light text-5xl md:text-6xl text-espresso mb-6 tracking-wide drop-shadow-sm' : 'font-serif font-light text-3xl md:text-4xl text-espresso-light mb-4 tracking-wider'}`}
          >
            {line}
          </motion.p>
        ))}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: lines.length * 1.5, duration: 1 }}
          onClick={onEnter}
          className="mt-12 px-10 py-5 glass-panel text-accent-purple rounded-full font-cinzel font-bold text-lg tracking-widest hover:bg-white hover:scale-105 transition-all uppercase"
        >
          {ctaText}
        </motion.button>
      </div>
    </motion.section>
  );
};
