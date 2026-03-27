'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const marqueeItems = [
  'Diseño Web', 'Redes Sociales', 'Branding', 'SEO', 'Chatbot IA', 'Google Mi Negocio',
];

const words = [
  { text: 'Hacemos', gradient: false },
  { text: 'crecer', gradient: false },
  { text: 'tu marca', gradient: false },
  { text: 'en el mundo', gradient: true },
  { text: 'digital.', gradient: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 flex flex-col min-h-screen">
      {/* Mesh */}
      <div className="absolute inset-0 mesh-bg-dark pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(147,51,234,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Decorative giant › */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none translate-x-1/4"
        style={{ fontSize: 'clamp(18rem, 38vw, 44rem)', color: 'rgba(147,51,234,0.05)' }}
        aria-hidden="true"
      >
        ›
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-28 pb-16 md:pt-36 md:pb-20 flex-1 flex flex-col justify-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-900/50 text-purple-300 border border-purple-700/40">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Agencia Digital
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.95] tracking-tight mb-14">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.22em] ${word.gradient ? 'gradient-text-white pb-3' : 'text-white'}`}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg text-neutral-400 max-w-lg leading-relaxed"
          >
            Diseño web, redes sociales, branding y tecnología al servicio de tu negocio.
            Resultados reales, estrategia personalizada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button href="/presupuesto" variant="primary" size="lg">
              Pedir Presupuesto
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              href="/servicios"
              variant="outline"
              size="lg"
              className="border-neutral-700 text-neutral-200 hover:bg-white/5 hover:border-neutral-500"
            >
              Ver Servicios
            </Button>
          </motion.div>
        </div>

      </div>

      {/* Marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 border-t border-white/5 bg-black/30 overflow-hidden py-3.5"
      >
        <div className="flex animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 text-xs font-bold text-neutral-600 uppercase tracking-[0.15em] whitespace-nowrap"
            >
              <span className="text-purple-700 text-sm">›</span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
