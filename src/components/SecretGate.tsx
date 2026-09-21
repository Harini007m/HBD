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
    <section className="py-32 px-4 bg-slate-900 text-white min-h-[70vh] flex flex-col justify-center items-center relative z-20">
      <motion.div 
        className="max-w-md w-full bg-slate-800 p-10 rounded-2xl shadow-2xl text-center border border-slate-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mb-8 shadow-inner">
          {status === 'success' ? <Unlock size={40} className="text-green-400" /> : <Lock size={40} className="text-rose-gold" />}
        </div>
        
        <h3 className="text-4xl font-cinzel mb-4">Secret Vault</h3>
        <p className="font-sans text-slate-400 mb-8 text-sm uppercase tracking-widest">{clueText}</p>
        
        <input 
          type="password"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="ENTER CODE"
          className="w-full bg-slate-900 border border-slate-600 rounded-md py-4 px-4 text-center font-sans text-2xl tracking-[0.5em] mb-6 focus:outline-none focus:border-rose-gold transition-colors text-white placeholder-slate-600"
          onKeyDown={e => e.key === 'Enter' && handleUnlock()}
        />
        
        <button 
          onClick={handleUnlock}
          className="w-full bg-rose-gold text-white py-4 rounded-md font-sans font-bold text-lg tracking-wider hover:bg-accent-red transition-colors shadow-md"
        >
          {unlockButtonText}
        </button>
        
        <div className="h-8 mt-4 flex items-center justify-center">
          {status === 'error' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-sans font-medium">
              {wrongCodeMessage}
            </motion.p>
          )}
          {status === 'success' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-sans font-medium">
              {correctCodeMessage}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
};
