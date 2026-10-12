import React, { useState } from 'react';
import { SpatialHeader } from './SpatialHeader';
import { SpatialHero } from './SpatialHero';
import { SpatialMatrix } from './SpatialMatrix';
import { SpatialDisputeJourney } from './SpatialDisputeJourney';
import { SpatialAdvisors } from './SpatialAdvisors';
import { SpatialPerspectives } from './SpatialPerspectives';
import { SpatialFaq } from './SpatialFaq';
import { SpatialFooter } from './SpatialFooter';
import { ConsultationModal } from '../../common/ConsultationModal';
import { BackToTop } from '../../common/BackToTop';
import { DesignRoute } from '../../../types';
import { IMMERSIVE_LEGAL_DATA } from '../../../data/designDData';

interface ImmersiveLegalPageProps {
  onNavigate: (route: DesignRoute) => void;
  onOpenCompliance: () => void;
}

export const ImmersiveLegalPage: React.FC<ImmersiveLegalPageProps> = ({
  onNavigate,
  onOpenCompliance,
}) => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedMatter, setSelectedMatter] = useState('');

  const handleOpenConsultation = (matterName?: string) => {
    setSelectedMatter(matterName || 'Frontier AI Governance / Space Tech Dispute');
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 font-modern antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Header */}
      <SpatialHeader
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigate={onNavigate}
      />

      {/* Main Sections */}
      <main>
        <SpatialHero onOpenConsultation={() => handleOpenConsultation()} />
        <SpatialMatrix onSelectPractice={(title) => handleOpenConsultation(title)} />
        <SpatialDisputeJourney />
        <SpatialAdvisors onConsultAdvisor={(name) => handleOpenConsultation(`Spatial Mandate Review with ${name}`)} />
        <SpatialPerspectives />
        <SpatialFaq />
      </main>

      {/* Footer */}
      <SpatialFooter
        onOpenCompliance={onOpenCompliance}
        onNavigate={onNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        firmName={IMMERSIVE_LEGAL_DATA.firmName}
        themeContext="spatial"
        defaultCategory={selectedMatter}
      />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
};
