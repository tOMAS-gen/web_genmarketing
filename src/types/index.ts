// Tipos comunes
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: 'web' | 'redes' | 'branding' | 'chatbot';
  client: string;
  results?: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  text: string;
  image?: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface QuoteFormData extends ContactFormData {
  siteType: string;
  budget: string;
  hasLogo: boolean;
}
