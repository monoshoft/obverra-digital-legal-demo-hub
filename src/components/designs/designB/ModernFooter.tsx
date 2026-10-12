import React from 'react';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';
import { BAR_COUNCIL_DISCLAIMER, DEMO_CONFIG } from '../../../data/sharedLegalData';
import { DesignRoute } from '../../../types';
import { Building2, Phone, Mail, MapPin, Shield, ArrowRight } from 'lucide-react';

interface ModernFooterProps {
  onOpenCompliance: () => void;
  onNavigate: (route: DesignRoute) => void;
  onOpenConsultation: () => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({
  onOpenCompliance,
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-12 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Overview */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base font-mono">
                AX
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {MODERN_LEGAL_DATA.firmName}
                </h3>
                <p className="text-[11px] text-slate-400">
                  Corporate · Venture Capital · M&A · Tech Regulations
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing clear legal strategy for transactions, regulatory authorisations, and dispute management across India and global financial centres.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center gap-2"
              >
                <span>Request Corporate Intake</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Offices & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
              Offices & Direct Access
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>One BKC, G Block, Bandra Kurla Complex, Mumbai 400051</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href={`tel:${MODERN_LEGAL_DATA.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {MODERN_LEGAL_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href={`mailto:${MODERN_LEGAL_DATA.email}`} className="hover:text-white transition-colors">
                  {MODERN_LEGAL_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Switch Designs */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
              OBVERRA Demo Switcher
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors text-left">
                  ← Return to Demo Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/design-a')} className="hover:text-white transition-colors text-left">
                  View Design A (Heritage Chambers)
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

        {/* Bar Council Compliance Notice */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              Bar Council of India Rule 36 Compliance Notice
            </span>
            <button
              onClick={onOpenCompliance}
              className="underline text-blue-400 hover:text-white transition-colors"
            >
              View Full Notice
            </button>
          </div>
          <p className="opacity-90 leading-relaxed">
            {BAR_COUNCIL_DISCLAIMER.statement}
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 pt-2">
          <div>
            © 2026 {MODERN_LEGAL_DATA.firmName}. Commercial Law Practice.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              OBVERRA DIGITAL Showcase
            </button>
            <span>·</span>
            <button onClick={onOpenCompliance} className="hover:text-white transition-colors">
              Non-Solicitation Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
