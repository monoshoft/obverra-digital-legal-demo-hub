import React from 'react';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';

export const NoirPillars: React.FC = () => {
  return (
    <section id="pillars" className="py-12 sm:py-20 lg:py-28 bg-[#0E1013] text-neutral-100 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="max-w-2xl space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-[#C9A86A] tracking-wider sm:tracking-widest">
            Principles of Retainer
          </span>
          <h2 className="font-cinzel text-xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-white">
            Uncompromising Standards
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-editorial leading-relaxed">
            By capping concurrent engagements and insulating client identities, we maintain unmatched strategic depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {NOIR_LUXURY_DATA.pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-5 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3 sm:space-y-4 hover:border-[#C9A86A]/40 transition-colors"
            >
              <div className="font-cinzel text-3xl font-extrabold text-[#C9A86A]">
                {pillar.num}
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white tracking-wider">
                {pillar.title}
              </h3>
              <p className="text-xs text-neutral-400 font-editorial leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
