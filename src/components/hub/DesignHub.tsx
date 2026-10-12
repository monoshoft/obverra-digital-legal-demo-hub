import React from 'react';
import { DesignRoute } from '../../types';
import { AgencyHeader } from './AgencyHeader';
import { DesignCard, DesignCardProps } from './DesignCard';
import { AgencyComparisonTable } from './AgencyComparisonTable';
import { AgencyEngagementSection } from './AgencyEngagementSection';
import { DEMO_CONFIG } from '../../data/sharedLegalData';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  CheckCircle,
  Phone,
  Mail,
  Award,
} from 'lucide-react';

interface DesignHubProps {
  onNavigate: (route: DesignRoute) => void;
  onOpenCompliance: () => void;
}

export const DesignHub: React.FC<DesignHubProps> = ({ onNavigate, onOpenCompliance }) => {
  const designCards: DesignCardProps[] = [
    {
      id: 'design-a',
      route: '/design-a',
      name: 'Design A — The Heritage Chambers',
      tagline: 'Counsel Built on Trust. Advocacy Grounded in Principle.',
      clientPersona: 'Senior Advocates · Supreme Court Chambers · High Courts',
      primaryPalette: [
        { name: 'Warm Ivory', hex: '#FBF9F5' },
        { name: 'Forest Green', hex: '#1C2B22' },
        { name: 'Muted Gold', hex: '#C5A880' },
        { name: 'Dark Walnut', hex: '#2B231F' },
      ],
      typographySummary: 'Playfair Display + Cormorant Garamond',
      coreHighlights: [
        'Classical chambers library archive & historic pedigree',
        'Supreme Court SLP, Appellate Review & Constitutional focus',
        'Advocate-on-Record procedural transparency flow',
        'Bar Council Rule 36 compliance banner & ethics notice',
      ],
      themeBackground: 'bg-gradient-to-br from-[#1C2B22] via-[#15211A] to-[#0D1510] text-[#FBF9F5]',
      accentBorder: 'border-emerald-800/40 hover:border-emerald-500/60',
      onSelect: onNavigate,
      mockupSnippet: {
        heroKicker: 'ESTABLISHED 1974 · NEW DELHI',
        heroHeadline: 'Counsel Built on Trust. Advocacy Grounded in Principle.',
        accentBadgeText: 'Supreme Court & High Courts',
        sampleCourt: 'APPELLATE BENCH',
      },
    },
    {
      id: 'design-b',
      route: '/design-b',
      name: 'Design B — The Modern Legal Authority',
      tagline: 'Clear Legal Strategy for Complex Decisions.',
      clientPersona: 'Corporate Partners · VC/PE · Startups & Enterprises',
      primaryPalette: [
        { name: 'Stark White', hex: '#FFFFFF' },
        { name: 'Deep Charcoal', hex: '#0F172A' },
        { name: 'Corporate Navy', hex: '#1E293B' },
        { name: 'Electric Cobalt', hex: '#2563EB' },
      ],
      typographySummary: 'Plus Jakarta Sans + DM Sans',
      coreHighlights: [
        'Structured deal metrics and venture transaction matrix',
        'DPDP Act 2023, Fintech & IP regulatory advisory modules',
        'Transparent 4-step corporate onboarding & scoping journey',
        'Multi-city office footprint: Mumbai BKC, Gurugram & Bengaluru',
      ],
      themeBackground: 'bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0F1D] text-white',
      accentBorder: 'border-blue-900/40 hover:border-blue-500/60',
      onSelect: onNavigate,
      mockupSnippet: {
        heroKicker: 'CORPORATE · M&A · FINTECH',
        heroHeadline: 'Clear Legal Strategy for Complex Decisions.',
        accentBadgeText: '₹14,500 Cr+ Advised',
        sampleCourt: 'CROSS-BORDER',
      },
    },
    {
      id: 'design-c',
      route: '/design-c',
      name: 'Design C — The Noir Luxury Law Firm',
      tagline: 'Precision in Counsel. Resolve in Action.',
      clientPersona: 'Boutique Litigation · Crisis Counsel · Private Family Wealth',
      primaryPalette: [
        { name: 'Obsidian Black', hex: '#0B0C0E' },
        { name: 'Warm Off-Black', hex: '#141619' },
        { name: 'Brushed Brass', hex: '#C9A86A' },
        { name: 'Champagne Gold', hex: '#E2C896' },
      ],
      typographySummary: 'Cinzel Decorative + Cormorant Garamond',
      coreHighlights: [
        'Strict 10-case active mandate limit for undivided immersion',
        'Confidential encrypted consultation intake vault',
        'Cross-border arbitration (SIAC / LCIA) & boardroom warfare',
        'Chiaroscuro cinematic lighting with bespoke negative space',
      ],
      themeBackground: 'bg-gradient-to-br from-[#0B0C0E] via-[#16181C] to-[#070809] text-[#E2C896]',
      accentBorder: 'border-amber-900/40 hover:border-amber-500/60',
      onSelect: onNavigate,
      mockupSnippet: {
        heroKicker: 'CONFIDENTIAL MANDATE DISPATCH',
        heroHeadline: 'Precision in Counsel. Resolve in Action.',
        accentBadgeText: 'Strict 10-Case Limit',
        sampleCourt: 'INTERNATIONAL SEATS',
      },
    },
    {
      id: 'design-d',
      route: '/design-d',
      name: 'Design D — The Immersive Legal Experience',
      tagline: 'Navigate Complexity. Move Forward with Confidence.',
      clientPersona: 'Frontier Tech · Energy Transition · Infrastructure & Aerospace',
      primaryPalette: [
        { name: 'Midnight Slate', hex: '#070B14' },
        { name: 'Graphite', hex: '#111827' },
        { name: 'Cool Silver', hex: '#94A3B8' },
        { name: 'Electric Cyan', hex: '#38BDF8' },
      ],
      typographySummary: 'Plus Jakarta Sans + Monospace Numerals',
      coreHighlights: [
        'Real interactive Three.js 3D spatial justice & equilibrium scene',
        'Multidimensional dispute modeling & timeline forensics',
        'Frontier AI, clean hydrogen & space-tech regulatory frameworks',
        'Smooth scroll storytelling with graceful WebGL fallbacks',
      ],
      themeBackground: 'bg-gradient-to-br from-[#070B14] via-[#0E1A30] to-[#04070C] text-[#38BDF8]',
      accentBorder: 'border-cyan-900/40 hover:border-cyan-500/60',
      onSelect: onNavigate,
      mockupSnippet: {
        heroKicker: 'SPATIAL 3D DISPUTE ARCHITECTURE',
        heroHeadline: 'Navigate Complexity. Move Forward with Confidence.',
        accentBadgeText: 'Real Three.js WebGL',
        sampleCourt: 'TRIBUNAL GRID',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Agency Topbar */}
      <AgencyHeader
        onNavigate={onNavigate}
        onOpenCompliance={onOpenCompliance}
      />

      {/* Main Hub Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-20">
        {/* Hub Hero Section */}
        <section className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] sm:text-xs text-neutral-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="truncate">OBVERRA DIGITAL · LAW FIRM SHOWCASE</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Four Directions.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 block sm:inline">
              One Exceptional Legal Presence.
            </span>
          </h1>

          <p className="text-xs sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed px-2">
            Welcome to the OBVERRA DIGITAL showcase. Explore four radically distinct digital identities crafted for Indian advocates, senior counsels, corporate firms, and modern legal institutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => onNavigate('/design-a')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Explore Design A (Heritage)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenCompliance}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 font-medium text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Bar Council Compliance Note</span>
            </button>
          </div>
        </section>

        {/* The Four Cards Grid */}
        <section className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-800/80 pb-4">
            <div>
              <span className="text-[11px] sm:text-xs font-mono text-amber-400 uppercase tracking-wider">
                Select Your Archetype
              </span>
              <h2 className="text-xl sm:text-3xl font-bold text-white mt-0.5">
                The Four Creative Directions
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              Each design embodies a distinct brand posture, typography hierarchy, client consultation journey, and layout grammar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {designCards.map((card) => (
              <DesignCard key={card.id} {...card} />
            ))}
          </div>
        </section>

        {/* Comparative Table */}
        <section>
          <AgencyComparisonTable onSelectDesign={onNavigate} />
        </section>

        {/* Agency Bespoke Engagement Section */}
        <section>
          <AgencyEngagementSection />
        </section>
      </main>

      {/* Agency Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-10 sm:py-12 text-xs text-neutral-400 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800/60">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <span className="w-6 h-6 rounded-md bg-amber-500 text-neutral-950 flex items-center justify-center font-mono text-xs">
                  OD
                </span>
                <span>OBVERRA DIGITAL</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Bespoke digital architecture for elite Indian legal practices.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-neutral-300">
              <button onClick={() => onNavigate('/design-a')} className="hover:text-amber-400 transition-colors cursor-pointer">
                Design A (Heritage)
              </button>
              <button onClick={() => onNavigate('/design-b')} className="hover:text-amber-400 transition-colors cursor-pointer">
                Design B (Modern)
              </button>
              <button onClick={() => onNavigate('/design-c')} className="hover:text-amber-400 transition-colors cursor-pointer">
                Design C (Noir)
              </button>
              <button onClick={() => onNavigate('/design-d')} className="hover:text-amber-400 transition-colors cursor-pointer">
                Design D (Spatial 3D)
              </button>
              <button onClick={onOpenCompliance} className="hover:text-amber-400 transition-colors text-amber-400 cursor-pointer">
                BCI Compliance
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-neutral-400">
            <p>
              © 2026 OBVERRA DIGITAL. Client Sales & Architecture Showcase.
            </p>
            <p className="max-w-md sm:text-right opacity-80">
              All firm names and advocate profiles are demonstrative concepts complying with Bar Council of India Rule 36.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
