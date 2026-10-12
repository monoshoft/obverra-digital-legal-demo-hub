import React from 'react';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';
import { Box, Layers, ShieldCheck } from 'lucide-react';

export const SpatialDisputeJourney: React.FC = () => {
  return (
    <section id="dimensions" className="py-12 sm:py-20 lg:py-28 bg-[#070B14] text-white border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="max-w-2xl space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-mono uppercase text-cyan-400 tracking-wider">
            Operational Methodology
          </span>
          <h2 className="font-modern text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            The Three Dimensions of Advocacy
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Uniting mathematical dispute forensics with high-court oral argumentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {IMMERSIVE_LEGAL_DATA.dimensions.map((dim) => (
            <div
              key={dim.code}
              className="p-5 sm:p-8 rounded-2xl bg-[#0C1425] border border-cyan-900/30 hover:border-cyan-500/40 transition-colors space-y-3 sm:space-y-4"
            >
              <div className="font-mono text-xl font-bold text-cyan-400">
                {dim.code}
              </div>
              <h3 className="font-modern text-lg font-bold text-white tracking-tight">
                {dim.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {dim.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
