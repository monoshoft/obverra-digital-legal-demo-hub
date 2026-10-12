import React, { useState } from 'react';
import { DesignRoute } from '../../types';
import { Compass, Sparkles, Shield, Layers, ChevronUp, ChevronDown } from 'lucide-react';

interface DemoSwitcherBarProps {
  currentRoute: DesignRoute;
  onNavigate: (route: DesignRoute) => void;
  onOpenCompliance: () => void;
}

export const DemoSwitcherBar: React.FC<DemoSwitcherBarProps> = ({
  currentRoute,
  onNavigate,
  onOpenCompliance,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const designs = [
    { route: '/' as DesignRoute, code: 'HUB', label: 'All Designs Hub', short: 'Hub' },
    { route: '/design-a' as DesignRoute, code: 'A', label: 'The Heritage Chambers', short: 'A · Heritage' },
    { route: '/design-b' as DesignRoute, code: 'B', label: 'Modern Legal Authority', short: 'B · Modern' },
    { route: '/design-c' as DesignRoute, code: 'C', label: 'Noir Luxury Law', short: 'C · Noir' },
    { route: '/design-d' as DesignRoute, code: 'D', label: 'Immersive Spatial 3D', short: 'D · Spatial' },
  ];

  const currentDesign = designs.find((d) => d.route === currentRoute) || designs[0];

  return (
    <aside
      aria-label="Demo design navigation switcher"
      className="fixed bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-none"
    >
      <div className="bg-neutral-950/90 backdrop-blur-xl border border-neutral-800/90 shadow-2xl shadow-black/80 rounded-2xl p-1 sm:p-1.5 flex flex-col items-center">
        {/* Compact Navigation Bar */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Agency Badge / Current Indicator */}
          <button
            onClick={() => onNavigate('/')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-colors cursor-pointer ${
              currentRoute === '/'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
            }`}
            title="Return to OBVERRA DIGITAL Demo Hub"
          >
            <Compass className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Hub</span>
          </button>

          <div className="w-px h-4 bg-neutral-800 shrink-0" />

          {/* Design A Button */}
          <button
            onClick={() => onNavigate('/design-a')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium transition-colors cursor-pointer ${
              currentRoute === '/design-a'
                ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30 ring-1 ring-emerald-400/50'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
            }`}
            title="Design A: The Heritage Chambers"
          >
            <span className="sm:hidden font-mono font-semibold">A</span>
            <span className="hidden sm:inline">A · Heritage</span>
          </button>

          {/* Design B Button */}
          <button
            onClick={() => onNavigate('/design-b')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium transition-colors cursor-pointer ${
              currentRoute === '/design-b'
                ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30 ring-1 ring-blue-400/50'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
            }`}
            title="Design B: Modern Legal Authority"
          >
            <span className="sm:hidden font-mono font-semibold">B</span>
            <span className="hidden sm:inline">B · Modern</span>
          </button>

          {/* Design C Button */}
          <button
            onClick={() => onNavigate('/design-c')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium transition-colors cursor-pointer ${
              currentRoute === '/design-c'
                ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30 ring-1 ring-amber-400/50'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
            }`}
            title="Design C: Noir Luxury Law"
          >
            <span className="sm:hidden font-mono font-semibold">C</span>
            <span className="hidden sm:inline">C · Noir</span>
          </button>

          {/* Design D Button */}
          <button
            onClick={() => onNavigate('/design-d')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium transition-colors cursor-pointer ${
              currentRoute === '/design-d'
                ? 'bg-cyan-500 text-neutral-950 font-bold shadow-md shadow-cyan-400/30 ring-1 ring-cyan-300/50'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
            }`}
            title="Design D: Immersive Spatial 3D"
          >
            <span className="sm:hidden font-mono font-semibold">D</span>
            <span className="hidden sm:inline">D · Spatial 3D</span>
          </button>

          <div className="w-px h-4 bg-neutral-800 shrink-0" />

          {/* BCI Compliance Button */}
          <button
            onClick={onOpenCompliance}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs text-neutral-400 hover:text-amber-400 hover:bg-neutral-800/60 transition-colors cursor-pointer"
            title="Bar Council of India Rule 36 Compliance Information"
            aria-label="Bar Council Ethics Notice"
          >
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline ml-1 font-mono text-[10px]">BCI Rule 36</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
