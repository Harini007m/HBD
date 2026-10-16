import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { VideoItem } from '../data/content';
import { X, PlayCircle } from 'lucide-react';

export const VideoMemories: React.FC<{ videos: VideoItem[] }> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-12 sm:py-20 md:py-24 px-4 bg-cream">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-espresso text-center mb-8 md:mb-16">Caught on Camera</h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            className="bg-white/60 backdrop-blur-md border-2 border-white rounded-2xl p-2 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative h-48 sm:h-56 w-full bg-black/5 flex items-center justify-center transition-all mb-3 rounded-xl overflow-hidden shadow-inner border border-black/5">
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
               <video src={video.url} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity absolute inset-0" />
               <div className="relative z-20 group-hover:scale-125 transition-transform duration-300">
                 <PlayCircle className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" />
               </div>
            </div>
            
            <div className="px-2 pb-1 text-center">
               <p className="font-serif italic text-base sm:text-lg md:text-xl text-espresso/90 group-hover:text-espresso transition-colors line-clamp-1">{video.caption}</p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#f9f5f0] rounded-2xl sm:rounded-[2rem] shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/70 hover:bg-white backdrop-blur-md rounded-full text-cocoa transition-colors shadow-sm"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={18} />
              </button>

              <div className="w-full md:w-1/2 h-56 sm:h-72 md:h-[500px] bg-black/5 flex items-center justify-center p-3 sm:p-4">
                <video 
                  src={selectedVideo.url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  controls
                  className="w-full h-full object-contain drop-shadow-md rounded-lg" 
                />
              </div>

              <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-12 flex flex-col justify-center bg-[#f8edeb]">
                <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#9f6a59] mb-1 sm:mb-2">
                  {selectedVideo.date}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl text-espresso mb-4 md:mb-6">
                  {selectedVideo.caption}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
