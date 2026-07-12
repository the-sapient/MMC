import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Product, ViewId } from '../types';

interface ProductCardProps {
  product: Product;
  onSwitchView: (view: ViewId) => void;
  onOpenCheckout: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSwitchView, onOpenCheckout }) => {
  return (
    <div className="group relative bg-slate-900/80 border border-slate-800 hover:border-embergold/40 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-embergold/5 flex flex-col justify-between overflow-hidden">
      
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-embergold/3 rounded-full blur-3xl pointer-events-none group-hover:bg-embergold/5 transition-colors" />

      <div>
        {/* Top Header & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-embergold/10 text-embergold border border-embergold/20 rounded-full flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {product.badge}
          </span>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-500 font-normal">({product.reviewCount})</span>
          </div>
        </div>

        {/* Product Name & Powerful Headline */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-sans mb-3 group-hover:text-embergold transition-colors">
          {product.name}
        </h3>
        <p className="text-embergold/90 font-medium text-base mb-4 leading-snug">
          {product.tagline}
        </p>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 border-b border-slate-800/80 pb-6">
          {product.shortDescription}
        </p>

        {/* Persuasive Key Benefits Grid */}
        <div className="mb-8 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Engineered Breakthroughs Included:
          </h4>
          {product.keyBenefits.map((ben, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-embergold/10 border border-embergold/30 text-embergold flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-sm font-semibold text-white block">
                  {ben.title}
                </span>
                <span className="text-xs text-slate-400 leading-normal block mt-0.5">
                  {ben.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Social Proof Snippet */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 mb-6 text-xs text-slate-300 flex items-center gap-3">
          <div className="flex -space-x-1.5 shrink-0">
            <div className="w-6 h-6 rounded-full border border-slate-900 bg-amber-500/10 text-amber-400 flex items-center justify-center text-[10px] font-black font-mono">E</div>
            <div className="w-6 h-6 rounded-full border border-slate-900 bg-embergold/10 text-embergold flex items-center justify-center text-[10px] font-black font-mono">D</div>
            <div className="w-6 h-6 rounded-full border border-slate-900 bg-blue-500/10 text-blue-400 flex items-center justify-center text-[10px] font-black font-mono">N</div>
          </div>
          <span>💬 {product.socialProofSnippet}</span>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 uppercase block font-semibold">One-Time Investment</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white font-mono">
                {product.currencySymbol || '$'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-500 line-through font-mono">
                  {product.currencySymbol || '$'}{product.originalPrice.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCheckout(product)}
              className="py-3 px-5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all cursor-pointer active:scale-95"
            >
              Instant Buy
            </button>
            <button
              onClick={() => {
                onSwitchView(product.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3 px-6 rounded-xl font-bold text-sm bg-embergold hover:bg-embergold/90 text-obsidian shadow-lg shadow-embergold/20 transition-all cursor-pointer flex items-center gap-2 group-hover:translate-x-1 duration-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
