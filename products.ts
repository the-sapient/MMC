import { Product, CommunityStat, Testimonial } from '../types';

import mmcExactFlyer from '../assets/images/mmc_exact_flyer_1782831979883.jpg';
import mysteriousPsychologyFlyer from '../assets/images/mysterious_psychology_flyer_1782835277345.jpg';
import mmcAffiliatesFlyer from '../assets/images/mmc_affiliates_flyer_1782833753781.jpg';

export const COMMUNITY_STATS: CommunityStat[] = [
  {
    value: "100+",
    label: "Active Members",
    subtext: "Mastering marketing psychology & copywriting"
  },
  {
    value: "₦50M+",
    label: "Member Earnings Generated",
    subtext: "Verified earnings across copywriting & affiliate structures"
  },
  {
    value: "98%",
    label: "Success Satisfaction Rate",
    subtext: "Backed by direct daily personal mentorship"
  },
  {
    value: "100%",
    label: "No-Guesswork Feedback",
    subtext: "On actual client copy drafts from Sagacious Tehilla"
  }
];

export const GLOBAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Elena Vance",
    role: "Newsletter Creator & Strategist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Joining the Mystery Mastery Community (MMC) was the single highest-ROI decision of my career. The MMC doubled my client closing rates, and I launched my first $10k cohort using the Profit Playbook within 45 days.",
    resultMetric: "+$12,400/mo Revenue",
    productUsed: "Mystery Mastery Community (MMC) & Profit Playbook"
  },
  {
    id: "t2",
    name: "Gideon",
    role: "MMC Member & Active Reseller",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "I bought the 500k Affiliate Structure opportunity 8 months ago. Practicing extreme specificity and running target-oriented marketing campaigns helped me earn highly consistent profits inside the MMC ecosystem.",
    resultMetric: "₦200k - ₦500k/mo Profits",
    productUsed: "500k Affiliate Structure"
  },
  {
    id: "t3",
    name: "MmeSoma",
    role: "Mysterious Psychology Student",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    quote: "I read through Hack Her Soul Hijack His Brain. It revealed dark secrets that actually scared me. I realized someone had used these exact patterns on me before. This community gives you absolute clarity.",
    resultMetric: "Subconscious behavior reading",
    productUsed: "Mysterious Psychology"
  }
];

export const PRODUCTS_DATA: Record<string, Product> = {
  'mystery-mastery': {
    id: 'mystery-mastery',
    slug: 'mystery-mastery',
    name: 'Mystery Mastery Community (MMC)',
    tagline: 'Africa\'s ONLY Copywriting & Marketing Psychology Community with Daily, Personalised Mentorship.',
    heroHeadline: 'The Real Reason Most Copywriters & Marketers Are Still Struggling',
    heroSubheadline: 'In Nigeria alone, over 700 new copywriters are trained every month—more than 8,400 every year, entering the same market with the exact same 30-day certificate. Real mastery is not a 30-day skill. Unlock the subconscious psychological secrets and direct daily mentorship needed to stand apart and land high-paying clients.',
    shortDescription: 'A living, ongoing community built on daily practice, direct access to expert mentor Sagacious Tehilla, and the subconscious marketing psychology concepts that set top operators apart.',
    price: 55700,
    originalPrice: 150000,
    currencySymbol: '₦',
    currencySuffix: 'NGN',
    rating: 4.9,
    reviewCount: 450,
    badge: 'Elite Live Mentorship',
    heroImage: mmcExactFlyer,
    socialProofSnippet: 'Under the direct daily personal guidance of Sagacious Tehilla.',
    keyBenefits: [
      {
        title: "Daily Direct Mentorship",
        description: "Get feedback on copy drafts, client work, and marketing strategies from Sagacious Tehilla. No support tickets or generic forums.",
        iconName: "Users"
      },
      {
        title: "The Psychology of Influence",
        description: "Master customer behavior predictive models and subconscious buying triggers that drive reliable conversion.",
        iconName: "Brain"
      },
      {
        title: "High-Value Client Positioning",
        description: "Position yourself so the right clients seek you out compellingly, rather than pitching desperately.",
        iconName: "Award"
      },
      {
        title: "Direct Response Client Acquisition",
        description: "Learn how to pitch, close, and follow up without sounding pushy, plus create high-converting offers.",
        iconName: "Target"
      },
      {
        title: "Offline-to-Online Integration",
        description: "Win attention and trust in offline environments, then scale and replicate that authority online.",
        iconName: "Cpu"
      }
    ],
    problemAgitate: {
      headline: "A Certificate Will Not Land You Clients—Mentorship and Systems Will",
      subheadline: "Most courses give you information but leave you alone when you hit a wall. Here is why most copywriters struggle:",
      painPoints: [
        "You get theoretical notes instead of a living guide, feeling lost the second you try to write.",
        "You enter a flooded market competing with 8,400+ other certificate holders using identical scripts.",
        "You feel abandoned inside a dead WhatsApp group with no mentor in sight when you have questions.",
        "You cannot land high-ticket clients because you lack practical psychological client positioning.",
        "You struggle to close prospects because you sound desperate instead of authoritative."
      ]
    },
    solutionSection: {
      headline: "The MMC Difference: A Living Copy Family Engineered for Growth",
      subheadline: "We replace passive learning with daily personal coaching, custom community tags, and direct accountability.",
      transformationPoints: [
        "Get daily feedback on your actual active client drafts directly from Sagacious Tehilla.",
        "Earn the MMC tag next to your name to command premium respect and visibility in the market.",
        "Master direct response frameworks, client referral systems, and premium offer creation.",
        "Build a solid professional identity surrounded by other committed high-income operators."
      ]
    },
    featuresIncluded: [
      {
        title: "The Psychology of Influence in Marketing",
        subtitle: "Understand the mind of the buyer before writing a single word.",
        bullets: [
          "Subconscious buying triggers and predictive behavior modeling.",
          "How to write copy that creates genuine emotional resonance.",
          "Practical psychology concepts most copywriters in Nigeria have never been exposed to."
        ]
      },
      {
        title: "How to Position Yourself So Clients Come to You",
        subtitle: "Become the preferred option in your niche, not by pitching harder but by being compelling.",
        bullets: [
          "Become the preferred option so the right clients seek you out naturally.",
          "This framework has helped members land writing gigs, host webinars, and grow personal brands.",
          "Practical branding strategies that command respect in your market."
        ]
      },
      {
        title: "Direct Response Marketing & Client Acquisition",
        subtitle: "Pitch, close, and follow up without sounding desperate or pushy.",
        bullets: [
          "Low-stress closing scripts that remove pushiness and desperation.",
          "Create offers that solve urgent problems people are already paying to solve.",
          "Learn how to make clients refer you without incentive through the quality of your results."
        ]
      },
      {
        title: "Offline Marketing & Complete System Vault Included",
        subtitle: "Learn offline-to-online conversion and gain immediate assets worth over 500,000 NGN.",
        bullets: [
          "Daily personal mentorship from Sagacious Tehilla, for life.",
          "Over 5 original copywriting ebooks, 10 psychology audiobooks, and 10 practical video lessons.",
          "The Expert Visibility ebook (yours free) showing how to get preferred over competitors within 179 days."
        ]
      }
    ],
    testimonials: [
      {
        id: "mmc1",
        name: "David Chibueze",
        role: "MMC Elite Member",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        quote: "Being part of MMC was one of the best decisions I made. I have learnt a lot of marketing strategies that I have applied and seen results. The best part is that Sagacious is so supportive that if you need his attention in a specific area, he will give it to you until you are satisfied. MMC is beyond a copywriting community. It is a copy family.",
        resultMetric: "Applied & Seen Results"
      },
      {
        id: "mmc2",
        name: "Nabeel Isah",
        role: "MMC Member",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        quote: "I paid for a copywriting class with live sessions every day for one month. You cannot become a professional copywriter/marketer in just one month. Proof? The training I joined did not make me a professional copywriter/marketer even after all the hype. MMC changed everything.",
        resultMetric: "Professional Mastery"
      },
      {
        id: "mmc3",
        name: "Ekundayo",
        role: "MMC Member",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
        quote: "I started gaining clarity after I joined MMC. The mysteries you shared in the community are what made it easy for me to understand the one thing that makes most copy fail, and now I own it. God bless the day I joined MMC.",
        resultMetric: "Gained Total Clarity"
      }
    ],
    faqs: [
      {
        question: "Is this really lifetime access?",
        answer: "Yes. You pay once and your membership does not expire. You will continue to receive new lessons, resources, and daily mentorship access for as long as the community is running."
      },
      {
        question: "I am a total beginner. Will I keep up?",
        answer: "MMC was built with beginners in mind. The psychology and copywriting concepts are introduced from the ground up, and your mentor is available every day to answer questions and guide your pace."
      },
      {
        question: "I have bought courses before and they did not help. Why is this different?",
        answer: "Most courses fail because they give you information without a guide. MMC combines structured learning with daily personal mentorship. You are not left to implement alone."
      },
      {
        question: "How much time do I need to commit?",
        answer: "There is no fixed schedule. You learn at your own pace. The more consistently you engage, the faster you grow. But the community and mentorship are available every day, so you can plug in whenever you are ready."
      },
      {
        question: "What if I am already an intermediate copywriter/marketer?",
        answer: "MMC is equally valuable for intermediate copywriters/marketers. The psychology training, direct response frameworks, and branding content go beyond what most Nigerian copywriting programs teach at any level."
      }
    ],
    ctaButtonText: "Enroll in Mystery Mastery Community - 55,700 NGN"
  },

  'mysterious-psychology': {
    id: 'mysterious-psychology',
    slug: 'mysterious-psychology',
    name: 'Mysterious Psychology',
    tagline: 'A Psychology Learning Community For People Who Want to Understand Human Behaviour at a Level Most People Will Never Reach.',
    heroHeadline: 'The Secret Psychology of Human Behaviour, Influence & Decision Making',
    heroSubheadline: 'Join Africa\'s elite psychology-oriented learning community to master persuasion, build genuine relationships, and read people with absolute clarity.',
    shortDescription: 'Access the foundational Hack Her Soul Hijack His Brain core book, 7 unpublished psychology books, Telegram mentorship hub, and video/audio demonstrations.',
    price: 27000,
    originalPrice: 107700,
    currencySymbol: '₦',
    currencySuffix: 'NGN',
    rating: 4.97,
    reviewCount: 520,
    badge: '18+ Mature Community',
    heroImage: mysteriousPsychologyFlyer,
    socialProofSnippet: 'Over 520+ active students are already mastering human behaviour inside.',
    keyBenefits: [
      {
        title: "The Foundational Book",
        description: "Hack Her Soul, Hijack His Brain - the definitive watch-me-do-it book on conversational psychology.",
        iconName: "BookOpen"
      },
      {
        title: "7 Unpublished Books",
        description: "Exclusive secret titles like Play With Emotions, Judas Psychology, and Nonsense Can Sell.",
        iconName: "Crown"
      },
      {
        title: "Real Practical Demonstrations",
        description: "Watch actual recordings and see screenshots of psychological techniques applied in real life.",
        iconName: "Cpu"
      },
      {
        title: "Telegram Mentorship Hub",
        description: "Lifetime access to direct questions, answers, and over 30+ unpublished letters.",
        iconName: "Users"
      },
      {
        title: "Relationship Mastery",
        description: "Learn to build trust quickly, recognize early patterns of dishonesty, and protect yourself.",
        iconName: "ShieldCheck"
      }
    ],
    problemAgitate: {
      headline: "Why Most People Struggle with Other Humans",
      subheadline: "Most courses teach surface-level persuasion tactics, scripts, and hollow templates that fail in real conversations:",
      painPoints: [
        "You say the right things and make logical sense, but they still walk away or reject you.",
        "You get betrayed by people you trusted because you didn't know the silent warning signs to look for.",
        "You keep running into invisible walls in sales, marketing, and copywriting, with zero response from clients.",
        "You study body language and influence from a distance, but the moment you apply it, it feels unnatural and forced.",
        "You carry the burden of trying to persuade without understanding the core foundation of human decision-making."
      ]
    },
    solutionSection: {
      headline: "The Mysterious Psychology Paradigm: Understand Human Behaviour at the Root",
      subheadline: "Stop memorizing scripts. Master the underlying foundation of human psychology so you always know what a person needs to hear:",
      transformationPoints: [
        "You do not need to memorize scripts, because you understand what the person needs to hear.",
        "You do not need to manipulate, because you understand what actually moves people.",
        "You do not get blindsided by people who mean you harm, because you can read patterns before they reveal themselves.",
        "You do not wonder why your marketing is not converting, because you understand the psychological triggers."
      ]
    },
    featuresIncluded: [
      {
        title: "Foundational Book: Hack Her Soul, Hijack His Brain",
        subtitle: "The complete watch-me-do-it psychology bible.",
        bullets: [
          "Core frameworks for reading human decisions in sales, relationships, and daily life.",
          "Demonstrated application with real conversations, not dry theory.",
          "Normally sold at ₦50,000 NGN — included free inside your membership."
        ]
      },
      {
        title: "7 Unpublished Secret Psychology Books",
        subtitle: "Exclusive library not sold anywhere else.",
        bullets: [
          "Play With Emotions & Big Idea Extension: emotional influence and attention control.",
          "48 Laws of Verbal War & How to Know Who Is Fake: pattern recognition for detecting dishonesty.",
          "Judas Psychology & How to Conquer the Male Ego: understanding betrayal and ego-driven behaviour."
        ]
      },
      {
        title: "Telegram Mentorship & The Psychology Hub",
        subtitle: "Direct lifetime mentorship from Sagacious Tehilla.",
        bullets: [
          "Lifetime access to ask questions on human behaviour and receive direct answers.",
          "Over 30 unpublished inner-community letters on advanced psychology applications.",
          "Weekly breakdowns and updates of real-life interactions."
        ]
      },
      {
        title: "Practical Video & Audio Demonstrations",
        subtitle: "Real conversations. Real people. Real outcomes.",
        bullets: [
          "The full recording of how Sagacious identified a fraudster using only text message patterns.",
          "A breakdown of how to build trust before the other person realizes it is happening.",
          "Real screenshots showing sales happening without urgency, pressure, or hype."
        ]
      }
    ],
    testimonials: [
      {
        id: "mp1",
        name: "Abdul",
        role: "Sales Professional",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        quote: "I found Hack Her Soul Hijack His Brain incredibly eye opening. One of the real practical examples taught made me realize how powerful I am as a sales person, and it shows me how to use it without it being obvious.",
        resultMetric: "Sales Influence Mastery"
      },
      {
        id: "mp2",
        name: "MmeSoma",
        role: "Active Community Member",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        quote: "I have read through Hack her soul Hijack his brain and honestly am scared of the info contained there... I also realised someone actually used these exact patterns on me before, without my awareness. That kind of clarity is what this community produces.",
        resultMetric: "Anti-Manipulation Guard"
      },
      {
        id: "mp3",
        name: "Eniola Daniel",
        role: "Copywriter & Strategist",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
        quote: "Of all your books that I have read, this one is dangerously different. The Open Loop strategy you used makes you want more of the book. The book is hypnotic.",
        resultMetric: "Hypnotic Writing Skill"
      }
    ],
    faqs: [
      {
        question: "1. How do I access the ebook and all bonuses after joining?",
        answer: "You will receive everything directly on your smartphone as soon as you send your payment confirmation."
      },
      {
        question: "2. Is installment payment available?",
        answer: "Yes.\n\nYou can begin with a minimum of 10,000 NGN. The balance is due within one month. You will be given two payment windows to complete it. Even on installment, you will receive immediate access to a selection of the bonuses and resources to get started."
      },
      {
        question: "3. Will I get access to everything on installment?",
        answer: "Not immediately. Full access is granted on full payment. But you will receive enough to begin learning and applying right away."
      },
      {
        question: "4. Is there an age restriction to join this community?",
        answer: "Yes. The Mysterious Psychology Community is open to adults who are 18 years and above. This is not a marketing device. It is a genuine requirement.\n\nThe material inside covers psychological influence at a practical depth. It requires emotional maturity and responsible intent to apply correctly. We have had situations where younger students attempted to access the material. When identified, their access was revoked without refund."
      }
    ],
    ctaButtonText: "Tap Here to Join Mysterious Psychology Now - ₦27,000"
  },

  'profit-playbook': {
    id: 'profit-playbook',
    slug: 'profit-playbook',
    name: 'Honest to God Client Acquisition',
    tagline: 'Learn How to Consistently Attract and Close Clients without Begging or Cold Pitching.',
    heroHeadline: 'Would You Like To Know Why You Still Struggle To Get Clients?',
    heroSubheadline: 'Even after trying different strategies and buying lots of client acquisition courses from gurus that promised you $1000 every month? Discover the simple, honest, and powerful HTG Approach.',
    shortDescription: 'A guided, simple, honest, personalized, and powerful strategy to build a brand that attracts clients, rather than chasing them. Attract high-ticket retainers straight to your inbox.',
    price: 15000,
    originalPrice: 150000,
    currencySymbol: '₦',
    currencySuffix: 'NGN',
    rating: 4.98,
    reviewCount: 185,
    badge: 'HTG Strategy',
    heroImage: mmcExactFlyer,
    socialProofSnippet: 'Quietly responsible for multiple 6-figure monthly retainers.',
    keyBenefits: [
      {
        title: "Lead Generation",
        description: "Attract an unstoppable stream of high-interest warm prospects to your inbox.",
        iconName: "Users"
      },
      {
        title: "Prospecting Strategies",
        description: "Position yourself as the ultimate authority so clients seek you out.",
        iconName: "Target"
      },
      {
        title: "Client Conversion",
        description: "Master conversational closing patterns that convert inquiries with absolute ease.",
        iconName: "TrendingUp"
      },
      {
        title: "Offer Creation",
        description: "Structure irresistible, high-value offers that make saying 'no' completely irrational.",
        iconName: "Award"
      },
      {
        title: "Predictable Sales Systems",
        description: "Build repeatable, consistent acquisition loops to secure steady monthly clients.",
        iconName: "Cpu"
      }
    ],
    problemAgitate: {
      headline: "Outdated Guesswork and Fake Promises are Keeping You Broke",
      subheadline: "Gurus tell you to learn a skill and pitch 100 people like your life depends on it. Here is the scary reality of random cold pitching:",
      painPoints: [
        "It completely kills your self-confidence sending 100 cold DMs every single day to total strangers.",
        "You enter the painful 3-step cycle of learning a skill, desperate pitching, and being ignored or ghosted.",
        "Prospects ask you for real results you don't have yet, locking you out of client acquisition.",
        "You watch hours of courses and sacrifice sleep, only to remain stuck with low conversion chances.",
        "Even top-rated Fiverr freelancers are running paid ads just to get hired now — competition is brutal."
      ]
    },
    solutionSection: {
      headline: "The HTG Approach: Build a Brand that Attracts Clients",
      subheadline: "When you build a brand that attracts clients rather than attracting clients to build a brand, you gain total freedom.",
      transformationPoints: [
        "Attract warm, high-intent clients directly to your inbox without visiting anyone's DMs.",
        "Gain instant credibility and position yourself with authority, even as an unknown beginner.",
        "Stop begging for table scraps and choose who you work with, how much you charge, and when you work.",
        "Acquire your first or next client consistently in the next 7 to 14 days of honest implementation."
      ]
    },
    featuresIncluded: [
      {
        title: "A 3-Month Weekly Friday Class",
        subtitle: "Weekly direct coaching, accountability, and implementation",
        bullets: [
          "Step-by-step breakdown of the 'HTG Method' that brings clients directly to you.",
          "Submit your weekly implementation reports directly to us for correction and strategy.",
          "Learn how to build 'automatic soul conversion' so even strangers feel deeply connected.",
          "How to never pitch again: use the warm pitch strategy that makes clients ask to work with you."
        ]
      },
      {
        title: "Bonus 1: Expert Visibility Blueprint",
        subtitle: "Worth ₦35k — How to get seen, heard, and hired over popular gurus in 179 days",
        bullets: [
          "Why 'competence' is a scam in the online space and the real secret to getting paid.",
          "The name game hack: how to give yourself a magnetic title that crushes competition.",
          "The 7-post formula to attract your first set of serious prospects even if unknown.",
          "How to ethically manipulate attention and become the go-to voice using notice-me psychology.",
          "The real reason you should write a short 20-page book to enter rooms gurus aren't invited to."
        ]
      },
      {
        title: "Bonus 2: The Black American Blueprint",
        subtitle: "Worth ₦10k — How skilled Nigerians can land high-paying foreign clients",
        bullets: [
          "A private 2-hour conversation with Marco, a U.S. marketing veteran who has hired Africans.",
          "Why your English, accent, or country of origin is NOT your real problem.",
          "The #1 mistake 95% of African freelancers make when trying to attract foreign clients.",
          "The mindset shift that kills prejudice, overcomes doubt, and gets prospects to take you seriously.",
          "Marco's 'Killer Email Sequence' to build trust and close up to 18% of cold leads."
        ]
      },
      {
        title: "Bonus 3: 30 Seconds Dating Strategy",
        subtitle: "Worth ₦15k — Turn total strangers into loyal customers (even family) in less than 7 days",
        bullets: [
          "No lead magnets required: using relationship psychology to define your marketing.",
          "Day One: The 'Dark Attraction' trigger that silences distractions and makes people listen only to you.",
          "Day Two: How to build instant credibility even if you are still a newbie.",
          "Day Three to Five: The Hook-Up method, Realism Marketing, and 'Sexing the Brain' gossip tactics."
        ]
      },
      {
        title: "Bonus 4: Gossip Marketing Playbook",
        subtitle: "Worth ₦35k — 7 Dark Tricks to make people sell your offer without asking for a kobo",
        bullets: [
          "Unseen psychological tactics that get people (including influencers) to promote your offer.",
          "Zero budget, zero ad spend, and zero credibility in your marketing portfolio needed.",
          "The 'Influencer Connection Code' to connect with influencers even with a fresh account.",
          "How to flatter the right ego and make them want to be seen with you.",
          "The ancient selling secret hidden in the story of Adam & Eve (Satan was the first ever marketer!)."
        ]
      },
      {
        title: "Bonus 5: 50 Days Client Attraction Challenge",
        subtitle: "Worth ₦75k — High-intensity execution and unbreakable consistency",
        bullets: [
          "Join our dedicated daily client attraction challenge group with active members.",
          "Daily check-ins, daily execution, and daily mindset alignment to keep you consistent.",
          "The rare discipline that builds reliable outreach habits and secures high-value clients."
        ]
      }
    ],
    testimonials: [
      {
        id: "pp1",
        name: "Peter Achusim",
        role: "Ads Expert",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
        quote: "In total, I closed 3 new clients. Though that was not the highlight for me... What this 50 days challenge taught me was consistency and the power of not giving up. Consistently reaching out to new clients for 50 days helped me develop that habit which I didn't have before... And I also formed new relationships along the line.",
        resultMetric: "Closed 3 New Clients"
      },
      {
        id: "pp2",
        name: "Machala",
        role: "Craft by Machala Founder",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        quote: "Through your teachings and the principles you consistently emphasized, I was able to apply them practically, and as a result, I have successfully landed about 15 clients. This achievement is a direct reflection of the value and clarity you poured into us during your training.",
        resultMetric: "15 Clients Landed"
      },
      {
        id: "pp3",
        name: "Babajide Idris",
        role: "Psychologist Copywriter",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        quote: "The honest to God client acquisition program got me 2 clients I signed up into low ticket class, while I got one client (a perfume brand I met in an offline event). Stretched me in terms of showing up when most ideal prospects ghost you. I created a cold pitch prompt framework I called the I-3C (Identify, connect+compliment, collect, close).",
        resultMetric: "3 Active Clients"
      },
      {
        id: "pp4",
        name: "Bright Ibe",
        role: "Graphics Designer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        quote: "Through this challenge, I was able to secure about 6 clients, with 2 already paying. But beyond the numbers, the real win is the mindset shift and the client acquisition skill I've built. This is something that compounds over time, not something that ends here.",
        resultMetric: "6 Clients Secured"
      },
      {
        id: "pp5",
        name: "TGM",
        role: "WhatsApp Bot Engineer",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        quote: "I got more than 5 clients all thanks to God and You and I built a strategy of getting clients from the lessons and ideas I got from the class and community in general. To just keep it short I really valued all you shared and I thank you a lot for it.",
        resultMetric: "5+ Clients Secured"
      }
    ],
    faqs: [
      {
        question: "What is the HTG Client Acquisition Approach?",
        answer: "The 'Honest to God' approach is a 3-month system engineered specifically to help you build a client-attracting brand, rather than endlessly chasing total strangers in cold DMs. It is a guided, simple, honest, and highly personalized strategy that focuses on psychology and positioning."
      },
      {
        question: "Is there really a payback guarantee?",
        answer: "Yes, absolutely. We are so confident in this non-guesswork approach that if you set up the system for the first 3 months and follow the weekly Friday classes but fail to land clients, we offer a direct payback guarantee."
      },
      {
        question: "Do I need an existing portfolio or results to start?",
        answer: "No. Beginners often get trapped because prospects ask for real results they don't have yet. The HTG Approach teaches you how to construct instant credibility, make the client pitch you, and land clients even if you are unknown and untested."
      }
    ],
    ctaButtonText: "Unlock HTG Client Acquisition - ₦15,000"
  },

  'affiliate-structure': {
    id: 'affiliate-structure',
    slug: 'affiliate-structure',
    name: '500k Affiliate Structure',
    tagline: 'The learning-and-earning opportunity designed to help MMC members master marketing while making money.',
    heroHeadline: 'The DARK SIDE of Affiliate Marketing and How MMC Members Can Take Profitable Advantage of it.',
    heroSubheadline: 'Discover the secret learning-earning method to pocket 100% of reselling profits from elite, high-converting products while leveraging full-scale marketing support.',
    shortDescription: 'Access the highly lucrative 500k affiliate structure. Get full resell rights, tested promotional assets, and direct guidance to pocket 100% of profit with a low ₦3,700 investment.',
    price: 3700,
    originalPrice: 15000,
    currencySymbol: '₦',
    currencySuffix: 'NGN',
    rating: 4.95,
    reviewCount: 312,
    badge: 'Exclusive Learning-Earning Method',
    heroImage: mmcAffiliatesFlyer,
    socialProofSnippet: 'Over 10+ MMC members have already used this exact structure to scale their income.',
    keyBenefits: [
      {
        title: "100% Direct Profits",
        description: "Set your own price, resell top-tier MMC offers, and keep 100% of any additional amount above the original price.",
        iconName: "DollarSign"
      },
      {
        title: "Top Performing Offers",
        description: "Get instant rights to resell high-demand products like Brain Seduction, Black Marketing Formula, Hack Her Soul, and Hijack His Brain.",
        iconName: "Zap"
      },
      {
        title: "The Learning-Earning Method",
        description: "Learn marketing psychology, consumer behaviors, and sales copywriting while actively making money.",
        iconName: "Crown"
      },
      {
        title: "Ready-To-Go Sales Assets",
        description: "Get access to marketing scripts, broadcast templates, sales copy, and creative assets that are already verified to sell.",
        iconName: "Briefcase"
      },
      {
        title: "Ongoing Monthly Support",
        description: "Access monthly training and support sessions to optimize your traffic, conversion rate, and branding.",
        iconName: "Users"
      }
    ],
    problemAgitate: {
      headline: "Most Affiliate Marketers Are Bleeding Time and Money with Zero Results",
      subheadline: "The sad reality is that most aspiring affiliates get stuck in low-commission loops or fail to drive any conversions:",
      painPoints: [
        "You are forced to settle for tiny 50% commissions while the product owner pockets the rest.",
        "You are left to figure out marketing psychology, copywriting, and traffic generation completely from scratch.",
        "You try to create your own product but end up flushing months of time and hundreds of thousands of Naira down the drain.",
        "Most courses give you theoretical notes and then dump you into dead, dormant support groups.",
        "You carry all the risk of product failure and marketing costs without a proven conversion structure."
      ]
    },
    solutionSection: {
      headline: "The 500k Affiliate Structure: A Risk-Free Masterclass in Earning While Learning",
      subheadline: "Skip the trial-and-error of building a product. Learn premium copywriting and psychology by promoting things that already sell.",
      transformationPoints: [
        "Set your own prices and pocket 100% of the profits, only paying a small 30% original-price maintenance fee to MMC.",
        "Receive tested promotional scripts, visual templates, and direct guidance so you are never starting from scratch.",
        "Apply advanced persuasion techniques directly to actual buyers in real-time, gaining real confidence.",
        "Leverage the established authority and social proof of highly successful MMC products to drive effortless sales."
      ]
    },
    featuresIncluded: [
      {
        title: "Module 1: The 500k Affiliate Structure Access",
        subtitle: "Full resell rights to 10-20 top-tier digital offers.",
        bullets: [
          "Access books like Brain Seduction, Black Marketing Formula, Hack Her Soul, and Hijack His Brain.",
          "Audio programs and practical guides on conversational psychology.",
          "Legal rights to bundle, repackage, and market these products creatively."
        ]
      },
      {
        title: "Module 2: Plug-and-Play Sales Kit",
        subtitle: "Tested assets designed to convert on first contact.",
        bullets: [
          "Proven copywriting angles and sales messaging structures.",
          "High-converting broadcast templates and email swipes.",
          "Aesthetic creative assets and social proof snippets."
        ]
      },
      {
        title: "Module 3: Interactive Support Systems",
        subtitle: "Monthly direct training to keep your profits climbing.",
        bullets: [
          "Real-time reviews and live feedback on your marketing strategies.",
          "Access to ask questions and solve traffic bottlenecks in real-time.",
          "Private MMC support group chats specifically for the 500k affiliate structure."
        ]
      }
    ],
    testimonials: [
      {
        id: "aff1",
        name: "Gideon",
        role: "MMC Member",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        quote: "I bought this opportunity 8 months ago and have been using this to make some great bucks for the past 6 months. I started running ads for the first time and the results are amazing since practicing extreme specificity!",
        resultMetric: "₦200k - ₦500k / mo"
      }
    ],
    faqs: [
      {
        question: "1. How Exactly Do I Make The Claimed ₦200k - ₦500k Per Month?",
        answer: "Good question. The income potential doesn't come from simply getting access to the products. It comes from the support structure behind it. As an MMC member, you are not left to figure things out on your own. You get access to monthly support sessions designed to help you make more sales, improve your marketing skills, and become better at attracting customers. You also receive: Real-time reviews and feedback, Marketing scripts, Broadcast templates, Sales materials, Creative assets, Proven marketing angles, and access to ask questions and get guidance. In other words, you are not marketing these products from scratch. You are leveraging products that are already selling, using marketing materials that have already been tested. That is why many members find it easier to get results compared to creating and promoting a product from scratch."
      },
      {
        question: "2. If I Keep 100% Of The Profit, Why Do I Still Give MMC 30%?",
        answer: "Let me clarify this. You have the freedom to sell these products at any price you choose. You can sell them at the recommended price, above the recommended price, or even bundle them with your own offers. Any additional amount you make above the initial price belongs completely to you. The small percentage paid to MMC is attached only to the original product price. Why? Because we want to maintain the value of the products and ensure that members treat the opportunity seriously. Without a structure in place, people may begin giving products away recklessly or creating unhealthy competition that destroys the value for everyone. This system protects the ecosystem while still allowing MMC members to earn from their efforts."
      },
      {
        question: "3. What Proof Is There That This Works Consistently?",
        answer: "The truth is that MMC members are already part of our ecosystem. They have seen the quality of the products, the support structure, and the value we provide. However, beyond that, over 10 MMC members have already used this opportunity to generate income for themselves. Interestingly, many of them did not stop at reselling MMC products. They took the same marketing principles, strategies, and systems they learned and applied them to selling their own products and services. The goal is not just to help you make money today. The goal is to help you develop skills that can continue paying you long after."
      },
      {
        question: "4. What Marketing Support Will I Receive?",
        answer: "A lot. A whole lot. You will receive ongoing monthly support inside MMC. This includes: Monthly marketing sessions, Direct access to ask questions, Marketing reviews and guidance, Sales scripts, Broadcast templates, Email structures, Marketing frameworks, Creative materials, and Promotional assets. Everything needed to start marketing is provided. The goal is simple: Reduce the amount of guesswork and increase your chances of making sales."
      },
      {
        question: "5. What Exactly Am I Paying For?",
        answer: "The investment to join the 500k Affiliate Structure is currently only ₦3,700. Yes, Three thousand seven hundred Naira. Let's put that into perspective. For less than the cost of many online courses, you get: Access to multiple proven products, The legal right to resell them, Marketing support, Sales materials, Monthly training, Access to the MMC ecosystem, and a practical opportunity to learn marketing while earning. Many people spend far more than this trying to create products, run ads, or learn marketing through trial and error. This gives you an opportunity to start with assets that already exist."
      },
      {
        question: "6. If These Products Are Already Selling, Why Let Other People Resell Them?",
        answer: "Because the goal is bigger than selling products. The purpose of this structure is to help MMC members master marketing, psychology, customer acquisition, and sales while making money in the process. Most people learn. Very few people earn while learning. We want MMC members to do both. That is why we call it the Learning-Earning Method. Instead of waiting months before applying what you learn, you can begin practicing immediately using products that already exist. You gain experience, you gain confidence, and you improve your marketing ability. This is about helping MMC members grow."
      }
    ],
    ctaButtonText: "Tap Here to Join the 500k Structure Now - ₦3,700"
  }
};

export const GLOBAL_FAQS = [
  {
    question: "What exactly is Mystery Mastery Community (MMC)?",
    answer: "Mystery Mastery Community (MMC) is Africa's premier learning and earning ecosystem for copywriting, marketing psychology, and behavioral mastery. Founded and led by expert copywriter Sagacious Tehilla, we combine in-depth training (including the foundational 'Hack Her Soul, Hijack His Brain' book and 7 unpublished psychology books) with daily personal mentorship, tested marketing assets, and a high-yield affiliate reselling structure to help members master client acquisition, read human behavior, and build sustainable independent income."
  },
  {
    question: "How does the SPA view switching work?",
    answer: "Our platform operates as a seamless single-page application (SPA). When you click between Home and dedicated product views, the application dynamically swaps high-converting sales environments instantly with smooth fade transitions."
  },
  {
    question: "Can I upgrade to the All-Access MMC Bundle later?",
    answer: "Yes! If you purchase an individual system today (like the 500k Affiliate Structure), you can easily upgrade to unlock all 4 flagship systems plus private MMC mastermind access at a pro-rated discount."
  },
  {
    question: "What if I have questions or get stuck implementing?",
    answer: "Every purchase includes direct access to our private community and Telegram mentorship hub. Plus, Sagacious Tehilla provides direct daily feedback on copy drafts, active client projects, and traffic strategies so you are never left to figure things out alone."
  }
];
