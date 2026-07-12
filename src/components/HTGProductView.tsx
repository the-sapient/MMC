import React, { useState } from 'react';
import { 
  ArrowLeft, Check, Star, Sparkles, Brain, Award, Users, Target, ShieldCheck, Cpu, 
  BookOpen, AlertCircle, XCircle, ChevronDown, MessageSquare, DollarSign, 
  TrendingUp, Zap, Briefcase, Crown, Mail, ArrowRight, ShieldAlert, Heart, Calendar, Play
} from 'lucide-react';
import { Product, ViewId } from '../types';
import { motion } from 'motion/react';

interface HTGProductViewProps {
  product: Product;
  onSwitchView: (view: ViewId) => void;
  onOpenCheckout: (product: Product) => void;
}

export const HTGProductView: React.FC<HTGProductViewProps> = ({ product, onSwitchView, onOpenCheckout }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [activeBonusTab, setActiveBonusTab] = useState<number>(0);

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
              Get Instant Access Now
            </button>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION - High Impact Copywriting Header */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-embergold/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[200px] bg-amber-500/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
            <span className="px-3.5 py-1 text-xs font-black uppercase tracking-widest bg-embergold/10 text-embergold border border-embergold/20 rounded-full inline-block">
              {product.badge}
            </span>

            <h1 className="text-sm font-mono tracking-widest uppercase text-embergold font-bold block">
              {product.name}
            </h1>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] font-sans">
              Would You Like To Know Why You Still <span className="text-red-500 underline decoration-wavy">Struggle To Get Clients</span> Even After Trying Different Strategies?
            </h2>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Stop buying client acquisition courses from gurus that promised you $1,000 every month. Discover the guided, simple, honest, and powerful <strong className="text-embergold font-bold">HTG Approach</strong> that turns cold pitching inside out.
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
                <span className="text-slate-400">({product.reviewCount}+ Confirmed Successes)</span>
              </div>
              <span className="text-slate-400">⚡ Under the direct guidance of <strong className="text-white font-semibold">Sagacious Tehilla</strong></span>
            </div>
          </div>

          {/* Core Flyer Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto pt-4">
            
            {/* The Physical-Style Flyer Display (Left/Center) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-embergold/30 shadow-2xl bg-slate-900 p-2.5 max-w-sm sm:max-w-md w-full group hover:border-embergold/50 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-embergold text-obsidian text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-md">
                  Official Flyer
                </div>
                <img 
                  src={product.heroImage} 
                  alt="Honest to God Client Acquisition Flyer" 
                  className="w-full h-auto aspect-[3/4] object-cover rounded-2xl grayscale-10 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none opacity-40" />
              </div>
            </div>

            {/* Explanatory Bullet Points & Premium Call-To-Action (Right) */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                Learn How to Consistently Attract and Close Clients without Begging
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Lead Generation Mastery</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Build an unstoppable, daily flow of warm, high-intent prospects straight to your inbox.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Predictable Prospecting Strategies</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Position yourself as the go-to authority so clients actively seek you, ending desperate cold pitch fatigue.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">High-Converting Client Conversion</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Master conversational closing patterns that convert inquiries into high-ticket retainer clients seamlessly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Irresistible Offer Creation</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Structure value-based packages and custom guarantees that make saying no completely irrational.</p>
                  </div>
                </div>
              </div>

              {/* Instant CTA Button */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => onOpenCheckout(product)}
                  className="w-full py-4 px-8 rounded-2xl font-black text-base sm:text-lg bg-embergold hover:bg-embergold/90 text-obsidian shadow-xl shadow-embergold/20 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-5 h-5 fill-obsidian" />
                  Get HTG Acquisition • {product.currencySymbol || '₦'}{product.price.toLocaleString()} {product.currencySuffix}
                </button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
                  <span>🔒 Secure Moniepoint Checkout</span>
                  <span>•</span>
                  <span>🤝 Payback Guarantee Backed</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM - AGITATING COLD PITCHING fatigue */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ⚠️ THE GURU COLD DM SCAM
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Outdated Guesswork and Fake Promises are Keeping You Broke
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
              Well, that's because you've been fed with <span className="text-red-500 font-bold">fake promises, outdated strategies, and guesswork formulas</span> that only leave you more confused and frustrated... with no personal mentorship or roadmap.
            </p>
          </div>

          {/* Pain Points List */}
          <div className="space-y-4 mb-10">
            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">Cold DM Fatigue &amp; Self-Confidence Killers</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sending 100 cold DMs every day to total strangers is one of the fastest ways to <span className="text-red-400 font-semibold">KILL your self-confidence</span>. You deserve an approach that does the exact opposite.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">The Painful 3-Step Beginner Cycle</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Most beginners enter an exhausting loop: learn a skill for 3–6 months, watch courses at midnight, and desperately cold pitch random strangers in their inboxes, only to be constantly ghosted and ignored.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">The "Show Me Real Results" Catch-22</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  When you cold-pitch clients randomly, they ask you for <span className="text-red-400 font-semibold">REAL results</span> you don't have yet. This is why most skilled but broke professionals remain stuck financially.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INVOLVE ME - THE SHIFT (Folded Hands Representation) */}
      <section className="py-20 relative overflow-hidden bg-obsidian">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left: Folded Hands Dark Reflection */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 p-3">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 to-black flex items-center justify-center relative">
                  {/* Real hand-drawn effect overlay representing reflection */}
                  <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800')" }} />
                  <div className="text-center p-6 space-y-4 relative z-10">
                    <Heart className="w-12 h-12 text-embergold mx-auto animate-pulse" />
                    <h4 className="text-xl font-display font-black text-white tracking-tight">QUIET REFLECTION</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono">
                      Stop running the endless digital mouse race. Dedicate yourself to a 3-month focused mastery and let customers chase you.
                    </p>
                    <span className="inline-block text-[10px] font-black uppercase bg-embergold/15 text-embergold px-3 py-1 rounded-full border border-embergold/20 font-mono">
                      "Involve Me!"
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: HTG vs Guru Comparison */}
            <div className="md:col-span-7 space-y-6 text-left">
              <span className="text-xs font-mono font-bold text-embergold tracking-widest block uppercase">
                ⚙️ THE ULTIMATE SHIFT
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                "They Intentionally Keep Leaving Out This HTG Approach"
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                It's a guided, simple, honest, personalized, and powerful strategy that made Sagacious Tehilla his first <strong>₦150k online—4 years ago</strong>. Not some hyped $1000 promise, but real, sustainable money.
              </p>
              
              <div className="border-l-2 border-embergold pl-6 py-1 bg-slate-900/40 rounded-r-xl">
                <p className="text-embergold font-bold text-lg sm:text-xl italic">
                  "And currently? I earn about 2-3 million naira+ from it, monthly. In fact, currently, I work with 3-5 referred clients every month."
                </p>
              </div>

              <p className="text-slate-400 text-xs font-mono">
                Financial freedom comes from building a brand that attracts clients, <span className="text-white font-bold">NOT attracting clients to build a brand.</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PETER ACHUSIM TESTIMONIAL EMAIL CARD */}
      <section className="py-16 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Look At What He Confessed After Getting Exposed to This Strategy
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Proof of the 50 Days Client Attraction Challenge
            </p>
          </div>

          {/* Email Client UI Replica (Exactly matching PDF screenshot layout on page 6) */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-500">Inbox • App Mail Client</span>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-900 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                    PA
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                      Peter Achusim <span className="text-xs text-slate-500 font-mono font-normal">2 days ago</span>
                    </h4>
                    <p className="text-xs text-slate-400">to me</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-mono">Important</span>
                </div>
              </div>

              {/* Email Content Body */}
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
                <p className="font-semibold text-white">Thank you Sagacious for this opportunity</p>
                <p>Actually, I didn't even pay to access this webinar.</p>
                
                <div className="border border-red-500/30 bg-red-500/5 px-4 py-3 rounded-xl">
                  <p className="text-red-400 font-bold">
                    "In total, I closed 3 new clients. Though that was not the highlight for me."
                  </p>
                  <p className="mt-1 text-slate-300 text-xs">
                    "What this 50 days challenge taught me was consistency and the power of not giving up."
                  </p>
                </div>

                <p>Consistently reaching out to new clients for 50 days helped me develop that habit which I didn't have before</p>
                <p>And I also formed new relationships along the line ....</p>
                <p className="text-slate-500 text-xs font-mono">Next up - 100 days of marketing challenge...</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-slate-500 italic">
              — Peter Achusim, Ads Expert.
            </p>
          </div>
        </div>
      </section>

      {/* 5. GOSSIP, BRAND-BUILDING & THE MACHALA CASE */}
      <section className="py-20 bg-slate-900/20 border-y border-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy block (Pages 12-14) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="px-3.5 py-1 text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full inline-block font-mono">
                ✨ CLIENT PULL METHOD
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Make the Clients Pitch You Instead
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If you ask a graphics designer "right now" who you want to hire, you probably ask your friends for recommendations first before checking random cold pitches.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Getting hired these days is completely based on chances. But that is the new approach many top coaches, skilled professionals, and physical sellers are currently using to elevate their earning ability without visiting anyone's inbox.
              </p>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-embergold uppercase font-bold">✨ THE REVELATION:</span>
                <p className="text-sm text-slate-300">
                  "This strategy doesn't demand you pitch clients randomly, however it turns the table — and creates a line up of customers/clients in your inbox... <strong className="text-white">after 3 months</strong>."
                </p>
              </div>
            </div>

            {/* Right: Machala Email Testimony Box (Page 15) */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-slate-900/80 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-embergold" /> 
                    Appreciation for Your Impact &amp; Mentorship
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Machala</span>
                </div>
                
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-900">
                    <div className="w-8 h-8 rounded-full bg-yellow-600 text-white font-bold text-xs flex items-center justify-center">
                      CM
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white">Craft by Machala</h4>
                      <p className="text-[10px] text-slate-400">to me • 07:34 AM</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 italic">"Good morning Boss Sagashius..."</p>
                  
                  <div className="border-l-2 border-emerald-500 bg-emerald-500/5 px-4 py-3 rounded-r-xl">
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">
                      "Through your teachings and the principles you consistently emphasized, I was able to apply them practically, and as a result, <strong className="text-emerald-400 font-bold">I have successfully landed about 15 clients.</strong> This achievement is a direct reflection of the value and clarity you poured into us during your training."
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-500 font-mono text-right">— Machala, Creative Designer</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL GRID (TGM, BABAJIDE, BRIGHT IBE) */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-embergold tracking-widest block uppercase mb-2">
              📊 REAL FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Backed by Real Results of Real Professionals
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              No guesswork. See what other designers, developers, and writers are achieving within 3 months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* TGM Testimonial */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400" />)}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  "I got <strong className="text-white">more than 5 clients</strong> all thanks to God and You and I built a strategy of getting clients from the lessons and ideas I got from the class and community in general. I really valued all you shared."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                  TGM
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">TGM</h4>
                  <p className="text-[10px] text-slate-500">WhatsApp Bot Engineer</p>
                </div>
              </div>
            </div>

            {/* Babajide Testimonial */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400" />)}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  "The honest to God client acquisition program <strong className="text-white">got me 2 clients I signed up</strong> into low ticket class, while I got one client (a perfume brand I met in an offline event). I created a cold pitch prompt framework I called the I-3C."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                  BI
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Babajide Idris</h4>
                  <p className="text-[10px] text-slate-500">Psychologist Copywriter</p>
                </div>
              </div>
            </div>

            {/* Bright Ibe Testimonial */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400" />)}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  "Through this challenge, <strong className="text-white">I was able to secure about 6 clients</strong>, with 2 already paying. But beyond the numbers, the real win is the mindset shift and the client acquisition skill I've built."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                  BI
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Bright Ibe</h4>
                  <p className="text-[10px] text-slate-500">Graphics Designer</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. THE CURRICULUM - WEEKLY CLASSES (Page 25-27) */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="px-3.5 py-1 text-[10px] font-black uppercase tracking-widest bg-embergold/10 text-embergold border border-embergold/20 rounded-full inline-block font-mono mb-3">
              📅 THE ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              One Class Per Week, For 3 Months.
            </h2>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              We practice, we correct, we strategize. Class will always happen on <strong className="text-white">Fridays</strong>, followed by action points and accountability. If you won't practice, do not join us.
            </p>
          </div>

          {/* Curriculum Bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">✕</div>
              <p className="text-slate-300 text-xs sm:text-sm">
                <strong>Why 100 Cold DMs Kill Confidence:</strong> Learn the exact biological response of inbox exhaustion and why the "HTG" strategy does the opposite.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
              <p className="text-slate-300 text-xs sm:text-sm">
                <strong>The Uncomfortable Truth:</strong> Why skilled people remain broke online, and how to finally break free of the talented-but-broke syndrome.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
              <p className="text-slate-300 text-xs sm:text-sm">
                <strong>What Gurus are Hiding:</strong> Discover how their obsession with pitching is setting you up to fail right out of the gate.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
              <p className="text-slate-300 text-xs sm:text-sm">
                <strong>The Silent 2026 Shift:</strong> The profound market changes making public pitch methods completely obsolete right now.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
              <p className="text-slate-300 text-xs sm:text-sm">
                <strong>The Anti-Hustle Blueprint:</strong> Flip the script to choose your own clients, rates, and timelines, even as a beginner.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">✓</div>
              <p className="text-slate-300 text-xs sm:text-sm">
                <strong>Working vs. Attracting:</strong> The shocking mental difference between slave-working for clients and making them work to hire you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GOLDEN BONUSES VAULT - INTERACTIVE PREVIEWS */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-embergold tracking-widest block uppercase mb-2">
              🎁 EXCLUSIVE BONUSES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Five High-Value Bonuses Worth Over ₦170,000 for Free
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Click on each bonus below to reveal the exclusive, highly unrevealed strategies waiting inside.
            </p>
          </div>

          {/* Interactive Tab List */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
            {[
              { title: "Expert Visibility", subtitle: "Worth ₦35k" },
              { title: "Black American Blueprint", subtitle: "Worth ₦10k" },
              { title: "30 Seconds Dating", subtitle: "Worth ₦15k" },
              { title: "Gossip Marketing", subtitle: "Worth ₦35k" },
              { title: "50 Days Challenge", subtitle: "Worth ₦75k" }
            ].map((bonus, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBonusTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  activeBonusTab === idx 
                    ? 'bg-embergold border-embergold text-obsidian shadow-lg shadow-embergold/15' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div>{bonus.title}</div>
                <div className="text-[10px] font-mono opacity-80 mt-0.5">{bonus.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="max-w-4xl mx-auto bg-slate-900/50 rounded-3xl border border-slate-850 p-6 md:p-10">
            {activeBonusTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  {/* Book Mockup representation */}
                  <div className="aspect-[3/4] w-48 rounded-xl bg-gradient-to-br from-indigo-950 via-slate-900 to-black border border-indigo-500/30 p-4 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden group">
                    <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent pointer-events-none" />
                    <span className="text-[9px] font-mono font-bold text-indigo-400 tracking-widest uppercase">OFFICIAL GUIDE</span>
                    <div className="space-y-1.5 z-10">
                      <h4 className="text-lg font-display font-black tracking-tight text-white leading-tight">EXPERT VISIBILITY</h4>
                      <p className="text-[8px] text-slate-400 leading-relaxed">How to get seen, heard &amp; hired over popular gurus in 179 days.</p>
                    </div>
                    <span className="text-[8px] font-mono font-semibold text-indigo-400 border-t border-slate-800 pt-1.5 block">SAGACIOUS TEHILLA</span>
                  </div>
                </div>
                <div className="md:col-span-8 space-y-4 text-left">
                  <span className="text-xs font-mono font-semibold text-embergold uppercase tracking-wider block">BONUS #1 • EXPERT VISIBILITY BLUEPRINT</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">How to Get Seen, Heard &amp; Hired Even If Unknown</h3>
                  <p className="text-slate-300 text-sm">
                    Discover why "competence" is a total scam in the online space, and the real reason broke beginners get ignored while clueless coaches get paid.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-400 pt-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>The Name Game Hack:</strong> Give yourself a magnetic title that instantly crushes your competition.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>The 7-Post Formula:</strong> Attract serious prospective buyers even if nobody knows you exist.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>Ethical Attention Manipulation:</strong> How to become the go-to voice without "notice-me" desperation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeBonusTab === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  <div className="aspect-[3/4] w-48 rounded-xl bg-gradient-to-br from-red-950 via-slate-900 to-black border border-red-500/30 p-4 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
                    <span className="text-[9px] font-mono font-bold text-red-400 tracking-widest uppercase">U.S. OUTREACH</span>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-display font-black tracking-tight text-white leading-tight">BLACK AMERICAN BLUEPRINT</h4>
                      <p className="text-[8px] text-slate-400 leading-relaxed">Insider secrets from a U.S. agency boss on landing foreign clients.</p>
                    </div>
                    <span className="text-[8px] font-mono font-semibold text-red-400 border-t border-slate-800 pt-1.5 block">MARCO x SAGACIOUS</span>
                  </div>
                </div>
                <div className="md:col-span-8 space-y-4 text-left">
                  <span className="text-xs font-mono font-semibold text-embergold uppercase tracking-wider block">BONUS #2 • THE BLACK AMERICAN BLUEPRINT</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Land High-Paying Foreign Clients from scratch</h3>
                  <p className="text-slate-300 text-sm">
                    A no-filter, private conversation with Marco, a U.S. marketing veteran who has hired Africans, worked with global brands, and exposed the real path to landing foreign clients.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-400 pt-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>Accent &amp; Origin:</strong> Why your country of origin isn't your real problem, and how to position yourself.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>The #1 Mistake:</strong> The massive mistake 95% of African freelancers make when trying to attract foreign clients.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>Killer Email Sequence:</strong> Build deep trust, tell short stories, and close up to 18% of cold leads.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeBonusTab === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  <div className="aspect-[3/4] w-48 rounded-xl bg-gradient-to-br from-emerald-950 via-slate-900 to-black border border-emerald-500/30 p-4 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
                    <span className="text-[9px] font-mono font-bold text-emerald-400 tracking-widest uppercase">PSYCHOLOGY</span>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-display font-black tracking-tight text-white leading-tight">30 SECONDS DATING</h4>
                      <p className="text-[8px] text-slate-400 leading-relaxed">Turn customers into family in less than 7 days without lead magnets.</p>
                    </div>
                    <span className="text-[8px] font-mono font-semibold text-emerald-400 border-t border-slate-800 pt-1.5 block">SAGACIOUS TEHILLA</span>
                  </div>
                </div>
                <div className="md:col-span-8 space-y-4 text-left">
                  <span className="text-xs font-mono font-semibold text-embergold uppercase tracking-wider block">BONUS #3 • 30 SECONDS DATING STRATEGY</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Using Relationship Psychology to Define Marketing</h3>
                  <p className="text-slate-300 text-sm">
                    How to turn total strangers into loyal customers (even family) without utilizing any lead magnet whatsoever.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-400 pt-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>The "Dark Attraction" Trigger:</strong> Day One secret to silencing distractions so people listen ONLY to you.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>Instant Credibility:</strong> Day Two blueprint to build authority even as a complete newbie.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>The Hook-Up Method:</strong> Day Three structure to make your target audience chase you.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeBonusTab === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  <div className="aspect-[3/4] w-48 rounded-xl bg-gradient-to-br from-amber-950 via-slate-900 to-black border border-amber-500/30 p-4 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
                    <span className="text-[9px] font-mono font-bold text-amber-400 tracking-widest uppercase">DARK INFLUENCE</span>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-display font-black tracking-tight text-white leading-tight">GOSSIP MARKETING</h4>
                      <p className="text-[8px] text-slate-400 leading-relaxed">7 Dark Tricks to make people sell your offer without commissions.</p>
                    </div>
                    <span className="text-[8px] font-mono font-semibold text-amber-400 border-t border-slate-800 pt-1.5 block">SAGACIOUS TEHILLA</span>
                  </div>
                </div>
                <div className="md:col-span-8 space-y-4 text-left">
                  <span className="text-xs font-mono font-semibold text-embergold uppercase tracking-wider block">BONUS #4 • GOSSIP MARKETING PLAYBOOK</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">7 Dark Tricks to Make Others Sell Your Offers</h3>
                  <p className="text-slate-300 text-sm">
                    Unseen psychological tactics that get people (including major influencers) to talk about and promote your product without you asking.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-400 pt-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>Influencer Connection Code:</strong> Connect with influencers even if broke and unknown.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>Flattering the Right Ego:</strong> Why praising selected egos is more powerful than running paid ads.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>The Ancient Selling Secret:</strong> Tapping into the storytelling pattern of Adam &amp; Eve.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeBonusTab === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  <div className="aspect-[3/4] w-48 rounded-xl bg-gradient-to-br from-violet-950 via-slate-900 to-black border border-violet-500/30 p-4 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
                    <span className="text-[9px] font-mono font-bold text-violet-400 tracking-widest uppercase">DISCIPLINE</span>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-display font-black tracking-tight text-white leading-tight">50 DAYS CHALLENGE</h4>
                      <p className="text-[8px] text-slate-400 leading-relaxed">Dedicated consistency cohort for high-converting outreach.</p>
                    </div>
                    <span className="text-[8px] font-mono font-semibold text-violet-400 border-t border-slate-800 pt-1.5 block">MMC COMMUNITY</span>
                  </div>
                </div>
                <div className="md:col-span-8 space-y-4 text-left">
                  <span className="text-xs font-mono font-semibold text-embergold uppercase tracking-wider block">BONUS #5 • 50 DAYS CLIENT ATTRACTION CHALLENGE</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Daily High-Intensity Accountability Cohort</h3>
                  <p className="text-slate-300 text-sm">
                    A highly curated private implementation group where members checking in daily execute strategies collaboratively.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-400 pt-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>Unbreakable Habits:</strong> Build the consistency and discipline that 99% of beginners fail to construct.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-embergold shrink-0 mt-0.5" />
                      <span><strong>Daily Execution Loops:</strong> Practice live client prospecting and receive quick group adjustments.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. THE OFFER STACK & INVESTMENT */}
      <section className="py-20 bg-slate-900/40 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-b from-slate-950 to-slate-900 rounded-3xl p-8 md:p-12 border border-embergold/30 shadow-2xl text-center space-y-8">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-embergold text-obsidian rounded-full inline-block font-black">
              THE ULTIMATE ACQUISITION VAULT
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Let's Put Everything on the Table
            </h2>
            
            {/* Price Stack list */}
            <div className="max-w-md mx-auto space-y-3.5 text-left border-y border-slate-800 py-6 my-6 text-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span>✅ 3-Month Weekly Fridays Class</span>
                <span className="font-mono text-slate-500">₦150,000 Value</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>🎁 Expert Visibility Blueprint</span>
                <span className="font-mono text-slate-500">₦35,000 Free</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>🎁 30 Seconds Dating Strategy</span>
                <span className="font-mono text-slate-500">₦15,000 Free</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>🎁 Gossip Marketing Playbook</span>
                <span className="font-mono text-slate-500">₦35,000 Free</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>🎁 The Black American Blueprint</span>
                <span className="font-mono text-slate-500">₦10,000 Free</span>
              </div>
              <div className="flex items-center justify-between text-slate-300 font-bold text-white">
                <span>🎁 Broke Copywriter Roadmap</span>
                <span className="font-mono text-embergold">₦25,000 Free</span>
              </div>
              <div className="flex items-center justify-between text-slate-300 font-bold text-white">
                <span>🎁 Personalized 50-Day Roadmap</span>
                <span className="font-mono text-embergold">₦75,000 Free</span>
              </div>
              <div className="border-t border-slate-800 pt-3 flex items-center justify-between font-black text-white text-base">
                <span>Total Value Stacked:</span>
                <span className="font-mono text-red-400 line-through">₦320,000+</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-slate-400 text-sm sm:text-base">
                But today, you’re not paying ₦150k. Not ₦130k. Not even ₦50k, or 35k.
              </p>
              <div className="text-4xl sm:text-6xl font-black text-white">
                ₦15,000 <span className="text-sm font-mono text-embergold font-bold">NGN ONLY</span>
              </div>
              <p className="text-xs text-slate-500 italic max-w-sm mx-auto">
                Almost less than the cost of shawarma + Coke in a mid-range restaurant.
              </p>
            </div>

            {/* Main Action Call */}
            <div className="pt-4 max-w-md mx-auto space-y-4">
              <button
                onClick={() => onOpenCheckout(product)}
                className="w-full py-4 px-8 rounded-2xl font-black text-base sm:text-lg bg-embergold hover:bg-embergold/90 text-obsidian shadow-xl shadow-embergold/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                Give Me This Strategy!
              </button>
              
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-xs text-emerald-400 leading-relaxed text-center">
                🛡️ <strong>PAYBACK GUARANTEE:</strong> If you practice this 3-month approach once-a-week and submit weekly reports but see absolutely no results, we will fully refund your ₦15,000. No mind games.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. BANK TRANSFER & MOBILE MONEY CHOICES */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-extrabold text-white">
              Alternative Payment Directions
            </h3>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Choose Direct Bank Transfer or Mobile Money below
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nigeria Transfer Card */}
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">🇳🇬 Nigeria Bank Transfer</span>
                <span className="font-mono text-xs text-embergold font-bold">₦15,000 NGN</span>
              </div>
              <p className="text-xs text-slate-400">Make a direct transfer to our verified Moniepoint collection channel:</p>
              
              <div className="bg-slate-950 p-4 rounded-xl space-y-2.5 font-mono text-xs border border-slate-850">
                <div className="flex justify-between">
                  <span className="text-slate-500">Bank:</span>
                  <span className="text-white font-bold">Moniepoint</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Account:</span>
                  <span className="text-embergold font-bold select-all">9123006608</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Account Name:</span>
                  <span className="text-white font-bold text-right">Chidiebube Nicholas Divine</span>
                </div>
              </div>
            </div>

            {/* Ghana Mobile Money Card */}
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">🇬🇭 Ghana Mobile Money</span>
                <span className="font-mono text-xs text-embergold font-bold">150 Ghana Cedis</span>
              </div>
              <p className="text-xs text-slate-400">Make a direct mobile money transfer to our verified Vodafone line:</p>
              
              <div className="bg-slate-950 p-4 rounded-xl space-y-2.5 font-mono text-xs border border-slate-850">
                <div className="flex justify-between">
                  <span className="text-slate-500">Network:</span>
                  <span className="text-white font-bold">Vodafone line</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Number:</span>
                  <span className="text-embergold font-bold select-all">0502328878</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Account Name:</span>
                  <span className="text-white font-bold text-right">Nsofor Chidinma</span>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-10 space-y-4">
            <p className="text-xs text-slate-400">
              Once transfer is done, send your evidence using the button below or our chat channel.
            </p>
            <a 
              href="https://wa.me/2348165159748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Send Evidence of Payment via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQS SECTION */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Acquisition Blueprint FAQ
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Brutally honest answers to critical questions about client systems.
            </p>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-white hover:text-embergold transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${openFaqIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIdx === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-900/50 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
