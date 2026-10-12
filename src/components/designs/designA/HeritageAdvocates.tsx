import React from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { AdvocateProfile } from '../../../types';
import { Award, BookOpen, GraduationCap, Scale } from 'lucide-react';

interface HeritageAdvocatesProps {
  onConsultAdvocate: (advocateName: string) => void;
}

export const HeritageAdvocates: React.FC<HeritageAdvocatesProps> = ({ onConsultAdvocate }) => {
  return (
    <section id="advocates" className="py-12 sm:py-20 lg:py-28 bg-[#F4EFE6] text-[#2B231F] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="text-[11px] sm:text-xs font-serif text-[#7A6E5F] uppercase tracking-wider sm:tracking-widest border-b border-[#C5A880]/50 inline-block pb-1">
            Chambers Counsel & Senior Advocates
          </div>
          <h2 className="font-heritage text-xl sm:text-3xl lg:text-4xl text-[#1C2B22] font-bold tracking-tight">
            Advocates of the Supreme Court of India
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#574B3F]">
            Combining designations before the Supreme Court of India with extensive original side trial records across State High Courts.
          </p>
        </div>

        {/* Advocates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {HERITAGE_DATA.advocates.map((adv) => (
            <div
              key={adv.id}
              className="rounded-2xl bg-[#FBF9F5] border border-[#DCD3C3] p-5 sm:p-7 flex flex-col justify-between space-y-5 sm:space-y-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Monogram Seal Avatar */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-full bg-[#1C2B22] text-[#C5A880] border border-[#C5A880] flex items-center justify-center font-editorial font-bold text-xl shadow-inner group-hover:scale-105 transition-transform">
                    {adv.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="text-[11px] font-mono text-[#7A6E5F]">
                    {adv.experienceYears}+ Years Bar Record
                  </span>
                </div>

                <div>
                  <h3 className="font-heritage text-lg font-bold text-[#1C2B22]">
                    {adv.name}
                  </h3>
                  <div className="text-xs font-serif text-[#7A6E5F] italic mt-0.5">
                    {adv.title}
                  </div>
                </div>

                {/* Court Enrollment & Qualifications */}
                <div className="space-y-1.5 text-xs font-serif text-[#574B3F] bg-[#F4EFE6] p-3 rounded-lg border border-[#EAE3D5]">
                  <div className="font-semibold text-[#1C2B22] text-[11px]">
                    {adv.courtEnrollment}
                  </div>
                  <div className="text-[11px] text-[#7A6E5F]">
                    {adv.education}
                  </div>
                </div>

                <p className="text-xs font-serif text-[#4A3F35] leading-relaxed line-clamp-4">
                  {adv.bio}
                </p>

                {/* Specializations (Unboxed text with dots) */}
                <div className="pt-2 text-[11px] font-serif text-[#7A6E5F]">
                  <span className="font-semibold text-[#1C2B22]">Focus: </span>
                  {adv.specialization.join(' · ')}
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE3D5]">
                <button
                  onClick={() => onConsultAdvocate(adv.name)}
                  className="w-full py-2.5 rounded-lg border border-[#1C2B22] text-[#1C2B22] hover:bg-[#1C2B22] hover:text-[#FBF9F5] font-serif text-xs font-medium transition-colors"
                >
                  Consult with {adv.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
