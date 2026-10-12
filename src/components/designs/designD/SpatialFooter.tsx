import React from 'react';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';
import { BAR_COUNCIL_DISCLAIMER, DEMO_CONFIG } from '../../../data/sharedLegalData';
import { DesignRoute } from '../../../types';
import { Shield, Phone, Mail, MapPin, ArrowRight, Box } from 'lucide-react';

interface SpatialFooterProps {
  onOpenCompliance: () => void;
  onNavigate: (route: DesignRoute) => void;
  onOpenConsultation: () => void;
}

export const SpatialFooter: React.FC<SpatialFooterProps> = ({
  onOpenCompliance,
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <footer id="contact" className="bg-[#04070D] text-slate-400 pt-16 pb-12 text-xs border-t border-cyan-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-cyan-950/80">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-mono font-bold text-base">
                APX
              </div>
              <div>
                <h3 className="font-modern text-lg font-bold text-white tracking-tight">
                  {IMMERSIVE_LEGAL_DATA.firmName}
                </h3>
                <p className="text-[10px] font-mono text-cyan-400/80">
                  Dispute Architecture · Frontier Regulatory Engineering
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Deploying 3D spatial forensics and elite appellate representation across complex technology, energy, and infrastructure disputes.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2"
              >
                <span>Initiate Dispute Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Practice Hubs & Locations */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Practice Hubs
            </h4>
            <div className="space-y-2 text-slate-400 font-mono text-[11px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{IMMERSIVE_LEGAL_DATA.hubLocation}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${IMMERSIVE_LEGAL_DATA.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {IMMERSIVE_LEGAL_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${IMMERSIVE_LEGAL_DATA.email}`} className="hover:text-white transition-colors">
                  {IMMERSIVE_LEGAL_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Design Switcher */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              OBVERRA Demo Switcher
            </h4>
            <ul className="space-y-2 text-slate-400 font-mono">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors text-left">
                  ← All Designs Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/design-a')} className="hover:text-white transition-colors text-left">
                  Design A (The Heritage Chambers)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/design-b')} className="hover:text-white transition-colors text-left">
                  Design B (Modern Legal Authority)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/design-c')} className="hover:text-white transition-colors text-left">
                  Design C (Noir Luxury Law)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* BCI Notice */}
        <div className="p-4 rounded-xl bg-slate-950 border border-cyan-950 text-[11px] text-slate-400 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-cyan-400 flex items-center gap-1.5 font-mono">
              <Shield className="w-3.5 h-3.5" />
              Bar Council of India Rule 36 Compliance Notice
            </span>
            <button
              onClick={onOpenCompliance}
              className="underline text-cyan-400 hover:text-white transition-colors"
            >
              Review Full Notice
            </button>
          </div>
          <p className="opacity-90 leading-relaxed font-sans text-xs">
            {BAR_COUNCIL_DISCLAIMER.statement}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 pt-2 font-mono">
          <div>
            © 2026 {IMMERSIVE_LEGAL_DATA.firmName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              OBVERRA DIGITAL Showcase
            </button>
            <span>·</span>
            <button onClick={onOpenCompliance} className="hover:text-white transition-colors">
              Regulatory Declaration
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
