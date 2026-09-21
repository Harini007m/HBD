import React from 'react';
import type { MemoryItem } from '../data/content';
import { ExpandableGallery } from './ui/gallery-animation';

interface MemoryGalleryProps {
  memories: MemoryItem[];
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ memories }) => {
  const images = memories.filter(m => m.type === 'photo').map(m => m.url);

  return (
    <section className="py-32 px-4 relative z-10">
      <h2 className="text-5xl md:text-6xl font-serif text-espresso text-center mb-20 drop-shadow-sm">
        Moments We Shared
      </h2>
      
      <div className="max-w-6xl mx-auto glass-panel p-8 rounded-2xl">
        <ExpandableGallery images={images} />
      </div>
    </section>
  );
};
