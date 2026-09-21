import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/content';
import { Mail, MessageCircleHeart, Stars, X } from 'lucide-react';

export const PrivateFolder: React.FC = () => {
  const { privateFolder } = siteContent;
  const [activeLetter, setActiveLetter] = useState<typeof privateFolder.letters[0] | null>(null);

  return (
    <motion.section 
      className="py-24 px-4 bg-slate-900 min-h-screen text-slate-200 relative z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-ballet text-center text-white mb-20 text-glow">The Vault</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Letters Section */}
          <div className="bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-700 shadow-xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-rose-gold/20 rounded-full text-rose-gold"><Mail size={28} /></div>
              <h3 className="text-3xl font-cinzel text-white">Letters</h3>
            </div>
            <div className="space-y-4">
              {privateFolder.letters.map(letter => (
                <button 
                  key={letter.id} 
                  onClick={() => setActiveLetter(letter)}
                  className="w-full text-left p-5 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all hover:translate-x-2 flex items-center space-x-4 shadow-sm"
                >
                  <span className="font-sans text-lg font-medium tracking-wide">{letter.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Things I Never Said */}
          <div className="bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-700 shadow-xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-accent-purple/20 rounded-full text-accent-purple"><MessageCircleHeart size={28} /></div>
              <h3 className="text-3xl font-cinzel text-white">Unsaid Words</h3>
            </div>
            <ul className="space-y-5 font-sans text-slate-300 text-lg">
              {privateFolder.thingsNeverSaid.map((thing, idx) => (
                <li key={idx} className="flex space-x-4 items-start">
                  <span className="text-accent-red mt-1 text-xl">•</span>
                  <span className="leading-relaxed">{thing}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final Letter Section */}
        <div className="mt-24 max-w-4xl mx-auto bg-black p-12 md:p-24 rounded-[3rem] border border-slate-800 text-center relative overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.03)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black opacity-50 pointer-events-none"></div>
          <Stars size={64} className="mx-auto text-white/10 mb-12" />
          <div className="space-y-8 font-sans text-xl md:text-2xl text-slate-300 leading-relaxed relative z-10 mb-16 font-light">
            {privateFolder.finalLetter.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <p className="font-windsong text-6xl md:text-7xl text-white relative z-10 mt-16">{privateFolder.finalLetter.closingLine}</p>
        </div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {activeLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveLetter(null)}
          >
            <motion.div 
              className="bg-[#FFF8F0] p-10 md:p-20 max-w-3xl w-full text-slate-800 rounded-sm relative shadow-2xl"
              onClick={e => e.stopPropagation()}
              initial={{ y: 50, rotateX: -20 }}
              animate={{ y: 0, rotateX: 0 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button onClick={() => setActiveLetter(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-800">
                <X size={32} />
              </button>
              <h4 className="text-5xl md:text-6xl font-ballet text-accent-purple mb-10 border-b-2 border-slate-200 pb-6 text-center">{activeLetter.title}</h4>
              <div className="space-y-6 font-sans text-xl leading-relaxed text-slate-700 font-medium">
                {activeLetter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
