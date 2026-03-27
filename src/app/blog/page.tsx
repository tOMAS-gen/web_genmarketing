'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: '10 Tips para mejorar tu presencia en Instagram',
    slug: 'tips-instagram',
    excerpt: 'Descubre las estrategias más efectivas para crecer en Instagram y aumentar el engagement con tu audiencia.',
    category: 'Redes Sociales',
    date: '2024-03-10',
    author: '›genmarketing',
  },
  {
    id: '2',
    title: 'SEO: Guía completa para principiantes',
    slug: 'seo-guia-completa',
    excerpt: 'Aprende los conceptos básicos del SEO y cómo implementarlos en tu sitio web para mejorar su visibilidad.',
    category: 'SEO',
    date: '2024-03-08',
    author: '›genmarketing',
  },
  {
    id: '3',
    title: 'Branding: Cómo crear una identidad visual única',
    slug: 'branding-identidad-visual',
    excerpt: 'Descubre cómo construir un branding sólido que diferencia tu marca en el mercado competitivo.',
    category: 'Branding',
    date: '2024-03-05',
    author: '›genmarketing',
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPage() {
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
            Ideas · Estrategia · Conocimiento
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6"
          >
            <span className="gradient-text-white pb-1 inline-block">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-400 text-lg max-w-lg"
          >
            Artículos, tips y guías sobre marketing digital, diseño web y estrategia online.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-white/5">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group py-10 first:pt-0"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold text-purple-300 bg-purple-900/40 border border-purple-700/30">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-600">{formatDate(post.date)}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-600">Por {post.author}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:gap-3 transition-all duration-300">
                      Leer artículo
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            ¿Necesitás ayuda con tu estrategia digital?
          </motion.h2>
          <p className="text-neutral-400 text-lg mb-10">
            Contactanos y hagamos crecer tu negocio online juntos.
          </p>
          <Button href="/contacto" variant="primary" size="lg">
            Empezar Ahora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
