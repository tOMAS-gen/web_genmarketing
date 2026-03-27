import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  subtitleClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
  subtitleClassName,
}: SectionTitleProps) {
  const isCenter = align === 'center';

  return (
    <div className={cn(isCenter ? 'text-center' : 'text-left', className)}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg text-neutral-500 font-medium mt-4 leading-relaxed',
            isCenter ? 'mx-auto max-w-xl' : 'max-w-xl',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
