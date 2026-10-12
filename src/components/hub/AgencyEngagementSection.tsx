import React from 'react';
import { DEMO_CONFIG } from '../../data/sharedLegalData';
import { ShieldCheck, MessageSquare, Phone, Check, Sparkles, Clock, Globe } from 'lucide-react';

export const AgencyEngagementSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${DEMO_CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hello OBVERRA DIGITAL, I am interested in discussing a bespoke legal website project for our law practice.'
  )}`;

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 sm:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Bespoke Client Engagement</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Tailored Legal Web Architecture · ₹80,000 Benchmark
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Every practice is unique. We adapt these architectural blueprints into a bespoke digital home for your chambers or firm, fully aligned with your specific practice areas, partner credentials, and Bar Council guidelines.
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 text-center"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Discuss Custom Project</span>
          </a>
          <a
            href={`tel:${DEMO_CONFIG.phoneDirect.replace(/[^0-9+]/g, '')}`}
            className="px-5 py-3 rounded-xl border border-neutral-700 hover:border-neutral-600 bg-neutral-900 text-neutral-200 hover:text-white font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 text-center"
          >
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Direct Call</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800 text-xs">
        <div className="bg-neutral-950/70 p-4 rounded-xl border border-neutral-800/80 space-y-2">
          <div className="font-mono text-[11px] text-amber-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>BCI Rule 36 Ethical Design</span>
          </div>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Non-solicitation compliant layouts, formal disclaimer modals, and dignified editorial typography tailored for Indian legal practitioners.
          </p>
        </div>

        <div className="bg-neutral-950/70 p-4 rounded-xl border border-neutral-800/80 space-y-2">
          <div className="font-mono text-[11px] text-blue-400 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span>Flawless Mobile Experience</span>
          </div>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Engineered to display with pixel perfection on any mobile phone or tablet without zooming, horizontal drift, or clipped text.
          </p>
        </div>

        <div className="bg-neutral-950/70 p-4 rounded-xl border border-neutral-800/80 space-y-2">
          <div className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>Rapid 2-Week Deployment</span>
          </div>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Turnkey delivery including custom domain configuration, SSL certificate, WhatsApp client routing, and secure cloud hosting.
          </p>
        </div>
      </div>
    </div>
  );
};
