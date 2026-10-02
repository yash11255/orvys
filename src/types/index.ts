export interface Service {
  id: string;
  number: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  deliverables: string[];
  targetStakeholders: string[];
  iconName: string;
}

export interface MetricPlaceholder {
  value: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string[];
  primaryCategory: string;
  region: string;
  year: string;
  clientType: string;
  clientName?: string;
  clientUrl?: string;
  overview: string;
  challenge: string;
  approach: string[];
  implementation: {
    phase: string;
    description: string;
    milestone: string;
  }[];
  outcomes: {
    metric: string;
    label: string;
    detail: string;
  }[];
  highlights: string[];
  featuredImage?: string;
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  executiveSummary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string[];
    quote?: string;
  }[];
  tags: string[];
}

export interface DistrictData {
  name: string;
  state: 'Bihar' | 'Uttar Pradesh (Purvanchal)' | 'National';
  focusAreas: string[];
  institutionsReached?: string;
  isPriorityHub?: boolean;
}

export interface LeadershipMember {
  role: string;
  title: string;
  focus: string;
  bioPlaceholder: string;
  credentialsPlaceholder: string;
}
