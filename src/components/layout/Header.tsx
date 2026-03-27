'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-white/5'
          : 'bg-neutral-950/80 backdrop-blur-sm border-b border-white/5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0 group select-none" aria-label="Inicio">
          <span className="text-[1.45rem] font-semibold text-purple-400 transition-colors duration-200 group-hover:text-purple-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ›gen
          </span>
          <span className="text-[1.45rem] font-medium text-white transition-colors duration-200 group-hover:text-neutral-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            marketing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
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
        <div className="hidden md:flex items-center gap-3">
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
