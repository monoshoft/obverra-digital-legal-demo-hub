import React, { useState } from 'react';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';
import { ChevronDown } from 'lucide-react';

export const NoirFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-28 bg-[#0E1013] text-neutral-100 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-[#C9A86A] tracking-wider sm:tracking-widest">
            Privilege & Protocols
          </span>
          <h2 className="font-cinzel text-xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-white">
            Client Inquiry FAQ
          </h2>
          <p className="text-xs sm:text-sm font-editorial text-neutral-400">
            Detailed clarity on retainer agreements, non-disclosure protocols, and international arbitration appearances.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {NOIR_LUXURY_DATA.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/50 rounded-2xl border border-neutral-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 font-cinzel text-xs sm:text-base font-bold text-white hover:text-[#C9A86A] transition-colors tracking-wide cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C9A86A] shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm font-editorial text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-3">
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
