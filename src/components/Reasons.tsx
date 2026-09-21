import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const coreReasons = [
  {
    title: "Your Beautiful Soul",
    desc: "You carry so much warmth and kindness wherever you go. You make people feel seen, heard, and incredibly safe just by being yourself.",
    accent: "bg-rose/20",
    photoUrl: "/gallery/ga1.jpeg"
  },
  {
    title: "Your Smile",
    desc: "It literally lights up the darkest of days. The moment you smile, everything else fades away and the world just feels right.",
    accent: "bg-champagne/20",
    photoUrl: "/gallery/ga2.jpeg"
  },
  {
    title: "Your Resilience",
    desc: "The way you handle life with such grace and quiet strength inspires me every single day. You are so much stronger than you know.",
    accent: "bg-[#9f6a59]/10",
    photoUrl: "/gallery/ga3.jpeg"
  },
  {
    title: "The Little Things",
    desc: "Your cute habits, the way your eyes sparkle when you're excited, your random laughs—every tiny detail makes you absolutely perfect.",
    accent: "bg-rose/20",
    photoUrl: "/gallery/ga4.jpeg"
  },
  {
    title: "Just You",
    desc: "I don't need 100 reasons. The only reason I need is that you are you. There is no one else quite like you in this entire universe.",
    accent: "bg-champagne/30",
    photoUrl: "/gallery/ga5.jpeg"
  }
];

const whispers = ["my safe place", "pure magic", "always you", "my favorite human", "you are home"];

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute rounded-full blur-[100px] ${i % 2 === 0 ? 'bg-champagne/40' : 'bg-rose/30'}`}
          style={{
            width: `${300 + i * 50}px`,
            height: `${300 + i * 50}px`,
            top: `${15 * i}%`,
            left: i % 2 === 0 ? '-10%' : 'auto',
            right: i % 2 !== 0 ? '-10%' : 'auto',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      
      {/* Whispers */}
      {whispers.map((text, i) => (
        <motion.div
          key={`whisper-${i}`}
          className="absolute font-script text-4xl md:text-6xl text-[#9f6a59]/15 whitespace-nowrap"
          style={{
            top: `${18 + (i * 18)}%`,
            left: i % 2 === 0 ? '8%' : 'auto',
            right: i % 2 !== 0 ? '8%' : 'auto',
            rotate: i % 2 === 0 ? -10 : 10
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

const ParallaxSection = ({ reason, idx }: { reason: typeof coreReasons[0], idx: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yNumber = useTransform(scrollYProgress, [0, 1], [50, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <div ref={ref} className="min-h-[80vh] flex items-center justify-center relative w-full overflow-hidden py-20 px-4">
      {/* Background Decorative Blob */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 200]) }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full blur-[100px] ${reason.accent} -z-10`}
      />

      {/* Floating Polaroid (Tucked behind the glass panel) */}
      {reason.photoUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: idx % 2 === 0 ? 15 : -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: idx % 2 === 0 ? 6 : -6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]) }}
          className={`absolute top-[10%] md:top-[20%] ${idx % 2 === 0 ? 'right-[5%] lg:right-[15%]' : 'left-[5%] lg:left-[15%]'} 
            z-0 w-32 md:w-56 p-2 md:p-3 pb-8 md:pb-12 bg-[#fdfbf9] shadow-2xl shadow-cocoa/10 rounded-sm border border-cocoa/5 hidden md:block`}
        >
          {/* Washi Tape */}
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-16 md:w-20 h-5 md:h-6 bg-[#eae1d8]/90 shadow-sm -rotate-2 z-40 opacity-90 backdrop-blur-sm"></div>
          
          <img src={reason.photoUrl} alt="Memory" className="w-full aspect-square object-cover rounded-sm border border-cocoa/10 grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
        </motion.div>
      )}

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">

        {/* Floating Number (Rose Gold Shimmer) */}
        <motion.div 
          style={{ y: yNumber, opacity }}
          className={`font-serif text-[12rem] md:text-[20rem] leading-none drop-shadow-md select-none ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
        >
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f6a59]/30 via-rose/40 to-[#9f6a59]/30"
            style={{ backgroundSize: '200% auto' }}
            animate={{ backgroundPosition: ['0% center', '200% center'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            0{idx + 1}
          </motion.span>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          style={{ y: yText, opacity, scale }}
          className={`relative z-20 glass-panel p-10 md:p-14 rounded-3xl max-w-xl text-center md:text-left ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
        >

          <div className="relative z-10">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl text-cocoa mb-6"
            >
              {reason.title}
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="font-sans text-lg md:text-xl text-cocoa/80 leading-relaxed font-light"
            >
              {reason.desc}
            </motion.p>
            
            {/* Heartbeat Divider */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex items-center justify-center md:justify-start gap-3"
            >
              <motion.div 
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
                className="h-[1px] bg-gradient-to-r from-transparent to-[#9f6a59]/40 w-8 origin-right"
              ></motion.div>
              <motion.span 
                animate={{ scale: [1, 1.3, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-rose/60 text-xs inline-block"
              >
                ♡
              </motion.span>
              <motion.div 
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
                className="h-[1px] bg-gradient-to-l from-transparent to-[#9f6a59]/40 w-8 origin-left"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export const Reasons: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  return (
    <section ref={sectionRef} className="py-20 min-h-screen relative overflow-hidden bg-gradient-to-b from-warm-white via-white to-blush/20">
      
      {/* Cinematic Film Grain */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Golden Thread */}
      <motion.div 
        style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#9f6a59]/10 via-[#9f6a59]/30 to-[#9f6a59]/10 z-0 hidden md:block"
      ></motion.div>

      <BackgroundElements />

      <header className="text-center pt-24 pb-12 px-4 max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-script text-4xl text-[#9f6a59] mb-4">the real reasons</p>
          <h1 className="font-serif text-6xl md:text-7xl text-cocoa tracking-tight drop-shadow-sm">Why I Adore You</h1>
        </motion.div>
      </header>

      <div className="w-full flex flex-col items-center">
        {coreReasons.map((reason, idx) => (
          <ParallaxSection key={idx} reason={reason} idx={idx} />
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-20 font-serif text-cocoa/50 text-2xl flex flex-col items-center gap-6 relative z-10 pb-32 text-center px-4"
      >
        <span className="italic">"And I'd choose you; in a hundred lifetimes, in a hundred worlds, in any version of reality, I'd find you and I'd choose you."</span>
      </motion.footer>
    </section>
  );
};
