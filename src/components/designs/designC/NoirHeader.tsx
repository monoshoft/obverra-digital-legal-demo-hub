import React, { useState } from 'react';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';
import { DEMO_CONFIG } from '../../../data/sharedLegalData';
import { ArrowRight, ArrowLeft, Phone, Menu, X, Shield, Lock } from 'lucide-react';
import { DesignRoute } from '../../../types';

interface NoirHeaderProps {
  onOpenConsultation: () => void;
  onNavigate: (route: DesignRoute) => void;
}

export const NoirHeader: React.FC<NoirHeaderProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#0B0C0E]/95 backdrop-blur-md border-b border-neutral-800 text-[#E2C896] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group text-left min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-900 border border-[#C9A86A] text-[#E2C896] flex items-center justify-center font-cinzel text-sm sm:text-base font-bold tracking-widest shadow-lg group-hover:border-[#E2C896] transition-colors shrink-0">
              Æ
            </div>
            <div className="min-w-0">
              <div className="font-cinzel text-sm sm:text-lg font-bold tracking-widest text-white leading-tight uppercase truncate">
                {NOIR_LUXURY_DATA.firmName}
              </div>
              <div className="text-[10px] text-[#A39276] font-mono tracking-wider truncate">
                Special Counsel · Nariman Point
              </div>
            </div>
          </a>
        </div>

        {/* Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs font-cinzel tracking-wider text-[#A39276]">
          <a href="#pillars" className="hover:text-white transition-colors py-1">
            Chambers Pillars
          </a>
          <a href="#practices" className="hover:text-white transition-colors py-1">
            Mandate Domains
          </a>
          <a href="#counsel" className="hover:text-white transition-colors py-1">
            Senior Partners
          </a>
          <a href="#briefings" className="hover:text-white transition-colors py-1">
            Confidential Briefs
          </a>
          <a href="#contact" className="hover:text-white transition-colors py-1">
            Private Office
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* "All Designs" link */}
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-neutral-800 hover:border-[#C9A86A] text-[#A39276] hover:text-[#E2C896] text-[11px] sm:text-xs font-cinzel tracking-wider transition-colors cursor-pointer"
            title="Return to OBVERRA Digital Demo Hub"
          >
            <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A86A]" />
            <span>Hub</span>
          </button>

          <a
            href={`tel:${NOIR_LUXURY_DATA.phone.replace(/[^0-9+]/g, '')}`}
            className="hidden xl:flex items-center gap-1.5 text-xs text-[#A39276] hover:text-white transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span>{NOIR_LUXURY_DATA.phone}</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:flex px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#C9A86A] to-[#E2C896] hover:from-[#D4AF37] hover:to-[#F3DEB0] text-neutral-950 font-cinzel font-semibold text-xs tracking-wider transition-all shadow-md items-center gap-1.5 cursor-pointer"
          >
            <Lock className="w-3 h-3 text-neutral-950" />
            <span>Confidential Intake</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="sm:hidden px-2 py-1.5 rounded-lg bg-[#C9A86A] text-neutral-950 text-[11px] font-cinzel font-semibold tracking-wider cursor-pointer shrink-0"
          >
            Intake
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0C0E] border-b border-neutral-800 px-4 sm:px-6 py-4 space-y-4 text-xs font-cinzel text-neutral-300 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2.5">
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#C9A86A]">Chambers Pillars</a>
            <a href="#practices" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#C9A86A]">Mandate Domains</a>
            <a href="#counsel" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#C9A86A]">Senior Partners</a>
            <a href="#briefings" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#C9A86A]">Confidential Briefs</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#C9A86A]">Private Office</a>
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/');
              }}
              className="w-full py-2 px-3 rounded-lg border border-neutral-800 text-neutral-300 text-center flex items-center justify-center gap-1.5 bg-neutral-900/60 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Return to All Designs Hub</span>
            </button>
            <a
              href={`tel:${NOIR_LUXURY_DATA.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 py-2 text-xs text-neutral-400 font-mono"
            >
              <Phone className="w-4 h-4 text-[#C9A86A]" />
              <span>Direct: {NOIR_LUXURY_DATA.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-lg bg-[#C9A86A] text-neutral-950 font-semibold text-center text-xs tracking-wider cursor-pointer"
            >
              Access Confidential Intake Vault
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
