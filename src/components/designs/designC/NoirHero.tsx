import React from 'react';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';
import { DEMO_CONFIG } from '../../../data/sharedLegalData';
import { ArrowRight, Lock, MessageSquare, Phone, Shield, ShieldAlert } from 'lucide-react';

interface NoirHeroProps {
  onOpenConsultation: () => void;
}

export const NoirHero: React.FC<NoirHeroProps> = ({ onOpenConsultation }) => {
  const whatsappUrl = `https://wa.me/${DEMO_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Private Inquiry for Aethelgard Legal Counsel regarding a high-stakes mandate.'
  )}`;

  return (
    <section id="hero" className="relative bg-[#0B0C0E] text-neutral-100 pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 border-b border-neutral-800/80 overflow-hidden">
      {/* Subtle Atmospheric Dark Vignette Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-[#181B22]/40 via-[#0B0C0E] to-[#0B0C0E] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Discreet Luxury Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A86A] bg-neutral-900/80 border border-[#C9A86A]/30 px-2.5 sm:px-3 py-1.5 rounded-md max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] shrink-0" />
              <span className="uppercase tracking-wider sm:tracking-widest text-[10px] truncate">
                SPECIAL COUNSEL · NARIMAN POINT, MUMBAI
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-6xl font-bold tracking-wider text-white leading-[1.15]">
              Precision in Counsel.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A86A] via-[#E2C896] to-[#FAF0DD] block sm:inline">
                Resolve in Action.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-base text-neutral-300 font-editorial leading-relaxed max-w-2xl opacity-90">
              {NOIR_LUXURY_DATA.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#C9A86A] to-[#E2C896] hover:from-[#D4AF37] hover:to-[#F3DEB0] text-neutral-950 font-cinzel font-bold text-xs tracking-wider transition-all shadow-lg shadow-[#C9A86A]/10 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Enter Confidential Intake Vault</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-xl border border-neutral-700 hover:border-[#C9A86A] bg-neutral-900/60 text-neutral-200 hover:text-white font-cinzel text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span>Encrypted WhatsApp Dispatch</span>
              </a>
            </div>

            {/* Footnote Specifications */}
            <div className="pt-5 sm:pt-7 border-t border-neutral-800/80 grid grid-cols-3 gap-2 sm:gap-4 text-xs font-mono text-neutral-400">
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-white text-xs sm:text-sm">10 Matters</div>
                <div className="text-[9px] sm:text-[11px] text-[#A39276] mt-0.5">Active Cap</div>
              </div>
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-white text-xs sm:text-sm">SIAC / LCIA</div>
                <div className="text-[9px] sm:text-[11px] text-[#A39276] mt-0.5">Arbitral Seats</div>
              </div>
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-white text-xs sm:text-sm">Strict NDA</div>
                <div className="text-[9px] sm:text-[11px] text-[#A39276] mt-0.5">Privilege</div>
              </div>
            </div>
          </div>

          {/* Right Column: Obsidian Vault Monogram Sculpture */}
          <div className="lg:col-span-5 w-full">
            <div className="relative p-5 sm:p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 shadow-2xl text-center space-y-4 sm:space-y-6">
              {/* Metallic Emblem */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black border-2 border-[#C9A86A] text-[#E2C896] flex items-center justify-center font-cinzel text-2xl sm:text-3xl font-extrabold shadow-2xl">
                Æ
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C9A86A]">
                  EXCLUSIVE ADVISORY PROTOCOL
                </span>
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wider">
                  The Private Retainer Desk
                </h3>
                <p className="text-xs text-neutral-400 font-editorial leading-relaxed max-w-sm mx-auto">
                  Reserved strictly for enterprise crises, contested succession battles, and international arbitral enforcement exceeding ₹500 Cr.
                </p>
              </div>

              {/* Location info */}
              <div className="p-3 sm:p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-xs font-mono text-neutral-400 space-y-1">
                <div className="text-[#C9A86A] font-semibold">Private Penthouse Suites</div>
                <div className="text-[11px] sm:text-xs">{NOIR_LUXURY_DATA.privateOffice}</div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 rounded-xl border border-[#C9A86A]/60 text-[#E2C896] hover:bg-[#C9A86A] hover:text-neutral-950 font-cinzel text-xs font-semibold tracking-wider transition-colors cursor-pointer"
              >
                Request Private Counsel Conference
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
