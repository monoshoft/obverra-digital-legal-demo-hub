import React, { useState } from 'react';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';
import { ArrowRight, Check, ShieldCheck, Zap, Lock, Users, Briefcase, Cpu } from 'lucide-react';

interface ModernPracticeGridProps {
  onSelectPractice: (title: string) => void;
}

export const ModernPracticeGrid: React.FC<ModernPracticeGridProps> = ({ onSelectPractice }) => {
  const [selectedId, setSelectedId] = useState(MODERN_LEGAL_DATA.practiceAreas[0].id);

  return (
    <section id="practices" className="py-12 sm:py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-slate-200 pb-5 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-blue-600 font-semibold tracking-wider">
              Practice Domains
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Corporate & Transactional Expertise
            </h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Full-spectrum legal architecture for high-growth enterprises navigating complex Indian regulatory environments and cross-border expansion.
          </p>
        </div>

        {/* Bento Grid of Practice Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {MODERN_LEGAL_DATA.practiceAreas.map((practice) => (
            <div
              key={practice.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 flex flex-col justify-between space-y-5 sm:space-y-6 hover:shadow-lg hover:border-blue-400 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-600 font-semibold uppercase">
                    {practice.casesHandled}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {practice.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {practice.subtitle}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {practice.description}
                </p>

                {/* Scope points */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
                    Core Mandates:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {practice.scopeList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Acts */}
                {practice.keyActs && (
                  <div className="text-[11px] text-slate-500 pt-2">
                    <span className="font-semibold text-slate-700">Statutory Framework: </span>
                    <span>{practice.keyActs.join(' · ')}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectPractice(practice.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Practice Scope Memo</span>
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
