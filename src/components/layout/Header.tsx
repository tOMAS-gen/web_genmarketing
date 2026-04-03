'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const navLinks = [
  { href: '/',          label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog',      label: 'Blog' },
  { href: '/contacto',  label: 'Contacto' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(logoRef.current,
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.5 }
    )
    .fromTo(navRef.current?.children ? Array.from(navRef.current.children) : [],
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.05 },
      '-=0.25'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.4 },
      '-=0.15'
    );
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500',
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.4)]'
          : 'bg-neutral-950/80 backdrop-blur-sm border-b border-white/5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link ref={logoRef} href="/" className="flex items-baseline gap-0 group select-none" aria-label="Inicio" style={{ opacity: 0 }}>
          <span className="text-[1.45rem] font-semibold text-purple-400 transition-colors duration-200 group-hover:text-purple-300">
            ›gen
          </span>
          <span className="text-[1.45rem] font-medium text-white transition-colors duration-200 group-hover:text-neutral-200">
            marketing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div ref={navRef} className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ opacity: 0 }}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 relative py-0.5',
                  active
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:rounded-full'
                    : 'text-neutral-400 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div ref={ctaRef} className="hidden md:flex items-center gap-3" style={{ opacity: 0 }}>
          <Button href="/presupuesto" variant="primary" size="md">
            Pedir Presupuesto
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen
            ? <X    className="w-5 h-5 text-white" />
            : <Menu className="w-5 h-5 text-white" />
          }
        </button>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        pathname={pathname}
      />
    </header>
  );
}
