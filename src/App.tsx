import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteContent } from './data/content';
import { HeroSection } from './components/HeroSection';
import { LetterBlock } from './components/LetterBlock';
import { MemoryGallery } from './components/MemoryGallery';
import { VideoMemories } from './components/VideoMemories';
import { FloatingHearts } from './components/FloatingHearts';
import { InteractiveCake } from './components/InteractiveCake';
import { SecretGate } from './components/SecretGate';
import { PrivateFolder } from './components/PrivateFolder';
import { MusicPlayer } from './components/MusicPlayer';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Reasons } from './components/Reasons';

export type Page = 'home' | 'memories' | 'reasons' | 'letter' | 'cake' | 'final';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="min-h-screen font-sans animated-gradient-bg overflow-hidden text-cocoa">
      <CustomCursor />
      <div className="floating-bg"></div>
      
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="h-screen overflow-y-auto">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HeroSection onNavigate={setCurrentPage} />
              <FloatingHearts />
            </motion.div>
          )}
          
          {currentPage === 'memories' && (
            <motion.div 
              key="memories" 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -30 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pt-24"
            >
              <MemoryGallery memories={siteContent.memories} />
              <VideoMemories videos={siteContent.videoMemories} />
            </motion.div>
          )}
          
          {currentPage === 'reasons' && (
            <motion.div key="reasons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24">
              <Reasons />
            </motion.div>
          )}
          
          {currentPage === 'letter' && (
            <motion.div key="letter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24">
              <LetterBlock heading={siteContent.openingLetter.heading} paragraphs={siteContent.openingLetter.paragraphs} />
            </motion.div>
          )}
          
          {currentPage === 'cake' && (
            <motion.div key="cake" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24">
              <InteractiveCake 
                prompt={siteContent.cake.prompt}
                wishMessage={siteContent.cake.wishMessage}
                postBlowMessage={siteContent.cake.postBlowMessage}
              />
            </motion.div>
          )}
          
          {currentPage === 'final' && (
            <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24">
               {!isUnlocked ? (
                 <SecretGate 
                   clueText={siteContent.secret.clueText}
                   unlockButtonText={siteContent.secret.unlockButtonText}
                   codeHash={siteContent.secret.codeHash}
                   wrongCodeMessage={siteContent.secret.wrongCodeMessage}
                   correctCodeMessage={siteContent.secret.correctCodeMessage}
                   onUnlock={() => setIsUnlocked(true)}
                 />
               ) : (
                 <PrivateFolder />
               )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      {/* Keeping music playing across all pages once started */}
      <MusicPlayer src={siteContent.music.src} shouldPlay={true} />
    </div>
  );
}

export default App;
