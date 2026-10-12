import React from 'react';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';
import { AdvocateProfile } from '../../../types';
import { Award, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

interface ModernTeamProps {
  onConsultPartner: (name: string) => void;
}

export const ModernTeam: React.FC<ModernTeamProps> = ({ onConsultPartner }) => {
  return (
    <section id="team" className="py-12 sm:py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-blue-600 font-semibold tracking-wider">
            Partner Leadership
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experienced Transactional & Regulatory Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Our partners have collectively advised on over ₹14,500 Cr in transactions and landmark regulatory submissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {MODERN_LEGAL_DATA.team.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-7 flex flex-col justify-between space-y-5 sm:space-y-6 hover:shadow-lg hover:border-slate-300 transition-all group"
            >
              <div className="space-y-4">
                {/* Modern Avatar Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold font-mono text-base tracking-tighter group-hover:bg-blue-600 transition-colors">
                    {partner.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {partner.experienceYears} Yrs Experience
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {partner.name}
                  </h3>
                  <div className="text-xs text-blue-600 font-medium mt-0.5">
                    {partner.title}
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/80">
                  <div className="font-semibold text-slate-900 text-[11px]">
                    {partner.courtEnrollment}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {partner.education}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                  {partner.bio}
                </p>

                {/* Focus areas */}
                <div className="pt-2 text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-900">Focus: </span>
                  <span>{partner.specialization.join(' · ')}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => onConsultPartner(partner.name)}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-900 hover:text-white text-slate-900 border border-slate-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Connect with {partner.name.split(' ')[0]}</span>
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
