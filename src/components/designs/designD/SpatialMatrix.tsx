import React from 'react';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';
import { ArrowRight, Check, Cpu, Zap, Globe, Layers } from 'lucide-react';

interface SpatialMatrixProps {
  onSelectPractice: (title: string) => void;
}

export const SpatialMatrix: React.FC<SpatialMatrixProps> = ({ onSelectPractice }) => {
  return (
    <section id="matrix" className="py-12 sm:py-20 lg:py-28 bg-[#090F1C] text-white border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-cyan-950/80 pb-4 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Frontier Practice Matrix
            </span>
            <h2 className="font-modern text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Sectors of Multidimensional Law
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono max-w-md">
            Advising pioneering enterprises across high-consequence technological, spatial, and clean energy frontiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {IMMERSIVE_LEGAL_DATA.practiceAreas.map((area) => (
            <div
              key={area.id}
              className="p-5 sm:p-8 rounded-2xl bg-[#0C1425] border border-cyan-900/30 hover:border-cyan-500/50 space-y-5 sm:space-y-6 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {area.casesHandled}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div>
                  <h3 className="font-modern text-xl font-bold text-white tracking-tight">
                    {area.title}
                  </h3>
                  <div className="text-xs text-cyan-400/80 font-mono mt-1">
                    {area.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {area.description}
                </p>

                <div className="pt-2 space-y-2 border-t border-cyan-950/60">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    Core Technical Competencies:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {area.scopeList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-950/60">
                <button
                  onClick={() => onSelectPractice(area.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-white font-mono text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-2 border border-cyan-900/40"
                >
                  <span>Request Engineering Brief</span>
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
