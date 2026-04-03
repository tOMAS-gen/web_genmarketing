'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Consultá',
    description: 'Contanos tu proyecto, objetivos y presupuesto. Sin costo, sin compromiso.',
    details: [
      'Reunión inicial por videollamada o WhatsApp',
      'Relevamiento de tu marca y competencia',
      'Definimos juntos los objetivos concretos',
    ],
  },
  {
    num: '02',
    title: 'Diseñamos',
    description: 'Creamos una estrategia y propuesta personalizada para tu negocio en 24h.',
    details: [
      'Propuesta visual con bocetos y wireframes',
      'Selección de colores, tipografías e imágenes',
      'Revisiones hasta que quedes conforme',
      'Primer pago solo al aprobar el diseño — sin riesgo inicial',
    ],
  },
  {
    num: '03',
    title: 'Lanzamos',
    description: 'Ejecutamos, medimos y optimizamos. Tu crecimiento digital comienza hoy.',
    details: [
      'Publicación con dominio, hosting y SSL incluido',
      'Configuración de analytics y SEO',
      'Soporte post-lanzamiento y capacitación',
    ],
  },
];

export function ComoFunciona() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Set initial states
    gsap.set('.como-header', { opacity: 0, y: 32 });
    gsap.set('.step-item', { opacity: 0, y: 48 });
    sectionRef.current?.querySelectorAll('.step-details li').forEach((li) => {
      gsap.set(li, { opacity: 0, x: -12 });
    });

    // Header
    gsap.to('.como-header', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.como-header', start: 'top 88%', once: true },
    });

    // Step numbers: count up from 00 to their value
    sectionRef.current?.querySelectorAll<HTMLElement>('.step-number').forEach((el, i) => {
      const target = i + 1;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate() {
          el.textContent = String(Math.round(obj.val)).padStart(2, '0');
        },
      });
    });

    // Step cards stagger in
    ScrollTrigger.batch('.step-item', {
      start: 'top 90%',
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.75,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    // Detail list items per step
    sectionRef.current?.querySelectorAll('.step-details li').forEach((li) => {
      gsap.to(li, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: { trigger: li, start: 'top 93%', once: true },
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="como-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
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
          {steps.map((step) => (
            <div
              key={step.num}
              className="step-item group px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0"
            >
              {/* Number */}
              <div className="step-number text-[5rem] font-black leading-none text-neutral-100 group-hover:text-purple-100 transition-colors duration-300 mb-6 select-none">
                {step.num}
              </div>
              <h3 className="text-2xl font-black text-black mb-3 group-hover:text-purple-600 transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-[260px] mb-4">
                {step.description}
              </p>
              <ul className="step-details space-y-2 max-w-[260px]">
                {step.details.map((detail, di) => (
                  <li key={di} className="flex items-start gap-2 text-neutral-500 text-xs leading-relaxed">
                    <span className="text-purple-500 mt-0.5 flex-shrink-0">›</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
