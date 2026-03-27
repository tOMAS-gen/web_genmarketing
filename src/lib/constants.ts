import type { Service, Plan, PortfolioProject, Testimonial } from '@/types';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://genmarketing.com.ar';
export const SITE_NAME = '›genmarketing';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y optimizados para conversión.',
    icon: 'Code',
    slug: 'desarrollo-web',
  },
  {
    id: '2',
    title: 'Gestión de Redes Sociales',
    description: 'Estrategia y contenido que engage y convierte.',
    icon: 'Share2',
    slug: 'redes-sociales',
  },
  {
    id: '3',
    title: 'Branding y Diseño',
    description: 'Identidad visual que refleja tu marca.',
    icon: 'Palette',
    slug: 'branding',
  },
  {
    id: '4',
    title: 'Chatbot con IA',
    description: 'Automatización inteligente para tu negocio.',
    icon: 'MessageCircle',
    slug: 'chatbot',
  },
  {
    id: '5',
    title: 'Google Mi Negocio',
    description: 'Visibilidad en mapas y búsquedas locales.',
    icon: 'MapPin',
    slug: 'google-mi-negocio',
  },
  {
    id: '6',
    title: 'Fotografía',
    description: 'Fotos profesionales que cuentan tu historia.',
    icon: 'Camera',
    slug: 'fotografia',
  },
];

export const PLANS: Plan[] = [
  {
    id: '1',
    name: 'Accesible',
    price: 150000,
    description: 'Para emprendimientos que recién comienzan',
    features: [
      'Sitio web de una sola página',
      'Diseño responsive',
      'SEO básico',
      'Certificado SSL',
      'Hosting y dominio por 1 año',
      'Email de soporte',
    ],
  },
  {
    id: '2',
    name: 'Estándar',
    price: 250000,
    description: 'El plan más elegido para crecer',
    features: [
      'Sitio web profesional (hasta 5 páginas)',
      'Diseño personalizado',
      'SEO avanzado',
      'Formularios y CMS',
      'Certificado SSL',
      'Hosting y dominio por 1 año',
      'Soporte prioritario',
    ],
    highlighted: true,
  },
  {
    id: '3',
    name: 'Personalizado',
    price: 0,
    description: 'Solución a medida para tu negocio',
    features: [
      'Desarrollo totalmente personalizado',
      'Integraciones complejas',
      'Plataforma de ecommerce',
      'APIs y bases de datos',
      'Soporte dedicado 24/7',
      'Hosting incluido',
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: '7',
    title: 'CuyoSmart — Mantenimiento e Infraestructura',
    slug: 'cuyosmart',
    description: 'Sitio web para empresa de mantenimiento, impermeabilización y obras civiles en Mendoza con más de 17 años de trayectoria.',
    image: '/images/portfolio/cuyosmart.jpg',
    url: 'http://cuyosmart.com.ar',
    category: 'web',
    client: 'CuyoSmart',
    results: '+500 proyectos realizados',
  },
  {
    id: '8',
    title: 'Poly MEM — Aislamientos e Impermeabilización',
    slug: 'poly-mem',
    description: 'Sitio web para empresa especializada en aislación de poliuretano, membranas y materiales de construcción en Mendoza.',
    image: '/images/portfolio/poly-mem.jpg',
    url: 'http://polymemaislaciones.com.ar',
    category: 'web',
    client: 'Poly MEM',
    results: 'Presencia digital profesional',
  },
  {
    id: '9',
    title: 'ALH Equitrans — Movimiento de Suelos',
    slug: 'alh-equitrans',
    description: 'Sitio web para empresa de movimiento de suelos, demoliciones y provisión de materiales con más de 30 años en el mercado mendocino.',
    image: '/images/portfolio/alh.jpg',
    url: 'https://alh.com.ar',
    category: 'web',
    client: 'ALH Equitrans',
    results: '+30 años de trayectoria en el mercado',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Martín García',
    business: 'García & Asociados',
    text: 'Transformaron completamente mi presencia online. El equipo fue muy profesional y el resultado superó mis expectativas.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Laura Rodríguez',
    business: 'Tienda Online LR',
    text: 'Aumentamos nuestras ventas un 45% en 3 meses. La estrategia en redes sociales fue clave.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Carlos López',
    business: 'Consultora LP',
    text: 'Excelente atención y resultados. Muy recomendados para cualquier negocio que quiera crecer digitalmente.',
    rating: 5,
  },
];

export const SOCIAL_LINKS = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/genmarketing',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/genmarketing',
  whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491234567890'}`,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@genmarketing.com.ar',
};

export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@genmarketing.com.ar',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+54 9 1234 56-7890',
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || 'Buenos Aires, Argentina',
  hours: process.env.NEXT_PUBLIC_CONTACT_HOURS || 'Lun-Vie 9:00-18:00',
};
