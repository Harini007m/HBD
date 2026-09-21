import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MemoryItem } from '../../data/content';

interface AutoSliderProps {
  items: MemoryItem[];
}

export const AutoSlider: React.FC<AutoSliderProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<MemoryItem | null>(null);

  // Duplicate items to create a seamless loop effect
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Marquee Container */}
      <div className="flex w-fit animate-infinite-scroll hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-64 md:w-80 h-80 md:h-96 mx-4 relative group cursor-pointer overflow-hidden rounded-2xl shadow-md border border-white/40"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.url}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 right-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-script text-2xl text-[#f9f5f0] drop-shadow-md">{item.date}</p>
              <p className="font-sans text-sm text-white font-medium drop-shadow-md truncate">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind CSS keyframes for infinite scroll */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}} />

      {/* Modal for Expanded View */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
              className="relative w-full max-w-5xl bg-[#f9f5f0] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-cocoa transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-[600px] bg-black/5 flex items-center justify-center p-4">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.caption}
                  className="w-full h-full object-contain drop-shadow-md rounded-lg"
                />
              </div>

              {/* Text Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#f8edeb]">
                <p className="font-script text-3xl md:text-4xl text-[#9f6a59] mb-2">
                  {selectedItem.date}
                </p>
                <h3 className="font-serif text-4xl md:text-5xl text-cocoa mb-8 leading-tight">
                  {selectedItem.caption}
                </h3>
                
                <div className="relative">
                  <div className="absolute -top-6 -left-4 text-6xl text-cocoa/10 font-serif">"</div>
                  <p className="font-sans text-lg md:text-xl text-cocoa/80 leading-relaxed font-medium relative z-10">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
