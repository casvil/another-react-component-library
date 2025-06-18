import { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  'aria-label'?: string;
}

/**
 * Badge atom component.
 * Used to highlight short status or labels. Accessible and styled with Tailwind CSS.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = 'default', size = 'md', children, className, ...props },
    ref,
  ) => {
    const base =
      'inline-flex items-center font-medium rounded-full whitespace-nowrap';

    const variants = {
      default: 'bg-gray-100 text-gray-800',
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      info: 'bg-blue-100 text-blue-800',
    };

    const sizes = {
      sm: 'text-xs px-1.5 py-1.5',
      md: 'text-sm px-1.5 py-1.5',
      lg: 'text-base px-1.5 py-1.5',
    };

    return (
      <span
        ref={ref}
        role="status"
        className={clsx(base, variants[variant], sizes[size], className)}
        aria-label={String(children)}
        aria-live="polite"
        {...props}
      >
        {children}
      </span>
    );
  },
);
