import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import { hashString } from '../data/content';

interface SecretGateProps {
  clueText: string;
  unlockButtonText: string;
  codeHash: string;
  wrongCodeMessage: string;
  correctCodeMessage: string;
  onUnlock: () => void;
}

export const SecretGate: React.FC<SecretGateProps> = ({ 
  clueText, unlockButtonText, codeHash, wrongCodeMessage, correctCodeMessage, onUnlock 
}) => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleUnlock = async () => {
    const inputHash = await hashString(code);
    if (inputHash === codeHash) {
      setStatus('success');
      setTimeout(() => onUnlock(), 1500);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <section className="min-h-screen px-4 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-[#fdfbf9] via-[#f9f3ef] to-[#f4ebe1]">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-champagne/30 blur-[100px] pointer-events-none" />

      <motion.div 
        className="max-w-md w-full bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center border border-[#eae1d8]/60 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Lock icon */}
        <motion.div
          animate={{ scale: status === 'success' ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto w-20 h-20 bg-gradient-to-br from-[#eae1d8] to-[#f4ebe1] rounded-full flex items-center justify-center mb-8 shadow-inner border border-[#d4b4aa]/30"
        >
          {status === 'success' 
            ? <Unlock size={36} className="text-[#9f6a59]" /> 
            : <Lock size={36} className="text-[#9f6a59]" />}
        </motion.div>
        
        <p className="font-script text-3xl text-[#9f6a59] mb-2">Secret Vault</p>
        <p className="font-sans text-cocoa/50 mb-8 text-xs uppercase tracking-widest">{clueText}</p>
        
        <input 
          type="password"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="enter our code..."
          className="w-full bg-[#fdfbf9] border border-[#eae1d8] rounded-xl py-4 px-4 text-center font-sans text-xl tracking-[0.4em] mb-6 focus:outline-none focus:border-[#9f6a59] transition-colors text-cocoa placeholder-cocoa/20"
          onKeyDown={e => e.key === 'Enter' && handleUnlock()}
        />
        
        <motion.button 
          onClick={handleUnlock}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#9f6a59] to-[#b32435] text-white py-4 rounded-xl font-sans font-medium text-base tracking-wider hover:shadow-lg hover:shadow-[#9f6a59]/20 transition-all"
        >
          {unlockButtonText}
        </motion.button>
        
        <div className="h-8 mt-4 flex items-center justify-center">
          {status === 'error' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#b32435] font-sans text-sm">
              {wrongCodeMessage}
            </motion.p>
          )}
          {status === 'success' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#9f6a59] font-sans text-sm">
              {correctCodeMessage}
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Floating script text */}
      <motion.p
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 font-script text-2xl text-[#9f6a59]/30 pointer-events-none"
      >
        only you know the way in...
      </motion.p>
    </section>
  );
};
