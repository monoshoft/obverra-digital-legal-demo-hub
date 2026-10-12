import { PracticeArea, AdvocateProfile, LegalInsight, FaqItem } from '../types';

export const HERITAGE_DATA = {
  firmName: 'Kashyap & Sanghi Chambers',
  foundingYear: '1974',
  tagline: 'Chambers of Senior Advocates · Supreme Court & High Courts of India',
  heroHeadline: 'Counsel Built on Trust. Advocacy Grounded in Principle.',
  heroSubheadline:
    'Distinguished appellate advocacy, constitutional deliberation, and complex commercial dispute resolution spanning five decades before the Supreme Court of India and High Courts across the Republic.',
  chambersAddress: '4, Bhagwan Das Road, Adjacent Supreme Court of India, New Delhi 110001',
  phone: '+91 (11) 2338 4192',
  email: 'chambers@kashyapsanghi.legal',

  about: {
    historyTitle: 'Five Decades of Principled Jurisprudence',
    narrative:
      'Established in 1974 by Senior Advocate B.N. Kashyap, our chambers maintain a solemn commitment to judicial craftsmanship. We operate not as a commercial transactional mill, but as a classical chamber of rigorous advocates where constitutional precision, civil law depth, and unshakeable ethics guide every brief.',
    pillars: [
      {
        title: 'Appellate Gravitas',
        desc: 'Over 1,200 reported judgments before Supreme Court Benches and High Courts of Delhi, Bombay, and Allahabad.',
      },
      {
        title: 'Chambers Research Rigor',
        desc: 'Dedicated archival chambers library housing complete Indian Law Reports and rare constitutional proceedings from 1950.',
      },
      {
        title: 'Judicial Propriety',
        desc: 'Uncompromising adherence to Bar Council conventions, client discretion, and honest appellate appraisals.',
      },
    ],
  },

  practiceAreas: [
    {
      id: 'appellate-constitutional',
      title: 'Supreme Court & Constitutional Appeals',
      subtitle: 'Special Leave Petitions & Writs',
      description:
        'Representation in Special Leave Petitions (SLPs) under Article 136, Writ Petitions under Article 32 & 226, and substantial questions of constitutional interpretation before Constitution Benches.',
      keyActs: ['Constitution of India (Articles 14, 19, 21, 32, 136)', 'Supreme Court Rules 2013'],
      casesHandled: 'Over 480 reported citations',
      iconName: 'Scale',
      scopeList: [
        'Special Leave Petitions (Civil & Criminal)',
        'Writ Petitions challenging ultra vires statutes',
        'Review and Curative Petitions',
        'Transfer Petitions across State High Courts',
      ],
    },
    {
      id: 'commercial-arbitration',
      title: 'Commercial Arbitration & Section 34 Challenges',
      subtitle: 'Domestic & International Arbitral Tribunals',
      description:
        'Leading institutional and ad-hoc arbitrations under the Arbitration & Conciliation Act 1996, interim protection under Section 9, and enforcement or challenge under Section 34 and 37.',
      keyActs: ['Arbitration and Conciliation Act 1996', 'Commercial Courts Act 2015'],
      casesHandled: '₹4,800 Cr+ in disputed arbitral claims',
      iconName: 'Gavel',
      scopeList: [
        'Section 9 & 11 applications before High Courts',
        'Substantive tribunal representation in infrastructure disputes',
        'Section 34 petitions challenging arbitral awards',
        'Execution of foreign awards under New York Convention',
      ],
    },
    {
      id: 'civil-property',
      title: 'Title, Trust & High-Stakes Property Disputes',
      subtitle: 'Original Side & Regular First Appeals',
      description:
        'Partition suits, contested family settlements, ancestral trusts, Specific Relief enforcement, and title injunctions before Original Jurisdiction of High Courts and Appellate Benches.',
      keyActs: ['Specific Relief Act 1963', 'Transfer of Property Act 1882', 'Indian Trusts Act 1882'],
      casesHandled: 'Representing prominent landholding lineages',
      iconName: 'Landmark',
      scopeList: [
        'Original Suits for Partition and Injunction',
        'Specific Performance of high-value agreements to sell',
        'Public & Private Trust governance disputes',
        'Revenue and Ceiling Act appellate interventions',
      ],
    },
    {
      id: 'corporate-insolvency',
      title: 'Insolvency, NCLT & Appellate Tribunals',
      subtitle: 'NCLAT & Company Law Litigation',
      description:
        'Advocacy before the National Company Law Tribunal (NCLT) and National Company Law Appellate Tribunal (NCLAT) under the Insolvency and Bankruptcy Code (IBC 2016).',
      keyActs: ['Insolvency and Bankruptcy Code 2016', 'Companies Act 2013'],
      casesHandled: 'Over 140 corporate resolution proceedings',
      iconName: 'ShieldAlert',
      scopeList: [
        'Section 7 & Section 9 creditor insolvency petitions',
        'Resolution plan challenges before NCLAT',
        'Oppression & Mismanagement petitions under Section 241-242',
        'Director disqualification and statutory appeals',
      ],
    },
    {
      id: 'white-collar',
      title: 'White-Collar Defense & PMLA Proceedings',
      subtitle: 'Trial Courts to Supreme Court Bails',
      description:
        'Strategic trial defense and anticipatory bails in economic offences, Prevention of Money Laundering Act (PMLA), SFIO investigations, and CBI special courts.',
      keyActs: ['Prevention of Money Laundering Act 2002', 'Code of Criminal Procedure 1973 / BNSS 2023'],
      casesHandled: 'Discreet pre-arrest & appellate relief',
      iconName: 'Shield',
      scopeList: [
        'Anticipatory bail applications before High Courts',
        'Quashing petitions under Section 482 CrPC',
        'Adjudicating Authority representations in provisional attachments',
        'Statutory appeals before the PMLA Appellate Tribunal',
      ],
    },
    {
      id: 'revenue-taxation',
      title: 'Direct Tax & Customs Appellate Advocacy',
      subtitle: 'ITAT & High Court Tax Benches',
      description:
        'Substantial questions of law before High Court Tax Benches, Transfer Pricing appeals before ITAT, and search and seizure reassessment litigation under the Income Tax Act.',
      keyActs: ['Income Tax Act 1961', 'Customs Act 1962'],
      casesHandled: 'Landmark transfer pricing precedents',
      iconName: 'BookOpen',
      scopeList: [
        'Section 260A Substantial Question of Law appeals',
        'ITAT Special Bench litigation',
        'Writ challenges against faceless assessment notices',
        'Settlement Commission & Advance Ruling representations',
      ],
    },
  ] as PracticeArea[],

  advocates: [
    {
      id: 'adv-kashyap',
      name: 'R.K. Sanghi',
      title: 'Senior Advocate · Supreme Court of India',
      experienceYears: 42,
      courtEnrollment: 'Enrolled 1982 · Bar Council of Delhi',
      education: 'LL.B. (Campus Law Centre, University of Delhi), LL.M. (Cantab)',
      bio: 'Designated Senior Advocate with over four decades of appellate presence before the Supreme Court of India. Frequently briefed on complex constitutional doctrines, infrastructure arbitrations, and high-stakes civil reviews.',
      specialization: ['Constitutional Law', 'Commercial Arbitration', 'Supreme Court SLPs'],
      imagePlaceholder: 'Senior Advocate R.K. Sanghi',
    },
    {
      id: 'adv-priya',
      name: 'Priyadarshini Kashyap',
      title: 'Advocate-on-Record · Supreme Court of India',
      experienceYears: 24,
      courtEnrollment: 'Enrolled 2000 · Supreme Court Bar Association',
      education: 'B.A. LL.B. (Hons.) National Law School of India University (NLSIU), Bangalore',
      bio: 'Leading Advocate-on-Record coordinating Supreme Court filing registries, original writ jurisdiction, and appellate stays. Specialises in regulatory compliance and statutory tribunal appeals.',
      specialization: ['Appellate Procedure', 'Company Law Tribunals', 'Regulatory Writs'],
      imagePlaceholder: 'Advocate-on-Record Priyadarshini Kashyap',
    },
    {
      id: 'adv-dev',
      name: 'Devavrat Sharma',
      title: 'Chambers Counsel · High Court of Delhi',
      experienceYears: 16,
      courtEnrollment: 'Enrolled 2008 · Delhi High Court Bar Association',
      education: 'LL.B. (Faculty of Law, Jamia Millia Islamia), B.Sc. (Economics)',
      bio: 'Directs original side commercial suits, urgent interim stay motions, and cross-examination strategies in arbitrations. Known for sharp trial cross-examinations.',
      specialization: ['Original Commercial Suits', 'Arbitral Tribunals', 'Contractual Relief'],
      imagePlaceholder: 'Chambers Counsel Devavrat Sharma',
    },
  ] as AdvocateProfile[],

  consultationSteps: [
    {
      step: '01',
      title: 'Preliminary Brief Review',
      desc: 'Our chambers research associates review trial court decrees, High Court rulings, or arbitral awards to assess maintainability before filing.',
    },
    {
      step: '02',
      title: 'Chambers Conference',
      desc: 'In-person consultation at our Bhagwan Das Road chambers with lead counsel to chart ground points and judicial precedents.',
    },
    {
      step: '03',
      title: 'Petition Drafting & Settling',
      desc: 'Rigorous ground-formulation, vetting by designated Senior Counsel, and verification with Registry requirements.',
    },
    {
      step: '04',
      title: 'Court Advocacy & Follow-Up',
      desc: 'Effective oral arguments before Court Benches, obtaining interim stays, and comprehensive certified copy tracking.',
    },
  ],

  insights: [
    {
      id: 'slp-threshold',
      title: 'Threshold Requirements for Special Leave Petitions: Article 136 Jurisprudence Revisited',
      category: 'Supreme Court Practice',
      readTime: '6 min read',
      date: 'March 2026',
      excerpt:
        'An examination of recent Constitution Bench rulings clarifying that Article 136 remains an extraordinary discretionary remedy rather than a routine court of ordinary appeal.',
      citation: 'SCC Online 2026 Del 104',
    },
    {
      id: 'arbitration-sec-34',
      title: 'Patent Illegality vs. Merits Re-Appreciation in Section 34 Setting-Aside Applications',
      category: 'Arbitration Law',
      readTime: '8 min read',
      date: 'February 2026',
      excerpt:
        'Evaluating the statutory perimeter of judicial review under the Arbitration Act and recent appellate cautions against re-weighing tribunal factual evidentiary records.',
      citation: '(2026) 3 Arb LR 42',
    },
    {
      id: 'ibc-personal-guarantor',
      title: 'Personal Guarantors Under the Insolvency and Bankruptcy Code: Strategic Remedies',
      category: 'Commercial Litigation',
      readTime: '5 min read',
      date: 'January 2026',
      excerpt:
        'Analysis of concurrent proceedings against corporate debtor resolution applicants and personal promoters under Part III of the IBC.',
      citation: '2026 Comp Cas 88',
    },
  ] as LegalInsight[],

  faqs: [
    {
      question: 'What is the role of an Advocate-on-Record (AoR) in Supreme Court matters?',
      answer:
        'Under Supreme Court Rules, only an Advocate-on-Record is legally entitled to file appearances, petitions, and pleadings on behalf of a litigant in the Supreme Court of India. Senior Advocates argue before the bench upon being briefed by the AoR.',
    },
    {
      question: 'How quickly can an urgent stay petition or Special Leave Petition be listed?',
      answer:
        'In matters involving grave urgency such as pending demolition, asset auction, or arrest, an urgent mentioning can be made before the Registrar or Hon’ble Chief Justice Court for overnight or 48-hour listing upon Registry clearance.',
    },
    {
      question: 'Do your chambers accept matters from other states outside Delhi?',
      answer:
        'Yes. Litigants from across all states frequently retain our chambers for Supreme Court appellate filings, transfer petitions between states, and international arbitrations held in Mumbai, Bengaluru, or Delhi.',
    },
    {
      question: 'What documentation is needed for a chamber consultation?',
      answer:
        'Please bring the certified copy of the impugned order/judgment, complete pleadings of the lower courts, chronologically organised annexures, and a brief memo of facts.',
    },
  ] as FaqItem[],
};
