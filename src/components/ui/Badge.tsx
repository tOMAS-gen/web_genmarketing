import { cn } from '@/lib/utils';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning';
  className?: string;
}

const variants = {
  default:
    'inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-600/20',
  success:
    'inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20',
  warning:
    'inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-600/20',
};

export function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn(variants[variant], className)}>
      {label}
    </span>
  );
}
