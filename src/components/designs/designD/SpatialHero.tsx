import React from 'react';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';
import { DEMO_CONFIG } from '../../../data/sharedLegalData';
import { SpatialCanvasScene } from './SpatialCanvasScene';
import { ArrowRight, MessageSquare, Phone, Box, Sparkles } from 'lucide-react';

interface SpatialHeroProps {
  onOpenConsultation: () => void;
}

export const SpatialHero: React.FC<SpatialHeroProps> = ({ onOpenConsultation }) => {
  const whatsappUrl = `https://wa.me/${DEMO_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Inquiry for Apex Lex Spatial Practice regarding complex dispute architecture / frontier regulation.'
  )}`;

  return (
    <section id="hero" className="relative bg-[#070B14] text-white pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-cyan-950/60 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Semantic Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 sm:px-3 py-1.5 rounded-lg max-w-full">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="uppercase tracking-wider sm:tracking-widest text-[10px] break-words truncate sm:overflow-visible">
                <span className="hidden sm:inline">SPATIAL DISPUTE MODELING · DELHI · BENGALURU · GURUGRAM</span>
                <span className="sm:hidden">SPATIAL DISPUTE MODELING · TECH LAW</span>
              </span>
            </div>

            <h1 className="font-modern text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Navigate Complexity.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 block sm:inline">
                Move Forward with Confidence.
              </span>
            </h1>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal opacity-90">
              {IMMERSIVE_LEGAL_DATA.heroSubheadline}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Initiate Strategic Assessment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-xl border border-cyan-900/60 hover:border-cyan-500/60 bg-slate-900/60 text-slate-200 hover:text-white font-mono text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>WhatsApp Command Desk</span>
              </a>

              <a
                href={`tel:${IMMERSIVE_LEGAL_DATA.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden sm:inline-flex px-3 py-3 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{IMMERSIVE_LEGAL_DATA.phone}</span>
              </a>
            </div>

            {/* Hub Metrics */}
            <div className="pt-5 sm:pt-6 border-t border-cyan-950/60 grid grid-cols-3 gap-2 sm:gap-4 text-xs font-mono text-slate-400">
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-white text-xs sm:text-sm">3D Forensics</div>
                <div className="text-[9px] sm:text-[11px] text-cyan-400/80 mt-0.5">Arbitral Models</div>
              </div>
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-white text-xs sm:text-sm">14 GW+</div>
                <div className="text-[9px] sm:text-[11px] text-cyan-400/80 mt-0.5">Clean Energy</div>
              </div>
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-white text-xs sm:text-sm">IN-SPACe</div>
                <div className="text-[9px] sm:text-[11px] text-cyan-400/80 mt-0.5">Space Regs</div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Three.js Canvas */}
          <div className="lg:col-span-5 w-full relative">
            <div className="rounded-2xl sm:rounded-3xl border border-cyan-900/40 bg-gradient-to-b from-slate-900/40 to-[#070B14] p-1.5 sm:p-2 shadow-2xl relative w-full overflow-hidden">
              <SpatialCanvasScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
