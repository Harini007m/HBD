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
  sliderMemories: MemoryItem[];
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
      url: "/gallery/ga1.jpeg",
      caption: "The days that turn into nights",
      date: "Endless Summers"
    },
    {
      id: "m2",
      type: "photo",
      url: "/gallery/ga2.jpeg",
      caption: "Quiet conversations",
      date: "Autumn Evenings"
    },
    {
      id: "m3",
      type: "photo",
      url: "/gallery/ga3.jpeg",
      caption: "Wandering aimlessly, but together",
      date: "Winter Escapes"
    },
    {
      id: "m4",
      type: "photo",
      url: "/gallery/ga4.jpeg",
      caption: "Just us being us",
      date: "Spring Renewals"
    },
    {
      id: "m5",
      type: "photo",
      url: "/gallery/ga5.jpeg",
      caption: "The world is ours",
      date: "A Day to Remember"
    },
    {
      id: "m6",
      type: "photo",
      url: "/gallery/ga6.jpeg",
      caption: "Golden hour glow",
      date: "Perfect Sunsets"
    },
    {
      id: "m7",
      type: "photo",
      url: "/gallery/ga7.jpeg",
      caption: "A new adventure",
      date: "Spontaneous Days"
    },
    {
      id: "m8",
      type: "photo",
      url: "/gallery/ga8.jpeg",
      caption: "Our secret spot",
      date: "Quiet Mornings"
    }
  ],

  sliderMemories: [
    {
      id: "sm1",
      type: "photo",
      url: "/gallery/tl1.jpeg",
      date: "May 3rd, 2025",
      caption: "Farewell to the Seniors",
      description: "This day was bittersweet as we gathered to bid farewell to our seniors. Amidst all the goodbyes, dressing up, and endless photo sessions, we created memories that will always hold a special place in my heart. It was a beautiful day celebrating the people we looked up to."
    },
    {
      id: "sm2",
      type: "photo",
      url: "/gallery/tl2.jpeg",
      date: "May 30th, 2025",
      caption: "My Birthday Celebrations",
      description: "My special day became infinitely better just by having you all around to celebrate it with me. The laughs, the warmth, and the joy of sharing my birthday with my favorite people made it a day I will cherish forever. Thank you for making me feel so incredibly loved."
    },
    {
      id: "sm3",
      type: "photo",
      url: "/gallery/tl3.jpeg",
      date: "October 15th, 2025",
      caption: "Escaping the Record Queue",
      description: "We were all supposed to be getting our records signed, but the queue was absolutely massive! Instead of standing there forever, the three of us sneaked away just to snap this picture. It's funny how the most mundane college chores always turn into our favorite random little adventures."
    },
    {
      id: "sm4",
      type: "photo",
      url: "/gallery/tl4.jpeg",
      date: "May 3rd, 2025",
      caption: "More Farewell Memories",
      description: "Another beautiful snapshot from the seniors' farewell! The energy that day was unmatched—a mix of happy tears, excitement for the future, and us just enjoying the moment together. Every time I look at pictures from this day, I'm reminded of how lucky I am to have this group."
    },
    {
      id: "sm5",
      type: "photo",
      url: "/gallery/tl5.jpeg",
      date: "May 31st, 2025",
      caption: "The Day After & River Trips",
      description: "The birthday celebrations didn't stop! I invited everyone over to my house the next day. We ended up visiting the beautiful river nearby, just hanging out, laughing endlessly, and taking in the peaceful scenery. It was the absolute perfect way to wrap up my birthday weekend with friends."
    },
    {
      id: "sm6",
      type: "photo",
      url: "/gallery/tl6.jpeg",
      date: "September 21st, 2025",
      caption: "Megaa's Birthday at Mandi",
      description: "After our IV trip, a few of us stayed back at the college hostel just so we could celebrate Megaa's birthday the very next day! We all went out to Mandi, ate amazing food, and had the best time celebrating her. This picture perfectly captures the fun we had!"
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
    { id: "v1", url: "/gallery/v1.mp4", caption: "The SWAG!", date: "Special Moment" },
    { id: "v2", url: "/gallery/v2.mp4", caption: "Caught on Camera 2", date: "Special Moment" },
    { id: "v3", url: "/gallery/v3.mp4", caption: "Caught on Camera 3", date: "Special Moment" },
    { id: "v4", url: "/gallery/v4.mp4", caption: "Caught on Camera 4", date: "Special Moment" },
    { id: "v5", url: "/gallery/v5.mp4", caption: "Caught on Camera 5", date: "Special Moment" },
    { id: "v6", url: "/gallery/v6.mp4", caption: "Caught on Camera 6", date: "Special Moment" }
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
