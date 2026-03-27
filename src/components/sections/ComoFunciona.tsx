'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Consultá',
    description: 'Contanos tu proyecto, objetivos y presupuesto. Sin costo, sin compromiso.',
  },
  {
    num: '02',
    title: 'Diseñamos',
    description: 'Creamos una estrategia y propuesta personalizada para tu negocio en 24h.',
  },
  {
    num: '03',
    title: 'Lanzamos',
    description: 'Ejecutamos, medimos y optimizamos. Tu crecimiento digital comienza hoy.',
  },
];

export function ComoFunciona() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="text-purple-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Proceso simple
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-none tracking-tight">
              ¿Cómo<br />funciona?
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed md:text-right">
            En tres pasos simples llevamos tu idea al mundo digital
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0"
            >
              {/* Number */}
              <div className="text-[5rem] font-black leading-none text-neutral-100 group-hover:text-purple-100 transition-colors duration-300 mb-6 select-none">
                {step.num}
              </div>
              <h3 className="text-2xl font-black text-black mb-3 group-hover:text-purple-600 transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-[260px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
