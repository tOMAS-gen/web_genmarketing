'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Cómo optimizar tu perfil de Google My Business para atraer clientes en Mendoza',
    slug: 'optimizar-google-my-business-mendoza',
    excerpt: 'Tu perfil de Google My Business es la vidriera digital de tu negocio local. Aprende paso a paso cómo optimizarlo para aparecer en las búsquedas locales y convertir visitas en clientes reales en Mendoza y toda Argentina.',
    category: 'SEO Local',
    date: '2026-03-25',
    author: '›genmarketing',
  },
  {
    id: '2',
    title: 'Chatbots con IA en WhatsApp: La herramienta que tu PyME necesita en 2026',
    slug: 'chatbots-ia-whatsapp-pymes-argentina',
    excerpt: 'Los chatbots con inteligencia artificial en WhatsApp están transformando la atención al cliente de las PyMEs argentinas. Descubre cómo implementar uno, cuánto cuesta y qué resultados esperar para tu negocio.',
    category: 'Inteligencia Artificial',
    date: '2026-03-20',
    author: '›genmarketing',
  },
  {
    id: '3',
    title: 'Diseño web que convierte: 7 tendencias clave para PyMEs en 2026',
    slug: 'diseno-web-tendencias-pymes-2026',
    excerpt: 'Un sitio web no solo tiene que ser lindo: tiene que vender. Conoce las tendencias de diseño web que están generando más conversiones para negocios en Argentina y cómo aplicarlas a tu página.',
    category: 'Diseño Web',
    date: '2026-03-15',
    author: '›genmarketing',
  },
  {
    id: '4',
    title: 'Instagram vs. TikTok: ¿Dónde debe estar tu marca en Argentina?',
    slug: 'instagram-vs-tiktok-marcas-argentina',
    excerpt: 'Con más de 24 millones de usuarios en TikTok y el dominio de Instagram en Argentina, elegir la plataforma correcta es clave. Analizamos datos reales del mercado argentino para ayudarte a decidir.',
    category: 'Redes Sociales',
    date: '2026-03-10',
    author: '›genmarketing',
  },
  {
    id: '5',
    title: 'SEO en 2026: Qué es el GEO y cómo preparar tu sitio para los motores de IA',
    slug: 'seo-geo-motores-ia-2026',
    excerpt: 'El SEO está cambiando radicalmente con la llegada de la búsqueda generativa. Descubre qué es el GEO (Generative Engine Optimization) y las estrategias que necesitas implementar hoy para que tu sitio siga apareciendo en los resultados.',
    category: 'SEO',
    date: '2026-03-05',
    author: '›genmarketing',
  },
  {
    id: '6',
    title: 'Branding para emprendedores: Cómo construir una marca sólida desde cero',
    slug: 'branding-emprendedores-marca-desde-cero',
    excerpt: 'Tu marca es mucho más que un logo. En un mercado tan competitivo como el argentino, una identidad de marca coherente y auténtica puede ser la diferencia entre pasar desapercibido y conectar con tus clientes ideales.',
    category: 'Branding',
    date: '2026-02-28',
    author: '›genmarketing',
  },
  {
    id: '7',
    title: 'Guía de redes sociales para PyMEs: Cómo crear contenido que realmente funcione',
    slug: 'guia-redes-sociales-pymes-contenido',
    excerpt: 'Publicar más no es la respuesta. En 2026, la clave está en crear contenido con intención y estrategia. Te mostramos cómo planificar, crear y medir contenido efectivo para redes sociales sin necesitar un gran presupuesto.',
    category: 'Redes Sociales',
    date: '2026-02-20',
    author: '›genmarketing',
  },
  {
    id: '8',
    title: 'Por qué tu negocio en Mendoza necesita una página web profesional (y qué debe incluir)',
    slug: 'por-que-necesitas-pagina-web-profesional-mendoza',
    excerpt: 'Muchos negocios en Mendoza todavía dependen solo de redes sociales. Te explicamos por qué una página web profesional es una inversión estratégica y qué elementos no pueden faltar para que realmente genere resultados.',
    category: 'Diseño Web',
    date: '2026-02-15',
    author: '›genmarketing',
  },
  {
    id: '9',
    title: '5 estrategias de marketing digital de bajo presupuesto para PyMEs argentinas',
    slug: 'estrategias-marketing-digital-bajo-presupuesto-pymes',
    excerpt: 'No necesitas millones para hacer marketing digital efectivo. Descubre 5 estrategias probadas y accesibles que cualquier PyME argentina puede implementar hoy para aumentar su visibilidad y ventas online.',
    category: 'Marketing Digital',
    date: '2026-02-10',
    author: '›genmarketing',
  },
  {
    id: '10',
    title: 'Inteligencia Artificial para marketing: Herramientas prácticas que podés usar hoy',
    slug: 'inteligencia-artificial-marketing-herramientas-practicas',
    excerpt: 'La IA ya no es cosa del futuro. Conoce las herramientas de inteligencia artificial más útiles y accesibles para optimizar tu marketing digital, desde la creación de contenido hasta la automatización de campañas.',
    category: 'Inteligencia Artificial',
    date: '2026-02-05',
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
