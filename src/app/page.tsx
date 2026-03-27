import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Servicios } from '@/components/sections/Servicios';
import { ComoFunciona } from '@/components/sections/ComoFunciona';
import { Planes } from '@/components/sections/Planes';
import { Testimonios } from '@/components/sections/Testimonios';
import { SobreNosotros } from '@/components/sections/SobreNosotros';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Agencia de Marketing Digital en Mendoza, Argentina',
  description:
    'Hacemos crecer tu marca en todo el país. Diseño web profesional, gestión de redes sociales, branding, SEO y chatbot con IA. ›genmarketing — Mendoza, Argentina.',
  alternates: { canonical: 'https://genmarketing.com.ar' },
  openGraph: {
    title: '›genmarketing | Agencia de Marketing Digital en Mendoza, Argentina',
    description:
      'Hacemos crecer tu marca. Diseño web, redes sociales, branding, SEO y chatbot IA.',
    url: 'https://genmarketing.com.ar',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué servicios ofrece ›genmarketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '›genmarketing ofrece diseño web profesional, gestión de redes sociales, branding e identidad visual, SEO, chatbot con inteligencia artificial, optimización de Google Mi Negocio y fotografía profesional para empresas de Mendoza y toda Argentina.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde está ubicada ›genmarketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '›genmarketing es una agencia de marketing digital con base en Mendoza, Argentina. Trabajamos con clientes de todo el país.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un sitio web profesional en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los precios de diseño web varían según el proyecto. En ›genmarketing ofrecemos el Plan Accesible (sitio de una página con SSL y hosting por 1 año), el Plan Estándar (hasta 5 páginas con SEO avanzado) y soluciones personalizadas para proyectos complejos. Consultá por un presupuesto sin cargo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en estar listo mi sitio web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tiempo de entrega depende del plan elegido. Un sitio de una página puede estar listo en 1-2 semanas, mientras que un sitio de hasta 5 páginas toma entre 3 y 4 semanas. Proyectos personalizados se presupuestan por separado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Trabajan con empresas de toda Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Aunque estamos basados en Mendoza, trabajamos con emprendimientos y empresas de todo el país de forma 100% remota.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Servicios />
      <ComoFunciona />
      <Planes />
      <Testimonios />
      <SobreNosotros />
      <CTA />
    </>
  );
}
