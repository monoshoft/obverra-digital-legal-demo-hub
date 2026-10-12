import React from 'react';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';
import { BAR_COUNCIL_DISCLAIMER, DEMO_CONFIG } from '../../../data/sharedLegalData';
import { DesignRoute } from '../../../types';
import { Shield, Phone, Mail, MapPin, ArrowRight, Lock } from 'lucide-react';

interface NoirFooterProps {
  onOpenCompliance: () => void;
  onNavigate: (route: DesignRoute) => void;
  onOpenConsultation: () => void;
}

export const NoirFooter: React.FC<NoirFooterProps> = ({
  onOpenCompliance,
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <footer id="contact" className="bg-[#07080A] text-neutral-400 pt-16 pb-12 text-xs border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-900">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black border border-[#C9A86A] text-[#E2C896] flex items-center justify-center font-cinzel text-lg font-bold">
                Æ
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white tracking-widest uppercase">
                  {NOIR_LUXURY_DATA.firmName}
                </h3>
                <p className="text-[10px] font-mono text-[#A39276]">
                  Boutique Litigation · Strategic Counsel · Private Family Wealth
                </p>
              </div>
            </div>

            <p className="text-xs font-editorial text-neutral-400 leading-relaxed max-w-sm text-sm">
              Providing decisive high-stakes representation before supreme forums, international tribunals, and statutory investigative benches.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#C9A86A] to-[#E2C896] text-neutral-950 font-cinzel font-bold text-xs tracking-wider transition-all flex items-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Enter Intake Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Private Office & Registry */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#C9A86A] tracking-widest">
              Private Office & Registry
            </h4>
            <div className="space-y-2 text-neutral-400 font-mono text-[11px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
                <span>{NOIR_LUXURY_DATA.privateOffice}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <a href={`tel:${NOIR_LUXURY_DATA.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {NOIR_LUXURY_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <a href={`mailto:${NOIR_LUXURY_DATA.email}`} className="hover:text-white transition-colors">
                  {NOIR_LUXURY_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Demo switcher */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#C9A86A] tracking-widest">
              Design Switcher
            </h4>
            <ul className="space-y-2 text-neutral-400 font-cinzel">
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
                <button onClick={() => onNavigate('/design-d')} className="hover:text-white transition-colors text-left">
                  Design D (Immersive Spatial 3D)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bar Council Compliance notice */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-400 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#C9A86A] flex items-center gap-1.5 font-cinzel">
              <Shield className="w-3.5 h-3.5" />
              Bar Council of India Rule 36 Compliance Notice
            </span>
            <button
              onClick={onOpenCompliance}
              className="underline text-[#C9A86A] hover:text-white transition-colors"
            >
              Examine Notice
            </button>
          </div>
          <p className="opacity-90 leading-relaxed font-editorial text-xs">
            {BAR_COUNCIL_DISCLAIMER.statement}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 pt-2 font-mono">
          <div>
            © 2026 {NOIR_LUXURY_DATA.firmName}. Strict Non-Solicitation Policy.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              OBVERRA DIGITAL Showcase
            </button>
            <span>·</span>
            <button onClick={onOpenCompliance} className="hover:text-white transition-colors">
              Ethics Declaration
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
