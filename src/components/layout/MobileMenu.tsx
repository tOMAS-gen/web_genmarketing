'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ href: string; label: string }>;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          <motion.div
            key="panel"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="fixed right-0 top-0 h-full w-72 bg-neutral-950 border-l border-white/5 z-50 md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <div className="flex items-baseline gap-0">
                <span className="text-xl font-semibold text-purple-400 pl-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>›gen</span>
                <span className="text-xl font-medium text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>marketing</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Cerrar menú"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150',
                        active
                          ? 'bg-purple-900/40 text-purple-300 font-semibold border border-purple-700/30'
                          : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="px-4 py-6 border-t border-white/5">
              <Button href="/presupuesto" variant="primary" size="md" className="w-full" onClick={onClose}>
                Pedir Presupuesto
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
