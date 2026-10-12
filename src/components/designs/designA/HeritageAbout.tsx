import React from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { Scale, BookOpen, ShieldCheck } from 'lucide-react';

export const HeritageAbout: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-28 bg-[#F4EFE6] text-[#2B231F] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        {/* Title Section */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="text-[11px] sm:text-xs font-serif text-[#7A6E5F] uppercase tracking-wider sm:tracking-widest border-b border-[#C5A880]/50 inline-block pb-1">
            Chambers Pedigree & Foundation
          </div>
          <h2 className="font-heritage text-xl sm:text-3xl lg:text-4xl text-[#1C2B22] font-bold tracking-tight">
            {HERITAGE_DATA.about.historyTitle}
          </h2>
          <p className="text-xs sm:text-base text-[#574B3F] font-serif leading-relaxed">
            {HERITAGE_DATA.about.narrative}
          </p>
        </div>

        {/* The 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {HERITAGE_DATA.about.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-8 rounded-xl bg-[#FBF9F5] border border-[#E0D7C7] space-y-3 sm:space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1C2B22]/10 text-[#1C2B22] flex items-center justify-center font-editorial font-bold text-lg">
                0{idx + 1}
              </div>
              <h3 className="font-heritage text-lg font-bold text-[#1C2B22]">
                {pillar.title}
              </h3>
              <p className="text-xs font-serif text-[#574B3F] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
