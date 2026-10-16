import React from 'react';
import { siteContent, type MemoryItem } from '../data/content';
import { ExpandableGallery } from './ui/gallery-animation';
import { AutoSlider } from './ui/auto-slider';

interface MemoryGalleryProps {
  memories: MemoryItem[];
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ memories }) => {
  const images = memories.filter(m => m.type === 'photo').map(m => m.url);

  return (
    <section className="py-12 sm:py-20 md:py-32 px-4 relative z-10 flex flex-col items-center">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-espresso text-center mb-8 md:mb-16 drop-shadow-sm">
        Moments We Shared
      </h2>
      
      <div className="w-[95%] max-w-[1600px] glass-panel p-4 sm:p-6 md:p-8 rounded-2xl mb-16 md:mb-24">
        <ExpandableGallery images={images} />
      </div>

      <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#9f6a59] text-center mb-3">A Timeline of Us</h2>
      <p className="font-sans text-sm sm:text-base text-cocoa/70 text-center mb-8 md:mb-12">Click any memory to read the story</p>
      
      <div className="w-full max-w-[1400px] mx-auto">
        <AutoSlider items={siteContent.sliderMemories} />
      </div>
    </section>
  );
};
