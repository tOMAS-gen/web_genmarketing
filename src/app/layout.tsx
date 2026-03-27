import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/app/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});

const SITE_URL = 'https://genmarketing.com.ar';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '›genmarketing | Agencia de Marketing Digital en Mendoza',
    template: '%s | ›genmarketing',
  },
  description:
    'Agencia de marketing digital en Mendoza, Argentina. Diseño web profesional, gestión de redes sociales, branding, SEO y chatbot con IA. Hacemos crecer tu marca en todo el país.',
  authors: [{ name: '›genmarketing' }],
  keywords: [
    'agencia de marketing digital mendoza',
    'diseño web mendoza',
    'redes sociales mendoza',
    'branding mendoza',
    'seo argentina',
    'agencia digital argentina',
    'marketing digital mendoza',
    'desarrollo web mendoza',
    'google mi negocio mendoza',
    'chatbot ia',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: '›genmarketing',
    title: '›genmarketing | Agencia de Marketing Digital en Mendoza',
    description:
      'Agencia de marketing digital en Mendoza, Argentina. Diseño web, redes sociales, branding, SEO y más.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: '›genmarketing — Agencia de Marketing Digital en Mendoza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '›genmarketing | Agencia de Marketing Digital en Mendoza',
    description:
      'Agencia de marketing digital en Mendoza, Argentina. Diseño web, redes sociales, branding, SEO y más.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: '›genmarketing',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    'Agencia de marketing digital en Mendoza, Argentina. Diseño web, gestión de redes sociales, branding, SEO, chatbot con IA y fotografía.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mendoza',
    addressRegion: 'Mendoza',
    addressCountry: 'AR',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://instagram.com/genmarketing',
    'https://linkedin.com/company/genmarketing',
  ],
  serviceType: [
    'Diseño Web',
    'Marketing Digital',
    'Gestión de Redes Sociales',
    'Branding',
    'SEO',
    'Chatbot con IA',
    'Google Mi Negocio',
    'Fotografía',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
