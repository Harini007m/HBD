import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { VideoItem } from '../data/content';
import { X, PlayCircle } from 'lucide-react';

export const VideoMemories: React.FC<{ videos: VideoItem[] }> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-24 px-4 bg-cream">
      <h2 className="text-5xl md:text-6xl font-serif text-espresso text-center mb-16">Caught on Camera</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            className="glass-panel overflow-hidden relative group rounded-lg cursor-pointer"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative aspect-video bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-all mb-6 rounded-t-lg overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-pastel-cream via-transparent to-transparent z-10" />
               <video src={video.url} className="w-full h-full object-cover opacity-50 absolute inset-0" />
               <div className="relative z-20 group-hover:scale-110 transition-transform">
                 <PlayCircle size={64} className="text-espresso/80" />
               </div>
            </div>
            
            <div className="px-6 pb-2 text-center">
               <p className="font-serif italic text-4xl text-espresso-light">{video.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedVideo(null)}
          >
             <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
               <button 
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-accent-red transition-colors"
                >
                  <X size={36} />
                </button>
                <video src={selectedVideo.url} controls autoPlay className="w-full rounded-md shadow-2xl" />
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
