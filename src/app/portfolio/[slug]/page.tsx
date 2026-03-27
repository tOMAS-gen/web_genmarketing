import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `https://genmarketing.com.ar/portfolio/${slug}` },
    openGraph: {
      title: `${project.title} | ›genmarketing Portfolio`,
      description: project.description,
      url: `https://genmarketing.com.ar/portfolio/${slug}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  const index = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="bg-neutral-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Proyecto no encontrado</h1>
          <Button href="/portfolio" variant="primary">Volver al Portfolio</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-neutral-950 min-h-screen">

      {/* Hero */}
      <section className="mesh-bg-dark pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-purple-400 text-sm font-semibold transition-colors mb-10 group"
          >
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Portfolio
          </Link>

          <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            {String(index + 1).padStart(2, '0')} — {project.category}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">{project.description}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
      </section>

      {/* Image */}
      <section className="py-12 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1152px"
              priority
            />
          </div>

          {project.url && (
            <div className="mt-5 flex justify-end">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
              >
                Ver sitio en vivo
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">Cliente</p>
              <p className="text-2xl font-black text-white mb-10">{project.client}</p>

              <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">Solución</p>
              <p className="text-neutral-300 leading-relaxed">
                Desarrollamos una presencia digital profesional adaptada a los objetivos y la identidad del cliente. El resultado es un sitio funcional, rápido y optimizado para atraer nuevos contactos.
              </p>
            </div>

            {project.results && (
              <div className="border border-white/5 rounded-2xl p-8 bg-neutral-900 flex flex-col justify-center">
                <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">Resultado</p>
                <p className="text-3xl md:text-4xl font-black text-white leading-tight">{project.results}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            ¿Necesitas un proyecto como este?
          </h2>
          <p className="text-neutral-400 mb-10">Cuéntanos tu idea y hagamos algo increíble juntos.</p>
          <Button href="/presupuesto" variant="primary" size="lg">
            Solicitar Presupuesto
          </Button>
        </div>
      </section>
    </main>
  );
}
