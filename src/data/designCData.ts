import { PracticeArea, AdvocateProfile, LegalInsight, FaqItem } from '../types';

export const NOIR_LUXURY_DATA = {
  firmName: 'Aethelgard Legal Counsel',
  tagline: 'Boutique Litigation · Special Counsel · Private Wealth Disputes',
  heroHeadline: 'Precision in Counsel. Resolve in Action.',
  heroSubheadline:
    'An exclusive boutique practice dedicated to ultra-high-net-worth individuals, conglomerate families, cross-border arbitration, and crisis litigation where reputation, control, and absolute discretion are paramount.',
  privateOffice: 'Executive Penthouse, Express Towers, Nariman Point, Mumbai 400021',
  phone: '+91 (22) 4899 9000',
  email: 'private@aethelgardcounsel.com',

  pillars: [
    {
      num: 'I',
      title: 'Discreet Command',
      desc: 'We operate with strict confidentiality protocols, protecting corporate reputation and sensitive family governance from public glare.',
    },
    {
      num: 'II',
      title: 'Bespoke Retainer Model',
      desc: 'We limit our caseload strictly to ten active strategic matters simultaneously, ensuring uncompromised partner immersion.',
    },
    {
      num: 'III',
      title: 'Decisive Forum Strategy',
      desc: 'Mastery over emergency arbitral seats in Mumbai, Singapore (SIAC), and London (LCIA) alongside constitutional courts.',
    },
  ],

  practiceAreas: [
    {
      id: 'high-value-arbitration',
      title: 'Cross-Border Arbitration & Enforcement',
      subtitle: 'SIAC · LCIA · ICC · MCIA',
      description:
        'Representation in multi-jurisdictional arbitrations, bilateral investment treaty claims, and aggressive enforcement of arbitral awards across sovereign and private assets.',
      keyActs: ['Arbitration Act 1996 (Part I & II)', 'New York Convention 1958'],
      casesHandled: 'Disputed stakes exceeding ₹8,500 Cr',
      iconName: 'Compass',
      scopeList: [
        'Emergency arbitrator applications for worldwide asset freezes',
        'Complex engineering, infrastructure & energy arbitrations',
        'Multi-party, multi-contract dispute coordination',
        'Recognition and enforcement of international arbitral awards',
      ],
    },
    {
      id: 'white-collar-defense',
      title: 'Crisis Defense & Regulatory Inquiries',
      subtitle: 'Enforcement Directorate · CBI · SFIO · SEBI',
      description:
        'Strategic counseling for corporate boards, independent directors, and institutional leaders confronting high-profile investigation notices, provisional attachments, and special court trials.',
      keyActs: ['Prevention of Money Laundering Act', 'SEBI Act 1992', 'IPC / BNS'],
      casesHandled: 'Unconditional quashing & anticipatory protection',
      iconName: 'Shield',
      scopeList: [
        'Pre-summoning strategic posture and documentary vetting',
        'High Court writ challenges against arbitrary provisional freezes',
        'Insider trading & securities fraud defense before SAT',
        'Cross-border mutual legal assistance treaty (MLAT) defense',
      ],
    },
    {
      id: 'private-client-wealth',
      title: 'Private Wealth, Family Dynasties & Trusts',
      subtitle: 'Succession Planning & Contested Estates',
      description:
        'Architecting private family trusts, offshore asset holding structures, pre-nuptial arrangements, and resolving complex multi-branch dynasty estate partition disputes.',
      keyActs: ['Indian Trusts Act 1882', 'Indian Succession Act 1925'],
      casesHandled: 'Advising prominent family business lineages',
      iconName: 'Crown',
      scopeList: [
        'Bespoke family constitution and governance structuring',
        'Testamentary disputes and probate litigation',
        'Cross-border offshore trust protection and tax transparency',
        'Confidential mediation in intra-family asset partitions',
      ],
    },
    {
      id: 'hostile-takeovers',
      title: 'Shareholder Warfare & Hostile Takeovers',
      subtitle: 'Boardroom Control & NCLT Injunctions',
      description:
        'Decisive advocacy in contested board takeovers, shareholder activism, forensic audits, and emergency injunctions under Section 241/242 of the Companies Act.',
      keyActs: ['Companies Act 2013', 'SEBI (SAST) Regulations 2011'],
      casesHandled: 'Retaining control in critical board battles',
      iconName: 'Flame',
      scopeList: [
        'Injunctions against predatory extraordinary general meetings (EGM)',
        'Forensic auditor engagement and evidentiary trail assembly',
        'Takeover Code compliance and counter-tender strategies',
        'Appellate defenses before the National Company Law Appellate Tribunal',
      ],
    },
  ] as PracticeArea[],

  counselProfiles: [
    {
      id: 'counsel-vikramaditya',
      name: 'Vikramaditya Singhania',
      title: 'Senior Partner · Strategic Dispute Practice',
      experienceYears: 28,
      courtEnrollment: 'Enrolled 1996 · Bar Council of Maharashtra & Goa',
      education: 'B.A. LL.B. (Hons.) NLSIU, LL.M. Harvard Law School',
      bio: 'Renowned for strategic battlefield acumen in contested corporate takeovers and international arbitration. Has represented conglomerate chairmen and sovereign wealth vehicles across three continents.',
      specialization: ['High-Stakes Arbitration', 'Boardroom Warfare', 'Crisis Defense'],
      imagePlaceholder: 'Vikramaditya Singhania',
    },
    {
      id: 'counsel-kavita',
      name: 'Kavita Chidambaram',
      title: 'Partner · Private Client & Estate Chambers',
      experienceYears: 21,
      courtEnrollment: 'Enrolled 2003 · Madras High Court Bar Association',
      education: 'B.A. LL.B. (Symbiosis Pune), LL.M. Oxford University (BCL)',
      bio: 'Trusted family confidante and counsel to premier business families across India and London. Crafts succession architectures resilient against probate challenges and multi-branch disputes.',
      specialization: ['Family Dynasties', 'Offshore Trusts', 'Succession Battles'],
      imagePlaceholder: 'Kavita Chidambaram',
    },
  ] as AdvocateProfile[],

  briefings: [
    {
      id: 'private-arbitration-confidentiality',
      title: 'Preserving Commercial Secrecy: Confidentiality Injunctions in Indian-Seated Arbitrations',
      category: 'Strategic Arbitration',
      readTime: '6 min read',
      date: 'March 2026',
      excerpt:
        'How party autonomy can be leveraged to insulate trade secrets and family financial statements from public court dockets during section 9 proceedings.',
    },
    {
      id: 'pmla-attachment-defense',
      title: 'Safeguarding Bonafide Third-Party Assets from Provisional Attachment Under PMLA',
      category: 'Crisis Defense',
      readTime: '8 min read',
      date: 'February 2026',
      excerpt:
        'A forensic exploration of the statutory distinction between genuine commercial transactions and proceeds of crime in recent High Court rulings.',
    },
  ] as LegalInsight[],

  faqs: [
    {
      question: 'How do you safeguard client confidentiality during initial briefings?',
      answer:
        'Every consultation is governed by rigorous attorney-client privilege. Initial communications are routed via encrypted channels and subject to formal non-disclosure protocols prior to reviewing sensitive family or boardroom materials.',
    },
    {
      question: 'What is the firm’s retainer model for high-stakes litigation?',
      answer:
        'We do not engage in volume billing. Engagements are structured as bespoke milestone retainers or dedicated case mandates, ensuring our senior partners dedicate direct, undivided strategic focus to your matter.',
    },
    {
      question: 'Do you accept international arbitration mandates with non-Indian seats?',
      answer:
        'Yes. Our partners routinely appear as co-counsel in arbitral proceedings seated in Singapore (SIAC), London (LCIA), and Dubai (DIAC), collaborating with local solicitors for jurisdictional formalities.',
    },
  ] as FaqItem[],
};
