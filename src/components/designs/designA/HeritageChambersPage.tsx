import React, { useState } from 'react';
import { HeritageHeader } from './HeritageHeader';
import { HeritageHero } from './HeritageHero';
import { HeritageAbout } from './HeritageAbout';
import { HeritagePracticeAreas } from './HeritagePracticeAreas';
import { HeritageAdvocates } from './HeritageAdvocates';
import { HeritageProcess } from './HeritageProcess';
import { HeritageInsights } from './HeritageInsights';
import { HeritageFaq } from './HeritageFaq';
import { HeritageFooter } from './HeritageFooter';
import { ConsultationModal } from '../../common/ConsultationModal';
import { BackToTop } from '../../common/BackToTop';
import { DesignRoute } from '../../../types';
import { HERITAGE_DATA } from '../../../data/designAData';

interface HeritageChambersPageProps {
  onNavigate: (route: DesignRoute) => void;
  onOpenCompliance: () => void;
}

export const HeritageChambersPage: React.FC<HeritageChambersPageProps> = ({
  onNavigate,
  onOpenCompliance,
}) => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedMatter, setSelectedMatter] = useState('');

  const handleOpenConsultation = (matterName?: string) => {
    setSelectedMatter(matterName || 'Supreme Court SLP / Appeal');
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2B231F] font-serif antialiased selection:bg-[#C5A880]/30 selection:text-[#1C2B22]">
      {/* Header */}
      <HeritageHeader
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigate={onNavigate}
      />

      {/* Main Sections */}
      <main>
        <HeritageHero onOpenConsultation={() => handleOpenConsultation()} />
        <HeritageAbout />
        <HeritagePracticeAreas onSelectPractice={(area) => handleOpenConsultation(area)} />
        <HeritageAdvocates onConsultAdvocate={(name) => handleOpenConsultation(`Brief for ${name}`)} />
        <HeritageProcess />
        <HeritageInsights />
        <HeritageFaq />
      </main>

      {/* Footer */}
      <HeritageFooter
        onOpenCompliance={onOpenCompliance}
        onNavigate={onNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        firmName={HERITAGE_DATA.firmName}
        themeContext="heritage"
        defaultCategory={selectedMatter}
      />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
};
