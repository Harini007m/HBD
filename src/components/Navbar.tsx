import React from 'react';

export type Page = 'home' | 'memories' | 'reasons' | 'letter' | 'cake' | 'final';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navLinks: { id: Page; label: string }[] = [
    { id: 'memories', label: 'Memories' },
    { id: 'reasons', label: 'Reasons' },
    { id: 'letter', label: 'Letter' },
    { id: 'cake', label: 'Cake' },
    { id: 'final', label: 'Final' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,95%)] flex items-center justify-between px-8 py-4 rounded-full glass-panel">
      <button 
        onClick={() => onNavigate('home')}
        className="font-script text-4xl font-bold text-cocoa hover:opacity-80 transition-opacity"
      >
        Megaa...
      </button>
      
      <div className="flex gap-6 md:gap-8 font-sans text-base md:text-lg font-medium">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`transition-colors duration-300 ${
              currentPage === link.id ? 'text-[#9f6a59] opacity-100' : 'text-cocoa opacity-75 hover:text-[#9f6a59] hover:opacity-100'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
