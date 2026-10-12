import React, { useState } from 'react';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';
import { DEMO_CONFIG } from '../../../data/sharedLegalData';
import { ArrowRight, ArrowLeft, Phone, Menu, X, Layers, Box } from 'lucide-react';
import { DesignRoute } from '../../../types';

interface SpatialHeaderProps {
  onOpenConsultation: () => void;
  onNavigate: (route: DesignRoute) => void;
}

export const SpatialHeader: React.FC<SpatialHeaderProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#070B14]/90 backdrop-blur-md border-b border-cyan-950/60 text-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group text-left min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs sm:text-base shadow-lg shadow-cyan-950/30 group-hover:border-cyan-400 transition-colors shrink-0">
              APX
            </div>
            <div className="min-w-0">
              <div className="font-modern text-sm sm:text-lg font-bold tracking-tight text-white leading-tight truncate">
                {IMMERSIVE_LEGAL_DATA.firmName}
              </div>
              <div className="text-[10px] text-cyan-400/80 font-mono tracking-wider truncate">
                Dispute Architecture · Frontier Law
              </div>
            </div>
          </a>
        </div>

        {/* Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs font-mono tracking-wide text-slate-400">
          <a href="#matrix" className="hover:text-cyan-400 transition-colors py-1">
            Frontier Domains
          </a>
          <a href="#dimensions" className="hover:text-cyan-400 transition-colors py-1">
            Dispute Dimensions
          </a>
          <a href="#advisors" className="hover:text-cyan-400 transition-colors py-1">
            Lead Partners
          </a>
          <a href="#perspectives" className="hover:text-cyan-400 transition-colors py-1">
            Perspectives
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors py-1">
            Practice Hubs
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* "All Designs" link */}
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-cyan-900/40 hover:border-cyan-500/60 text-slate-400 hover:text-cyan-300 text-[11px] sm:text-xs font-mono transition-colors cursor-pointer"
            title="Return to OBVERRA Digital Demo Hub"
          >
            <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
            <span>Hub</span>
          </button>

          <a
            href={`tel:${IMMERSIVE_LEGAL_DATA.phone.replace(/[^0-9+]/g, '')}`}
            className="hidden xl:flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{IMMERSIVE_LEGAL_DATA.phone}</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:flex px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20 items-center gap-1.5 cursor-pointer"
          >
            <span>Initiate Dispute Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="sm:hidden px-2 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-[11px] font-bold font-mono cursor-pointer shrink-0"
          >
            Review
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070B14] border-b border-cyan-950/80 px-4 sm:px-6 py-4 space-y-4 text-xs font-mono text-slate-300 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2.5">
            <a href="#matrix" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-400">Frontier Domains</a>
            <a href="#dimensions" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-400">Dispute Dimensions</a>
            <a href="#advisors" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-400">Lead Partners</a>
            <a href="#perspectives" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-400">Perspectives</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-400">Practice Hubs</a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/');
              }}
              className="w-full py-2 px-3 rounded-lg border border-cyan-900/50 text-slate-300 text-center flex items-center justify-center gap-1.5 bg-slate-900/60 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Return to All Designs Hub</span>
            </button>
            <a
              href={`tel:${IMMERSIVE_LEGAL_DATA.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 py-2 text-xs text-slate-400 font-mono"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Direct: {IMMERSIVE_LEGAL_DATA.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-center text-xs cursor-pointer"
            >
              Initiate Dispute Review
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
