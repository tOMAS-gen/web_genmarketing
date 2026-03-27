'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { Star } from 'lucide-react';
import { getInitials } from '@/lib/utils';

export function Testimonios() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-purple-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Testimonios
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-none tracking-tight">
              Lo que dicen<br />nuestros clientes
            </h2>
          </div>
          <div className="flex items-center gap-1.5 md:mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm font-bold text-black ml-2">4.9 / 5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">

          {/* Featured */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-neutral-950 rounded-3xl p-8 md:p-10 flex flex-col justify-between row-span-1 lg:row-span-2 relative overflow-hidden"
            >
              {/* Ambient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-700/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-0.5 mb-8">
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white text-xl md:text-2xl font-bold leading-snug mb-8">
                  "{featured.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/10 relative z-10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-black">{getInitials(featured.name)}</span>
                </div>
                <div>
                  <p className="font-black text-white text-sm">{featured.name}</p>
                  <p className="text-xs text-neutral-500">{featured.business}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Rest */}
          <div className="flex flex-col gap-6">
            {rest.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 + 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl border border-neutral-100 p-7 flex flex-col group hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-black">{getInitials(t.name)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-black text-xs">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
