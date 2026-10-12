import { PracticeArea, AdvocateProfile, LegalInsight, FaqItem } from '../types';

export const IMMERSIVE_LEGAL_DATA = {
  firmName: 'Apex Lex Spatial Practice',
  tagline: 'Dispute Architecture · Frontier Regulatory Engineering · Strategic Counsel',
  heroHeadline: 'Navigate Complexity. Move Forward with Confidence.',
  heroSubheadline:
    'A progressive legal institution uniting elite court advocacy with structural risk engineering. We dissect multidimensional disputes across technology infrastructure, aerospace, energy transition, and cross-border commercial frameworks.',
  hubLocation: 'Cyber Hub Tower 10, Gurugram · MG Road, Bengaluru · High Court Annex, New Delhi',
  phone: '+91 (124) 478 9200',
  email: 'connect@apexlexspatial.legal',

  dimensions: [
    {
      code: 'D.01',
      title: 'Dispute Modeling & Forensics',
      desc: '3D algorithmic evidence reconstruction and contractual dependency mapping before commercial tribunals.',
    },
    {
      code: 'D.02',
      title: 'Frontier Regulatory Architecture',
      desc: 'Advising state actors and infrastructure leaders on AI governance, satellite spectrum, and clean energy contracts.',
    },
    {
      code: 'D.03',
      title: 'Rapid Response Injunction Grid',
      desc: 'Immediate round-the-clock crisis readiness for commercial court freezes and cyber incident legal defense.',
    },
  ],

  practiceAreas: [
    {
      id: 'frontier-tech-ai',
      title: 'AI Governance & Autonomous Systems Law',
      subtitle: 'Model Liability, Algorithmic Audits & IP',
      description:
        'Counseling frontier AI research labs, enterprise LLM deployers, and autonomous hardware manufacturers on copyright fair use, training data provenance, algorithmic liability, and statutory AI safety mandates.',
      keyActs: ['DPDPA 2023', 'Copyright Act 1957', 'Information Technology Rules 2021'],
      casesHandled: 'Advising 8 generative AI unicorns',
      iconName: 'Cpu',
      scopeList: [
        'AI training data licensing and copyright indemnification',
        'Algorithmic bias and safety audits for regulated sectors',
        'Autonomous mobility and robotics liability defense',
        'Cross-border model deployment compliance matrices',
      ],
    },
    {
      id: 'infrastructure-energy',
      title: 'Energy Transition & Infrastructure Concessions',
      subtitle: 'Green Hydrogen, Solar EPC & Arbitrations',
      description:
        'Advising developers and global sovereign lenders on long-term Power Purchase Agreements (PPAs), tariff renegotiation before CERC/APERC, concession disputes, and FIDIC contracts.',
      keyActs: ['Electricity Act 2003', 'Commercial Courts Act 2015'],
      casesHandled: 'Over 14 GW generation capacity advised',
      iconName: 'Zap',
      scopeList: [
        'Change-in-law and force majeure claims before CERC & APTEL',
        'EPC contract risk engineering under FIDIC terms',
        'Green hydrogen and battery energy storage agreements',
        'Concession dispute arbitrations under NHAI & Port trusts',
      ],
    },
    {
      id: 'aerospace-telecom',
      title: 'Space Tech, Satcom & Telecom Licensing',
      subtitle: 'IN-SPACe Authorizations & Spectrum Advisory',
      description:
        'Guiding private space launch operators, satellite communication consortia, and geospatial platforms through DoT spectrum allocations, IN-SPACe clearances, and payload liability insurance.',
      keyActs: ['Indian Space Policy 2023', 'Telecommunications Act 2023'],
      casesHandled: '5 launch vehicle regulatory clearances',
      iconName: 'Globe',
      scopeList: [
        'IN-SPACe orbital authorization filings and launch insurance',
        'GMPCS satellite communication service licenses from DoT',
        'Cross-border ITU spectrum frequency coordination',
        'Geospatial data regulatory compliance and export controls',
      ],
    },
    {
      id: 'complex-cross-border',
      title: 'Complex Commercial Court Litigation',
      subtitle: 'Commercial Division & Tribunal Advocacy',
      description:
        'Dynamic representation in multi-claim commercial disputes, international joint venture dissolutions, letters rogatory, and enforcement of multi-currency decrees.',
      keyActs: ['Commercial Courts Act 2015', 'CPC 1908 (Section 44A)'],
      casesHandled: 'High Court Commercial Division trials',
      iconName: 'Layers',
      scopeList: [
        'Urgent commercial injunctions under Order XXXIX',
        'Enforcement of reciprocating territory foreign decrees',
        'Interim relief in high-stakes joint venture deadlocks',
        'Forensic electronic discovery and evidentiary defense',
      ],
    },
  ] as PracticeArea[],

  advisors: [
    {
      id: 'adv-kabir',
      name: 'Dr. Kabir Sen',
      title: 'Lead Partner · Frontier Technology & Disputes',
      experienceYears: 22,
      courtEnrollment: 'Enrolled 2002 · Supreme Court Bar Association',
      education: 'B.A. LL.B. (NLSIU), Ph.D. in Cyber Law & Technology (Stanford Law)',
      bio: 'Pioneering advocate in frontier technology, autonomous liability, and complex commercial arbitrations. Frequently appointed amicus curiae in technological and privacy matters before constitutional benches.',
      specialization: ['Frontier Tech Law', 'Complex Commercial Litigation', 'Space Tech Regulations'],
      imagePlaceholder: 'Dr. Kabir Sen',
    },
    {
      id: 'adv-meenakshi',
      name: 'Meenakshi Sundaram',
      title: 'Partner · Energy Transition & Concessions',
      experienceYears: 19,
      courtEnrollment: 'Enrolled 2005 · High Court of Delhi',
      education: 'B.A. LL.B. (NALSAR Hyderabad), LL.M. in International Energy Law (Dundee)',
      bio: 'Leading regulatory advocate before the Appellate Tribunal for Electricity (APTEL) and CERC. Has structured key tariff relief claims and solar EPC arbitrations across South Asia.',
      specialization: ['Energy Regulations (CERC/APTEL)', 'Infrastructure Disputes', 'FIDIC Arbitrations'],
      imagePlaceholder: 'Meenakshi Sundaram',
    },
  ] as AdvocateProfile[],

  perspectives: [
    {
      id: 'telecom-act-2023',
      title: 'India’s Telecommunications Act: New Satellite Gateway Regimes & Spectrum Allocations',
      category: 'Frontier Regulation',
      readTime: '6 min read',
      date: 'April 2026',
      excerpt:
        'How administrative spectrum allocation under the new statutory framework reshapes satcom commercial models and reduces jurisdictional ambiguity.',
    },
    {
      id: 'energy-dispute-trends',
      title: 'Navigating Change in Law Claims in Solar & Wind Concessions: Practical Tribunal Precedents',
      category: 'Dispute Architecture',
      readTime: '8 min read',
      date: 'March 2026',
      excerpt:
        'A comprehensive review of APTEL and Supreme Court tests for restitutionary compensation in GST rate modifications and customs duties.',
    },
  ] as LegalInsight[],

  faqs: [
    {
      question: 'How does your 3D spatial dispute modeling benefit commercial arbitrations?',
      answer:
        'In complex engineering, construction delay, and technological breach claims, we transform thousands of pages of contractor logs into interactive timeline dependency models and visual structural reconstructions that clarify critical path delays for arbitral tribunals.',
    },
    {
      question: 'Can your team advise on both Indian regulatory filings and cross-border tribunal hearings?',
      answer:
        'Yes. We maintain seamless capability spanning Indian regulatory authorities (IN-SPACe, DoT, CERC, CCI) and international arbitral seats in Singapore, London, and Geneva.',
    },
  ] as FaqItem[],
};
