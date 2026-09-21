import React, { useState } from 'react';
import { motion } from 'framer-motion';

const reasons = [
  'Your smile feels like sunshine.', 'You make people feel safe.', 'Your laugh is unforgettable.',
  'You turn simple days into stories.', 'You care deeply.', 'Your vibe is soft and magical.',
  'You are beautifully genuine.', 'You make memories feel golden.', 'Your heart is rare.',
  'You are my favorite person to annoy.', 'You glow without trying.', 'You make everything better.',
  'You listen like home.', 'You are effortlessly classy.', 'You deserve the prettiest life.',
  'You are a whole comfort place.', 'Your presence feels peaceful.', 'You are pure main character energy.',
  'You make friendship feel precious.', 'You are loved more than words.', 'You bring calm into chaos.',
  'You make every photo feel special.', 'You have the cutest little habits.', 'You make boring days memorable.',
  'You are gentle but strong.', 'Your friendship feels like a blessing.', 'You understand things without words.',
  'You make silence feel comfortable.', 'You are a walking soft glow.', 'You make people believe in kindness.',
  'You are so easy to love.', 'You make celebrations feel brighter.', 'You carry warmth wherever you go.',
  'You make tiny moments feel cinematic.', 'You have a beautiful soul.', 'You make me laugh at random times.',
  'You are honest in the sweetest way.', 'You are my comfort notification.', 'You make the world less heavy.',
  'You deserve flowers every day.', 'You make love feel simple.', 'You are soft, rare, and precious.',
  'You make every plan more exciting.', 'You are naturally elegant.', 'You care even when nobody notices.',
  'You are full of pretty energy.', 'You make friendship feel magical.', 'You are the reason behind many smiles.',
  'You make ordinary chats memorable.', 'You are a safe place.', 'You look beautiful being yourself.',
  'You make every goodbye feel hard.', 'You are thoughtful in little ways.', 'You make life feel warmer.',
  'You are my favorite kind of person.', 'You make memories worth saving.', 'You are sunshine with a little drama.',
  'You make birthdays feel meaningful.', 'You are a beautiful chapter.', 'You make every corner feel like home.',
  'You are cute without even trying.', 'You have the prettiest heart.', 'You make people feel noticed.',
  'You bring sparkle into simple things.', 'You are love in human form.', 'You make every story better.',
  'You are someone I am grateful for.', 'You make emotions feel safe.', 'You have a rare kind of grace.',
  'You make the day softer.', 'You are a forever kind of friend.', 'You make everyone around you happier.',
  'You are pure golden-hour energy.', 'You make small surprises feel huge.', 'You are beautifully dramatic sometimes.',
  'You make life feel like a cute vlog.', 'You are my favorite memory keeper.', 'You make even chaos look pretty.',
  'You are special in every season.', 'You make me proud to know you.', 'You carry love in your details.',
  'You make every laugh feel louder.', 'You are a little universe of warmth.', 'You make everything feel less lonely.',
  'You are rare, real, and radiant.', 'You make wishes feel possible.', 'You are the prettiest comfort zone.',
  'You make every message feel sweet.', 'You turn moments into keepsakes.', 'You are always worth celebrating.',
  'You make kindness look beautiful.', 'You are a blessing in soft colors.', 'You make every page of life prettier.',
  'You are deeply loved.', 'You make my heart smile.', 'You deserve all the magic.', 'You make today feel golden.',
  'You are unforgettable.', 'You are my favorite birthday girl.', 'You are more loved than 100 reasons can say.'
];

export const Reasons: React.FC = () => {
  const [randomReason, setRandomReason] = useState('You make ordinary things magical.');

  return (
    <section className="py-24 px-4 min-h-screen flex flex-col items-center">
      <header className="text-center mb-16 max-w-2xl">
        <p className="font-script text-3xl text-[#9f6a59] mb-4">one hundred tiny Reasons Why</p>
        <h1 className="font-serif text-6xl md:text-7xl text-cocoa mb-6">I Love You</h1>
        <p className="font-sans text-lg text-cocoa/70 mb-8">Tap and smile</p>
        
        <button 
          onClick={() => setRandomReason(reasons[Math.floor(Math.random() * reasons.length)])}
          className="bg-[#9f6a59] text-white px-6 py-3 rounded-full font-serif text-lg hover:bg-cocoa transition-colors mb-8 shadow-lg shadow-[#9f6a59]/30"
        >
          Click to know the Reasons
        </button>
        
        <motion.div 
          key={randomReason}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 rounded-2xl text-xl font-serif text-cocoa shadow-md border border-white/60"
        >
          {randomReason}
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group relative aspect-square cursor-pointer rounded-xl overflow-hidden glass-panel flex items-center justify-center p-6 text-center"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors z-0" />
            
            <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="font-serif text-4xl text-cocoa/40 mb-2">{idx + 1}</h3>
              <p className="font-script text-lg text-[#9f6a59]">tap love note</p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/60 to-cocoa/10 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <p className="font-sans text-white text-lg font-medium drop-shadow-md">
                {reason}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <footer className="mt-24 font-serif text-cocoa/60 text-lg">
        100 reasons and still not enough ✦
      </footer>
    </section>
  );
};
