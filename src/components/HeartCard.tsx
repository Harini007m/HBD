import React from 'react';
import { motion } from 'framer-motion';

export const HeartReasons: React.FC<{ reasons: string[] }> = ({ reasons }) => {
  return (
    <section className="py-24 px-4 bg-blush-pink">
      <h2 className="text-5xl md:text-6xl font-ballet text-accent-purple text-center mb-16">Why You Are Amazing</h2>
      
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            className="w-full sm:w-72 h-72 bg-white rounded-full p-8 flex items-center justify-center text-center shadow-sm relative overflow-hidden group cursor-default border-4 border-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-baby-pink to-soft-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative z-10 font-sans text-xl md:text-2xl font-medium text-slate-700 group-hover:text-accent-purple transition-colors">
              {reason}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
