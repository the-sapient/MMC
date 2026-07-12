import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, Star, Sparkles, Brain, 
  Award, Users, Target, ShieldCheck, Cpu, BookOpen, 
  AlertCircle, XCircle, ChevronDown, Check, GraduationCap, MessageSquare
} from 'lucide-react';
import { Product, ViewId } from '../types';
import { motion } from 'motion/react';

interface MMCProductViewProps {
  product: Product;
  onSwitchView: (view: ViewId) => void;
  onOpenCheckout: (product: Product) => void;
}

export const MMCProductView: React.FC<MMCProductViewProps> = ({ product, onSwitchView, onOpenCheckout }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="pt-20 bg-slate-950 text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Sticky Action Breadcrumb */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <button
            onClick={() => { onSwitchView('home'); window.scrollTo(0, 0); }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-xs font-mono text-emerald-400 font-bold">
              Instant Access • {product.currencySymbol || '₦'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
            </span>
            <button
              onClick={() => onOpenCheckout(product)}
              className="py-2.5 px-5 rounded-xl font-black text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-all cursor-pointer active:scale-95"
            >
              Join MMC Now
            </button>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION - High Impact Copywriting Header */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[200px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
            <span className="px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full inline-block">
              {product.badge}
            </span>

            <h1 className="text-sm font-mono tracking-widest uppercase text-emerald-400 font-bold block">
              {product.name}
            </h1>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] font-sans">
              Africa's <span className="text-amber-400">ONLY</span> Copywriting &amp; Marketing Psychology Community with Daily, Personalised Mentorship.
            </h2>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Unlock the subconscious buying triggers, custom community tags, and direct accountability needed to command premium rates and stand completely apart from the flooded market.
            </p>

            {/* Rating Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs pt-2">
              <div className="flex items-center gap-1 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white ml-1">{product.rating}</span>
                <span className="text-slate-400">({product.reviewCount}+ Elite Operators)</span>
              </div>
              <span className="text-slate-400">⚡ Under the direct, daily, personal guidance of <strong className="text-white font-semibold">Sagacious Tehilla</strong></span>
            </div>
          </div>

          {/* Core Flyer Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto pt-4">
            
            {/* The Physical-Style Flyer Display (Left/Center) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900 p-2.5 max-w-sm sm:max-w-md w-full group hover:border-amber-400/50 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-md">
                  Official Flyer
                </div>
                <img 
                  src={product.heroImage} 
                  alt="Mysterious Marketers &amp; Copywriters Flyer" 
                  className="w-full h-auto aspect-[3/4] object-cover rounded-2xl grayscale-10 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none opacity-40" />
              </div>
            </div>

            {/* Explanatory Bullet Points & Premium Call-To-Action (Right) */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                Why wait? Secure your lifetime seat in Africa's most practical growth circle.
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Daily Direct Access:</strong> Direct feedback on copy drafts, pitches, and active client campaigns.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Subconscious Buying Triggers:</strong> Learn consumer psychology most Nigerian copywriters have never heard of.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>No Subscriptions:</strong> One-time fee, lifetime access, continuous learning &amp; resources.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Complete Asset Vault:</strong> 5 original ebooks, 10+ audiobooks, and templates worth over ₦500,000.
                  </p>
                </div>
              </div>

              {/* Instant CTA Button */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => onOpenCheckout(product)}
                  className="w-full py-4 px-8 rounded-2xl font-black text-base sm:text-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-5 h-5 fill-slate-950" />
                  Enroll Now • {product.currencySymbol || '₦'}{product.price.toLocaleString()} NGN
                </button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
                  <span>🔒 Secure Checkout</span>
                  <span>•</span>
                  <span>🤝 Lifetime Mentorship Included</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM - THE STRUCTURAL myth OF 30-DAY CERTIFICATES */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ⚠️ THE FLOODED MARKET CRISIS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              The Real Reason Most Copywriters &amp; Marketers Are Still Struggling
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
              In Nigeria alone, <span className="text-red-400 font-bold">over 700 new copywriters are trained every month</span>—that's more than 8,400 every year entering the exact same market with identical 30-day certificates.
            </p>
          </div>

          {/* Pain Points List */}
          <div className="space-y-4 mb-10">
            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">Theoretical Notes Without Living Application</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  You get theoretical formulas, but feel completely stranded when you sit down to write copy for real clients.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">Drowned in a Crowded Sea of Copycats</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  You entered a flooded market competing with thousands of certificate holders using the exact same generic pitch templates.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">The "Dead WhatsApp Group" Abandonment</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  You finish a course and are tossed into a dormant group. When you ask a pressing question, there is no mentor in sight.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">Pitching from a Position of Weakness</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  You cannot land premium clients because you sound desperate, using pushy pitches instead of authoritative marketing psychology.
                </p>
              </div>
            </div>
          </div>

          {/* Case Quote: Nabeel Isah */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 text-[10px] font-mono uppercase px-3 py-1 rounded-bl-xl border-l border-b border-red-500/20">
              MEMBER INSIGHT
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm bg-red-500/10 text-red-400 border border-red-500/25 font-mono shrink-0 select-none">
                NI
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Nabeel Isah</h4>
                <p className="text-slate-500 text-xs">MMC Member</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
              "I paid for a copywriting class with live sessions every day for one month. You cannot become a professional copywriter/marketer in just one month. Proof? The training I joined did not make me a professional copywriter/marketer even after all the hype. MMC changed everything."
            </p>
          </div>

          {/* Inner quote box (Anonymous) */}
          <div className="border-l-4 border-amber-500 bg-amber-500/5 p-6 rounded-r-2xl">
            <p className="text-slate-300 text-sm italic leading-relaxed">
              "I deeply want to grow. I know so much, but I was left behind because the coaches I bought courses from do not have time to guide. That is the weakness of most marketers."
            </p>
            <span className="text-xs text-slate-500 block mt-2">— Active Copywriter (name withheld)</span>
          </div>

        </div>
      </section>

      {/* 3. THE REVELATION - WHAT MAKES MMC DIFFERENT */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              💎 THE PARADIGM SHIFT
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              What Makes MMC Different From Everything Else
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-3">
              MMC is not a course you complete and move on from. It is a living, ongoing copy family designed for perpetual growth, feedback, and mutual success.
            </p>
          </div>

          {/* Three Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Pillar 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Daily Personal Mentorship</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Every day, you have direct access to Sagacious Tehilla. Share your copy drafts, client work, or pitches, and get expert, personalized feedback.
              </p>
              <div className="border-t border-slate-800/80 pt-4 mt-4">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">NO TICKET SYSTEMS</span>
                <span className="text-xs text-slate-500 font-semibold">Real human-to-human access.</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Prestigious "MMC" Tag</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Upon joining, your name receives the official MMC tag in the community. This indicates you are a serious practitioner, gaining you faster visibility.
              </p>
              <div className="border-t border-slate-800/80 pt-4 mt-4">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">PROUD IDENTITY</span>
                <span className="text-xs text-slate-500 font-semibold">Command instant market respect.</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lifetime Access Engine</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                One payment, infinite runway. No monthly renewals, no hidden fees. All future books, templates, and workshops are yours entirely free.
              </p>
              <div className="border-t border-slate-800/80 pt-4 mt-4">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block mb-1">ZERO RECURRING FEES</span>
                <span className="text-xs text-slate-500 font-semibold">Continuous growth, simplified.</span>
              </div>
            </div>

          </div>

          {/* Social Proof Quote: David Chibueze */}
          <div className="bg-slate-900 border-2 border-emerald-500/20 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl relative">
            <div className="absolute -top-3.5 left-8 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              ELITE MEMBER SPOTLIGHT
            </div>
            
            <p className="text-slate-200 text-base md:text-lg italic leading-relaxed mb-6 font-sans">
              "Being part of MMC was one of the best decisions I made. I have learnt a lot of marketing strategies that I have applied and seen results. The best part is that Sagacious is so supportive that if you need his attention in a specific area, he will give it to you until you are satisfied. I have also gotten mind-blowing opportunities just by being part of this community. MMC is beyond a copywriting community. It is a copy family."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-base bg-emerald-500/10 text-emerald-400 border-2 border-emerald-500/30 font-mono shrink-0 select-none">
                DC
              </div>
              <div>
                <h4 className="text-white font-extrabold text-base">David Chibueze</h4>
                <p className="text-emerald-400 text-xs font-mono">MMC Elite Member • Applied &amp; Seen Results</p>
              </div>
            </div>
          </div>

          {/* Quick Quote: Uzoma Reg */}
          <div className="text-center mt-10 max-w-2xl mx-auto">
            <p className="text-slate-400 text-sm italic">
              "Honestly, being a member of MMC is one of the best things I have ever done this year. I can proudly beat my chest and say that I have not seen a lifetime training as good as MMC."
            </p>
            <span className="text-xs text-slate-500 block mt-1.5">— Uzoma Reg, MMC Member</span>
          </div>

        </div>
      </section>

      {/* 4. THE CURRICULUM - WHAT YOU WILL ACTUALLY LEARN INSIDE MMC */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-900/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              🎓 CORE PILLARS &amp; MYSTERIES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              What You Will Actually Learn Inside MMC
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-3">
              MMC goes well beyond basic copywriting guidelines. You will master the psychological wiring that drives subconscious human actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Learn Block 1 */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🎩</span>
                <h3 className="text-xl font-bold text-white mb-2">The Psychology of Influence in Marketing</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Most copywriters write words; the best understand the mind of the buyer before picking up a pen. Learn client predictive modeling and subconscious buying triggers that produce repeatable, highly predictable conversions.
                </p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 italic">
                "I started gaining clarity after I joined MMC. The mysteries you shared in the community are what made it easy for me to understand the one thing that makes most copy fail, and now I own it." <span className="text-amber-400 block mt-1 font-semibold font-mono not-italic">— Ekundayo</span>
              </div>
            </div>

            {/* Learn Block 2 */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🎩</span>
                <h3 className="text-xl font-bold text-white mb-2">How to Position Yourself So Clients Come to You</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Discover how to become the preferred, logical choice in your niche—not by cold pitching desperately, but by architecting an authoritative personal brand that makes premium clients seek you out Compellingly.
                </p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 italic">
                "I hosted my first webinar, got a writing gig, and got certified with access to a resource library worth thousands..." <span className="text-amber-400 block mt-1 font-semibold font-mono not-italic">— Madubuike Favour</span>
              </div>
            </div>

            {/* Learn Block 3 */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🎩</span>
                <h3 className="text-xl font-bold text-white mb-2">Direct Response Marketing &amp; Client Acquisition</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pitch, close, and follow up without sounding pushy or desperate. Learn to design offers that address urgent market pain points, and master referral loops that get current clients to actively sell your services for you.
                </p>
              </div>
              <div className="mt-4 border-t border-slate-900 pt-4 text-xs font-mono text-emerald-400">
                ⚡ MASTER LEVEL SCRIPTS &amp; TEMPLATES
              </div>
            </div>

            {/* Learn Block 4 */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🎩</span>
                <h3 className="text-xl font-bold text-white mb-2">Offline Marketing &amp; Bringing it Online</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Most copywriters are completely linear, focusing only on digital acquisition. Learn to command absolute attention, build trust offline, and seamlessly transfer that offline authority to double your online scalability.
                </p>
              </div>
              <div className="mt-4 border-t border-slate-900 pt-4 text-xs font-mono text-emerald-400">
                ⚡ EXCLUSIVE OFFLINE-TO-ONLINE OS
              </div>
            </div>

            {/* Learn Block 5 */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🎩</span>
                <h3 className="text-xl font-bold text-white mb-2">Brand Clarity &amp; Positioning that Sticks</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Ensure your name occupies a highly respected, high-ticket position in your audience's mind. Generate effortless organic word-of-mouth client referrals without spending a single dollar on active promotion.
                </p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 italic">
                "Majority of what is in MMC is not your regular copywriting teaching... I put out a very low-ticket offer to just 10 slots and it was all taken... through word of mouth!" <span className="text-amber-400 block mt-1 font-semibold font-mono not-italic">— Emake Johnson</span>
              </div>
            </div>

            {/* Learn Block 6 */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-3xl p-8 relative flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🎩</span>
                <h3 className="text-xl font-bold text-white mb-2">Emotional Response &amp; Subconscious Marketing</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  People buy with raw emotion and justify with logic. Understand the chemical triggers and writing mechanics behind genuine emotional resonance, creating copy that compels immediate, enthusiastic customer action.
                </p>
              </div>
              <div className="mt-4 border-t border-slate-900 pt-4 text-xs font-mono text-emerald-400">
                ⚡ HUMAN DECISION-MAKING BLUEPRINTS
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PACKAGE DETAILS - EVERYTHING INCLUDED IN YOUR MEMBERSHIP */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              📦 COMPLETE MMC SYSTEM VAULT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Everything Included in Your MMC Membership
            </h2>
            <p className="text-slate-400 text-base mt-3">
              When you secure your lifetime membership today, you get instant, unrestricted access to the following assets worth over <strong className="text-emerald-400">₦500,000</strong>.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 space-y-6 shadow-2xl">
            <div className="grid grid-cols-1 gap-4 text-slate-200">
              <div className="flex items-start gap-3.5 border-b border-slate-800/80 pb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Daily personal mentorship from Sagacious Tehilla, for life:</strong> Ask questions, submit drafts, and get continuous, custom coaching.
                </p>
              </div>
              <div className="flex items-start gap-3.5 border-b border-slate-800/80 pb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Over 5 original copywriting and psychology ebooks:</strong> Carefully authored by Sagacious Tehilla to guide you step-by-step.
                </p>
              </div>
              <div className="flex items-start gap-3.5 border-b border-slate-800/80 pb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Over 10 marketing psychology audiobooks:</strong> Exclusive, highly focused premium audiobooks created inside MMC.
                </p>
              </div>
              <div className="flex items-start gap-3.5 border-b border-slate-800/80 pb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Over 10 practical copywriting and psychology video lessons:</strong> Screen-share walk-throughs breaking down exact writing techniques.
                </p>
              </div>
              <div className="flex items-start gap-3.5 border-b border-slate-800/80 pb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Over 150 exclusive unpublished letters:</strong> Daily lessons in marketing psychology shared directly inside the inner community.
                </p>
              </div>
              <div className="flex items-start gap-3.5 border-b border-slate-800/80 pb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>The Expert Visibility ebook (yours free):</strong> Discover how to get seen, heard, and preferred in your niche in under 179 days (over 70+ standalone copies sold).
                </p>
              </div>
              <div className="flex items-start gap-3.5 border-b border-slate-800/80 pb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Monthly Live Interactive Sessions:</strong> Ongoing workshops to update strategies, review assets, and network with members.
                </p>
              </div>
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base">
                  <strong>Client Referrals &amp; Paid Gigs:</strong> Real active copywriting jobs, referral programs, and opportunities shared directly with verified members.
                </p>
              </div>
            </div>
          </div>

          {/* Dual testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <p className="text-slate-300 text-sm italic leading-relaxed mb-4">
                "Since I joined MMC, I have gained as much value from the teachings as I have been devoted. Honestly, I have experienced real growth through MMC."
              </p>
              <span className="text-xs font-bold text-white block font-mono">— Taiwo Glory</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <p className="text-slate-300 text-sm italic leading-relaxed mb-4">
                "My journey in MMC has been nothing short of growth, wows, and knowledge, thus skyrocketing my marketing and copywriting game. I have found clarity, knowledge, and growth... MMC is the best thing."
              </p>
              <span className="text-xs font-bold text-white block font-mono">— Afolabi Emmanuel</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TARGET AUDIENCE - WHO MMC IS BUILT FOR */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Is This Community For You?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Let's be completely transparent. MMC is built for dedicated operators, not magic-bullet seekers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* MMC is for you if */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                MMC is the right fit if:
              </h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <span>You are a <strong>beginner</strong> who wants to build an bulletproof psychological foundation in copywriting from day one.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <span>You are an <strong>intermediate marketer</strong> getting some results, but seeking a deeper, professional edge.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <span>You have bought courses before but felt <strong>completely abandoned</strong> once the generic curriculum was over.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <span>You want a <strong>sustainable career</strong> with a supportive family, rather than chasing quick transactional gigs.</span>
                </li>
              </ul>
            </div>

            {/* MMC is NOT for you if */}
            <div className="bg-rose-500/5 border border-rose-500/20 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-rose-400 mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                MMC is NOT the right fit if:
              </h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <span>You are looking for a magical shortcut to money without building actual copywriting skills.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <span>You want fast, effortless results without being consistent or practicing.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <span>You are not willing to actively engage with your mentor and participate in the community.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Testimonial Quote: Florence */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 max-w-3xl mx-auto text-center relative">
            <div className="text-2xl mb-2">📜</div>
            <p className="text-slate-300 text-sm md:text-base italic leading-relaxed mb-4">
              "The MMC is the school of knowledge. I have learnt so many things and I am still learning. This school is not for the lazy, impatient, or those who want to reach their destination fast by using shortcuts. It is for those who are ready to learn, research, implement, relearn, and stay ready. Pay particular attention to the teachings. They carry deep insights."
            </p>
            <span className="text-xs font-bold text-white font-mono">— Florence, MMC Member</span>
          </div>

        </div>
      </section>

      {/* 7. TRANSITIONAL OUTCOME - WHAT CHANGES WHEN YOU JOIN */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block">
            📈 YOUR TRANSFORMATION TIMELINE
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            What Changes When You Join MMC
          </h2>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base text-left max-w-2xl mx-auto leading-relaxed">
            <p>
              Within the first few weeks, you begin learning subconscious psychology concepts that most copywriters/marketers in Nigeria have never even encountered.
            </p>
            <p>
              Your writing starts carrying more intentional psychological weight. Your client conversations improve because you understand how decisions are made, not just how to pitch.
            </p>
            <p>
              Over time, something more significant happens: <span className="text-amber-400 font-semibold">You develop a powerful professional identity.</span>
            </p>
            <p>
              The <strong>MMC tag</strong> on your name becomes a signal to the community and market that you take your craft seriously. When you're stuck, you ask; when you're implementing, you get immediate expert feedback. You are never left to figure things out alone.
            </p>
          </div>
        </div>
      </section>

      {/* 8. PRICING & CALL TO ACTION BOX */}
      <section id="pricing-section" className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
              LIFETIME MENTORSHIP RATE AVAILABLE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mt-4 mb-4">
              Your Place Is Waiting
            </h2>
            <p className="text-slate-400">
              One-time payment. Unlimited lifetime membership. Daily personal mentorship.
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-2xl shadow-emerald-950/40 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">
              BEST VALUE
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-xs text-slate-400 mb-8 max-w-md mx-auto">
              Africa's ONLY Copywriting &amp; Marketing Psychology Community with Daily, Personalised Mentorship.
            </p>

            <div className="flex flex-col items-center justify-center gap-2 mb-6">
              <span className="text-xs text-slate-500 line-through font-mono">
                Original Value: {product.currencySymbol || '₦'}{(150000).toLocaleString()} NGN
              </span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-black font-mono text-white">
                  {product.currencySymbol || '₦'}{product.price.toLocaleString()}
                </span>
                <span className="text-emerald-400 font-bold font-mono text-lg">{product.currencySuffix || 'NGN'}</span>
              </div>
            </div>

            <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8">
              ⚡ Save {product.currencySymbol || '₦'}{(150000 - product.price).toLocaleString()} • One-Time Payment • No Monthly Fees
            </p>

            <div className="space-y-3.5 text-left max-w-md mx-auto mb-10 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Unlimited Lifetime Access (No recurring subscriptions)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily Personal Mentorship from Sagacious Tehilla</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Immediate Access to Complete ₦500k System Vault</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lifetime Updates and Community Referral Jobs</span>
              </div>
            </div>

            {/* Price Comparison Callout */}
            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-850 text-xs text-slate-400 leading-relaxed mb-8 max-w-md mx-auto">
              To put that in perspective: other coaches charge between <strong className="text-white">₦15,000 NGN</strong> and <strong className="text-white">₦150,000 NGN</strong> for a basic 30-day or 60-day bootcamp with no daily access to a mentor. You are getting daily guidance, a full resource library, psychology training, and a lifetime community for a fraction of that.
            </div>

            <button
              onClick={() => onOpenCheckout(product)}
              className="w-full py-5 px-8 rounded-2xl font-black text-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/30 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 fill-slate-950" />
              YES, I WANT TO JOIN MMC NOW • {product.currencySymbol || '₦'}{product.price.toLocaleString()} NGN
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-6 font-mono">
              <span>🛡️ Secure Gateway</span>
              <span>•</span>
              <span>⚡ Lifetime Updates</span>
              <span>•</span>
              <span>👥 See you inside.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 9. FAQs SECTION */}
      <section className="py-24 bg-slate-900/40 border-t border-slate-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ❓ EXTENSIVE INQUIRIES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Clear, transparent answers regarding the Mystery Mastery Community structure and mentorship guidelines.
            </p>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left font-bold text-white hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <span className="text-sm md:text-base">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-185 text-emerald-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-400 text-xs md:text-sm leading-relaxed border-t border-slate-900/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
