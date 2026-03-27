import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contactá a ›genmarketing para empezar tu proyecto digital. Respondemos en menos de 24 horas. Mendoza, Argentina.',
  alternates: { canonical: 'https://genmarketing.com.ar/contacto' },
  openGraph: {
    title: 'Contacto | ›genmarketing — Agencia Digital Mendoza',
    description:
      'Empezá tu proyecto digital hoy. Te respondemos en menos de 24 horas.',
    url: 'https://genmarketing.com.ar/contacto',
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
