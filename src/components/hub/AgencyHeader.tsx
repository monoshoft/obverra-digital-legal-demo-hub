import React, { useState } from 'react';
import { DEMO_CONFIG } from '../../data/sharedLegalData';
import { Sparkles, ArrowRight, ShieldCheck, Phone, Menu, X } from 'lucide-react';
import { DesignRoute } from '../../types';

interface AgencyHeaderProps {
  onNavigate: (route: DesignRoute) => void;
  onOpenCompliance?: () => void;
}

export const AgencyHeader: React.FC<AgencyHeaderProps> = ({ onNavigate, onOpenCompliance }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="flex items-center gap-2 group min-w-0"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-neutral-950 font-bold font-mono text-xs sm:text-sm flex items-center justify-center tracking-tighter shrink-0">
              OD
            </div>
            <div className="min-w-0">
              <span className="font-bold tracking-tight text-white text-sm sm:text-base truncate block">
                OBVERRA DIGITAL
              </span>
              <span className="text-[10px] sm:text-[11px] text-neutral-400 font-mono truncate block">
                Legal Practice Showcase
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs text-neutral-400">
          <button
            onClick={() => onNavigate('/design-a')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Design A: Heritage
          </button>
          <button
            onClick={() => onNavigate('/design-b')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Design B: Modern
          </button>
          <button
            onClick={() => onNavigate('/design-c')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Design C: Noir Luxury
          </button>
          <button
            onClick={() => onNavigate('/design-d')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Design D: Spatial 3D
          </button>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="hidden sm:inline-flex items-center text-[10px] sm:text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
            ₹80,000 Tier
          </span>

          {onOpenCompliance && (
            <button
              onClick={onOpenCompliance}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-neutral-300 text-xs transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>BCI Ethics</span>
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-950 px-4 py-4 space-y-3 text-xs shadow-2xl">
          <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 pb-1 border-b border-neutral-800">
            Select Legal Website Concept
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <button
              onClick={() => {
                onNavigate('/design-a');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 flex items-center justify-between"
            >
              <div>
                <div className="font-semibold text-white">Design A: The Heritage Chambers</div>
                <div className="text-[11px] text-neutral-400">Supreme Court & High Court Advocates</div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
            </button>

            <button
              onClick={() => {
                onNavigate('/design-b');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 flex items-center justify-between"
            >
              <div>
                <div className="font-semibold text-white">Design B: Modern Legal Authority</div>
                <div className="text-[11px] text-neutral-400">Corporate, M&A & Technology Counsel</div>
              </div>
              <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 ml-2" />
            </button>

            <button
              onClick={() => {
                onNavigate('/design-c');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 flex items-center justify-between"
            >
              <div>
                <div className="font-semibold text-white">Design C: Noir Luxury Law Firm</div>
                <div className="text-[11px] text-neutral-400">Boutique High-Stakes Litigation & Private Wealth</div>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
            </button>

            <button
              onClick={() => {
                onNavigate('/design-d');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 flex items-center justify-between"
            >
              <div>
                <div className="font-semibold text-white">Design D: Immersive Spatial Legal</div>
                <div className="text-[11px] text-neutral-400">3D Interactive Spatial Justice Architecture</div>
              </div>
              <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
            </button>
          </div>

          {onOpenCompliance && (
            <div className="pt-2 border-t border-neutral-800">
              <button
                onClick={() => {
                  onOpenCompliance();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 rounded-lg border border-neutral-800 text-neutral-300 text-center text-xs flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Bar Council Rule 36 Compliance Details</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
