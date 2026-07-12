import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Shield, Lock } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessSwitchView?: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [craft, setCraft] = useState('newsletter');
  const [revenueGoal, setRevenueGoal] = useState('10k');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-embergold/5 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[380px]">
            <div className="w-16 h-16 bg-embergold/10 border border-embergold/30 text-embergold rounded-full flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-embergold/10 text-embergold border border-embergold/20 rounded-full mb-3">
              Application Approved
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-sans text-white mb-3">
              Welcome to MMC, {fullName || 'Member'}!
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md mb-8">
              We've dispatched your VIP private invitation link and MMC welcome packet to <span className="font-semibold text-embergold">{email}</span>. Check your inbox right now.
            </p>
            <button
              onClick={handleResetAndClose}
              className="w-full py-3.5 px-6 font-semibold bg-embergold hover:bg-embergold/90 text-obsidian rounded-xl shadow-lg shadow-embergold/20 transition-all active:scale-[0.99]"
            >
              Enter Member Portal
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 text-embergold text-sm font-semibold tracking-wide uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              Private Community Application
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              Join Mystery Mastery Community
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Connect with over 100+ ambitious marketers, copywriters, and specialists mastering advanced human psychology & conversion copywriting.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Sterling"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-embergold transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Primary Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="david@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-embergold transition-colors text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Primary Craft
                  </label>
                  <select
                    value={craft}
                    onChange={(e) => setCraft(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-embergold transition-colors text-sm"
                  >
                    <option value="newsletter">Newsletters & Essays</option>
                    <option value="course">Digital Courses</option>
                    <option value="coaching">Consulting & Coaching</option>
                    <option value="saas">No-Code / SaaS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Monthly Target
                  </label>
                  <select
                    value={revenueGoal}
                    onChange={(e) => setRevenueGoal(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-embergold transition-colors text-sm"
                  >
                    <option value="3k">$3,000 / mo (First Sale)</option>
                    <option value="10k">$10,000 / mo (Freedom)</option>
                    <option value="30k">$30,000 / mo (Scale)</option>
                    <option value="100k+">$100,000+ / mo (Empire)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 font-semibold bg-embergold hover:bg-embergold/90 disabled:opacity-50 text-obsidian rounded-xl shadow-lg shadow-embergold/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                      Reviewing Credentials...
                    </>
                  ) : (
                    <>
                      Request VIP Invitation
                      <Sparkles className="w-4 h-4 fill-obsidian" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-embergold" />
                  No spam guarantee
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-embergold" />
                  Instant 24/7 Access
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
