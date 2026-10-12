import React from 'react';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';
import { ArrowRight, BookOpen } from 'lucide-react';

export const SpatialPerspectives: React.FC = () => {
  return (
    <section id="perspectives" className="py-12 sm:py-20 lg:py-28 bg-[#070B14] text-white border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-cyan-950/80 pb-4 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Frontier Research
            </span>
            <h2 className="font-modern text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Perspectives & Precedents
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono max-w-md">
            Analysis of satellite spectrum licensing regimes and renewable energy change-in-law jurisprudence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {IMMERSIVE_LEGAL_DATA.perspectives.map((item) => (
            <article
              key={item.id}
              className="p-5 sm:p-8 rounded-2xl bg-[#0C1425] border border-cyan-900/30 hover:border-cyan-500/40 space-y-4 flex flex-col justify-between transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="font-modern text-lg font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-cyan-950/60">
                <a
                  href="#contact"
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Access Complete Briefing Document</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
