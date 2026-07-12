import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ } from '../types';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about our systems, guarantees, and community.",
  faqs 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            Clear Answers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans mb-4">
            {title}
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border transition-all duration-200 rounded-2xl overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-950/10' 
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-sans focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'bg-emerald-500/20 text-emerald-400 rotate-180' : 'bg-slate-800 text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm md:text-base leading-relaxed animate-in fade-in duration-150 border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-center">
          <p className="text-sm text-slate-400">
            Still have a specific question? Email our executive concierge at <strong className="text-emerald-400 font-medium">mmcsupport123@gmail.com</strong> for a 2-hour turnaround response.
          </p>
        </div>
      </div>
    </section>
  );
};
