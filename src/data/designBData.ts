import { PracticeArea, AdvocateProfile, LegalInsight, FaqItem } from '../types';

export const MODERN_LEGAL_DATA = {
  firmName: 'Axiom Law Partners',
  tagline: 'Corporate · Technology · M&A · Capital Markets',
  heroHeadline: 'Clear Legal Strategy for Complex Decisions.',
  heroSubheadline:
    'Full-service business law firm serving high-growth technology enterprises, venture funds, cross-border conglomerates, and institutional founders across India and Singapore.',
  officeLocations: ['Bandra Kurla Complex (BKC), Mumbai', 'Cyber City, Gurugram', 'Indiranagar, Bengaluru'],
  phone: '+91 (22) 6912 8800',
  email: 'corporate@axiomlawpartners.com',

  metrics: [
    { label: 'Transactions Advised (Demo)', value: '₹14,500 Cr+' },
    { label: 'Active Corporate Clients (Demo)', value: '180+' },
    { label: 'Partner Cross-Domain Bench', value: '12 Partners' },
    { label: 'Cross-Border Deals Closed', value: '45+ Jurisdictions' },
  ],

  practiceAreas: [
    {
      id: 'venture-ma',
      title: 'M&A, Venture Capital & Private Equity',
      subtitle: 'Seed to Pre-IPO Deal Architecture',
      description:
        'Term sheet negotiation, SHA/SSA drafting, FDI/FEMA regulatory filings with RBI, vendor due diligence, and statutory antitrust approvals before the Competition Commission of India (CCI).',
      keyActs: ['Companies Act 2013', 'FEMA 1999', 'Competition Act 2002'],
      casesHandled: '90+ investment rounds structured',
      iconName: 'TrendingUp',
      scopeList: [
        'Founder shareholder agreements (SHA/SSA)',
        'Cross-border flip structures (India - Delaware - Singapore)',
        'Legal due diligence & risk allocation warranties',
        'Regulatory filings with DPIIT & Reserve Bank of India',
      ],
    },
    {
      id: 'fintech-crypto',
      title: 'Fintech, RBI Licensing & Digital Lending',
      subtitle: 'Regulatory Compliance & Sandboxes',
      description:
        'Advisory on NBFC licenses, Payment Aggregator/Payment Gateway guidelines, Digital Lending Guidelines (DLG), Account Aggregator ecosystems, and data localization mandates.',
      keyActs: ['RBI Act 1934', 'Payment and Settlement Systems Act 2007'],
      casesHandled: '18 RBI licensing filings',
      iconName: 'Cpu',
      scopeList: [
        'NBFC-P2P and Digital Lending regulatory frameworks',
        'Co-lending and FLDG structure compliance',
        'Payments and card tokenization audits',
        'Regulatory sandbox admissions & sandbox sandbox audits',
      ],
    },
    {
      id: 'ip-technology',
      title: 'Intellectual Property & Technology Contracts',
      subtitle: 'Patents, Trademarks & SaaS Licensing',
      description:
        'Portfolio protection across Indian Patent Office, trademark oppositions, global SaaS Master Services Agreements (MSA), Service Level Agreements (SLAs), and open-source licensing governance.',
      keyActs: ['Trade Marks Act 1999', 'Patents Act 1970', 'Copyright Act 1957'],
      casesHandled: '3,200+ IP registrations filed',
      iconName: 'ShieldCheck',
      scopeList: [
        'Global trademark registrations and opposition trials',
        'Software license and AI API terms of service drafting',
        'Trade secret protection and employee IP assignments',
        'Domain dispute arbitrations (INDRP & UDRP)',
      ],
    },
    {
      id: 'data-privacy',
      title: 'Data Privacy & DPDP Act 2023 Compliance',
      subtitle: 'Digital Personal Data Protection Architecture',
      description:
        'End-to-end organizational compliance with India’s Digital Personal Data Protection Act (DPDPA 2023), cross-border data transfer agreements, consent manager architecture, and breach response protocols.',
      keyActs: ['Digital Personal Data Protection Act 2023', 'IT Act 2000'],
      casesHandled: '40+ enterprise readiness audits',
      iconName: 'Lock',
      scopeList: [
        'Consent manager workflow compliance reviews',
        'Data Fiduciary obligation structuring & DPO advisory',
        'Vendor data processing agreements (DPA)',
        'Data breach escalation playbooks and incident response',
      ],
    },
    {
      id: 'employment-esop',
      title: 'Employment, ESOP Pools & Executive Advisory',
      subtitle: 'Workforce Governance & Labour Codes',
      description:
        'Design of executive incentive schemes, ESOP pool trusts, non-compete enforceability, POSH Act internal committee structuring, and cross-border remote workforce agreements.',
      keyActs: ['Labour Codes 2020', 'POSH Act 2013', 'Companies Act 2013'],
      casesHandled: 'Over 120 ESOP plans designed',
      iconName: 'Users',
      scopeList: [
        'Stock option plan (ESOP) and sweat equity frameworks',
        'Executive employment contracts and golden handcuffs',
        'POSH compliance mandates and committee inquiries',
        'Workplace restructuring and mutual separation settlements',
      ],
    },
    {
      id: 'commercial-disputes',
      title: 'Commercial Dispute Resolution & Mediation',
      subtitle: 'Fast-Track Arbitration & Enforcement',
      description:
        'Pre-litigation strategy, Section 9 urgent interim relief, commercial court litigation, and institutional mediation before MCIA and international forums.',
      keyActs: ['Commercial Courts Act 2015', 'Mediation Act 2023'],
      casesHandled: 'Over 85 disputes resolved out of court',
      iconName: 'Briefcase',
      scopeList: [
        'Summary commercial suits under Order XXXVII CPC',
        'Emergency arbitrator applications',
        'Director fiduciary liability defense',
        'Insolvency avoidance transaction defense',
      ],
    },
  ] as PracticeArea[],

  team: [
    {
      id: 'team-aditya',
      name: 'Aditya Vardhan Roy',
      title: 'Managing Partner · Corporate & M&A',
      experienceYears: 20,
      courtEnrollment: 'Enrolled 2004 · Bar Council of Maharashtra & Goa',
      education: 'B.A. LL.B. (Hons.) WBNUJS Kolkata, LL.M. Columbia Law School',
      bio: 'Advises founders and global investment funds on marquee cross-border transactions, joint ventures, and buyout deals. Regular commentator on Indian corporate governance.',
      specialization: ['M&A Transactions', 'Private Equity', 'Cross-Border Structuring'],
      imagePlaceholder: 'Aditya Vardhan Roy',
    },
    {
      id: 'team-ananya',
      name: 'Ananya Mehra',
      title: 'Partner · Tech, IP & Data Governance',
      experienceYears: 15,
      courtEnrollment: 'Enrolled 2009 · Bar Council of Delhi',
      education: 'B.Sc. LL.B. (Hons.) GNLU, CIPP/A Certified Data Privacy Professional',
      bio: 'Leads our technology and regulatory advisory practice. Worked extensively with SaaS platforms, fintech gateways, and enterprise health-tech ventures on DPDP Act implementations.',
      specialization: ['Data Privacy (DPDP Act)', 'Fintech Regulations', 'IP Portfolio Strategy'],
      imagePlaceholder: 'Ananya Mehra',
    },
    {
      id: 'team-siddharth',
      name: 'Siddharth Nambiar',
      title: 'Partner · Dispute Resolution & Arbitration',
      experienceYears: 17,
      courtEnrollment: 'Enrolled 2007 · Bar Council of Karnataka',
      education: 'B.A. LL.B. (NLSIU Bangalore), Member of Chartered Institute of Arbitrators (MCIArb)',
      bio: 'Specialist in commercial arbitration and emergency relief motions before High Courts and MCIA. Extensive experience in shareholder disputes and technology licensing claims.',
      specialization: ['Commercial Arbitration', 'Shareholder Disputes', 'Commercial Court Trials'],
      imagePlaceholder: 'Siddharth Nambiar',
    },
  ] as AdvocateProfile[],

  consultationJourney: [
    {
      step: '01',
      title: 'Discovery & Engagement Scoping',
      desc: 'Submit your commercial requirement. We provide a transparent scope memorandum and conflict check within 24 business hours.',
    },
    {
      step: '02',
      title: 'Partner-Led Diagnostic Session',
      desc: 'Direct strategy session with specialized partner covering regulatory hurdles, transactional risks, and deal timelines.',
    },
    {
      step: '03',
      title: 'Actionable Execution & Deliverables',
      desc: 'Clean drafts, markups, filings, or negotiations executed on predictable milestone retainers or transparent hourly estimates.',
    },
    {
      step: '04',
      title: 'Ongoing Retainer & Board Counsel',
      desc: 'Continuous advisory support for board meetings, compliance calendars, and scale-up expansions.',
    },
  ],

  insights: [
    {
      id: 'dpdp-implementation',
      title: 'Operationalizing India’s DPDP Act: 90-Day Implementation Blueprint for Tech Founders',
      category: 'Data Privacy & Tech',
      readTime: '7 min read',
      date: 'April 2026',
      excerpt:
        'Practical step-by-step guidance on mapping personal data flows, drafting granular multilingual notice forms, and vetting third-party data processors.',
    },
    {
      id: 'rbi-digital-lending',
      title: 'First Loss Default Guarantees (FLDG) in Modern Fintech: Regulatory Nuances Explained',
      category: 'Fintech Advisory',
      readTime: '9 min read',
      date: 'March 2026',
      excerpt:
        'Deconstructing the 5% contractual default guarantee cap, escrow arrangements, and structuring bank-fintech partnerships under RBI mandates.',
    },
    {
      id: 'cross-border-flip',
      title: 'Reverse Flipping to India: Tax, Corporate & FEMA Considerations for Venture-Backed Startups',
      category: 'Venture & M&A',
      readTime: '8 min read',
      date: 'February 2026',
      excerpt:
        'A comprehensive legal checklist for startups contemplating domiciling back into India ahead of domestic capital markets and IPO listings.',
    },
  ] as LegalInsight[],

  faqs: [
    {
      question: 'How do you structure legal fee retainers for emerging startups?',
      answer:
        'We offer structured monthly retainers covering day-to-day contract reviews, employment counseling, and board documentation, alongside dedicated milestone fees for fundraising rounds and M&A transactions.',
    },
    {
      question: 'Do you represent clients in cross-border Singapore or US transactions?',
      answer:
        'Yes. We regularly handle dual-jurisdiction structures with partner firms in Singapore, London, and the United States, managing FEMA filings and cross-border closing procedures.',
    },
    {
      question: 'What is the turnaround time for a legal due diligence or contract review?',
      answer:
        'Standard commercial agreement reviews are completed within 48 to 72 hours. Comprehensive investor due diligence packages typically take 7 to 10 business days depending on volume.',
    },
  ] as FaqItem[],
};
