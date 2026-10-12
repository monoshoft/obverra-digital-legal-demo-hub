import React, { useState } from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { DEMO_CONFIG } from '../../../data/sharedLegalData';
import { Phone, Menu, X, Landmark, ArrowRight, ArrowLeft } from 'lucide-react';
import { DesignRoute } from '../../../types';

interface HeritageHeaderProps {
  onOpenConsultation: () => void;
  onNavigate: (route: DesignRoute) => void;
}

export const HeritageHeader: React.FC<HeritageHeaderProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D5] text-[#2B231F] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group text-left min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#C5A880] bg-[#1C2B22] text-[#FBF9F5] flex items-center justify-center font-editorial text-sm sm:text-lg font-bold tracking-tight shadow-sm shrink-0">
              KS
            </div>
            <div className="min-w-0">
              <div className="font-heritage text-sm sm:text-lg font-bold tracking-tight text-[#1C2B22] leading-tight truncate">
                {HERITAGE_DATA.firmName}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#7A6E5F] font-serif italic truncate">
                Supreme Court & High Courts · Est. 1974
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-serif text-[#4A3F35]">
          <a href="#about" className="hover:text-[#1C2B22] transition-colors py-1">
            Chambers Pedigree
          </a>
          <a href="#practice-areas" className="hover:text-[#1C2B22] transition-colors py-1">
            Practice Areas
          </a>
          <a href="#advocates" className="hover:text-[#1C2B22] transition-colors py-1">
            Senior Counsel
          </a>
          <a href="#process" className="hover:text-[#1C2B22] transition-colors py-1">
            Chambers Method
          </a>
          <a href="#insights" className="hover:text-[#1C2B22] transition-colors py-1">
            Appellate Notes
          </a>
          <a href="#contact" className="hover:text-[#1C2B22] transition-colors py-1">
            Registry & Contact
          </a>
        </nav>

        {/* Right CTA Zone */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* "All Designs" link */}
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-[#DED7CA] hover:border-[#1C2B22] text-[#4A3F35] hover:text-[#1C2B22] text-[11px] sm:text-xs font-serif transition-colors cursor-pointer"
            title="Return to OBVERRA Digital Demo Hub"
          >
            <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A880]" />
            <span className="xs:inline">Hub</span>
          </button>

          <a
            href={`tel:${HERITAGE_DATA.phone.replace(/[^0-9+]/g, '')}`}
            className="hidden xl:flex items-center gap-1.5 text-xs font-serif text-[#1C2B22] hover:text-[#C5A880] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{HERITAGE_DATA.phone}</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:flex px-3.5 py-2 rounded-lg bg-[#1C2B22] text-[#FBF9F5] hover:bg-[#273D30] font-serif text-xs font-medium tracking-wide transition-all shadow-sm items-center gap-1.5 border border-[#1C2B22] cursor-pointer"
          >
            <span>Chambers Conference</span>
            <ArrowRight className="w-3 h-3 text-[#C5A880]" />
          </button>

          {/* Mobile Consult button */}
          <button
            onClick={onOpenConsultation}
            className="sm:hidden px-2 py-1.5 rounded-lg bg-[#1C2B22] text-[#FBF9F5] text-[11px] font-serif cursor-pointer shrink-0"
          >
            Consult
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-[#1C2B22] hover:bg-[#EAE3D5]/50 transition-colors shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E8E2D5] px-4 sm:px-6 py-4 space-y-4 text-xs font-serif text-[#2B231F] shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2.5">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C2B22]"
            >
              Chambers Pedigree
            </a>
            <a
              href="#practice-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C2B22]"
            >
              Practice Areas
            </a>
            <a
              href="#advocates"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C2B22]"
            >
              Senior Counsel
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C2B22]"
            >
              Chambers Method
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C2B22]"
            >
              Appellate Notes
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C2B22]"
            >
              Registry & Contact
            </a>
          </div>

          <div className="pt-3 border-t border-[#E8E2D5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/');
              }}
              className="w-full py-2 px-3 rounded-lg border border-[#C5A880] text-[#1C2B22] font-serif text-center flex items-center justify-center gap-1.5 bg-[#F4EFE6]"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Return to All Designs Hub</span>
            </button>
            <a
              href={`tel:${HERITAGE_DATA.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 py-2 text-xs text-[#1C2B22]"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Direct: {HERITAGE_DATA.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-lg bg-[#1C2B22] text-[#FBF9F5] font-serif text-center mt-1 cursor-pointer"
            >
              Schedule Chambers Conference
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
