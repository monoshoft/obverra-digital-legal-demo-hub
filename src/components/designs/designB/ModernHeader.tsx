import React, { useState } from 'react';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';
import { DEMO_CONFIG } from '../../../data/sharedLegalData';
import { ArrowRight, ArrowLeft, Phone, Menu, X, Building2 } from 'lucide-react';
import { DesignRoute } from '../../../types';

interface ModernHeaderProps {
  onOpenConsultation: () => void;
  onNavigate: (route: DesignRoute) => void;
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group text-left min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs sm:text-base font-mono tracking-tighter group-hover:bg-blue-600 transition-colors shrink-0">
              AX
            </div>
            <div className="min-w-0">
              <div className="font-modern text-sm sm:text-lg font-bold tracking-tight text-slate-900 leading-tight truncate">
                {MODERN_LEGAL_DATA.firmName}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                Mumbai (BKC) · Gurugram · Bengaluru
              </div>
            </div>
          </a>
        </div>

        {/* Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-medium text-slate-600">
          <a href="#practices" className="hover:text-slate-900 transition-colors py-1">
            Corporate Practices
          </a>
          <a href="#metrics" className="hover:text-slate-900 transition-colors py-1">
            Deal Track Record
          </a>
          <a href="#team" className="hover:text-slate-900 transition-colors py-1">
            Partner Bench
          </a>
          <a href="#journey" className="hover:text-slate-900 transition-colors py-1">
            Client Journey
          </a>
          <a href="#insights" className="hover:text-slate-900 transition-colors py-1">
            Regulatory Briefs
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors py-1">
            Offices
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* "All Designs" link */}
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-[11px] sm:text-xs font-medium transition-colors cursor-pointer"
            title="Return to OBVERRA Digital Demo Hub"
          >
            <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
            <span>Hub</span>
          </button>

          <a
            href={`tel:${MODERN_LEGAL_DATA.phone.replace(/[^0-9+]/g, '')}`}
            className="hidden xl:flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{MODERN_LEGAL_DATA.phone}</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:flex px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-colors items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>Book Corporate Intake</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="sm:hidden px-2 py-1.5 rounded-lg bg-blue-600 text-white text-[11px] font-medium cursor-pointer shrink-0"
          >
            Intake
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-4 space-y-4 text-xs font-medium text-slate-700 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2.5">
            <a href="#practices" onClick={() => setMobileMenuOpen(false)} className="py-1">Corporate Practices</a>
            <a href="#metrics" onClick={() => setMobileMenuOpen(false)} className="py-1">Deal Track Record</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="py-1">Partner Bench</a>
            <a href="#journey" onClick={() => setMobileMenuOpen(false)} className="py-1">Client Journey</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="py-1">Regulatory Briefs</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1">Offices</a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/');
              }}
              className="w-full py-2 px-3 rounded-lg border border-slate-200 text-slate-800 text-center flex items-center justify-center gap-1.5 bg-slate-50 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-blue-600" />
              <span>Return to All Designs Hub</span>
            </button>
            <a
              href={`tel:${MODERN_LEGAL_DATA.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 py-2 text-xs text-slate-700"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Direct: {MODERN_LEGAL_DATA.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-center text-xs font-semibold cursor-pointer"
            >
              Book Corporate Intake
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
