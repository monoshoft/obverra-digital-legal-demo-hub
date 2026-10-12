export type DesignRoute = '/' | '/design-a' | '/design-b' | '/design-c' | '/design-d';

export interface PracticeArea {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  keyActs?: string[];
  casesHandled?: string;
  iconName: string;
  scopeList: string[];
}

export interface AdvocateProfile {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  courtEnrollment: string;
  education: string;
  bio: string;
  specialization: string[];
  imagePlaceholder: string;
  barCouncilNumber?: string;
}

export interface LegalInsight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  citation?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  matterCategory: string;
  courtJurisdiction: string;
  urgency: 'routine' | 'urgent' | 'immediate';
  caseSummary: string;
  preferredMode: 'in_person' | 'video_conference' | 'phone';
}
