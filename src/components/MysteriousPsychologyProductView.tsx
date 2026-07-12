import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, Star, Sparkles, Brain, 
  Award, Users, Target, ShieldCheck, Cpu, BookOpen, 
  AlertCircle, XCircle, ChevronDown, Check, GraduationCap, MessageSquare,
  DollarSign, TrendingUp, Zap, Briefcase, Crown, HelpCircle
} from 'lucide-react';
import { Product, ViewId } from '../types';
import { motion } from 'motion/react';

// Import images to ensure Vite bundles them and resolves paths correctly
import mysteriousPsychologyFlyer from '../assets/images/mysterious_psychology_flyer_1782835277345.jpg';
import abiaLibraryCard from '../assets/images/abia_library_card_1782835788619.jpg';
import whatsappMmeSoma from '../assets/images/whatsapp_mme_soma_1782835802968.jpg';
import whatsappAgeRestriction from '../assets/images/whatsapp_age_restriction_1782835817049.jpg';

interface MysteriousPsychologyProductViewProps {
  product: Product;
  onSwitchView: (view: ViewId) => void;
  onOpenCheckout: (product: Product) => void;
}

export const MysteriousPsychologyProductView: React.FC<MysteriousPsychologyProductViewProps> = ({ 
  product, 
  onSwitchView, 
  onOpenCheckout 
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [hasAnsweredQuiz, setHasAnsweredQuiz] = useState<boolean | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="pt-20 bg-obsidian text-slate-100 min-h-screen selection:bg-embergold selection:text-obsidian">
      
      {/* Sticky Action Breadcrumb */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <button
            onClick={() => { onSwitchView('home'); window.scrollTo(0, 0); }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-300 hover:text-embergold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-xs font-mono text-embergold font-bold">
              Instant Access • {product.currencySymbol || '₦'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
            </span>
            <button
              onClick={() => onOpenCheckout(product)}
              className="py-2.5 px-5 rounded-xl font-black text-xs bg-embergold hover:bg-embergold/90 text-obsidian shadow-md transition-all cursor-pointer active:scale-95"
            >
              Secure My Lifetime Seat
            </button>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION - High Impact Copywriting Header */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-900">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-embergold/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[200px] bg-red-500/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
            
            {/* 18+ Warning Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-widest animate-pulse">
              <AlertCircle className="w-4 h-4" />
              warning: under 18 should NEVER be here...
            </div>

            <h1 className="text-xs font-mono tracking-widest uppercase text-embergold font-bold block pt-2">
              An Invitation to Join The Mysterious Psychology
            </h1>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] font-sans">
              A Psychology Learning Community For People Who Want to <span className="text-embergold">Understand Human Behaviour</span> at a Level Most People Will Never Reach.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
              The material inside covers real human psychology, persuasion, influence, and emotional behaviour at a depth that requires maturity to apply responsibly.
            </p>

            {/* Rating Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs pt-2">
              <div className="flex items-center gap-1 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
                <div className="flex text-embergold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-embergold" />
                  ))}
                </div>
                <span className="font-bold text-white ml-1">{product.rating}</span>
                <span className="text-slate-400">({product.reviewCount}+ Active Members)</span>
              </div>
              <span className="text-slate-400">⚡ Officially unlisted from the public — <strong className="text-white font-semibold">Under 18 strictly restricted</strong></span>
            </div>
          </div>

          {/* Core Flyer Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto pt-4">
            
            {/* Left side: Flyer display */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-embergold/30 shadow-2xl bg-slate-900 p-2.5 max-w-sm sm:max-w-md w-full group hover:border-embergold/50 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-red-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-md">
                  18+ ONLY Community
                </div>
                {/* Fallback image check */}
                <img 
                  src={mysteriousPsychologyFlyer} 
                  alt="Mysterious Psychology Flyer Layout" 
                  className="w-full h-auto aspect-[3/4] object-cover rounded-2xl group-hover:scale-[1.01] transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // fallback if path isn't loaded correctly
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=1000&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none opacity-40" />
              </div>
            </div>

            {/* Right side: Bullet copy points */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                This is not a list of simple tricks. These are capacities built through genuine understanding of human behaviour.
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Understand What Drives Behavior:</strong> Discover why they trust, why they resist, why they buy, why they lie, why they leave, and why they stay.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>The Watch-Me-Do-It Approach:</strong> Not simulation, not dry theory. Watch actual recordings, see real chat screenshots, and listen to authentic audio files.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Full Copy &amp; Psychology Bundle:</strong> Includes the foundational book <em>Hack Her Soul, Hijack His Brain</em>, 7 unpublished psychology books, and lifetime Telegram hub mentorship.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Absolute Fraud/Betrayal Protection:</strong> Learn exact pattern recognition to identify scammers, manipulative tactics, and dishonest intentions before damage is done.
                  </p>
                </div>
              </div>

              {/* Instant CTA Button */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => onOpenCheckout(product)}
                  className="w-full py-4 px-8 rounded-2xl font-black text-base sm:text-lg bg-embergold hover:bg-embergold/90 text-obsidian shadow-xl shadow-embergold/20 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-5 h-5 fill-obsidian" />
                  I am 18 and above. Join the Community - ₦27,000
                </button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
                  <span>🔞 For Adults Only (18+)</span>
                  <span>•</span>
                  <span>💼 Installment Plan Available</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. HONEST QUESTIONS / INTEGRITY QUIZ */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 text-[10px] font-mono uppercase px-3 py-1 rounded-bl-xl border-l border-b border-red-500/20">
              MANDATORY INTEGRITY CHECK
            </div>
            
            <h3 className="text-2xl font-extrabold text-white">
              Before You Go Further, Answer This Honestly.
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have you ever tried to persuade someone, and something about the conversation just felt off? You said the right things. You made logical sense. But they still walked away. 
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Or maybe you trusted someone who later showed you a completely different, manipulative version of themselves, leaving you with regrets.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setHasAnsweredQuiz(true)}
                className="px-6 py-3 rounded-xl bg-embergold text-obsidian font-black text-sm hover:bg-embergold/90 transition-all cursor-pointer"
              >
                Yes, I have experienced this
              </button>
              <button
                onClick={() => setHasAnsweredQuiz(true)}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm transition-all cursor-pointer"
              >
                No, but I want to prevent it
              </button>
            </div>

            {hasAnsweredQuiz && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-embergold/10 border border-embergold/20 rounded-2xl text-left text-sm text-slate-300 mt-4 space-y-2"
              >
                <p className="text-embergold font-bold">🎯 The Invisible Wall Is Real:</p>
                <p>
                  Looking back, the signs of hesitation, resistance, or dishonesty were always there. You just did not know what to look for. If any of that sounds familiar, the **Mysterious Psychology Community** was built precisely for you.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CORE VALUE PROP - REASON FOR STRUGGLE */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              💡 THE STRUGGLE EXPOSED
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              The Real Reason Most People Struggle With Other Humans
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto mt-2">
              Here is something most psychology teachers will not say directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most people learn **surface-level persuasion**. They memorize scripts, tactical shortcuts, and copy templates. Then, they apply those rigid tactics to human beings they do not actually understand.
              </p>
              <p className="text-red-400 font-bold text-sm sm:text-base">
                That is a VERY big problem.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The techniques are not the issue. The foundation is. Without understanding why people behave the way they do, any technique you apply will feel artificial, forced, and manipulative. And people intuitively sense that.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-4 relative">
              <h4 className="text-white font-extrabold text-lg border-b border-slate-800 pb-3">
                When you understand human behavior at the root:
              </h4>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                  <span><strong>No need to memorize scripts:</strong> You inherently understand what the person needs to hear.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                  <span><strong>No need to manipulate:</strong> You understand the genuine emotional core that actually moves people.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                  <span><strong>Never get blindsided:</strong> You read the early behavioral patterns of harmful people before they reveal themselves.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                  <span><strong>Consistent conversions:</strong> You write copy grounded in the exact psychological triggers that create decisions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ORIGIN STORY - THE ABIA STATE LIBRARY DISCOVERY */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block">
                📖 DISCOVERY STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                How I Discovered This, and What It Changed
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I want to tell you something honestly. I was not always good at reading people. I watched myself get betrayed by people I trusted. Not once. Several times. And the frustrating part was not the betrayal itself... 
              </p>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                It was that I always looked back and realized **the signals were right there**. I just did not know what to look for. In 2021, after a devastating manipulation situation affecting someone I cared about, I decided to understand human behavior properly. Not from YouTube videos or self-help blogs, but from the raw source.
              </p>

              <blockquote className="border-l-4 border-embergold pl-4 text-slate-300 italic text-sm sm:text-base my-4">
                "In 2021, I spent a significant period of my life reading close to 250 books on human psychology, behaviour, persuasion, and influence at the Abia State Library, market road Aba."
              </blockquote>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I was not doing it for business. I did it because I was exhausted from being caught off guard. What I found in those rare books was not typical persuasion theory. It was the deep structural patterns of human choice: why they trust, why they resist, why they buy, why they leave, and why they stay.
              </p>
            </div>

            {/* Real Abia State Library Registration Card Image */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-2.5 max-w-sm w-full group hover:border-blue-400/30 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-mono uppercase font-bold tracking-wider px-3 py-1 rounded-full z-10 shadow-md">
                  Original Blue Card
                </div>
                <img 
                  src={abiaLibraryCard} 
                  alt="Original Abia State Library Card" 
                  className="w-full h-auto aspect-[4/3] object-cover rounded-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent pointer-events-none opacity-45" />
              </div>

              <div className="w-full max-w-sm bg-blue-950/20 border border-blue-500/10 p-4 rounded-2xl text-xs space-y-1.5 text-slate-400 font-mono">
                <p className="text-blue-400 font-bold uppercase tracking-wider text-[10px] mb-1">✦ Document Transcription:</p>
                <p>• <strong>Board:</strong> Abia State Library Board</p>
                <p>• <strong>Form Type:</strong> Adult Registration Form • No. 06748</p>
                <p>• <strong>Name:</strong> Chidiebere Nre***</p>
                <p>• <strong>Address:</strong> 83 Etche Road, ABA</p>
                <p>• <strong>Date Issued:</strong> 8-6-21 (₦500.00 fee)</p>
              </div>
            </div>

          </div>

          {/* Marketing Achievement Snippet */}
          <div className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-4xl mx-auto text-center space-y-4">
            <h4 className="text-xl font-bold text-white">
              From Personal Protection to over 6,000 Sales in Copywriting
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
              By 2023, I had applied these same deep psychological principles to sales and copywriting. The results were immediate and difficult to ignore, helping me and my active clients sell **over 6,000 copies of digital products** across various niches. Not because the products were flawless, but because the communication was grounded in how humans actually make decisions.
            </p>
          </div>

        </div>
      </section>

      {/* 5. INDEPENDENT DEMO - WHAT THE LAPSE IS */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ❌ WHY THEORY FAILS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Most Psychology Content Fails Students
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              You read a book about persuasion, watch a video on body language, or study influence principles...
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              And when you try to apply it in a real conversation, it feels incredibly awkward and unnatural. Why? Because knowing a textbook principle is completely different from seeing it work on a real, unpredictable person.
            </p>

            <p className="text-embergold font-extrabold text-base leading-relaxed">
              That gap between theory and real-life application is exactly what Mysterious Psychology closes. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 pt-4">
              <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <Check className="w-5 h-5 text-embergold shrink-0" />
                <span>You watch **real video recordings** of psychology in action.</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <Check className="w-5 h-5 text-embergold shrink-0" />
                <span>You see **real screenshots** of actual techniques converting.</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <Check className="w-5 h-5 text-embergold shrink-0" />
                <span>You listen to **real audio files** identifying text scammers.</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <Check className="w-5 h-5 text-embergold shrink-0" />
                <span>You watch **unscripted demonstrations** showing raw intent.</span>
              </div>
            </div>

            <p className="text-center font-bold text-white pt-2">
              "You don't just learn. You watch me do it!"
            </p>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER SECTION - WHO IS SAGACIOUS TEHILLA */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            
            {/* Founder Credentials */}
            <div className="space-y-6 w-full text-center sm:text-left">
              <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block text-center">
                👤 THE INSTRUCTOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center">
                Who Is Behind The Mysterious Psychology Community?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
                My name is **Sagacious Tehilla**. I am a psychology-oriented marketing copywriter, the first of that positioning in Africa. 
              </p>

              <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p>Worked directly with companies including **Brandevo, Maarketplaace Technologies, KMU, Zing Luxury, Newton Academy, and Baggyt**.</p>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p>Trained over **50 active coaches and marketers** directly on advanced psychology, conversion copywriting, and influence principles.</p>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p>Applied these exact principles in high-stake personal and business situations, meticulously documenting every result.</p>
                </div>
              </div>

              {/* Endorsement Quote */}
              <div className="bg-slate-900 border border-slate-800 p-4.5 rounded-2xl text-xs text-slate-400 italic text-center max-w-2xl mx-auto">
                "This guy just exposed some crazy psyche secrets you won't find in most books."
                <span className="text-white block font-sans font-bold not-italic mt-1 text-[11px]">— Michael Damilola, Respected Nigerian Copywriter</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PACKAGE BREAKDOWN - EVERYTHING INCLUDED */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              📦 COMPLETE COMMUNITY SYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Everything Inside Mysterious Psychology
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              The total value of everything inside is over <strong className="text-white font-semibold">₦107,700 NGN</strong>. Here is the full breakdown of what you get:
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Core Item */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center relative overflow-hidden">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded bg-embergold/10 border border-embergold/20 text-embergold text-[10px] font-mono uppercase font-black">
                  FOUNDATIONAL PILLAR
                </span>
                <h3 className="text-xl font-bold text-white">The Core Book: Hack Her Soul, Hijack His Brain</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The foundational, watch-me-do-it book teaching core psychological frameworks for reading people, writing persuasive copy, and understanding buying decisions in relationships and business.
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  Value: ₦50,000 NGN • Included in your membership
                </p>
              </div>
              <div className="shrink-0 bg-embergold/10 border border-embergold/20 px-4 py-2 rounded-xl text-embergold text-xs font-black font-mono">
                INCLUDED FREE
              </div>
            </div>

            {/* Bonus 1 */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded bg-embergold/10 border border-embergold/20 text-embergold text-[10px] font-mono uppercase font-black">
                  BONUS 1
                </span>
                <h3 className="text-xl font-bold text-white">DISCOUNT: The Relationship-to-Financial Reward Guide</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A practical guide on building genuine relationships that lead to discounts, referrals, event invites, and monetary value without awkward pitching.
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  Value: ₦17,100 NGN • Yours free
                </p>
              </div>
              <div className="shrink-0 bg-embergold/10 border border-embergold/20 px-4 py-2 rounded-xl text-embergold text-xs font-black font-mono">
                FREE BONUS
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded bg-embergold/10 border border-embergold/20 text-embergold text-[10px] font-mono uppercase font-black">
                  BONUS 2
                </span>
                <h3 className="text-xl font-bold text-white">30 SECONDS DATING: Strangers into Advocates</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  How to turn complete strangers into loyal community members within days using the psychology of first impressions and deep emotional connection.
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  Value: Included free
                </p>
              </div>
              <div className="shrink-0 bg-embergold/10 border border-embergold/20 px-4 py-2 rounded-xl text-embergold text-xs font-black font-mono">
                FREE BONUS
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded bg-embergold/10 border border-embergold/20 text-embergold text-[10px] font-mono uppercase font-black">
                  BONUS 3
                </span>
                <h3 className="text-xl font-bold text-white">Seven Unpublished Psychology Books Library</h3>
                <div className="text-slate-400 text-xs sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono">
                  <span>• Play With Emotions</span>
                  <span>• Big Idea Extension</span>
                  <span>• 48 Laws of Verbal War</span>
                  <span>• Nonsense Can Sell</span>
                  <span>• A So, So Stupid Strategy</span>
                  <span>• How to Know Who Is Fake</span>
                  <span>• Judas Psychology &amp; Male Ego</span>
                </div>
              </div>
              <div className="shrink-0 bg-embergold/10 border border-embergold/20 px-4 py-2 rounded-xl text-embergold text-xs font-black font-mono">
                UNPUBLISHED EXCLUSIVE
              </div>
            </div>

            {/* Bonus 4 & 5 */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="space-y-3 max-w-2xl">
                <span className="px-3 py-1 rounded bg-embergold/10 border border-embergold/20 text-embergold text-[10px] font-mono uppercase font-black">
                  BONUS 4 &amp; 5
                </span>
                <h3 className="text-xl font-bold text-white">Telegram Hub &amp; Practical Audio/Video Demos</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Lifetime mentorship, over 30 unpublished letters, direct Q&amp;A on human behavior, and the raw video recordings breaking down real-life cases.
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  Value: ₦17,300 NGN • Included free
                </p>
              </div>
              <div className="shrink-0 bg-embergold/10 border border-embergold/20 px-4 py-2 rounded-xl text-embergold text-xs font-black font-mono">
                LIFETIME HUB
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. REVERSED WHATSAPP CHAT WITH MMESOMA */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              💬 MMESOMA'S CHAT PROOF
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Real WhatsApp Feedback on "Hack Her Soul Hijack His Brain"
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              The exact screenshot sent to Sagacious Tehilla from MmeSoma after finishing the core book inside the community:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Real Screenshot from document */}
            <div className="lg:col-span-5 flex flex-col items-center gap-3">
              <span className="text-slate-400 font-mono text-xs font-bold uppercase tracking-widest block">
                📸 Actual Screenshot (Page 15)
              </span>
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-2.5 max-w-xs w-full group hover:border-embergold/30 transition-all duration-300">
                <img 
                  src={whatsappMmeSoma} 
                  alt="Mme Soma WhatsApp Proof Screenshot" 
                  className="w-full h-auto rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Simulated Interactive Copy for high readability */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-embergold/10 border border-embergold/20 text-embergold text-xs font-black font-mono uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Text Transcript Verification
              </div>
              
              <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic leading-relaxed border-l-4 border-embergold pl-4">
                "I have read through Hack her soul Hijack his brain and honestly am scared of the info contained there... you revealed dark secrets in there, i didn't have enough time but i forced myself to read it sooner. I also realised someone actually used the... on me to get me to fall in..."
              </blockquote>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                She realized that someone had already used these exact subconscious influence loops on her before in her personal life. The material in the community is not just high-ticket marketing theory—it details the raw mechanisms of human decision-making that can either be used to construct persuasive copy or to defend yourself from psychological manipulation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8.5 A NOTE ON AGE RESTRICTION */}
      <section className="py-20 bg-slate-950 border-b border-slate-900 relative">
        <div className="absolute inset-0 bg-red-950/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Warning Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-widest">
                <AlertCircle className="w-4 h-4" />
                A Note on Age Restriction (18+)
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                This is a mature learning space. It is a genuine requirement.
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We have had several situations where younger students attempted to access our materials. When identified, their access was immediately revoked without a refund.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The Mysterious Psychology deals with raw human choice, psychological triggers, and emotional behaviour. It is designed to empower copywriters, marketers, and business owners with deep insights into human behavior. Apply this knowledge with maturity and respect.
              </p>

              <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl text-xs text-red-300 font-mono">
                ⚡ Attempting to join under 18 will lead to immediate ban and forfeiture of registration fees.
              </div>
            </div>

            {/* Age Restriction Chat Screenshot */}
            <div className="lg:col-span-5 flex flex-col items-center gap-3">
              <span className="text-slate-400 font-mono text-xs font-bold uppercase tracking-widest block">
                📸 Actual Screenshot (Page 22)
              </span>
              <div className="relative rounded-3xl overflow-hidden border border-red-500/20 shadow-2xl bg-slate-900 p-2.5 max-w-xs w-full group hover:border-red-500/40 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-red-500 text-slate-950 text-[10px] font-mono uppercase font-black tracking-widest px-2.5 py-0.5 rounded-full z-10 shadow-md animate-pulse">
                  Restricted
                </div>
                <img 
                  src={whatsappAgeRestriction} 
                  alt="Age Restriction Chat Proof Screenshot" 
                  className="w-full h-auto rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. THE GRAND FAQS */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              🙋‍♂️ RESOLVING ALL QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Read these official details regarding access, payments, and safety guidelines.
            </p>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-slate-200 hover:text-white cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-embergold shrink-0 transition-transform duration-200 ${openFaqIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaqIdx === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-950/40">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INVESTMENT & CLOSING CALL-TO-ACTION */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-embergold/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-embergold/10 text-embergold flex items-center justify-center mx-auto border border-embergold/20">
            <Crown className="w-8 h-8 fill-embergold/10" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans">
            Ready to become a master student of human behaviour?
          </h2>
          
          <div className="max-w-2xl mx-auto bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed text-left relative">
            <span className="absolute top-3 right-4 font-mono font-bold text-[11px] text-embergold bg-embergold/10 px-2 py-0.5 rounded border border-embergold/20">PRICING CLARITY</span>
            <p className="mt-2 font-medium">
              The total value of everything inside is over **₦107,700 NGN**. The foundational book alone previously sold at **₦50,000 NGN**.
            </p>
            <div className="mt-4 space-y-1 font-mono text-xs sm:text-sm text-red-400/80">
              <p>✕ Not 70,000 NGN</p>
              <p>✕ Not 50,000 NGN</p>
              <p>✕ Not 45,000 NGN</p>
            </div>
            <p className="mt-4 font-extrabold text-white text-base sm:text-lg">
              Your investment to join the Mysterious Psychology Community today with lifetime access is just <span className="text-embergold font-black">₦27,000 NGN</span>.
            </p>
          </div>

          <div className="pt-4 max-w-md mx-auto space-y-4">
            <button
              onClick={() => onOpenCheckout(product)}
              className="w-full py-4.5 px-8 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider bg-embergold hover:bg-embergold/90 text-obsidian shadow-2xl shadow-embergold/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              TAP HERE TO JOIN MYSTERIOUS PSYCHOLOGY NOW →
            </button>
            <p className="text-xs text-slate-500 font-mono">
              ⚡ This special pricing window is for 7 days only • For 18+ adults only
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
