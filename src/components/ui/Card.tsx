import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  highlighted?: boolean;
  className?: string;
}

export function Card({
  title,
  description,
  icon,
  children,
  highlighted = false,
  className,
}: CardProps) {
  const base = 'rounded-2xl p-8 transition-all duration-300 group';

  const variant = highlighted
    ? 'border-2 border-purple-600 bg-white shadow-purple-sm hover:shadow-purple-md hover:-translate-y-1'
    : 'border border-neutral-200 bg-white hover:border-purple-200 hover:shadow-card-hover hover:-translate-y-1.5';

  return (
    <div className={cn(base, variant, className)}>
      {icon && (
        <div
          className={cn(
            'mb-5 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300',
            highlighted
              ? 'bg-purple-600 text-white group-hover:bg-purple-700'
              : 'bg-purple-50 text-purple-600 group-hover:bg-purple-100'
          )}
        >
          {icon}
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-purple-700 transition-colors duration-200">
        {title}
      </h3>
      {description && (
        <p className="text-neutral-500 text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
