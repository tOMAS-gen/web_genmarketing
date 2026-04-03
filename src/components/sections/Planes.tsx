'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { PLANS } from '@/lib/constants';
import { Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

function useTilt3D() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    card.style.setProperty('--glow-x', `${glowX}%`);
    card.style.setProperty('--glow-y', `${glowY}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.setProperty('--glow-x', '50%');
    card.style.setProperty('--glow-y', '50%');
  }, []);

  return { cardRef, handleMouseMove, handleMouseLeave };
}

function PlanCard({ plan, i }: { plan: typeof PLANS[number]; i: number }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useTilt3D();

  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'relative rounded-2xl p-8 flex flex-col h-full plan-card-tilt',
          plan.highlighted
            ? 'border-gradient bg-neutral-900 shadow-purple-md hover:shadow-purple-lg'
            : 'border border-white/5 bg-neutral-900 hover:border-purple-700/40 hover:shadow-card'
        )}
      >
        {/* Cursor-following glow overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover-glow-overlay pointer-events-none"
          style={{
            background: 'radial-gradient(400px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(147,51,234,0.12), transparent 60%)',
          }}
        />

        {plan.highlighted && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full
              bg-purple-600 text-white text-xs font-bold shadow-purple-sm">
              <Sparkles className="w-3 h-3" />
              Más elegido
            </span>
          </div>
        )}

        {plan.highlighted && (
          <div className="absolute inset-0 rounded-2xl bg-purple-600/3 pointer-events-none" />
        )}

        <div className="mb-6">
          <h3 className={cn(
            'text-2xl font-bold mb-1',
            plan.highlighted ? 'text-purple-400' : 'text-white'
          )}>
            {plan.name}
          </h3>
          <p className="text-neutral-500 text-sm">{plan.description}</p>
        </div>

        <div className="mb-7 pb-7 border-b border-white/10">
          {plan.price > 0 ? (
            <>
              <div className="flex items-baseline gap-2">
                <span className={cn(
                  'text-4xl font-bold tracking-tight',
                  plan.highlighted ? 'gradient-text' : 'text-white'
                )}>
                  ${plan.price.toLocaleString('es-AR')}
                </span>
                <span className="text-neutral-400 text-sm">/proyecto</span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-purple-400 text-lg font-bold">
                  ${Math.round(plan.price / 1.21).toLocaleString('es-AR')}
                </span>
                <span className="text-neutral-500 text-xs font-medium uppercase tracking-wide">
                  Precio sin impuestos nacionales
                </span>
              </div>
            </>
          ) : (
            <div className="text-2xl font-bold text-white">
              A presupuestar
            </div>
          )}
        </div>

        <ul className="flex-1 space-y-3.5 mb-8">
          {plan.features.map((feature, fi) => (
            <li key={fi} className="flex items-start gap-3">
              <div className={cn(
                'mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center',
                plan.highlighted ? 'bg-purple-900/60' : 'bg-white/5'
              )}>
                <Check className={cn(
                  'w-3 h-3',
                  plan.highlighted ? 'text-purple-400' : 'text-neutral-400'
                )} />
              </div>
              <span className="text-neutral-400 text-sm leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href="/presupuesto"
          variant={plan.highlighted ? 'primary' : 'outline'}
          size="md"
          className="w-full"
        >
          {plan.price > 0 ? 'Empezar ahora' : 'Solicitar Presupuesto'}
        </Button>
      </div>
    </motion.div>
  );
}

export function Planes() {
  return (
    <section className="py-20 md:py-32 bg-neutral-950 mesh-bg-dark relative overflow-hidden">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(147,51,234,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.08) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Inversión</p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight mb-4">
            Planes y Precios
          </h2>
          <p className="text-neutral-400 text-lg max-w-md mx-auto">Hosting, dominio y SSL incluidos. El primer pago recién al aprobar el diseño.</p>
          <p className="text-purple-400/80 text-sm font-medium mt-3">Cupos limitados por mes — Asegurá tu lugar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-stretch">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
