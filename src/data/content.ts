export interface BirthdaySiteContent {
  recipientName: string;

  intro: {
    lines: string[];           
    ctaText: string;           
  };

  hero: {
    photoUrl: string;
    subLines: string[];
    floatingNotes: string[];   
  };

  openingLetter: {
    heading: string;
    paragraphs: string[];
  };

  memories: MemoryItem[];      
  friendshipMemories: TextCard[];
  gratitude: {
    heading: string;
    paragraphs: string[];
  };

  videoMemories: VideoItem[];

  timeline: TimelineItem[];

  heartReasons: string[];      

  cake: {
    prompt: string[];
    wishMessage: string;
    postBlowMessage: string;
  };

  secret: {
    clueText: string;
    unlockButtonText: string;
    codeHash: string;          
    wrongCodeMessage: string;
    correctCodeMessage: string;
  };

  privateFolder: {
    letters: SealedLetter[];
    thingsNeverSaid: string[];
    privateMemories: MemoryItem[];
    specialVideos: VideoItem[];
    insideJokes: InsideJoke[];
    reasonsYoureSpecial: string[];   
    lateNightThoughts: string[];
    finalLetter: {
      paragraphs: string[];
      closingLine: string;
    };
  };

  music: {
    src: string;                
    autoStartOnEntry: boolean;  
  };

  celebration: {
    headline: string;
    closingLines: string[];
  };
}

export interface MemoryItem {
  id: string;
  type: "photo" | "video";
  url: string;
  caption: string;
  date?: string;
  description?: string;
}

export interface VideoItem {
  id: string;
  url: string;
  caption: string;
  date?: string;
  message?: string;
}

export interface TimelineItem {
  id: string;
  label: string;         
  date?: string;
  photoUrl?: string;
  videoUrl?: string;
  description: string;
  icon?: string;
}

export interface TextCard {
  id: string;
  text: string;
}

export interface SealedLetter {
  id: string;
  title: string;          
  paragraphs: string[];
}

export interface InsideJoke {
  id: string;
  teaser: string;         
  explanation: string;    
}

// Simple hash function for client side matching
export const hashString = async (message: string) => {
  const msgUint8 = new TextEncoder().encode(message.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Target Hash for 'maruthuuu<3!'
// await hashString('maruthuuu<3!')
const defaultHash = 'cd628717075b4ad94e3ffe1314fb2c0d13bcaeac06585fd729431e3be32a4424'; 

export const siteContent: BirthdaySiteContent = {
  recipientName: "My Dearest Friend",

  intro: {
    lines: [
      "In a world of billions of people...",
      "I somehow found the one whose soul perfectly matches mine."
    ],
    ctaText: "ENTER YOUR BIRTHDAY WORLD"
  },

  hero: {
    photoUrl: "https://images.unsplash.com/photo-1517502474597-2a5127278385?q=80&w=600&auto=format&fit=crop",
    subLines: ["Happy Birthday", "To the person who makes life beautiful"],
    floatingNotes: ["my favorite human 💗", "my safe place", "pure magic"]
  },

  openingLetter: {
    heading: "To My Soulmate in Friendship",
    paragraphs: [
      "I wanted to build something that could hold even a fraction of the love and gratitude I have for you. A simple text or a card just didn't seem like enough to capture what you mean to me.",
      "You are the person I run to when the world is too loud, and the one I want to celebrate with when everything goes right. Your laugh is my favorite sound, and your heart is the rarest thing I've ever known.",
      "Consider this our own private sanctuary. A digital time capsule of our shared chaos, our quiet moments, and a love that outlasts everything else."
    ]
  },

  memories: [
    {
      id: "m1",
      type: "photo",
      url: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?q=80&w=600&auto=format&fit=crop",
      caption: "The days that turn into nights",
      date: "Endless Summers"
    },
    {
      id: "m2",
      type: "photo",
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
      caption: "Quiet conversations",
      date: "Autumn Evenings"
    },
    {
      id: "m3",
      type: "photo",
      url: "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?q=80&w=600&auto=format&fit=crop",
      caption: "Wandering aimlessly, but together",
      date: "Winter Escapes"
    },
    {
      id: "m4",
      type: "photo",
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
      caption: "Just us being us",
      date: "Spring Renewals"
    }
  ],

  friendshipMemories: [
    { id: "f1", text: "I love that we can sit in absolute silence for hours, and it never feels heavy. It just feels like home." },
    { id: "f2", text: "Thank you for the late-night phone calls when I was falling apart, and you carefully put me back together." },
    { id: "f3", text: "We have this unspoken language. One look across a crowded room, and we already know exactly what the other is thinking." }
  ],

  gratitude: {
    heading: "Thank You...",
    paragraphs: [
      "For always being there, for the late-night calls, the endless support, and for just being you."
    ]
  },

  videoMemories: [
    {
      id: "v1",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      caption: "When we couldn't stop laughing",
      date: "That One Perfect Day"
    }
  ],

  timeline: [
    {
      id: "t1",
      label: "The Beginning",
      date: "Day One",
      description: "When we first met, I had no idea you would become such an anchor in my life. It started as a simple hello, and turned into a forever kind of bond.",
      photoUrl: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "t2",
      label: "Finding Our Rhythm",
      date: "The Middle Chapters",
      description: "Through the heartbreaks, the job changes, and the profound confusion of growing up—we did it side by side. I never felt alone because I had you.",
      photoUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "t3",
      label: "Here and Now",
      date: "Present",
      description: "Look at us now. Stronger, wiser, and still the exact same weirdos we were back then. I wouldn't trade our story for anything in the world.",
      photoUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop"
    }
  ],

  heartReasons: [
    "You have the most infectious, beautiful laugh.",
    "You remember the little things people say.",
    "Your resilience is deeply inspiring to me.",
    "You love so fiercely and unconditionally.",
    "You make the mundane feel extraordinary."
  ],

  cake: {
    prompt: ["Close your eyes...", "Make the biggest wish you can think of."],
    wishMessage: "May the universe give you everything you deserve, and more.",
    postBlowMessage: "Happy Birthday, Beautiful Soul. ✨"
  },

  secret: {
    clueText: "TO READ MY FINAL WORDS, ENTER OUR SECRET PASSCODE",
    unlockButtonText: "UNLOCK MY HEART",
    codeHash: defaultHash, // Hashed version of the password
    wrongCodeMessage: "Not quite! Try again, love.",
    correctCodeMessage: "Unlocking our sanctuary..."
  },

  privateFolder: {
    letters: [
      {
        id: "l1",
        title: "Open When You Forget Your Worth",
        paragraphs: [
          "I am writing this for the days when the mirror lies to you, and when the world feels too heavy.",
          "You are a force of nature. You bring so much light into the lives of everyone lucky enough to know you. Never, ever let anyone make you feel small. I see the magic in you every single day."
        ]
      },
      {
        id: "l2",
        title: "Open When You Need a Reminder",
        paragraphs: [
          "Even if we are miles apart, or life gets too busy, you are always in my heart. You are my chosen family, and nothing will ever change that."
        ]
      }
    ],
    thingsNeverSaid: [
      "I actually admire you more than I've ever admitted out loud.",
      "Your strength is the reason I kept going on my hardest days.",
      "I genuinely believe I am a better person because you are in my life."
    ],
    privateMemories: [],
    specialVideos: [],
    insideJokes: [],
    reasonsYoureSpecial: [],
    lateNightThoughts: [],
    finalLetter: {
      paragraphs: [
        "This brings us to the end of your digital birthday gift. But honestly, it's just a snapshot of a friendship that will last a lifetime.",
        "Thank you for seeing me when I was invisible. Thank you for loving me when I was hard to love. Thank you for being the most incredible friend I could have ever asked for.",
        "I hope this year brings you an overwhelming amount of peace, success, and pure joy. You deserve the absolute world."
      ],
      closingLine: "I love you, endlessly."
    }
  },

  music: {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    autoStartOnEntry: false
  },

  celebration: {
    headline: "Happy Birthday!",
    closingLines: []
  }
};
