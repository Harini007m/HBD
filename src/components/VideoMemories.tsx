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
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            className="bg-white/60 backdrop-blur-md border-4 border-white rounded-3xl p-4 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative h-72 w-full bg-black/5 flex items-center justify-center transition-all mb-4 rounded-2xl overflow-hidden shadow-inner border border-black/5">
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
               <video src={video.url} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity absolute inset-0" />
               <div className="relative z-20 group-hover:scale-125 transition-transform duration-300">
                 <PlayCircle size={64} className="text-white drop-shadow-lg" />
               </div>
            </div>
            
            <div className="px-2 pb-2 text-center">
               <p className="font-serif italic text-2xl text-espresso/90 group-hover:text-espresso transition-colors">{video.caption}</p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
              className="relative w-full max-w-5xl bg-[#f9f5f0] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-cocoa transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-[600px] bg-black/5 flex items-center justify-center p-4">
                <video 
                  src={selectedVideo.url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-contain drop-shadow-md rounded-lg" 
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#f8edeb]">
                <p className="font-script text-3xl md:text-4xl text-[#9f6a59] mb-2">
                  {selectedVideo.date}
                </p>
                <h3 className="font-serif text-4xl md:text-5xl text-espresso mb-6">
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
