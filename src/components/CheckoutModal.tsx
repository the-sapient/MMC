import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, Sparkles, CreditCard, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface CheckoutModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expDate, setExpDate] = useState('08/28');
  const [cvc, setCvc] = useState('888');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (!isOpen || !product) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsComplete(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100 grid grid-cols-1 md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors z-20"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {isComplete ? (
          <div className="col-span-12 p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[420px]">
            <div className="w-20 h-20 bg-embergold/10 border border-embergold/30 text-embergold rounded-full flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider bg-embergold/10 text-embergold border border-embergold/20 rounded-full mb-3">
              Order #FC-{Math.floor(100000 + Math.random() * 900000)} Confirmed
            </span>
            <h3 className="text-3xl font-bold font-sans text-white mb-3">
              Instant Access Granted!
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md mb-8">
              Thank you for investing in <strong className="text-white">{product.name}</strong>. Your payment of <span className="text-embergold font-bold">{product.currencySymbol || '$'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}</span> succeeded. Receipt and login credentials sent to <span className="text-embergold font-semibold">{email || 'your email'}</span>.
            </p>
            <button
              onClick={handleResetAndClose}
              className="py-4 px-8 font-semibold bg-embergold hover:bg-embergold/90 text-obsidian rounded-xl shadow-lg shadow-embergold/20 transition-all active:scale-[0.99] flex items-center gap-2"
            >
              Go to Member Vault
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <>
            {/* Left Column: Order Summary */}
            <div className="col-span-12 md:col-span-5 bg-slate-950 p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-embergold/10 text-embergold border border-embergold/20 rounded-md">
                  {product.badge}
                </span>
                <h4 className="text-xl font-bold text-white mt-3 mb-2">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {product.shortDescription}
                </p>
 
                <div className="space-y-3 py-4 border-y border-slate-800/80 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Lifetime System Access</span>
                    <span className="font-semibold text-white">{product.currencySymbol || '$'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : '.00'}</span>
                  </div>
                  {product.originalPrice && (
                    <div className="flex justify-between text-slate-500">
                      <span>Solopreneur Discount</span>
                      <span className="text-embergold font-medium">-{product.currencySymbol || '$'}{(product.originalPrice - product.price).toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : '.00'}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-300">
                    <span>Private Community Access</span>
                    <span className="text-embergold font-medium">Included Free</span>
                  </div>
                </div>
              </div>
 
              <div className="pt-6">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-sm text-slate-300 font-semibold">Total Investment</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-embergold">{product.currencySymbol || '$'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}</span>
                    <span className="text-xs text-slate-500 block">One-time payment • No taxes</span>
                  </div>
                </div>
 
                <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  <ShieldCheck className="w-4 h-4 text-embergold shrink-0" />
                  Backed by our unconditional 30-Day 100% Money-Back Guarantee.
                </div>
              </div>
            </div>
 
            {/* Right Column: Payment Inputs */}
            <div className="col-span-12 md:col-span-7 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-embergold" />
                  Secure 256-Bit Checkout
                </h4>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-embergold" />
                  SSL Encrypted
                </span>
              </div>
 
              <form onSubmit={handlePay} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Email for Receipt & Access
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="creator@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-embergold transition-colors text-sm"
                  />
                </div>
 
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Card Information
                  </label>
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-t-xl text-white font-mono text-sm focus:outline-none focus:border-embergold transition-colors"
                  />
                  <div className="grid grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      value={expDate}
                      onChange={(e) => setExpDate(e.target.value)}
                      className="px-4 py-3 bg-slate-950 border border-t-0 border-r-0 border-slate-800 rounded-bl-xl text-white font-mono text-sm focus:outline-none focus:border-embergold transition-colors"
                    />
                    <input
                      type="text"
                      required
                      placeholder="CVC"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="px-4 py-3 bg-slate-950 border border-t-0 border-slate-800 rounded-br-xl text-white font-mono text-sm focus:outline-none focus:border-embergold transition-colors"
                    />
                  </div>
                </div>
 
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 px-6 font-semibold bg-embergold hover:bg-embergold/90 disabled:opacity-50 text-obsidian rounded-xl shadow-lg shadow-embergold/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                        Authenticating Bank Transaction...
                      </>
                    ) : (
                      <>
                        Complete Order • {product.currencySymbol || '$'}{product.price.toLocaleString()}{product.currencySuffix ? ` ${product.currencySuffix}` : ''}
                        <Sparkles className="w-4 h-4 fill-obsidian" />
                      </>
                    )}
                  </button>
                </div>
 
                <p className="text-[11px] text-slate-500 text-center leading-relaxed mt-4">
                  By confirming payment, you unlock instant lifetime digital access. You can request a 100% refund anytime within 30 days no questions asked.
                </p>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
