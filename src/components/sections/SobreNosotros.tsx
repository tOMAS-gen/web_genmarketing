'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, Heart, Handshake, Zap, Clock } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovación',    description: 'Siempre buscamos nuevas formas de resolver problemas digitales' },
  { icon: Target,    title: 'Resultados',    description: 'Tu éxito es nuestro éxito. Nos enfocamos en objetivos medibles' },
  { icon: Heart,     title: 'Honestidad',    description: 'Comunicación clara y transparente en cada proyecto' },
  { icon: Handshake, title: 'Colaboración',  description: 'Trabajamos contigo, no para ti. Tu visión es la nuestra' },
];

const features = [
  { icon: Zap,   title: '100% Remoto',      description: 'Trabajamos desde cualquier lugar, sin límites geográficos' },
  { icon: Clock, title: 'Respuesta en <24h', description: 'Atención ágil: respondemos en menos de 24 horas hábiles' },
];


export function SobreNosotros() {
  return (
    <section className="py-20 md:py-32 bg-neutral-950 relative mesh-bg-dark">
      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(147,51,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.06) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
            bg-purple-900/60 text-purple-300 border border-purple-700/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Sobre nosotros
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance gradient-text-white mb-4 pb-1">
            ›genmarketing
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-medium max-w-2xl mx-auto">
            Somos el equipo de marketing digital de ›gen, empresa tecnológica argentina.
          </p>
        </motion.div>

        {/* Mission + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Nuestra Misión</h3>
            <p className="text-neutral-400 text-lg leading-relaxed mb-4">
              Transformar la presencia digital de empresas y emprendimientos, generando impacto
              real a través de soluciones creativas, innovadoras y orientadas a resultados.
            </p>
            <p className="text-neutral-500 leading-relaxed">
              Creemos que toda empresa merece una presencia digital profesional que refleje el
              valor de su marca y genere oportunidades de crecimiento sostenible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-5"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-start gap-4 glass-dark rounded-xl p-5 hover:border-purple-700/40 transition-all duration-300 group/feat">
                  <div className="p-2.5 bg-purple-700/40 rounded-lg flex-shrink-0 group-hover/feat:bg-purple-600/50 group-hover/feat:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{f.title}</h4>
                    <p className="text-neutral-400 text-sm">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">Nuestros Valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                  className="glass-dark rounded-2xl p-6 hover:border-purple-700/50 hover:shadow-[0_0_32px_rgba(147,51,234,0.15)] transition-[border-color,box-shadow] duration-300 group"
                >
                  <div className="mb-4 w-10 h-10 rounded-xl bg-purple-800/50 flex items-center justify-center group-hover:bg-purple-700/60 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{v.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
