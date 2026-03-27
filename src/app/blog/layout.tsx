import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de Marketing Digital',
  description:
    'Artículos, tips y guías sobre marketing digital, diseño web, SEO, redes sociales y estrategia online para emprendedores y empresas.',
  alternates: { canonical: 'https://genmarketing.com.ar/blog' },
  openGraph: {
    title: 'Blog de Marketing Digital | ›genmarketing',
    description:
      'Tips, guías y estrategias de marketing digital para hacer crecer tu negocio en Argentina.',
    url: 'https://genmarketing.com.ar/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
