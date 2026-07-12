import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, Star, Sparkles, Brain, 
  Award, Users, Target, ShieldCheck, Cpu, BookOpen, 
  AlertCircle, XCircle, ChevronDown, Check, GraduationCap, MessageSquare,
  DollarSign, TrendingUp, Zap, Briefcase, Crown
} from 'lucide-react';
import { Product, ViewId } from '../types';
import { motion } from 'motion/react';

interface AffiliateStructureProductViewProps {
  product: Product;
  onSwitchView: (view: ViewId) => void;
  onOpenCheckout: (product: Product) => void;
}

export const AffiliateStructureProductView: React.FC<AffiliateStructureProductViewProps> = ({ 
  product, 
  onSwitchView, 
  onOpenCheckout 
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

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
              The <span className="text-embergold">DARK SIDE</span> of Affiliate Marketing &amp; How You Can Take Profitable Advantage of It.
            </h2>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Discover the secret Learning-Earning Method that lets you bypass 50% commissions. Sell top-converting digital offers for any price you want and keep 100% of the direct profits.
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
                <span className="text-slate-400">({product.reviewCount}+ Active Resellers)</span>
              </div>
              <span className="text-slate-400">⚡ Officially unlisted from the public — <strong className="text-white font-semibold">Exclusively for MMC Members</strong></span>
            </div>
          </div>

          {/* Core Flyer Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto pt-4">
            
            {/* The Physical-Style Flyer Display (Left/Center) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-embergold/30 shadow-2xl bg-slate-900 p-2.5 max-w-sm sm:max-w-md w-full group hover:border-embergold/50 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-embergold text-obsidian text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-md">
                  Active Blueprint Flyer
                </div>
                <img 
                  src={product.heroImage} 
                  alt="500k Monthly Affiliates Program Flyer" 
                  className="w-full h-auto aspect-[3/4] object-cover rounded-2xl transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none opacity-40" />
              </div>
            </div>

            {/* Explanatory Bullet Points & Premium Call-To-Action (Right) */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                Why start from scratch? Resell proven winning products with full marketing support.
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>100% Profits in Your Account:</strong> You have the right to resell listed products for ANY amount and pocket all the additional markup completely.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Pre-tested Converting Assets:</strong> Get instant access to promotional copy angles, email frameworks, and broadcast swipes that are actively making sales.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Zero Operational Burden:</strong> Just send us your customer's email and we will grant them access immediately. No direct product delivery friction.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-embergold/10 text-embergold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm">
                    <strong>Interactive Mentorship:</strong> Benefit from monthly support sessions where we review your traffic channels, copywriting, and sales structures.
                  </p>
                </div>
              </div>

              {/* Instant CTA Button */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => onOpenCheckout(product)}
                  className="w-full py-4 px-8 rounded-2xl font-black text-base sm:text-lg bg-embergold hover:bg-embergold/90 text-obsidian shadow-xl shadow-embergold/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-5 h-5 fill-obsidian" />
                  Tap Here to Join the 500k Structure Now • {product.currencySymbol}{product.price.toLocaleString()} NGN
                </button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
                  <span>🔒 Secure Lifetime Licensing</span>
                  <span>•</span>
                  <span>🤝 No Monthly Renewals</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM - THE TRIAL-AND-ERROR RISK */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ⚠️ THE RISK OF CREATOR SLOWDOWN
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why Creating a Product from Scratch is Extremely Dangerous
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
              Most online courses tell you to immediately build your own digital products. But here is the brutal reality: <span className="text-red-400 font-bold">creating a winning product is exceptionally hard and expensive</span>.
            </p>
          </div>

          {/* Pain Points List */}
          <div className="space-y-4 mb-10">
            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">Massive Financial Exposure on Editors &amp; Designers</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  For books like <em>Brain Seduction</em>, product creators easily spend over <strong>₦100,000+</strong> on formatting, editing, graphic flyers, cover artwork, and initial advertising campaigns just to test if the market wants it.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">Total Risk of Product Flop</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  If you build your own product and it flops on release day, you lose all the money, time, and mental energy spent. As an affiliate marketer, you have <strong>zero product creation risk</strong>.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/10 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ✕
              </div>
              <div>
                <strong className="text-white block mb-1">Desperate Pitching vs. Pre-sold Leverage</strong>
                <p className="text-slate-400 text-sm leading-relaxed">
                  When you make a new product, you have to build trust completely from scratch. With the 500k Affiliate Structure, you are promoting elite, highly-trusted brands with built-in authority and undeniable market proof.
                </p>
              </div>
            </div>
          </div>

          {/* Core Insight Quote */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 bg-embergold/10 text-embergold text-[10px] font-mono uppercase px-3 py-1 rounded-bl-xl border-l border-b border-embergold/20">
              SAGACIOUS INSIGHT
            </div>
            <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
              "Affiliate marketing is significantly less money risky than creating your own product to explore copywriting, marketing, and psychology while you even wait for clients. You select a winning product, push traffic to it, and master customer behavior on someone else's asset."
            </p>
          </div>

        </div>
      </section>

      {/* 3. THE REVELATION - THE MATHEMATICS OF THE STRUCTURE */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              📊 THE LEARNING-EARNING REVELATION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Keep 100% of the Markup Profit. How Does It Work?
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-3">
              We wanted MMC members to have the absolute freedom to market creatively, bundle offers, add value, and earn more from their hard work.
            </p>
          </div>

          {/* Three Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Step 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-embergold/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-embergold/10 border border-embergold/20 text-embergold flex items-center justify-center mb-6">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">100% Access, Zero Affiliation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                You get full, legal resell rights to top-selling MMC offers including books like <em>Brain Seduction</em>, <em>Black Marketing Formula</em>, and <em>Hack Her Soul</em>.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-embergold/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Set Your Own Price</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                You are not bound by rigid pricing rules. Sell the products for whatever price you want, keep <strong>100% of the additional markup</strong> for yourself, and give MMC only 30% of the initial product price.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-embergold/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Client Onboarding</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Once a client buys from you, just send us their Gmail. Our team takes care of full digital fulfillment, delivery, and onboarding inside the platform instantly.
              </p>
            </div>

          </div>

          {/* Mathematical Visual Box */}
          <div className="bg-slate-900 border-2 border-embergold/20 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
            <div className="absolute -top-3.5 left-8 bg-embergold text-obsidian text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              THE MATHEMATICAL BREAKDOWN EXAMPLE
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Assume the Original Product Price is ₦10,000</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  If you decide to sell the product for <strong>₦15,000</strong>:
                </p>
                <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                  <li>The extra <strong>₦5,000</strong> belongs completely to you.</li>
                  <li>MMC only receives 30% of the original price, which is <strong>₦3,000</strong>.</li>
                  <li>You pocket a grand total of <strong>₦12,000</strong> in profit from a single sale!</li>
                </ul>
              </div>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-xs text-slate-400">Total Client Payment</span>
                  <span className="font-mono text-embergold font-bold text-base">₦15,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-xs text-slate-400">MMC Original Maintenance (30%)</span>
                  <span className="font-mono text-red-400 font-bold text-sm">-₦3,000</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs text-white font-bold">Your Instant Profit Margin</span>
                  <span className="font-mono text-embergold font-black text-xl bg-embergold/10 px-3 py-1 rounded-lg border border-embergold/20">₦12,000 (80%)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CHAT PROOF SECTION - REAL WHATSAPP CHAT TESTIMONIAL FROM GIDEON */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              📱 PROOF IN THE CHAT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Gideon's Live Results inside the MMC Ecosystem
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Gideon got in 8 months ago. He applied the exact copywriting and target-oriented marketing strategies we share. See the real conversation below:
            </p>
          </div>

          {/* Simulated WhatsApp Interface */}
          <div className="max-w-md mx-auto bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* WhatsApp Header */}
            <div className="bg-[#075e54] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 text-slate-900 flex items-center justify-center font-bold text-sm overflow-hidden select-none border border-[#054d44]">
                  G
                </div>
                <div>
                  <h4 className="font-bold text-sm">Gideon MMC</h4>
                  <p className="text-[10px] text-embergold/90">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-embergold">
                <span>🟢 Active</span>
              </div>
            </div>

            {/* WhatsApp Chat Body */}
            <div className="bg-[#0b141a] p-4 space-y-4 min-h-[380px] max-h-[420px] overflow-y-auto font-sans text-xs">
              
              {/* Message 1 */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] rounded-lg p-3 max-w-[80%] shadow relative rounded-tl-none">
                  <p className="leading-relaxed">The one in my catalogue. Many of them there.</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">12:00 AM</span>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] rounded-lg p-3 max-w-[80%] shadow relative rounded-tl-none">
                  <p className="leading-relaxed">But I continued to improve. Especially since I met you.</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">12:00 AM</span>
                </div>
              </div>

              {/* Message 3 (Sender: Me) */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-[#e9edef] rounded-lg p-3 max-w-[80%] shadow relative rounded-tr-none">
                  <p className="leading-relaxed font-semibold text-embergold mb-0.5">Sagacious Tehilla</p>
                  <p className="leading-relaxed">Your result is now improving?</p>
                  <span className="text-[9px] text-[#8696a0] block text-right mt-1">12:03 AM</span>
                </div>
              </div>

              {/* Message 4 */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] rounded-lg p-3 max-w-[80%] shadow relative rounded-tl-none">
                  <p className="leading-relaxed"><strong className="text-embergold">Of course.</strong> My main concentration at that time was to ignite curiosity, and I am practicing Extreme Specificity.</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">12:05 AM</span>
                </div>
              </div>

              {/* Message 5 (Sender: Me) */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-[#e9edef] rounded-lg p-3 max-w-[80%] shadow relative rounded-tr-none">
                  <p className="leading-relaxed">Is it working?</p>
                  <span className="text-[9px] text-[#8696a0] block text-right mt-1">12:08 AM</span>
                </div>
              </div>

              {/* Message 6 */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] rounded-lg p-3 max-w-[80%] shadow relative rounded-tl-none">
                  <p className="leading-relaxed">The last time I ran ads, yes. That was my first time using it though.</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">12:08 AM</span>
                </div>
              </div>

              {/* Message 7 (Sender: Me) */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-[#e9edef] rounded-lg p-3 max-w-[80%] shadow relative rounded-tr-none">
                  <p className="leading-relaxed">That's beautiful</p>
                  <span className="text-[9px] text-[#8696a0] block text-right mt-1">12:09 AM</span>
                </div>
              </div>

            </div>

            {/* Input Bar */}
            <div className="bg-[#1f2c34] p-3 flex items-center justify-between border-t border-[#2a3942]">
              <span className="text-slate-400 text-[10px] italic">WhatsApp Chat Verified</span>
              <span className="text-[#00a884] text-xs font-bold">✓ Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDIVIDUAL PRODUCT FAQS */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-embergold font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              🙋‍♂️ CLEARING YOUR DOUBTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Everything you need to know about the 500k Affiliate Structure. Read carefully.
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

      {/* 6. BOTTOM P.S. CALL-TO-ACTION */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-embergold/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-embergold/10 text-embergold flex items-center justify-center mx-auto border border-embergold/20">
            <Crown className="w-8 h-8 fill-embergold/10" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-sans">
            Ready to Master Marketing Psychology while Pocketing 100% Profits?
          </h2>
          
          <div className="max-w-2xl mx-auto bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed text-left relative">
            <span className="absolute top-3 right-4 font-mono font-bold text-[11px] text-embergold bg-embergold/10 px-2 py-0.5 rounded border border-embergold/20">P.S. IMPORTANT NOTE</span>
            <p className="mt-2 font-medium">
              We will constantly update this investment price as more offers, templates, and training models are added inside the MMC ecosystem.
            </p>
            <p className="mt-3 font-extrabold text-white">
              Right now, your license investment is only ₦3,700 NGN. Once the price goes up, it goes up forever.
            </p>
          </div>

          <div className="pt-4 max-w-md mx-auto space-y-4">
            <button
              onClick={() => onOpenCheckout(product)}
              className="w-full py-4.5 px-8 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider bg-embergold hover:bg-embergold/90 text-obsidian shadow-2xl shadow-embergold/30 active:scale-[0.98] transition-all cursor-pointer"
            >
              TAP HERE TO JOIN THE 500K STRUCTURE NOW →
            </button>
            <p className="text-xs text-slate-500 font-mono">
              ⚡ Instant Digital Fulfillment • For MMC Members Only
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
