import React, { useState } from 'react';
import { NoirHeader } from './NoirHeader';
import { NoirHero } from './NoirHero';
import { NoirPillars } from './NoirPillars';
import { NoirPractices } from './NoirPractices';
import { NoirCounsel } from './NoirCounsel';
import { NoirBriefings } from './NoirBriefings';
import { NoirFaq } from './NoirFaq';
import { NoirFooter } from './NoirFooter';
import { ConsultationModal } from '../../common/ConsultationModal';
import { BackToTop } from '../../common/BackToTop';
import { DesignRoute } from '../../../types';
import { NOIR_LUXURY_DATA } from '../../../data/designCData';

interface NoirLuxuryPageProps {
  onNavigate: (route: DesignRoute) => void;
  onOpenCompliance: () => void;
}

export const NoirLuxuryPage: React.FC<NoirLuxuryPageProps> = ({
  onNavigate,
  onOpenCompliance,
}) => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedMatter, setSelectedMatter] = useState('');

  const handleOpenConsultation = (matterName?: string) => {
    setSelectedMatter(matterName || 'Cross-Border Arbitration (SIAC/LCIA)');
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-neutral-100 font-cinzel antialiased selection:bg-[#C9A86A]/20 selection:text-[#E2C896]">
      {/* Header */}
      <NoirHeader
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigate={onNavigate}
      />

      {/* Main Sections */}
      <main>
        <NoirHero onOpenConsultation={() => handleOpenConsultation()} />
        <NoirPillars />
        <NoirPractices onSelectPractice={(title) => handleOpenConsultation(title)} />
        <NoirCounsel onConsultPartner={(name) => handleOpenConsultation(`Mandate Discussion with ${name}`)} />
        <NoirBriefings />
        <NoirFaq />
      </main>

      {/* Footer */}
      <NoirFooter
        onOpenCompliance={onOpenCompliance}
        onNavigate={onNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        firmName={NOIR_LUXURY_DATA.firmName}
        themeContext="noir"
        defaultCategory={selectedMatter}
      />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
};
