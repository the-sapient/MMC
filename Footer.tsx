import React from 'react';
import { Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ViewId } from '../types';
import { MMCLogo } from './MMCLogo';

interface FooterProps {
  onSwitchView: (view: ViewId) => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSwitchView, onOpenJoinModal }) => {
  return (
    <footer className="bg-obsidian border-t border-slate-900 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <MMCLogo variant="horizontal" iconSize="w-9 h-9" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Africa's premier learning & earning community for advanced copywriting, marketing psychology, and human behavior. Master client acquisition under direct daily mentorship.
            </p>
            <div className="flex items-center gap-2 text-xs text-embergold font-medium pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>All systems backed by 30-Day Money-Back Guarantee</span>
            </div>
          </div>

          {/* Flagship Systems */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Flagship Systems
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => { onSwitchView('mystery-mastery'); window.scrollTo(0,0); }} className="hover:text-embergold transition-colors cursor-pointer text-left">
                  Mystery Mastery Community (MMC)
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchView('mysterious-psychology'); window.scrollTo(0,0); }} className="hover:text-embergold transition-colors cursor-pointer text-left">
                  Mysterious Psychology
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchView('profit-playbook'); window.scrollTo(0,0); }} className="hover:text-embergold transition-colors cursor-pointer text-left">
                  HTG Client Acquisition
                </button>
              </li>
              <li>
                <button onClick={() => { onSwitchView('affiliate-structure'); window.scrollTo(0,0); }} className="hover:text-embergold transition-colors cursor-pointer text-left">
                  500k Affiliate Structure
                </button>
              </li>
            </ul>
          </div>

          {/* Community & Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => { onSwitchView('home'); window.scrollTo(0,0); }} className="hover:text-embergold transition-colors cursor-pointer text-left">
                  Home Hub
                </button>
              </li>
              <li>
                <button onClick={onOpenJoinModal} className="text-embergold hover:underline font-semibold cursor-pointer flex items-center gap-1">
                  Join Community
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <a href="#about-section" className="hover:text-embergold transition-colors">
                  About MMC
                </a>
              </li>
              <li>
                <a href="#community-section" className="hover:text-embergold transition-colors">
                  Member Perks
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA Banner */}
          <div className="md:col-span-3 bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-embergold text-xs font-semibold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Free Marketing & Psychology Dispatch
              </div>
              <h5 className="text-white font-bold text-base mb-1">
                The Sunday Mystery Letter
              </h5>
              <p className="text-xs text-slate-400 mb-4">
                Weekly teardowns of high-converting psychology hooks, copy breakdowns, and client acquisition methods.
              </p>
            </div>
            <button
              onClick={onOpenJoinModal}
              className="w-full py-2.5 px-4 bg-embergold hover:bg-embergold/90 text-obsidian font-semibold text-xs rounded-xl transition-all cursor-pointer shadow-md shadow-embergold/10 text-center"
            >
              Get Free Dispatch
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Mystery Mastery Community (MMC). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Earnings Disclaimer</span>
            <span className="hover:text-slate-400 cursor-pointer">Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
