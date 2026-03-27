import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from './constants';

interface SEOMetadata {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}

export function generateMetadata(seo: SEOMetadata): Metadata {
  const { title, description, ogImage, canonical } = seo;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical || SITE_URL,
      siteName: SITE_NAME,
      images: ogImage ? [{ url: ogImage }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: canonical || SITE_URL,
    },
  };
}

export const homeMetadata = generateMetadata({
  title: 'Agencia Digital',
  description:
    'Hacemos crecer tu marca con diseño web, redes sociales, branding y tecnología. Agencia digital en Argentina.',
  ogImage: `${SITE_URL}/images/og/home.jpg`,
});

export const serviciosMetadata = generateMetadata({
  title: 'Servicios',
  description:
    'Desarrollo web, gestión de redes, branding, chatbot IA, Google Mi Negocio y fotografía profesional.',
  canonical: `${SITE_URL}/servicios`,
});

export const portfolioMetadata = generateMetadata({
  title: 'Portfolio',
  description:
    'Casos de éxito y proyectos realizados por ›genmarketing para empresas y emprendimientos.',
  canonical: `${SITE_URL}/portfolio`,
});

export const blogMetadata = generateMetadata({
  title: 'Blog',
  description:
    'Artículos sobre marketing digital, diseño web, redes sociales y crecimiento de negocios.',
  canonical: `${SITE_URL}/blog`,
});

export const contactoMetadata = generateMetadata({
  title: 'Contacto',
  description:
    'Contactanos para empezar tu proyecto digital. Respuesta en menos de 24 horas.',
  canonical: `${SITE_URL}/contacto`,
});

export const presupuestoMetadata = generateMetadata({
  title: 'Presupuesto',
  description:
    'Solicita tu presupuesto personalizado. Sin costo, sin compromiso. Respuesta en 24h.',
  canonical: `${SITE_URL}/presupuesto`,
});
