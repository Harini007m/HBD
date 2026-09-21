import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LetterBlockProps {
  heading: string;
  paragraphs: string[];
}

export const LetterBlock: React.FC<LetterBlockProps> = ({ heading, paragraphs }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showFullLetter, setShowFullLetter] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    // Sequence: Flap opens (0.6s) -> Letter slides out (0.8s) -> Morph to full letter
    setTimeout(() => {
      setShowFullLetter(true);
    }, 1600);
  };

  return (
    <section className="py-32 px-4 min-h-screen flex justify-center items-center relative z-10">
      {/* Vintage Script Background Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/assets/blush-script.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <AnimatePresence mode="wait">
        {!showFullLetter ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center w-full"
            style={{ perspective: "1200px" }}
          >
            <div
              className="relative w-[320px] h-[220px] sm:w-[400px] sm:h-[260px] cursor-pointer group"
              onClick={handleOpen}
            >
              {/* Pulsing prompt */}
              {!isOpened && (
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-16 left-0 right-0 text-center text-cocoa/60 font-script text-4xl drop-shadow-sm pointer-events-none"
                >
                  Click to open
                </motion.div>
              )}

              {/* Envelope Back */}
              <div className="absolute inset-0 bg-[#c29c88] rounded-md shadow-2xl shadow-cocoa/20"></div>

              {/* The Letter (inside) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: isOpened ? -180 : 0 }}
                transition={{ delay: isOpened ? 0.5 : 0, duration: 0.8, ease: "backOut" }}
                className="absolute bottom-2 left-3 right-3 top-2 bg-[#fcfaf8] rounded-sm shadow-inner overflow-hidden z-10 p-3"
              >
                <div className="w-full h-full border border-cocoa/10 p-4 flex flex-col items-center bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] bg-[opacity:0.03]">
                  <h3 className="font-script text-2xl text-cocoa/80 mb-2 border-b border-cocoa/10 pb-2 w-full text-center">My Dearest...</h3>

                  {/* Elaborated letter lines replaced with actual text */}
                  <div className="mt-2 w-full px-2">
                    <p className="text-[10px] leading-[14px] font-sans text-cocoa/70 line-clamp-[8] text-left">
                      {paragraphs.join(" ")} {paragraphs.join(" ")} {paragraphs.join(" ")}
                    </p>
                  </div>

                  <div className="mt-auto ml-auto mr-4">
                    <p className="font-script text-xs text-cocoa/80">With love,</p>
                  </div>
                </div>
              </motion.div>

              {/* Envelope Front Flaps (Static) */}
              <div className="absolute inset-0 z-20 pointer-events-none rounded-md overflow-hidden">
                {/* Left Flap */}
                <div className="absolute inset-0 bg-[#e6c9bb]" style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)" }}></div>
                {/* Right Flap */}
                <div className="absolute inset-0 bg-[#e6c9bb]" style={{ clipPath: "polygon(100% 0, 50% 50%, 100% 100%)" }}></div>
                {/* Bottom Flap */}
                <div className="absolute inset-0 bg-[#ebd3c6]" style={{ clipPath: "polygon(0 100%, 50% 45%, 100% 100%)" }}></div>
              </div>

              {/* Envelope Top Flap (Animated) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: isOpened ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                style={{ transformOrigin: "top", backfaceVisibility: "hidden" }}
                className="absolute inset-0 z-30 pointer-events-none"
              >
                <div className="w-full h-full bg-[#eedcd3] shadow-sm" style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%)" }}></div>

                {/* Wax Seal */}
                <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-40">
                  <motion.div
                    animate={{ opacity: isOpened ? 0 : 1, scale: isOpened ? 0.5 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 bg-[#d16d6a] rounded-full shadow-lg shadow-rose/40 flex items-center justify-center border-2 border-[#b55856] cursor-pointer"
                  >
                    <span className="text-white text-xl drop-shadow-md pb-[2px]">♡</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="full-letter"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl w-full glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <h2 className="text-5xl md:text-6xl font-serif text-cocoa mb-10 text-center drop-shadow-sm">{heading}</h2>
            <div className="space-y-6 font-sans text-lg md:text-xl text-cocoa/90 leading-relaxed relative z-10 font-light">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Signature Reveal */}
            <div className="mt-10 flex justify-end relative z-10 mr-4 md:mr-12 text-right">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.8 }
                  }
                }}
                className="font-script text-3xl md:text-4xl text-cocoa/90"
              >
                {Array.from("With Love,\nHARINI").map((char, index) => (
                  char === '\n' ? <br key={`br-${index}`} /> :
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="inline-block"
                      style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                    >
                      {char}
                    </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="mt-14 flex justify-center relative z-10">
              <button
                onClick={() => { setShowFullLetter(false); setIsOpened(false); }}
                className="text-cocoa/50 hover:text-rose transition-colors font-script text-3xl"
              >
                Fold Letter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
