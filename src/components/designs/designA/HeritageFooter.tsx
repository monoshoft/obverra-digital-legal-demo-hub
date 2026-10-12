import React from 'react';
import { HERITAGE_DATA } from '../../../data/designAData';
import { BAR_COUNCIL_DISCLAIMER, DEMO_CONFIG } from '../../../data/sharedLegalData';
import { DesignRoute } from '../../../types';
import { Landmark, Phone, Mail, MapPin, Shield, ArrowUp, ArrowRight } from 'lucide-react';

interface HeritageFooterProps {
  onOpenCompliance: () => void;
  onNavigate: (route: DesignRoute) => void;
  onOpenConsultation: () => void;
}

export const HeritageFooter: React.FC<HeritageFooterProps> = ({
  onOpenCompliance,
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <footer id="contact" className="bg-[#1C2B22] text-[#FBF9F5] pt-16 pb-12 text-xs font-serif border-t border-[#2F4436]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2B3E31]">
          {/* Chambers Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A880] bg-[#15221B] text-[#FBF9F5] flex items-center justify-center font-editorial text-lg font-bold">
                KS
              </div>
              <div>
                <h3 className="font-heritage text-lg font-bold tracking-tight text-[#FBF9F5]">
                  {HERITAGE_DATA.firmName}
                </h3>
                <p className="text-[11px] text-[#A3B8AC] italic">
                  Chambers of Senior Advocates · Supreme Court of India
                </p>
              </div>
            </div>

            <p className="text-xs text-[#C7D4CD] leading-relaxed max-w-sm">
              Established in 1974. Providing seasoned appellate advocacy before the Supreme Court of India and High Courts across the country.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-lg bg-[#C5A880] text-[#1C2B22] hover:bg-[#D5BB93] font-medium text-xs transition-colors flex items-center gap-2"
              >
                <span>Request Chambers Conference</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Chambers Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heritage text-sm font-bold text-[#C5A880] uppercase tracking-wider">
              Chambers Registry & Location
            </h4>
            <div className="space-y-2 text-[#C7D4CD]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{HERITAGE_DATA.chambersAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${HERITAGE_DATA.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {HERITAGE_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${HERITAGE_DATA.email}`} className="hover:text-white transition-colors">
                  {HERITAGE_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav & Other Designs */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heritage text-sm font-bold text-[#C5A880] uppercase tracking-wider">
              Explore Demo Suite
            </h4>
            <ul className="space-y-2 text-[#C7D4CD]">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors text-left">
                  ← Return to All Designs Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/design-b')} className="hover:text-white transition-colors text-left">
                  View Design B (Modern Legal Authority)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/design-c')} className="hover:text-white transition-colors text-left">
                  View Design C (Noir Luxury Law)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/design-d')} className="hover:text-white transition-colors text-left">
                  View Design D (Immersive Spatial 3D)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bar Council Compliance Bar */}
        <div className="p-4 rounded-xl bg-[#15221B] border border-[#2B3E31] text-[11px] text-[#A3B8AC] space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#C5A880] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Bar Council of India Rule 36 Compliance Notice
            </span>
            <button
              onClick={onOpenCompliance}
              className="underline text-[#C5A880] hover:text-white transition-colors"
            >
              Read Full Notice
            </button>
          </div>
          <p className="opacity-90 leading-relaxed">
            {BAR_COUNCIL_DISCLAIMER.statement}
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E9689] pt-2">
          <div>
            © 1974–2026 {HERITAGE_DATA.firmName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              OBVERRA DIGITAL Showcase
            </button>
            <span>·</span>
            <button onClick={onOpenCompliance} className="hover:text-white transition-colors">
              Ethics & Non-Solicitation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
