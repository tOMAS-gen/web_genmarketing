'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const vp = { once: true, amount: 0 };

export function CTA() {
  return (
    <section className="relative py-24 md:py-40 mesh-bg-dark">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(147,51,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.06) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-purple-700/25 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
            bg-purple-900/50 text-purple-300 border border-purple-700/40 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Sin compromiso · Sin costo oculto
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-balance gradient-text-white mb-6 pb-1"
        >
          ¿Listo para llevar tu marca al siguiente nivel?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-xl text-neutral-400 font-medium mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Hablemos de tu proyecto. Respuesta garantizada en menos de 24 horas.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button href="/presupuesto" variant="primary" size="lg">
            Pedir Presupuesto
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            href="/contacto"
            variant="outline"
            size="lg"
            className="border-neutral-700 text-neutral-200 hover:bg-white/5 hover:border-neutral-500"
          >
            Hablar con nosotros
          </Button>
        </motion.div>

        {/* Email link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ delay: 0.3 }}
          className="text-neutral-500 text-sm flex items-center justify-center gap-2"
        >
          <Mail className="w-3.5 h-3.5" />
          O escríbenos directamente a{' '}
          <a href={`mailto:${CONTACT_INFO.email}`}
            className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
            {CONTACT_INFO.email}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
