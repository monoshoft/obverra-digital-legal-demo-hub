import React from 'react';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';
import { ArrowRight, Lock } from 'lucide-react';

export const NoirBriefings: React.FC = () => {
  return (
    <section id="briefings" className="py-12 sm:py-20 lg:py-28 bg-[#0B0C0E] text-neutral-100 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-neutral-800 pb-4 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-[#C9A86A] tracking-wider sm:tracking-widest">
              Executive Briefings
            </span>
            <h2 className="font-cinzel text-xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-white">
              Privileged Jurisprudential Memoranda
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-editorial max-w-md">
            Strategic analysis of cross-border arbitration enforcement and enforcement directorate evidentiary burdens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {NOIR_LUXURY_DATA.briefings.map((brief) => (
            <article
              key={brief.id}
              className="p-5 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4 hover:border-[#C9A86A]/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A39276]">
                  <span>{brief.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{brief.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{brief.readTime}</span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white tracking-wide leading-snug">
                  {brief.title}
                </h3>

                <p className="text-xs sm:text-sm font-editorial text-neutral-300 leading-relaxed text-base">
                  {brief.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <a
                  href="#contact"
                  className="text-xs font-cinzel text-[#C9A86A] hover:text-[#FAF0DD] transition-colors flex items-center gap-2 tracking-wider"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Request Full Privileged Text</span>
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
