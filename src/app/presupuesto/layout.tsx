import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pedir Presupuesto',
  description:
    'Solicitá un presupuesto sin cargo para tu proyecto de diseño web o marketing digital. ›genmarketing, Mendoza, Argentina.',
  alternates: { canonical: 'https://genmarketing.com.ar/presupuesto' },
  openGraph: {
    title: 'Pedir Presupuesto | ›genmarketing — Mendoza',
    description:
      'Solicitá tu presupuesto sin cargo. Diseño web, redes sociales, branding y más.',
    url: 'https://genmarketing.com.ar/presupuesto',
  },
};

export default function PresupuestoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
