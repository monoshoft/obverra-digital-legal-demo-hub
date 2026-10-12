import React from 'react';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';
import { ArrowRight } from 'lucide-react';

interface SpatialAdvisorsProps {
  onConsultAdvisor: (name: string) => void;
}

export const SpatialAdvisors: React.FC<SpatialAdvisorsProps> = ({ onConsultAdvisor }) => {
  return (
    <section id="advisors" className="py-12 sm:py-20 lg:py-28 bg-[#090F1C] text-white border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-cyan-400 tracking-wider">
            Lead Partners
          </span>
          <h2 className="font-modern text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Pioneers in Frontier Jurisprudence
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Counsel with dual technical and constitutional mastery across high courts and statutory energy appellate bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {IMMERSIVE_LEGAL_DATA.advisors.map((advisor) => (
            <div
              key={advisor.id}
              className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#0C1425] border border-cyan-900/30 hover:border-cyan-500/50 space-y-5 sm:space-y-6 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-mono font-bold text-xl">
                    {advisor.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="text-xs font-mono text-cyan-400/80">
                    {advisor.experienceYears} Years Supreme Presence
                  </span>
                </div>

                <div>
                  <h3 className="font-modern text-xl font-bold text-white tracking-tight">
                    {advisor.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1">
                    {advisor.title}
                  </div>
                </div>

                <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950 p-3.5 rounded-xl border border-cyan-950/80">
                  <div className="text-white font-medium">{advisor.courtEnrollment}</div>
                  <div className="text-cyan-400/70 text-[11px]">{advisor.education}</div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {advisor.bio}
                </p>

                <div className="pt-2 text-xs font-mono text-slate-400">
                  <span className="text-white font-semibold">Specialization: </span>
                  {advisor.specialization.join(' · ')}
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-950/60">
                <button
                  onClick={() => onConsultAdvisor(advisor.name)}
                  className="w-full py-2.5 rounded-xl bg-cyan-950/50 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 font-mono text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-2 border border-cyan-500/30"
                >
                  <span>Consult with {advisor.name.split(' ')[0]}</span>
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
