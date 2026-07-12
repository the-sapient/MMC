import React, { useState } from 'react';
import { Sparkles, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { ViewId } from '../types';
import { MMCLogo } from './MMCLogo';

interface NavbarProps {
  currentView: ViewId;
  onSwitchView: (view: ViewId) => void;
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onSwitchView, onOpenJoinModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const productLinks: { id: ViewId; name: string; price: string; badge: string }[] = [
    { id: 'mystery-mastery', name: 'Mystery Mastery Community (MMC)', price: '55,700 NGN', badge: 'Elite Community' },
    { id: 'mysterious-psychology', name: 'Mysterious Psychology', price: '27,000 NGN', badge: '18+ Community' },
    { id: 'profit-playbook', name: 'HTG Client Acquisition', price: '15,000 NGN', badge: 'Acquisition Blueprint' },
    { id: 'affiliate-structure', name: '500k Affiliate Structure', price: '3,700 NGN', badge: 'Learning & Earning' },
  ];

  const handleNavClick = (view: ViewId) => {
    onSwitchView(view);
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      onSwitchView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-obsidian/95 backdrop-blur-lg border-b border-slate-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <MMCLogo variant="horizontal" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                currentView === 'home' 
                  ? 'text-embergold bg-slate-900/80 border border-slate-800' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
              }`}
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                  currentView !== 'home'
                    ? 'text-embergold bg-slate-900/80 border border-slate-800'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div 
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  className="absolute top-full left-0 w-80 mt-2 p-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-slate-950 animate-in fade-in zoom-in-95 duration-150 z-50"
                >
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 mb-1">
                    Flagship Systems
                  </div>
                  {productLinks.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleNavClick(prod.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                        currentView === prod.id
                          ? 'bg-embergold/10 text-embergold border border-embergold/20'
                          : 'hover:bg-slate-800/80 text-slate-200'
                      }`}
                    >
                      <div>
                        <span className="text-sm font-semibold block group-hover:text-embergold transition-colors">
                          {prod.name}
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {prod.badge}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-embergold bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                        {prod.price}
                      </span>
                    </button>
                  ))}
                  <div className="mt-1 pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => handleScrollToSection('featured-products')}
                      className="w-full py-2 px-3 text-xs font-semibold text-center text-slate-300 hover:text-embergold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Compare All Products
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleScrollToSection('community-section')}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/50 transition-colors cursor-pointer"
            >
              Community
            </button>

            <button
              onClick={() => handleScrollToSection('about-section')}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/50 transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Prominent CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="relative group px-5 py-2.5 rounded-xl font-semibold text-sm bg-embergold hover:bg-embergold/90 text-obsidian shadow-lg shadow-embergold/10 hover:shadow-embergold/20 active:scale-[0.99] transition-all duration-150 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-obsidian animate-pulse" />
              Join the Community
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
              currentView === 'home' ? 'bg-embergold/15 text-embergold font-semibold' : 'text-slate-200'
            }`}
          >
            Home Hub
          </button>

          <div className="pt-2 pb-1 px-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            Products
          </div>
          <div className="pl-2 space-y-1">
            {productLinks.map((prod) => (
              <button
                key={prod.id}
                onClick={() => handleNavClick(prod.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm flex items-center justify-between ${
                  currentView === prod.id ? 'bg-embergold/10 text-embergold font-semibold' : 'text-slate-300'
                }`}
              >
                <span>{prod.name}</span>
                <span className="font-mono text-embergold text-xs">{prod.price}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 space-y-1">
            <button
              onClick={() => handleScrollToSection('community-section')}
              className="w-full text-left px-4 py-3 rounded-xl font-medium text-slate-200 hover:bg-slate-800"
            >
              Community Perks
            </button>
            <button
              onClick={() => handleScrollToSection('about-section')}
              className="w-full text-left px-4 py-3 rounded-xl font-medium text-slate-200 hover:bg-slate-800"
            >
              About MMC
            </button>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3.5 px-4 font-bold text-center bg-embergold text-obsidian rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-obsidian" />
              Join the Community
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
