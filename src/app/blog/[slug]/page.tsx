import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogContent[slug];
  if (!post) return { title: 'Artículo no encontrado' };
  return {
    title: post.title,
    description: `${post.content.slice(0, 150).replace(/\*\*/g, '').trim()}...`,
    alternates: { canonical: `https://genmarketing.com.ar/blog/${slug}` },
    openGraph: {
      title: `${post.title} | ›genmarketing`,
      description: `${post.content.slice(0, 150).replace(/\*\*/g, '').trim()}...`,
      url: `https://genmarketing.com.ar/blog/${slug}`,
      type: 'article',
    },
  };
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const blogContent: Record<string, {
  title: string; date: string; author: string; category: string; content: string;
}> = {
  'tips-instagram': {
    title: '10 Tips para mejorar tu presencia en Instagram',
    date: '2024-03-10',
    author: '›genmarketing',
    category: 'Redes Sociales',
    content: `Instagram es una de las plataformas más poderosas para el marketing digital. Aquí te compartimos 10 tips para mejorar tu presencia:

1. **Usa historias regularmente**: Las historias aumentan el engagement y mantienen activa tu presencia.

2. **Publica contenido de valor**: Comparte información útil que resuelva problemas de tu audiencia.

3. **Mantén una estética consistente**: Usa un filtro o paleta de colores coherente.

4. **Engáchate con tu comunidad**: Responde comentarios y mensajes rápidamente.

5. **Usa hashtags relevantes**: Investiga hashtags populares en tu nicho.

6. **Publica a la hora correcta**: Analiza cuándo tu audiencia está más activa.

7. **Crea contenido educativo**: Tutoriales y tips funcionan muy bien.

8. **Collabora con otros creadores**: Las colaboraciones amplían tu reach.

9. **Usa Reels**: El video es el formato con más engagement actualmente.

10. **Analiza tus métricas**: Usa las herramientas de Instagram Analytics para entender qué funciona.

Implementa estos tips y verás mejoras significativas en tu presencia en Instagram.`,
  },
  'seo-guia-completa': {
    title: 'SEO: Guía completa para principiantes',
    date: '2024-03-08',
    author: '›genmarketing',
    category: 'SEO',
    content: `El SEO (Search Engine Optimization) es fundamental para que tu sitio web sea encontrado en Google. En esta guía cubrimos todo lo que necesitas saber.

**¿Qué es el SEO?**

SEO es el conjunto de técnicas para mejorar la visibilidad de tu sitio en los resultados de búsqueda orgánicos de Google.

**Pilares principales del SEO:**

1. **SEO On-Page**: Optimización dentro de tu sitio
   - Títulos y meta descripciones
   - Uso de palabras clave
   - Estructura de URLs
   - Contenido de calidad

2. **SEO Técnico**: Optimización técnica del sitio
   - Velocidad de carga
   - Mobile-friendly
   - Estructura de sitemap
   - Certificado SSL

3. **Link Building**: Obtención de enlaces
   - Backlinks de calidad
   - Guest posting
   - Directorios relevantes

**Pasos para empezar:**

1. Investiga palabras clave relevantes para tu negocio
2. Optimiza tu sitio para esas palabras clave
3. Crea contenido de calidad
4. Construye enlaces hacia tu sitio
5. Monitorea tu progreso con Google Analytics

El SEO es un proceso a largo plazo, pero los resultados valen la pena.`,
  },
  'branding-identidad-visual': {
    title: 'Branding: Cómo crear una identidad visual única',
    date: '2024-03-05',
    author: '›genmarketing',
    category: 'Branding',
    content: `El branding es más que un logo. Es la percepción completa que tienen tus clientes sobre tu marca. En esta guía te mostramos cómo crear una identidad visual única.

**Elementos clave del Branding:**

1. **Logo**: El símbolo visual más importante de tu marca
   - Debe ser memorable
   - Simple y versátil
   - Diferenciador

2. **Paleta de Colores**: Los colores que representan tu marca
   - Elige 2-3 colores principales
   - Considera la psicología del color
   - Úsalos consistentemente

3. **Tipografía**: Las fuentes que defines para tu marca
   - Una fuente para títulos
   - Una fuente para cuerpo
   - Mantén consistencia

4. **Estilo Visual**: Fotografía, ilustraciones, iconografía
   - Mantén un estilo coherente
   - Crea una librería de recursos visuales

5. **Voz y Tono**: Cómo te comunicas
   - Define el tono de voz de tu marca
   - Mantenlo consistente en todos los canales

**Pasos para crear tu identidad:**

1. Define tu propósito y valores
2. Identifica a tu audiencia objetivo
3. Analiza a tus competidores
4. Crea tu logo y paleta de colores
5. Desarrolla guías de marca
6. Implementa en todos los canales

Una identidad visual fuerte diferencia tu marca en el mercado.`,
  },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });
}

function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('1. ') || block.startsWith('- ')) {
      const items = block.split('\n').filter(Boolean);
      return (
        <ul key={i} className="space-y-3 mb-8 text-neutral-300">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 leading-relaxed">
              <span className="text-purple-500 mt-1 flex-shrink-0">›</span>
              <span>
                {item.replace(/^[-\d.]\s/, '').split(/\*\*(.*?)\*\*/).map((part, idx) =>
                  idx % 2 === 1 ? <strong key={idx} className="text-white">{part}</strong> : part
                )}
              </span>
            </li>
          ))}
        </ul>
      );
    }
    const hasBold = block.includes('**');
    const parts = block.split(/\*\*(.*?)\*\*/);
    const isHeading = parts.length === 1 && block.endsWith(':') && block.length < 60;
    if (isHeading) {
      return (
        <h2 key={i} className="text-xl font-black text-white mt-10 mb-4 pb-2 border-b border-white/5">
          {block}
        </h2>
      );
    }
    return (
      <p key={i} className="text-neutral-300 mb-6 leading-relaxed text-lg">
        {hasBold ? parts.map((part, idx) =>
          idx % 2 === 1 ? <strong key={idx} className="text-white font-black">{part}</strong> : part
        ) : block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    return (
      <main className="bg-neutral-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Artículo no encontrado</h1>
          <Button href="/blog" variant="primary">Volver al Blog</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-neutral-950">

      {/* Hero */}
      <section className="mesh-bg-dark pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-purple-400 text-sm font-semibold transition-colors mb-10 group"
          >
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold text-purple-300 bg-purple-900/40 border border-purple-700/30">
              {post.category}
            </span>
            <span className="text-xs text-neutral-600">{formatDate(post.date)}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-neutral-500 text-sm">Por {post.author}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
      </section>

      {/* Content */}
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent(post.content)}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            ¿Listo para implementar estos tips?
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Nuestro equipo puede ayudarte a mejorar tu presencia digital.
          </p>
          <Button href="/contacto" variant="primary" size="lg">
            Contactanos Ahora
          </Button>
        </div>
      </section>
    </main>
  );
}
