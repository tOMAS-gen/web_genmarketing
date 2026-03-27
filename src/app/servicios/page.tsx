'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function ServiciosPage() {
  return (
    <main className="bg-neutral-950 min-h-screen">

      {/* Hero */}
      <section className="mesh-bg-dark pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Lo que hacemos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6"
          >
            Nuestros
            <br />
            <span className="gradient-text-white">Servicios</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-400 text-lg max-w-lg"
          >
            Soluciones digitales completas diseñadas para hacer crecer tu negocio en línea.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
      </section>

      {/* Services list */}
      <section className="py-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-white/5">
            {SERVICES.map((service, i) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType | undefined;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <Link href={`/servicios/${service.slug}`} className="block">
                    <div className="flex items-center gap-5 md:gap-10 py-8 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-xs font-black text-white/10 tabular-nums w-5 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {IconComponent && (
                        <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-purple-600 border border-white/5 group-hover:border-purple-600 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                      )}
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white group-hover:text-purple-300 transition-colors duration-200 flex-1">
                        {service.title}
                      </h2>
                      <p className="hidden lg:block text-neutral-500 text-sm max-w-sm text-right leading-relaxed flex-shrink-0">
                        {service.description}
                      </p>
                      <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
            ¿No encontrás lo que buscás?
          </motion.h2>
          <p className="text-neutral-400 text-lg mb-10">
            Cuéntanos tu proyecto y creamos una solución personalizada para vos.
          </p>
          <Button href="/contacto" variant="primary" size="lg">
            Contactar Ahora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
