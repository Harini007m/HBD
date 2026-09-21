import React from 'react';
import { motion } from 'framer-motion';

interface LetterBlockProps {
  heading: string;
  paragraphs: string[];
}

export const LetterBlock: React.FC<LetterBlockProps> = ({ heading, paragraphs }) => {
  return (
    <section className="py-32 px-4 flex justify-center items-center relative z-10">
      <motion.div 
        className="max-w-3xl w-full glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Subtle Paper texture overlay using CSS gradient dots as fallback since we don't have local assets yet */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <h2 className="text-5xl md:text-6xl font-serif text-espresso mb-10 text-center drop-shadow-sm">{heading}</h2>
        
        <div className="space-y-6 font-sans text-lg md:text-xl text-espresso leading-relaxed relative z-10 font-medium">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
