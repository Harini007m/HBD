import React from 'react';
import { motion } from 'framer-motion';
import type { TimelineItem } from '../data/content';

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section className="py-32 px-4 overflow-hidden relative z-10">
      <h2 className="text-5xl md:text-6xl font-serif text-espresso text-center mb-20 drop-shadow-sm">Our Story</h2>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pastel-gold/30 rounded-full" />
        
        {items.map((item, index) => (
          <motion.div 
            key={item.id || index}
            className={`flex items-center justify-between mb-24 w-full ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="w-5/12" />
            <div className="w-2/12 flex justify-center relative z-10">
              <div className="w-8 h-8 bg-pastel-cream border-4 border-pastel-gold rounded-full shadow-lg shadow-pastel-gold/20" />
            </div>
            <div className="w-5/12 glass-panel p-8 text-center rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 flex justify-center">
                <span className="text-5xl">{item.icon}</span>
              </div>
              <div className="relative">
                  <h3 className="text-4xl font-serif text-espresso mb-3">{item.label}</h3>
                  {item.date && <p className="text-sm text-espresso-light font-sans font-bold tracking-wider uppercase mb-4">{item.date}</p>}
                  <p className="font-sans text-espresso-light mb-6 text-lg">{item.description}</p>
                  {item.photoUrl && (
                    <img src={item.photoUrl} alt={item.label} className="w-full h-56 md:h-64 object-cover rounded-xl" />
                  )}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
