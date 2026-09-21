import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export const MusicPlayer: React.FC<{ src: string, shouldPlay: boolean }> = ({ src, shouldPlay }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (shouldPlay && !isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [shouldPlay, isMuted]);

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
    >
      {shouldPlay && !isMuted && (
        <motion.div 
          className="hidden md:flex items-center space-x-1 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-gold/20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Music size={16} className="text-accent-purple animate-pulse" />
          <span className="text-xs font-sans text-slate-600 uppercase tracking-wider font-bold">Now Playing</span>
        </motion.div>
      )}
      <audio ref={audioRef} src={src} loop />
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg text-accent-purple hover:bg-white hover:scale-110 transition-all border border-rose-gold/20"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </motion.div>
  );
};
