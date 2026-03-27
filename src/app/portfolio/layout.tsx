import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Trabajos Realizados',
  description:
    'Conocé los proyectos de diseño web y marketing digital que realizamos para empresas y emprendimientos de Mendoza y toda Argentina.',
  alternates: { canonical: 'https://genmarketing.com.ar/portfolio' },
  openGraph: {
    title: 'Portfolio | ›genmarketing — Diseño Web Mendoza',
    description:
      'Proyectos reales de diseño web y marketing digital para empresas mendocinas.',
    url: 'https://genmarketing.com.ar/portfolio',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
