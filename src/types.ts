export type ViewId = 'home' | 'mystery-mastery' | 'mysterious-psychology' | 'profit-playbook' | 'affiliate-structure';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  resultMetric?: string;
  productUsed?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface ModuleItem {
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface Product {
  id: ViewId;
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  currencySymbol?: string;
  currencySuffix?: string;
  rating: number;
  reviewCount: number;
  badge: string;
  heroImage: string;
  socialProofSnippet: string;
  keyBenefits: Benefit[];
  problemAgitate: {
    headline: string;
    subheadline: string;
    painPoints: string[];
  };
  solutionSection: {
    headline: string;
    subheadline: string;
    transformationPoints: string[];
  };
  featuresIncluded: ModuleItem[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  ctaButtonText: string;
}

export interface CommunityStat {
  value: string;
  label: string;
  subtext: string;
}
