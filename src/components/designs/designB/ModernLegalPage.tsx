import React, { useState } from 'react';
import { ModernHeader } from './ModernHeader';
import { ModernHero } from './ModernHero';
import { ModernMetrics } from './ModernMetrics';
import { ModernPracticeGrid } from './ModernPracticeGrid';
import { ModernTeam } from './ModernTeam';
import { ModernJourney } from './ModernJourney';
import { ModernInsights } from './ModernInsights';
import { ModernFaq } from './ModernFaq';
import { ModernFooter } from './ModernFooter';
import { ConsultationModal } from '../../common/ConsultationModal';
import { BackToTop } from '../../common/BackToTop';
import { DesignRoute } from '../../../types';
import { MODERN_LEGAL_DATA } from '../../../data/designBData';

interface ModernLegalPageProps {
  onNavigate: (route: DesignRoute) => void;
  onOpenCompliance: () => void;
}

export const ModernLegalPage: React.FC<ModernLegalPageProps> = ({
  onNavigate,
  onOpenCompliance,
}) => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedMatter, setSelectedMatter] = useState('');

  const handleOpenConsultation = (matterName?: string) => {
    setSelectedMatter(matterName || 'Corporate M&A / Term Sheets');
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-modern antialiased selection:bg-blue-600/20 selection:text-blue-900">
      {/* Header */}
      <ModernHeader
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigate={onNavigate}
      />

      {/* Main Sections */}
      <main>
        <ModernHero onOpenConsultation={() => handleOpenConsultation()} />
        <ModernMetrics />
        <ModernPracticeGrid onSelectPractice={(title) => handleOpenConsultation(title)} />
        <ModernTeam onConsultPartner={(name) => handleOpenConsultation(`Corporate advisory with ${name}`)} />
        <ModernJourney />
        <ModernInsights />
        <ModernFaq />
      </main>

      {/* Footer */}
      <ModernFooter
        onOpenCompliance={onOpenCompliance}
        onNavigate={onNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        firmName={MODERN_LEGAL_DATA.firmName}
        themeContext="modern"
        defaultCategory={selectedMatter}
      />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
};
