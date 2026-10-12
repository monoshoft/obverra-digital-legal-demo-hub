import React, { useState } from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { ChevronDown } from 'lucide-react';

export const HeritageFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-28 bg-[#FBF9F5] text-[#2B231F] border-b border-[#E8E2D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center space-y-2.5 sm:space-y-3">
          <div className="text-[11px] sm:text-xs font-serif text-[#7A6E5F] uppercase tracking-wider sm:tracking-widest border-b border-[#C5A880]/50 inline-block pb-1">
            Judicial Procedures & Enquiries
          </div>
          <h2 className="font-heritage text-xl sm:text-3xl lg:text-4xl text-[#1C2B22] font-bold tracking-tight">
            Frequently Addressed Questions
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#574B3F]">
            Key insights regarding Supreme Court filings, Advocate-on-Record representation, and emergency listings.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {HERITAGE_DATA.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#DCD3C3] bg-[#F4EFE6] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 font-heritage text-xs sm:text-base font-semibold text-[#1C2B22] hover:text-[#3F5447] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C5A880] shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm font-serif text-[#574B3F] leading-relaxed border-t border-[#EAE3D5] pt-3">
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
