import React, { useState } from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { PracticeArea } from '../../../types';
import { ArrowRight, Check } from 'lucide-react';

interface HeritagePracticeAreasProps {
  onSelectPractice: (practiceTitle: string) => void;
}

export const HeritagePracticeAreas: React.FC<HeritagePracticeAreasProps> = ({ onSelectPractice }) => {
  const [activeAreaId, setActiveAreaId] = useState(HERITAGE_DATA.practiceAreas[0].id);

  const selectedPractice =
    HERITAGE_DATA.practiceAreas.find((p) => p.id === activeAreaId) || HERITAGE_DATA.practiceAreas[0];

  return (
    <section id="practice-areas" className="py-12 sm:py-20 lg:py-28 bg-[#FBF9F5] text-[#2B231F] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#E2D9CA] pb-5 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <div className="text-[11px] sm:text-xs font-serif text-[#7A6E5F] uppercase tracking-widest">
              Core Jurisdictional Competencies
            </div>
            <h2 className="font-heritage text-xl sm:text-3xl lg:text-4xl text-[#1C2B22] font-bold tracking-tight">
              Appellate & Trial Practice Areas
            </h2>
          </div>
          <p className="text-xs font-serif text-[#574B3F] max-w-md">
            Our chambers focus selectively on complex litigation requiring deep constitutional precedent, original side trial craftsmanship, or statutory tribunal mastery.
          </p>
        </div>

        {/* Practice Areas Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Practice Area Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {HERITAGE_DATA.practiceAreas.map((area, idx) => (
              <button
                key={area.id}
                onClick={() => setActiveAreaId(area.id)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all border cursor-pointer ${
                  activeAreaId === area.id
                    ? 'bg-[#1C2B22] text-[#FBF9F5] border-[#1C2B22] shadow-md'
                    : 'bg-[#F4EFE6]/60 hover:bg-[#F4EFE6] text-[#2B231F] border-[#E8E1D3]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span
                      className={`font-editorial text-sm font-bold shrink-0 ${
                        activeAreaId === area.id ? 'text-[#C5A880]' : 'text-[#7A6E5F]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="font-heritage text-xs sm:text-sm font-semibold tracking-tight truncate">
                        {area.title}
                      </div>
                      <div
                        className={`text-[10px] sm:text-[11px] font-serif truncate ${
                          activeAreaId === area.id ? 'text-[#D5C9B8]' : 'text-[#7A6E5F]'
                        }`}
                      >
                        {area.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      activeAreaId === area.id ? 'text-[#C5A880] translate-x-1' : 'opacity-40'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Deep Focus Practice Dossier */}
          <div className="lg:col-span-7 bg-[#F4EFE6] p-5 sm:p-8 rounded-2xl border border-[#DCD3C3] shadow-md space-y-5 sm:space-y-6">
            <div className="border-b border-[#E0D7C7] pb-3 sm:pb-4 space-y-1.5">
              <div className="text-[10px] sm:text-xs font-serif text-[#7A6E5F] uppercase tracking-wider">
                Jurisdictional Dossier
              </div>
              <h3 className="font-heritage text-lg sm:text-2xl font-bold text-[#1C2B22]">
                {selectedPractice.title}
              </h3>
              <p className="text-xs font-serif text-[#7A6E5F] italic">
                {selectedPractice.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm font-serif text-[#4A3F35] leading-relaxed">
              {selectedPractice.description}
            </p>

            {/* Scope of Chambers Representation */}
            <div className="space-y-2.5 pt-1">
              <div className="text-xs font-serif font-bold text-[#1C2B22]">
                Chambers Representation Scope:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif text-[#574B3F]">
                {selectedPractice.scopeList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#FBF9F5] p-2.5 rounded-lg border border-[#EAE3D5]">
                    <Check className="w-3.5 h-3.5 text-[#1C2B22] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governed Statutory Acts */}
            {selectedPractice.keyActs && (
              <div className="pt-2 border-t border-[#E0D7C7] text-xs font-serif text-[#7A6E5F]">
                <span className="font-semibold text-[#1C2B22]">Governing Statues: </span>
                <span>{selectedPractice.keyActs.join(' · ')}</span>
              </div>
            )}

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#E0D7C7]">
              <span className="text-xs font-serif italic text-[#7A6E5F]">
                {selectedPractice.casesHandled}
              </span>
              <button
                onClick={() => onSelectPractice(selectedPractice.title)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#1C2B22] text-[#FBF9F5] hover:bg-[#273D30] font-serif text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Brief Chambers on this Practice</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
