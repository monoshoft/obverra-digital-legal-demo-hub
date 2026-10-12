import React, { useState } from 'react';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';
import { ChevronDown } from 'lucide-react';

export const SpatialFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-28 bg-[#090F1C] text-white border-b border-cyan-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-cyan-400 tracking-wider">
            Technical Legal FAQ
          </span>
          <h2 className="font-modern text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Frequently Explored Matters
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Insights on multidimensional dispute modeling, arbitral seats, and Indian space-tech licensing.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {IMMERSIVE_LEGAL_DATA.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0C1425] rounded-2xl border border-cyan-900/30 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 font-modern text-xs sm:text-base font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-cyan-950/60 pt-3 font-normal">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
