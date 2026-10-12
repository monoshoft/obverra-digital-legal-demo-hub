import React from 'react';
import { DesignRoute } from '../../types';
import { ArrowRight, Check, Compass, Layers, Scale, Shield, Sparkles } from 'lucide-react';

export interface DesignCardProps {
  id: string;
  route: DesignRoute;
  name: string;
  tagline: string;
  clientPersona: string;
  primaryPalette: { name: string; hex: string }[];
  typographySummary: string;
  coreHighlights: string[];
  themeBackground: string;
  accentBorder: string;
  onSelect: (route: DesignRoute) => void;
  mockupSnippet: {
    heroKicker: string;
    heroHeadline: string;
    accentBadgeText: string;
    sampleCourt: string;
  };
}

export const DesignCard: React.FC<DesignCardProps> = ({
  route,
  name,
  tagline,
  clientPersona,
  primaryPalette,
  typographySummary,
  coreHighlights,
  themeBackground,
  accentBorder,
  onSelect,
  mockupSnippet,
}) => {
  return (
    <div className={`rounded-2xl border transition-all duration-300 hover:shadow-2xl overflow-hidden flex flex-col bg-neutral-900/60 ${accentBorder} group`}>
      {/* Visual Interactive Mockup Window */}
      <div className={`p-5 relative overflow-hidden border-b border-neutral-800 ${themeBackground} min-h-[220px] flex flex-col justify-between`}>
        {/* Mockup Topbar */}
        <div className="flex items-center justify-between text-[11px] text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600/60" />
          </div>
          <span className="font-mono text-[10px] uppercase opacity-75">{mockupSnippet.sampleCourt}</span>
        </div>

        {/* Mockup Hero Preview */}
        <div className="my-auto py-4">
          <div className="text-[11px] uppercase tracking-wider font-mono opacity-60 mb-1">
            {mockupSnippet.heroKicker}
          </div>
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight line-clamp-2">
            {mockupSnippet.heroHeadline}
          </h4>
        </div>

        {/* Mockup Bottom Controls */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] opacity-75 font-mono">
            {mockupSnippet.accentBadgeText}
          </span>
          <span className="text-xs font-medium text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Live <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content & Rationale */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              {clientPersona}
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
              {name}
            </h3>
            <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
              {tagline}
            </p>
          </div>

          {/* Palette Swatches */}
          <div className="pt-2">
            <div className="text-[10px] uppercase font-mono text-neutral-400 mb-1.5">
              Curated Palette
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {primaryPalette.map((col) => (
                <div key={col.hex} className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-neutral-700 shadow-inner"
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  />
                  <span className="text-[10px] hidden sm:inline">{col.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div className="pt-2">
            <div className="text-[10px] uppercase font-mono text-neutral-400 mb-1.5">
              Core Architecture
            </div>
            <ul className="space-y-1.5 text-xs text-neutral-300">
              {coreHighlights.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-neutral-800/80">
          <button
            onClick={() => onSelect(route)}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs bg-white text-neutral-950 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group-hover:bg-amber-400 shadow-sm"
          >
            <span>Explore Complete Website</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
