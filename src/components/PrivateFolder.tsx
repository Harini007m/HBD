import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/content';
import { Mail, MessageCircleHeart, Sparkles, X, Heart, Moon, Star } from 'lucide-react';

const SectionCard = ({ icon, iconColor, title, children }: {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-[#eae1d8]/60 shadow-lg"
  >
    <div className="flex items-center gap-4 mb-7">
      <div className={`p-3 rounded-full ${iconColor}`}>{icon}</div>
      <h3 className="font-serif text-2xl text-cocoa">{title}</h3>
    </div>
    {children}
  </motion.div>
);

export const PrivateFolder: React.FC = () => {
  const { privateFolder } = siteContent;
  const [activeLetter, setActiveLetter] = useState<typeof privateFolder.letters[0] | null>(null);

  const insideJokes = [
    "\"My favvvv\" ",
    "The eternal debate about who texts first",
    "\"wait let me save this\" — every 5 mins",
    "Sneaking into hostel ",
    "\"enna pathukko\" ",
  ];

  const lateNightThoughts = [
    "I wonder what you'll be like in 10 years — I know you'll still be just as magical.",
    "Some people come into your life and rearrange everything in the best possible way. You did that.",
    "On nights when everything feels heavy, I'm grateful you exist in the same world as me.",
    "I genuinely think you could do anything you set your mind to. Anything.",
    "I hope you never forget how deeply loved you are — by me, and by everyone who gets to know you.",
  ];

  return (
    <motion.section 
      className="py-20 px-4 min-h-screen relative overflow-hidden bg-gradient-to-b from-[#fdfbf9] via-[#f4ebe1] to-[#ede0d4]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full bg-rose/10 blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full bg-champagne/30 blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20 pt-8"
        >
          <p className="font-script text-3xl text-[#9f6a59] mb-3">welcome inside</p>
          <h2 className="font-serif text-6xl md:text-7xl text-cocoa tracking-tight drop-shadow-sm">The Vault</h2>
          <p className="font-sans text-cocoa/50 mt-4 text-sm tracking-widest uppercase">only for your eyes ♡</p>
        </motion.div>
        
        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Letters */}
          <SectionCard
            icon={<Mail size={24} className="text-[#9f6a59]" />}
            iconColor="bg-[#eae1d8]/60"
            title="Letters For You"
          >
            <div className="space-y-3">
              {privateFolder.letters.map(letter => (
                <motion.button 
                  key={letter.id} 
                  onClick={() => setActiveLetter(letter)}
                  whileHover={{ x: 6 }}
                  className="w-full text-left p-4 bg-[#fdfbf9] hover:bg-[#f4ebe1] rounded-2xl transition-all flex items-center gap-4 border border-[#eae1d8]/40 shadow-sm group"
                >
                  <span className="text-[#9f6a59] text-sm">✉</span>
                  <span className="font-sans text-base text-cocoa/80 group-hover:text-cocoa transition-colors">{letter.title}</span>
                </motion.button>
              ))}
            </div>
          </SectionCard>

          {/* Unsaid Words */}
          <SectionCard
            icon={<MessageCircleHeart size={24} className="text-rose/70" />}
            iconColor="bg-rose/10"
            title="Things I Never Said"
          >
            <ul className="space-y-4">
              {privateFolder.thingsNeverSaid.map((thing, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-3 items-start text-cocoa/75 font-sans text-base leading-relaxed"
                >
                  <Heart size={14} className="text-rose/60 mt-1.5 flex-shrink-0" />
                  <span>{thing}</span>
                </motion.li>
              ))}
            </ul>
          </SectionCard>

          {/* Inside Jokes */}
          <SectionCard
            icon={<Sparkles size={24} className="text-[#d4af37]" />}
            iconColor="bg-[#d4af37]/10"
            title="Our Inside Jokes"
          >
            <ul className="space-y-3">
              {insideJokes.map((joke, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="p-3 bg-[#fdfbf9] rounded-xl border border-[#eae1d8]/40 font-sans text-cocoa/80 text-base leading-relaxed"
                >
                  {joke}
                </motion.li>
              ))}
            </ul>
          </SectionCard>

          {/* Late Night Thoughts */}
          <SectionCard
            icon={<Moon size={24} className="text-[#9f6a59]" />}
            iconColor="bg-[#9f6a59]/10"
            title="Late Night Thoughts"
          >
            <ul className="space-y-4">
              {lateNightThoughts.map((thought, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-3 items-start text-cocoa/70 font-sans text-sm leading-relaxed italic"
                >
                  <Star size={12} className="text-[#9f6a59]/50 mt-1.5 flex-shrink-0" />
                  <span>"{thought}"</span>
                </motion.li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* Final Letter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-10 bg-gradient-to-br from-[#9f6a59]/5 via-white/60 to-[#eae1d8]/30 backdrop-blur-md p-12 md:p-20 rounded-[2.5rem] border border-[#eae1d8]/60 text-center relative overflow-hidden shadow-xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-[#9f6a59]/30 to-transparent" />
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl mb-10 inline-block"
          >
            ♡
          </motion.div>

          <div className="space-y-7 font-sans text-lg md:text-xl text-cocoa/75 leading-relaxed max-w-2xl mx-auto font-light mb-14">
            {privateFolder.finalLetter.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#9f6a59]/40 to-transparent mx-auto mb-10" />

          <p className="font-script text-5xl md:text-6xl text-[#9f6a59]">
            {privateFolder.finalLetter.closingLine}
          </p>
        </motion.div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {activeLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setActiveLetter(null)}
          >
            <motion.div 
              className="bg-[#fdfbf9] p-10 md:p-16 max-w-2xl w-full text-cocoa rounded-3xl relative shadow-2xl border border-[#eae1d8]"
              onClick={e => e.stopPropagation()}
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button onClick={() => setActiveLetter(null)} className="absolute top-6 right-6 text-cocoa/30 hover:text-cocoa/80 transition-colors">
                <X size={28} />
              </button>
              <p className="font-script text-2xl text-[#9f6a59] mb-2">a letter for you</p>
              <h4 className="font-serif text-3xl md:text-4xl text-cocoa mb-8 border-b border-[#eae1d8] pb-6">{activeLetter.title}</h4>
              <div className="space-y-5 font-sans text-lg leading-relaxed text-cocoa/75 font-light">
                {activeLetter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <p className="font-script text-3xl text-[#9f6a59] mt-10 text-right">with love, Harini ♡</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
