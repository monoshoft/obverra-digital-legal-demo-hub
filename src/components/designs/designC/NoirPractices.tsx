import React from 'react';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';
import { ArrowRight, Check, Compass, Shield, Crown, Flame } from 'lucide-react';

interface NoirPracticesProps {
  onSelectPractice: (title: string) => void;
}

export const NoirPractices: React.FC<NoirPracticesProps> = ({ onSelectPractice }) => {
  return (
    <section id="practices" className="py-12 sm:py-20 lg:py-28 bg-[#0B0C0E] text-neutral-100 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-neutral-800 pb-4 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-[#C9A86A] tracking-wider sm:tracking-widest">
              Selected Mandates
            </span>
            <h2 className="font-cinzel text-xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-white">
              Elite Specialisation Domains
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-editorial max-w-md">
            High-value legal warfare and asset protection where standard commercial firms lack appetite for aggressive positioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {NOIR_LUXURY_DATA.practiceAreas.map((area) => (
            <div
              key={area.id}
              className="p-5 sm:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-5 sm:space-y-6 hover:border-[#C9A86A]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#C9A86A] tracking-wider uppercase">
                    {area.casesHandled}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-neutral-800/80 text-[#C9A86A] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white tracking-wider">
                    {area.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 mt-1">
                    {area.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-editorial text-neutral-300 leading-relaxed">
                  {area.description}
                </p>

                {/* Scope items */}
                <div className="pt-2 space-y-2 border-t border-neutral-800/80">
                  <div className="text-[11px] font-mono text-[#C9A86A] uppercase tracking-wider">
                    Scope of Mandate:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-400">
                    {area.scopeList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C9A86A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <button
                  onClick={() => onSelectPractice(area.title)}
                  className="w-full py-2.5 rounded-xl border border-neutral-700 hover:border-[#C9A86A] text-neutral-200 hover:text-white font-cinzel text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Confidential Mandate Brief</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A86A]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
