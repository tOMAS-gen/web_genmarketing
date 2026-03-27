import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const baseStyles =
  'inline-flex items-center justify-center font-semibold rounded-lg ' +
  'transition-all duration-200 ease-out ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 ' +
  'active:scale-[0.97]';

const variants = {
  primary:
    'bg-purple-600 text-white ' +
    'hover:bg-purple-700 hover:shadow-purple-sm hover:scale-[1.02] ' +
    'shadow-sm btn-shimmer',
  secondary:
    'bg-neutral-900 text-white ' +
    'hover:bg-neutral-800 hover:shadow-md hover:scale-[1.02]',
  outline:
    'border border-neutral-200 text-neutral-950 bg-white/60 ' +
    'hover:bg-neutral-50 hover:border-neutral-300 hover:scale-[1.02]',
  ghost:
    'text-purple-600 hover:text-purple-700 ' +
    'hover:bg-purple-50/60 rounded-md px-2',
};

const sizes = {
  sm: 'text-sm  px-4   py-2',
  md: 'text-sm  px-5   py-2.5',
  lg: 'text-base px-6  py-3',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  children,
  className,
  target,
  rel,
  type = 'button',
}: ButtonProps) {
  const buttonClass = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClass} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
