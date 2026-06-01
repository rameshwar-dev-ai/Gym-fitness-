export type PageType = 'home' | 'programs' | 'trainers' | 'membership' | 'contact';

export interface FitnessProgram {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  benefits: string[];
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  imageUrl: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experienceYears: number;
  certifications: string[];
  imageUrl: string;
  bio: string;
  stats: {
    clientsHelped: number;
    successRate: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  quote: string;
  rating: number; // 1-5
  achievement: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  programOfInterest: string;
  message: string;
}

export interface SubmissionRecord extends ContactFormInput {
  id: string;
  timestamp: string;
}
