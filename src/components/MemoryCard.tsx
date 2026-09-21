import React from 'react';
import { motion } from 'framer-motion';
import type { TextCard } from '../data/content';

export const FriendshipMemories: React.FC<{ memories: TextCard[] }> = ({ memories }) => {
  return (
    <section className="py-24 px-4 bg-baby-pink overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12">
        {memories.map((memory, idx) => (
          <motion.div
            key={memory.id}
            className="bg-white p-8 md:p-12 shadow-md rounded-sm border-l-4 border-accent-purple relative overflow-hidden hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute top-4 left-4 text-6xl text-pastel-gold/40 font-serif">"</div>
            <p className="relative z-10 font-sans text-xl md:text-2xl text-espresso leading-relaxed italic pl-6 font-medium">
              {memory.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
