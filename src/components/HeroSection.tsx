import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate?: (page: 'home' | 'memories' | 'reasons' | 'letter' | 'cake' | 'final') => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onNavigate }) => {

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center items-start px-8 lg:px-24"
      style={{
        background: `linear-gradient(120deg, rgba(249, 245, 240, 0.85), rgba(248, 237, 235, 0.7)), url('/bg.jpg') center/cover no-repeat`
      }}
    >
      <motion.div 
        className="flex-1 text-left max-w-2xl relative z-10 flex flex-col justify-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="font-script text-4xl md:text-5xl text-[#9f6a59] mb-4 drop-shadow-sm">a little universe made just for you</p>
        <h1 className="text-6xl md:text-[7rem] font-serif text-cocoa leading-[1.1] mb-6 drop-shadow-sm">
          Happy Birthday<br/>
          <span className="italic text-[#8a5d4e]">My Love</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-cocoa/90 mb-10 max-w-md leading-relaxed font-medium">
          Today is wrapped in blush light, tiny stars, warm memories, and all the love you deserve.
        </p>
        
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate?.('cake')}
            className="bg-cocoa text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-cocoa/90 transition-colors shadow-lg"
          >
            Cut the Cake
          </button>
          <button 
            onClick={() => onNavigate?.('letter')}
            className="bg-white/80 backdrop-blur-md text-cocoa px-8 py-3 rounded-full font-sans font-medium hover:bg-white transition-colors shadow-lg"
          >
            Read Letter
          </button>
        </div>
      </motion.div>
    </section>
  );
};
