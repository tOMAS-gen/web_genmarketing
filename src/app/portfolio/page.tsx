'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function PortfolioPage() {
  return (
    <main className="bg-neutral-950 min-h-screen">

      {/* Hero */}
      <section className="mesh-bg-dark pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Trabajo real · Resultados reales
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6"
          >
            Nuestro
            <br />
            <span className="gradient-text-white">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-400 text-lg max-w-lg"
          >
            Sitios web que construimos para empresas reales. Cada proyecto, una solución a medida.
          </motion.p>
        </div>

        {/* decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {PORTFOLIO_PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
              >
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 hover:border-purple-700/40 transition-colors duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                      {/* Image */}
                      <div className="relative h-64 md:h-auto md:min-h-80 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/60 md:block hidden" />
                        {/* number badge */}
                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-black text-white/70 tracking-widest">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center p-8 md:p-10">
                        <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
                          {project.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h2>
                        <p className="text-neutral-400 text-sm mb-2">{project.client}</p>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>
                        {project.results && (
                          <p className="text-xs font-semibold text-green-400 mb-6">
                            ✓ {project.results}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:gap-3 transition-all duration-300">
                          Ver caso completo
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            ¿Te gustaría un proyecto como estos?
          </motion.h2>
          <p className="text-neutral-400 text-lg mb-10">
            Cuéntanos tu idea y lo hacemos realidad.
          </p>
          <Button href="/presupuesto" variant="primary" size="lg">
            Solicitar Presupuesto
          </Button>
        </div>
      </section>
    </main>
  );
}
