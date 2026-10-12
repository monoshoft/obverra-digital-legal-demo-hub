/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DesignRoute } from './types';
import { BarCouncilDisclaimerModal } from './components/common/BarCouncilDisclaimerModal';
import { DemoSwitcherBar } from './components/common/DemoSwitcherBar';
import { DesignHub } from './components/hub/DesignHub';
import { HeritageChambersPage } from './components/designs/designA/HeritageChambersPage';
import { ModernLegalPage } from './components/designs/designB/ModernLegalPage';
import { NoirLuxuryPage } from './components/designs/designC/NoirLuxuryPage';
import { ImmersiveLegalPage } from './components/designs/designD/ImmersiveLegalPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<DesignRoute>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/design-a' || path === '/design-b' || path === '/design-c' || path === '/design-d') {
        return path as DesignRoute;
      }
      const hash = window.location.hash;
      if (hash === '#/design-a' || hash === '#design-a') return '/design-a';
      if (hash === '#/design-b' || hash === '#design-b') return '/design-b';
      if (hash === '#/design-c' || hash === '#design-c') return '/design-c';
      if (hash === '#/design-d' || hash === '#design-d') return '/design-d';
    }
    return '/';
  });

  const [complianceModalOpen, setComplianceModalOpen] = useState(false);

  // Sync with browser back/forward buttons and hash navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/design-a' || path === '/design-b' || path === '/design-c' || path === '/design-d') {
        setCurrentRoute(path as DesignRoute);
        return;
      }
      const hash = window.location.hash;
      if (hash === '#/design-a' || hash === '#design-a') {
        setCurrentRoute('/design-a');
        return;
      }
      if (hash === '#/design-b' || hash === '#design-b') {
        setCurrentRoute('/design-b');
        return;
      }
      if (hash === '#/design-c' || hash === '#design-c') {
        setCurrentRoute('/design-c');
        return;
      }
      if (hash === '#/design-d' || hash === '#design-d') {
        setCurrentRoute('/design-d');
        return;
      }
      setCurrentRoute('/');
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (route: DesignRoute) => {
    setCurrentRoute(route);
    try {
      window.history.pushState({}, '', route);
    } catch {
      // Fallback for sandboxes that restrict pushState
      window.location.hash = route === '/' ? '' : route.replace('/', '#');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans w-full overflow-x-hidden">
      {/* Dynamic Viewport for Active Design - Completely unobscured header */}
      <div className="flex-1 w-full">
        {currentRoute === '/' && (
          <DesignHub
            onNavigate={navigate}
            onOpenCompliance={() => setComplianceModalOpen(true)}
          />
        )}
        {currentRoute === '/design-a' && (
          <HeritageChambersPage
            onNavigate={navigate}
            onOpenCompliance={() => setComplianceModalOpen(true)}
          />
        )}
        {currentRoute === '/design-b' && (
          <ModernLegalPage
            onNavigate={navigate}
            onOpenCompliance={() => setComplianceModalOpen(true)}
          />
        )}
        {currentRoute === '/design-c' && (
          <NoirLuxuryPage
            onNavigate={navigate}
            onOpenCompliance={() => setComplianceModalOpen(true)}
          />
        )}
        {currentRoute === '/design-d' && (
          <ImmersiveLegalPage
            onNavigate={navigate}
            onOpenCompliance={() => setComplianceModalOpen(true)}
          />
        )}
      </div>

      {/* Persistent Floating Demo Switcher Bar */}
      <DemoSwitcherBar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenCompliance={() => setComplianceModalOpen(true)}
      />

      {/* Bar Council of India Rule 36 Compliance Modal */}
      <BarCouncilDisclaimerModal
        isOpen={complianceModalOpen}
        onClose={() => setComplianceModalOpen(false)}
      />
    </div>
  );
}
