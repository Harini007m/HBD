import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Page = 'home' | 'memories' | 'reasons' | 'letter' | 'cake';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'memories', label: 'Memories' },
    { id: 'reasons', label: 'Reasons' },
    { id: 'letter', label: 'Letter' },
    { id: 'cake', label: 'Cake' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,95%)] flex items-center justify-between px-5 md:px-8 py-3 md:py-4 rounded-full glass-panel">
        {/* Logo */}
        <button
          onClick={() => handleNavigate('home')}
          className="font-script text-2xl md:text-4xl font-bold text-cocoa hover:opacity-80 transition-opacity"
        >
          Megaa...
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 md:gap-8 font-sans text-base md:text-lg font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`transition-colors duration-300 ${
                currentPage === link.id
                  ? 'text-[#9f6a59] opacity-100'
                  : 'text-cocoa opacity-75 hover:text-[#9f6a59] hover:opacity-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 text-cocoa"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-cocoa rounded-full origin-center transition-all"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-cocoa rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-cocoa rounded-full origin-center transition-all"
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[min(400px,90%)] glass-panel rounded-3xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`font-sans text-xl font-medium py-2 text-left transition-colors duration-300 border-b border-cocoa/10 last:border-0 ${
                  currentPage === link.id
                    ? 'text-[#9f6a59]'
                    : 'text-cocoa/80 hover:text-[#9f6a59]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
