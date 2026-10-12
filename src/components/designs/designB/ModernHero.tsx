import React from 'react';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';
import { DEMO_CONFIG } from '../../../data/sharedLegalData';
import { ArrowRight, MessageSquare, Phone, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface ModernHeroProps {
  onOpenConsultation: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({ onOpenConsultation }) => {
  const whatsappUrl = `https://wa.me/${DEMO_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hello Axiom Law Partners, we would like to schedule a corporate legal consultation regarding an upcoming transaction / compliance matter.'
  )}`;

  return (
    <section id="hero" className="bg-slate-50 text-slate-900 pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Clean Metadata Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 bg-blue-50 border border-blue-200/80 px-2.5 sm:px-3 py-1.5 rounded-lg max-w-full">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span className="uppercase font-semibold tracking-wider text-[10px] sm:text-[11px] break-words truncate sm:overflow-visible">
                <span className="hidden sm:inline">CORPORATE & TRANSACTIONAL COUNSEL · INDIA & CROSS-BORDER</span>
                <span className="sm:hidden">CORPORATE & TRANSACTIONAL COUNSEL</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-modern text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Clear Legal Strategy for{' '}
              <span className="text-blue-600 block sm:inline">
                Complex Decisions.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {MODERN_LEGAL_DATA.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Initiate Conflict Check & Scope Review</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:text-slate-900 font-medium text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Enterprise Desk</span>
              </a>
            </div>

            {/* Office Presence List */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-500">
              <span className="font-semibold text-slate-800">Chambers:</span>
              {MODERN_LEGAL_DATA.officeLocations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Corporate Deal Structuring Matrix Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-5 sm:p-8 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-600 tracking-wider font-semibold">
                    TRANSACTIONAL PRACTICE DESK
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    Corporate Onboarding Memo
                  </h3>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                  24H
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-800">Transparent Fixed-Fee Milestones</div>
                  <p className="text-[11px] text-slate-500">
                    Predictable retainers for fundraising rounds, regulatory filings, and general corporate maintenance.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-800">DPDP Act 2023 Readiness Audit</div>
                  <p className="text-[11px] text-slate-500">
                    Proprietary 40-point data privacy checklist and consent architecture vetting for digital platforms.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-800">Cross-Border Foreign Inward Filings</div>
                  <p className="text-[11px] text-slate-500">
                    FC-GPR / FC-TRS Reserve Bank compliance coordination and FEMA regulatory advisory.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors text-center cursor-pointer"
                >
                  Schedule Partner Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
