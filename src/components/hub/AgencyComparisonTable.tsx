import React from 'react';
import { DesignRoute } from '../../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AgencyComparisonTableProps {
  onSelectDesign: (route: DesignRoute) => void;
}

export const AgencyComparisonTable: React.FC<AgencyComparisonTableProps> = ({ onSelectDesign }) => {
  const comparisonData = [
    {
      route: '/design-a' as DesignRoute,
      name: 'Design A — The Heritage Chambers',
      code: 'HERITAGE',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      brandArchetype: 'Judicial Authority & Classical Trust',
      idealPractices: 'Senior Advocates, Supreme Court & High Court Appellate, Constitutional, Estate Disputes',
      aestheticVibe: 'Warm Ivory, Forest Green, Muted Gold & Mahogany Wood',
      typographyPair: 'Playfair Display + Cormorant Garamond',
      signatureExperience: 'Archive Library, Reported Citations, Classical Brief Assessment',
    },
    {
      route: '/design-b' as DesignRoute,
      name: 'Design B — Modern Legal Authority',
      code: 'CORPORATE',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      brandArchetype: 'Corporate Strategist & High-Growth Partner',
      idealPractices: 'Corporate M&A, VC & PE Deal Structuring, DPDP Act Compliance, Fintech & SaaS',
      aestheticVibe: 'Crisp White, Charcoal, Deep Navy & Electric Cobalt',
      typographyPair: 'Plus Jakarta Sans + DM Sans',
      signatureExperience: 'Interactive Practice Matrix, Retainer Estimator, 4-Step Intake',
    },
    {
      route: '/design-c' as DesignRoute,
      name: 'Design C — Noir Luxury Law Firm',
      code: 'BOUTIQUE',
      badgeColor: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
      brandArchetype: 'Exclusive Confidante & Crisis Commander',
      idealPractices: 'High-Stakes Arbitration (SIAC/LCIA), Private Family Wealth, Boardroom Takeovers',
      aestheticVibe: 'Obsidian Black, Brushed Brass, Champagne Gold & Travertine',
      typographyPair: 'Cinzel + Cormorant Garamond',
      signatureExperience: 'Bespoke 10-Case Mandate Limit, Encrypted Consultation Vault',
    },
    {
      route: '/design-d' as DesignRoute,
      name: 'Design D — Immersive Spatial Legal',
      code: 'SPATIAL 3D',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      brandArchetype: 'Frontier Pioneer & Multidimensional Engineer',
      idealPractices: 'Frontier AI, Energy Transition, Space Tech, Complex Infrastructure Concessions',
      aestheticVibe: 'Deep Midnight Slate, Cool Silver, Graphite & Controlled Cyan',
      typographyPair: 'Plus Jakarta Sans + Tabular Monospace',
      signatureExperience: 'Real Three.js 3D Spatial Geometry, Multidimensional Dispute Matrix',
    },
  ];

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="font-mono text-[11px] sm:text-xs uppercase text-amber-400 tracking-wider">
            Client Strategy Evaluation
          </span>
          <h3 className="text-lg sm:text-2xl font-bold text-white mt-1">
            Comparative Architecture Matrix
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
            Each concept is custom-engineered from the ground up for a distinct Indian legal market segment.
          </p>
        </div>
      </div>

      {/* Mobile Card List (Screen width < 768px) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {comparisonData.map((item) => (
          <div
            key={item.route}
            className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border mb-1.5 ${item.badgeColor}`}>
                  {item.code}
                </span>
                <h4 className="font-bold text-white text-sm">{item.name}</h4>
                <div className="text-[11px] text-amber-400 font-medium">{item.brandArchetype}</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-neutral-800/80">
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Best Suited For:</span>
                <span className="text-[11px]">{item.idealPractices}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Visual Identity:</span>
                <span className="text-[11px] text-neutral-400">{item.aestheticVibe}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Typography:</span>
                <span className="text-[11px] font-mono text-neutral-400">{item.typographyPair}</span>
              </div>
            </div>

            <button
              onClick={() => onSelectDesign(item.route)}
              className="w-full mt-2 py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 border border-neutral-700 transition-colors"
            >
              <span>Inspect {item.code} Website</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        ))}
      </div>

      {/* Desktop / Tablet Table (Screen width >= 768px) */}
      <div className="hidden md:block overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left text-xs text-neutral-300 border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-neutral-800 text-[11px] font-mono uppercase text-neutral-400">
              <th className="py-3 px-3 lg:px-4 font-semibold">Concept Direction</th>
              <th className="py-3 px-3 lg:px-4 font-semibold">Ideal Practice Profile</th>
              <th className="py-3 px-3 lg:px-4 font-semibold">Visual Identity</th>
              <th className="py-3 px-3 lg:px-4 font-semibold">Typography</th>
              <th className="py-3 px-3 lg:px-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/60">
            {comparisonData.map((row) => (
              <tr key={row.route} className="hover:bg-neutral-800/30 transition-colors">
                <td className="py-4 px-3 lg:px-4 font-semibold text-white">
                  <div>{row.name}</div>
                  <div className="text-[11px] text-amber-400/90 font-normal mt-0.5">
                    {row.brandArchetype}
                  </div>
                </td>
                <td className="py-4 px-3 lg:px-4 max-w-xs">{row.idealPractices}</td>
                <td className="py-4 px-3 lg:px-4 max-w-xs">{row.aestheticVibe}</td>
                <td className="py-4 px-3 lg:px-4 font-mono text-[11px] text-neutral-400">{row.typographyPair}</td>
                <td className="py-4 px-3 lg:px-4 text-right">
                  <button
                    onClick={() => onSelectDesign(row.route)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs border border-neutral-700 transition-colors whitespace-nowrap"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
