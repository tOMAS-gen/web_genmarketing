'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Servicios() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Set initial states
    gsap.set('.servicios-header', { opacity: 0, y: 32 });
    gsap.set('.service-row', { opacity: 0, x: -48 });
    gsap.set('.servicios-footer', { opacity: 0, y: 20 });

    // Header reveal
    gsap.to('.servicios-header', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.servicios-header', start: 'top 88%', once: true },
    });

    // Service rows: slide in from left with stagger
    ScrollTrigger.batch('.service-row', {
      start: 'top 90%',
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          x: 0,
          stagger: 0.09,
          duration: 0.7,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    // Footer CTA
    gsap.to('.servicios-footer', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.servicios-footer', start: 'top 95%', once: true },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="servicios-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-neutral-100">
          <div>
            <p className="text-purple-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Lo que hacemos
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-none tracking-tight">
              Nuestros<br />Servicios
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed md:text-right">
            Soluciones digitales completas para que tu negocio crezca en línea
          </p>
        </div>

        {/* Services list */}
        <div className="divide-y divide-neutral-100">
          {SERVICES.map((service, i) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType | undefined;
            return (
              <div key={service.id} className="service-row group">
                <Link href={`/servicios/${service.slug}`} className="block">
                  <div className="flex items-center gap-5 md:gap-10 py-6 group-hover:translate-x-2 transition-transform duration-300">
                    {/* Number */}
                    <span className="text-xs font-black text-neutral-200 tabular-nums w-5 flex-shrink-0 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    {IconComponent && (
                      <div className="w-10 h-10 rounded-xl bg-neutral-50 group-hover:bg-purple-600 border border-neutral-100 group-hover:border-transparent transition-all duration-300 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-black text-black group-hover:text-purple-600 transition-colors duration-200 flex-1">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="hidden lg:block text-neutral-400 text-sm max-w-sm text-right leading-relaxed flex-shrink-0">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <ArrowRight className="w-4 h-4 text-neutral-200 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Footer link */}
        <div className="servicios-footer mt-12 text-center">
          <Button href="/servicios" variant="outline" size="md">
            Ver todos los servicios
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
