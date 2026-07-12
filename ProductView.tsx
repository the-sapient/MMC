import React from 'react';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, Star, 
  Sparkles, Layers, Lock, HelpCircle, ArrowRight 
} from 'lucide-react';
import { Product, ViewId } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { FAQSection } from './FAQSection';
import { TestimonialGrid } from './TestimonialGrid';
import { MMCProductView } from './MMCProductView';
import { AffiliateStructureProductView } from './AffiliateStructureProductView';
import { MysteriousPsychologyProductView } from './MysteriousPsychologyProductView';
import { HTGProductView } from './HTGProductView';

interface ProductViewProps {
  product: Product;
  onSwitchView: (view: ViewId) => void;
  onOpenCheckout: (product: Product) => void;
}

export const ProductView: React.FC<ProductViewProps> = ({ product, onSwitchView, onOpenCheckout }) => {
  if (product.id === 'mystery-mastery') {
    return <MMCProductView product={product} onSwitchView={onSwitchView} onOpenCheckout={onOpenCheckout} />;
  }

  if (product.id === 'affiliate-structure') {
    return <AffiliateStructureProductView product={product} onSwitchView={onSwitchView} onOpenCheckout={onOpenCheckout} />;
  }

  if (product.id === 'mysterious-psychology') {
    return <MysteriousPsychologyProductView product={product} onSwitchView={onSwitchView} onOpenCheckout={onOpenCheckout} />;
  }

  if (product.id === 'profit-playbook') {
    return <HTGProductView product={product} onSwitchView={onSwitchView} onOpenCheckout={onOpenCheckout} />;
  }

  return (
    <div className="pt-20 animate-in fade-in duration-300 bg-slate-950 text-slate-100">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-slate-900/80 border-b border-slate-800 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <button
            onClick={() => { onSwitchView('home'); window.scrollTo(0,0); }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs font-mono text-emerald-400 font-bold">
              Instant Access • {product.currencySymbol || '$'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
            </span>
            <button
              onClick={() => onOpenCheckout(product)}
              className="py-2 px-4 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-all cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* 1. PRODUCT-SPECIFIC HERO */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 border-b border-slate-900">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full inline-block">
                {product.badge}
              </span>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {product.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                {product.heroSubheadline}
              </p>

              {/* Rating Pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs">
                <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white ml-1">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewCount} Verified Ratings)</span>
                </div>
                <span className="text-slate-400">⚡ {product.socialProofSnippet}</span>
              </div>

              {/* Main Hero CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onOpenCheckout(product)}
                  className="w-full sm:w-auto py-4 px-8 rounded-2xl font-extrabold text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 fill-slate-950" />
                  {product.ctaButtonText}
                </button>
                <a
                  href="#whats-included"
                  className="w-full sm:w-auto py-4 px-6 rounded-2xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors text-center"
                >
                  See What's Included ↓
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 pt-2 font-mono">
                <span>🛡️ 30-Day Guarantee</span>
                <span>•</span>
                <span>⚡ Instant Access</span>
                <span>•</span>
                <span>♾️ Lifetime Updates</span>
              </div>
            </div>

            {/* Hero Visual Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-3">
                <img 
                  src={product.heroImage} 
                  alt={product.name} 
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold mb-1">
                    SYSTEM VAULT PREVIEW
                  </span>
                  <h4 className="text-white font-bold text-lg">
                    {product.name} Command Suite
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROBLEM / AGITATE SECTION */}
      <section className="py-24 bg-slate-900/60 border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-rose-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ⚠️ THE SOLOPRENEUR BOTTLENECK
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              {product.problemAgitate.headline}
            </h2>
            <p className="text-slate-300 text-base md:text-lg">
              {product.problemAgitate.subheadline}
            </p>
          </div>

          <div className="space-y-4">
            {product.problemAgitate.painPoints.map((pain, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-rose-500/20 flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✕
                </div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {pain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ✨ THE FORGE COLLECTIVE BREAKTHROUGH
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              {product.solutionSection.headline}
            </h2>
            <p className="text-slate-300 text-base md:text-lg">
              {product.solutionSection.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {product.solutionSection.transformationPoints.map((trans, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-emerald-500/30 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-white font-semibold text-base leading-relaxed">
                    {trans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS (WITH ICONS) */}
      <section className="py-24 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Engineered Capabilities You Unlock Day One
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Every framework inside {product.name} has been battle-tested across thousands of real live customer campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.keyBenefits.map((ben, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                  <DynamicIcon name={ben.iconName} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {ben.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {ben.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURES / WHAT'S INCLUDED */}
      <section id="whats-included" className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Comprehensive Curriculum & Assets
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              What's Included Inside {product.name}
            </h2>
            <p className="text-slate-400 text-base">
              No fluff. Just pristine actionable frameworks, Notion templates, and swipe files.
            </p>
          </div>

          <div className="space-y-8">
            {product.featuresIncluded.map((mod, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white font-sans">
                      {mod.title}
                    </h3>
                    <p className="text-emerald-400 text-sm font-medium mt-1">
                      {mod.subtitle}
                    </p>
                  </div>
                  <span className="px-3 py-1 font-mono text-xs font-bold bg-slate-950 text-slate-400 rounded-lg border border-slate-800 self-start md:self-center">
                    Instant Download
                  </span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF (2-3 TESTIMONIALS) */}
      <TestimonialGrid 
        testimonials={product.testimonials} 
        heading={`Solopreneurs Winning With ${product.name}`}
        subheading="Verified Stripe screenshots and real member feedback from solopreneurs executing this exact system."
      />

      {/* 7. PRICING SECTION WITH CLEAR OFFER */}
      <section id="pricing-section" className="py-28 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
              Limited Enrollment Discount
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mt-4 mb-4">
              Get Lifetime Access Today
            </h2>
            <p className="text-slate-400">
              One single payment. Unlimited lifetime access to all core modules, templates, and community channels.
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-2xl shadow-emerald-950/40 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">
              BEST VALUE
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{product.name} Complete System</h3>
            <p className="text-xs text-slate-400 mb-8 max-w-md mx-auto">{product.shortDescription}</p>

            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="text-5xl md:text-6xl font-black font-mono text-white">
                {product.currencySymbol || '$'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
              </span>
              {product.originalPrice && (
                <span className="text-xl md:text-2xl text-slate-500 line-through font-mono">
                  {product.currencySymbol || '$'}{product.originalPrice.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
                </span>
              )}
            </div>

            <p className="text-xs text-emerald-400 font-semibold mb-8 uppercase tracking-wide">
              ⚡ Save {product.currencySymbol || '$'}{(product.originalPrice ? product.originalPrice - product.price : 100).toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''} • One-Time Payment • No Monthly Fees
            </p>

            <div className="space-y-3 text-left max-w-md mx-auto mb-10 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>All video training modules & Notion workspaces</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Verbatim swipe files, copy templates & funnels</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Free private peer community access</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Unconditional 30-Day Money-Back Guarantee</span>
              </div>
            </div>

            <button
              onClick={() => onOpenCheckout(product)}
              className="w-full py-5 px-8 rounded-2xl font-black text-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/30 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 fill-slate-950" />
              Get Instant Access Now • {product.currencySymbol || '$'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-6">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> Secure Checkout</span>
              <span>•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Risk-Free Refund</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <FAQSection faqs={product.faqs} title={`Questions About ${product.name}`} />

      {/* 9. BOTTOM NAVIGATION BUTTONS */}
      <section className="py-16 bg-slate-900/60 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => { onSwitchView('home'); window.scrollTo(0,0); }}
            className="py-3.5 px-6 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home Hub
          </button>
          <button
            onClick={() => {
              onSwitchView('home');
              setTimeout(() => {
                const el = document.getElementById('featured-products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="py-3.5 px-6 rounded-xl font-bold text-sm bg-slate-950 hover:bg-slate-900 text-emerald-400 border border-slate-800 transition-colors cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Compare All 4 Systems
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
