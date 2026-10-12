import React from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { DEMO_CONFIG } from '../../../data/sharedLegalData';
import { ArrowRight, BookOpen, MessageSquare, Phone, Scale, Shield, Award } from 'lucide-react';

interface HeritageHeroProps {
  onOpenConsultation: () => void;
}

export const HeritageHero: React.FC<HeritageHeroProps> = ({ onOpenConsultation }) => {
  const whatsappUrl = `https://wa.me/${DEMO_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hello Kashyap & Sanghi Chambers, I am inquiring regarding an appellate matter before the Supreme Court / High Court.'
  )}`;

  return (
    <section id="hero" className="relative bg-[#FBF9F5] text-[#2B231F] pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden border-b border-[#EAE3D5]">
      {/* Subtle Classical Arch Background Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
        <div className="w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full border-[30px] sm:border-[40px] border-[#1C2B22] shrink-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Archival Badge */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs font-serif text-[#7A6E5F] border-b border-[#C5A880]/40 pb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C2B22] shrink-0" />
              <span className="tracking-wider sm:tracking-widest uppercase text-[10px] sm:text-[11px] font-medium">
                CHAMBERS EST. 1974 · NEW DELHI
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="italic hidden sm:inline">Appellate & Constitutional Practice</span>
            </div>

            {/* Marquee Headline */}
            <h1 className="font-heritage text-2xl sm:text-4xl lg:text-6xl text-[#1C2B22] font-bold tracking-tight leading-[1.15]">
              Counsel Built on Trust.{' '}
              <span className="italic font-normal block sm:inline text-[#3F5447]">
                Advocacy Grounded in Principle.
              </span>
            </h1>

            {/* Subheading Prose */}
            <p className="text-xs sm:text-base text-[#574B3F] font-serif leading-relaxed max-w-2xl">
              {HERITAGE_DATA.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#1C2B22] text-[#FBF9F5] hover:bg-[#273D30] font-serif text-xs font-medium tracking-wide transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Chambers Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-lg border border-[#C5A880] text-[#1C2B22] hover:bg-[#F2ECE1] font-serif text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span>WhatsApp Chambers Desk</span>
              </a>

              <a
                href={`tel:${HERITAGE_DATA.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden sm:inline-flex px-3 py-3 text-xs font-serif text-[#574B3F] hover:text-[#1C2B22] transition-colors items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{HERITAGE_DATA.phone}</span>
              </a>
            </div>

            {/* Editorial Trust Footnote */}
            <div className="pt-4 sm:pt-6 border-t border-[#EAE3D5] grid grid-cols-3 gap-2 sm:gap-4 text-xs font-serif text-[#574B3F]">
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-[#1C2B22] text-xs sm:text-base">52+ Years</div>
                <div className="text-[9px] sm:text-[11px] opacity-80 mt-0.5">At the Bar</div>
              </div>
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-[#1C2B22] text-xs sm:text-base">1,200+</div>
                <div className="text-[9px] sm:text-[11px] opacity-80 mt-0.5">Reported Decrees</div>
              </div>
              <div className="p-1 sm:p-0 text-center sm:text-left">
                <div className="font-bold text-[#1C2B22] text-xs sm:text-base">Supreme Court</div>
                <div className="text-[9px] sm:text-[11px] opacity-80 mt-0.5">Adjacent Registry</div>
              </div>
            </div>
          </div>

          {/* Right Column: Prestigious Chambers Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative p-5 sm:p-8 rounded-2xl bg-[#F4EFE6] border border-[#DCD3C3] shadow-lg text-center space-y-4 sm:space-y-6">
              {/* Ornamental Border Monogram */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#1C2B22] text-[#C5A880] flex items-center justify-center border-2 border-[#C5A880] shadow-md font-editorial text-xl sm:text-2xl font-bold">
                KS
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A6E5F]">
                  BAR COUNCIL OF DELHI · ENR. 1974
                </span>
                <h3 className="font-heritage text-lg sm:text-xl font-bold text-[#1C2B22]">
                  The Chambers of Senior Advocates
                </h3>
                <p className="text-xs font-serif text-[#574B3F] leading-relaxed max-w-sm mx-auto">
                  Representing matters before the Supreme Court of India, Delhi High Court, and International Arbitral Seats.
                </p>
              </div>

              {/* Chambers Address Block */}
              <div className="py-3 sm:py-4 border-y border-[#E0D7C7] text-xs font-serif text-[#4A3F35] space-y-1">
                <div className="font-semibold text-[#1C2B22]">Chambers Address:</div>
                <div className="text-[11px] sm:text-xs">{HERITAGE_DATA.chambersAddress}</div>
              </div>

              {/* Quick Prompt */}
              <div className="pt-1">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-lg border border-[#1C2B22] text-[#1C2B22] hover:bg-[#1C2B22] hover:text-[#FBF9F5] font-serif text-xs font-medium transition-colors cursor-pointer"
                >
                  Book an In-Person Case Conference
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
