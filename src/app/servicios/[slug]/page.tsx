import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';
import * as Icons from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Servicio no encontrado' };
  return {
    title: service.title,
    description: `${service.description} Servicio profesional de ›genmarketing en Mendoza, Argentina.`,
    alternates: { canonical: `https://genmarketing.com.ar/servicios/${slug}` },
    openGraph: {
      title: `${service.title} | ›genmarketing Mendoza`,
      description: `${service.description} Agencia de marketing digital en Mendoza, Argentina.`,
      url: `https://genmarketing.com.ar/servicios/${slug}`,
    },
  };
}

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

const benefits = [
  'Soluciones personalizadas a tus necesidades',
  'Resultados medibles y comprobados',
  'Equipo experto en marketing digital',
  'Soporte continuo después del lanzamiento',
];

const steps = [
  { num: '01', title: 'Consulta',  desc: 'Entendemos tus objetivos y necesidades en detalle' },
  { num: '02', title: 'Propuesta', desc: 'Presentamos la estrategia personalizada para tu caso' },
  { num: '03', title: 'Ejecución', desc: 'Ejecutamos, medimos y optimizamos continuamente' },
];

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const serviceIndex = SERVICES.findIndex((s) => s.slug === slug);
  const IconComponent = service
    ? (Icons[service.icon as keyof typeof Icons] as React.ElementType | undefined)
    : undefined;

  if (!service) {
    return (
      <main className="bg-neutral-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Servicio no encontrado</h1>
          <Button href="/servicios" variant="primary">Volver a Servicios</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-neutral-950">

      {/* Hero */}
      <section className="mesh-bg-dark pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-purple-400 text-sm font-semibold transition-colors mb-10 group"
          >
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Servicios
          </Link>

          <div className="flex items-start gap-6 mb-8">
            {IconComponent && (
              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <IconComponent className="w-7 h-7 text-purple-400" />
              </div>
            )}
            <div>
              <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {String(serviceIndex + 1).padStart(2, '0')} — Servicio
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-4">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed mb-10">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/presupuesto" variant="primary" size="lg">
              Solicitar Presupuesto
            </Button>
            <Button
              href="/contacto"
              variant="outline"
              size="lg"
              className="border-neutral-700 text-neutral-200 hover:bg-white/5 hover:border-neutral-500"
            >
              Más Información
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
      </section>

      {/* Benefits + Process */}
      <section className="py-20 md:py-32 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Benefits */}
            <div>
              <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">Por qué elegirnos</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-10">
                Beneficios
              </h2>
              <ul className="space-y-5">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs font-black">✓</span>
                    </div>
                    <span className="text-neutral-300 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">Cómo trabajamos</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-10">
                Nuestro Proceso
              </h2>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-3xl font-black text-purple-600/40 leading-none flex-shrink-0 mt-0.5">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="text-lg font-black text-white mb-1">{step.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Consulta sin costo ni compromiso. Respondemos en menos de 24 horas.
          </p>
          <Button href="/contacto" variant="primary" size="lg">
            Contactar Ahora
          </Button>
        </div>
      </section>
    </main>
  );
}
