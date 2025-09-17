// Common Types for PixelAr Website

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceFrom: string;
  icon: string;
  category: 'web' | 'ecommerce' | 'landing' | 'maintenance' | 'automation';
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'restaurant' | 'commerce' | 'ecommerce' | 'landing' | 'corporate';
  image: string;
  technologies: string[];
  developmentTime: string;
  url?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  location: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  order: number;
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  location: string;
  workingHours: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string;
}

// Animation Types
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration: number;
      delay?: number;
      ease?: string;
    };
  };
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  timeline: string;
}
