'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef     = useRef<HTMLDivElement>(null);
  const headlineRef  = useRef<HTMLHeadingElement>(null);
  const subtitleRef  = useRef<HTMLParagraphElement>(null);
  const buttonsRef   = useRef<HTMLDivElement>(null);
  const marqueeRef   = useRef<HTMLDivElement>(null);
  const decorRef     = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Make sure everything is visible
      gsap.set([badgeRef.current, subtitleRef.current, marqueeRef.current], { opacity: 1 });
      if (headlineRef.current) gsap.set(Array.from(headlineRef.current.children), { opacity: 1 });
      if (buttonsRef.current) gsap.set(Array.from(buttonsRef.current.children), { opacity: 1 });
      return;
    }

    // ── Set initial hidden states ─────────────────────────
    gsap.set(badgeRef.current, { opacity: 0, x: -24 });
    if (headlineRef.current) gsap.set(Array.from(headlineRef.current.children), { opacity: 0, y: 80 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
    if (buttonsRef.current) gsap.set(Array.from(buttonsRef.current.children), { opacity: 0, y: 16 });
    gsap.set(marqueeRef.current, { opacity: 0 });

    // ── Entrance timeline ─────────────────────────────────
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to(badgeRef.current, { opacity: 1, x: 0, duration: 0.6 })
      .to(Array.from(headlineRef.current!.children), {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.85,
      }, '-=0.3')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.55 }, '-=0.4')
      .to(Array.from(buttonsRef.current!.children), {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.5,
      }, '-=0.35')
      .to(marqueeRef.current, { opacity: 1, duration: 0.4 }, '-=0.2');

    // ── Parallax on decorative › ──────────────────────────
    gsap.to(decorRef.current, {
      y: -110,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
  }, { scope: containerRef });

  // ── Magnetic button effect ─────────────────────────────
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonsRef.current) return;
    Array.from(buttonsRef.current.children).forEach((child) => {
      const el = child as HTMLElement;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = 130;
      if (dist < radius) {
        const strength = (radius - dist) / radius;
        gsap.to(el, { x: dx * strength * 0.32, y: dy * strength * 0.32, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      }
    });
  };

  const onMouseLeave = () => {
    if (!buttonsRef.current) return;
    Array.from(buttonsRef.current.children).forEach((child) => {
      gsap.to(child as HTMLElement, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    });
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-neutral-950 flex flex-col min-h-screen">
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
        ref={decorRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none translate-x-1/4"
        style={{ fontSize: 'clamp(18rem, 38vw, 44rem)', color: 'rgba(147,51,234,0.05)' }}
        aria-hidden="true"
      >
        ›
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-28 pb-16 md:pt-36 md:pb-20 flex-1 flex flex-col justify-center">

        {/* Badge */}
        <div ref={badgeRef} className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-900/50 text-purple-300 border border-purple-700/40">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Agencia Digital
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.95] tracking-tight mb-14"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-[0.22em] ${word.gradient ? 'gradient-text-white pb-3' : 'text-white'}`}
            >
              {word.text}
            </span>
          ))}
        </h1>

        {/* Subtitle + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
          <p
            ref={subtitleRef}
            className="text-lg text-neutral-400 max-w-lg leading-relaxed"
          >
            Empresas en Mendoza y todo el país ya crecen con ›genmarketing.
            Tu marca, profesional y visible — desde el primer día.
          </p>

          {/* Magnetic wrapper — each direct child gets the effect */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <div>
              <Button href="/presupuesto" variant="primary" size="lg">
                Pedir Presupuesto
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div>
              <Button
                href="/servicios"
                variant="outline"
                size="lg"
                className="border-neutral-700 text-neutral-200 hover:bg-white/5 hover:border-neutral-500"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee ticker */}
      <div
        ref={marqueeRef}
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
      </div>
    </section>
  );
}
