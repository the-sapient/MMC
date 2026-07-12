import React from 'react';
import { Star, Award } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialGridProps {
  testimonials: Testimonial[];
  heading?: string;
  subheading?: string;
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ 
  testimonials, 
  heading = "Verified Creator Proof", 
  subheading = "Don't just take our word for it. Read verified reports from solopreneurs inside the collective." 
}) => {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" />
            Social Proof
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans mb-4">
            {heading}
          </h2>
          <p className="text-slate-400 text-base">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div 
              key={test.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {test.resultMetric && (
                    <span className="px-2.5 py-1 font-mono text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                      {test.resultMetric}
                    </span>
                  )}
                </div>

                <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-8 italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm bg-emerald-500/10 text-emerald-400 border-2 border-emerald-500/30 font-sans shrink-0 uppercase select-none">
                  {test.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm font-sans leading-tight">
                    {test.name}
                  </h4>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {test.role}
                  </span>
                  {test.productUsed && (
                    <span className="text-[10px] text-emerald-400 block font-medium mt-0.5">
                      Verified User: {test.productUsed}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
