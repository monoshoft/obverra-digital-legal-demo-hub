import React from 'react';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';
import { ArrowRight } from 'lucide-react';

interface NoirCounselProps {
  onConsultPartner: (name: string) => void;
}

export const NoirCounsel: React.FC<NoirCounselProps> = ({ onConsultPartner }) => {
  return (
    <section id="counsel" className="py-12 sm:py-20 lg:py-28 bg-[#0E1013] text-neutral-100 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-[#C9A86A] tracking-wider sm:tracking-widest">
            Special Counsel
          </span>
          <h2 className="font-cinzel text-xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-white">
            Senior Partners in Command
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-editorial">
            Seasoned litigators who have shaped board control battles and secured multi-billion arbitral awards across three continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {NOIR_LUXURY_DATA.counselProfiles.map((partner) => (
            <div
              key={partner.id}
              className="p-5 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5 sm:space-y-6 flex flex-col justify-between hover:border-[#C9A86A]/50 transition-all group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-[#C9A86A] text-[#E2C896] flex items-center justify-center font-cinzel text-xl font-bold">
                    {partner.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="text-xs font-mono text-[#A39276]">
                    {partner.experienceYears} Years At Bar
                  </span>
                </div>

                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white tracking-wider">
                    {partner.name}
                  </h3>
                  <div className="text-xs font-mono text-[#C9A86A] mt-1">
                    {partner.title}
                  </div>
                </div>

                <div className="space-y-1 text-xs font-mono text-neutral-400 bg-neutral-950 p-3.5 rounded-xl border border-neutral-800/80">
                  <div className="text-white font-medium">{partner.courtEnrollment}</div>
                  <div className="text-[#A39276] text-[11px]">{partner.education}</div>
                </div>

                <p className="text-xs sm:text-sm font-editorial text-neutral-300 leading-relaxed text-base">
                  {partner.bio}
                </p>

                <div className="pt-2 text-xs font-mono text-[#A39276]">
                  <span className="text-white">Specialization: </span>
                  {partner.specialization.join(' · ')}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onConsultPartner(partner.name)}
                  className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-[#C9A86A] text-white hover:text-neutral-950 font-cinzel text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Direct Audience with {partner.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
