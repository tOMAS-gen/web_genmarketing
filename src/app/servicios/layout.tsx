import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Marketing Digital',
  description:
    'Diseño web, gestión de redes sociales, branding, SEO, chatbot con IA, Google Mi Negocio y fotografía profesional en Mendoza, Argentina.',
  alternates: { canonical: 'https://genmarketing.com.ar/servicios' },
  openGraph: {
    title: 'Servicios de Marketing Digital | ›genmarketing Mendoza',
    description:
      'Soluciones digitales completas: diseño web, redes sociales, branding, SEO y más para tu negocio en Argentina.',
    url: 'https://genmarketing.com.ar/servicios',
  },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
