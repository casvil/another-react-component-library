import React from 'react';
import clsx from 'clsx';
import LoaderCircle from 'lucide-react/icons/loader-circle';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  iconClassName?: string;
}

/**
 * Spinner atom component.
 *
 * Renders a spinning loader icon using Lucide's `LoaderCircle`.
 * Accepts size, wrapper styling via `className`, and icon color via `iconClassName`.
 * Accessible via `role="status"` and visually hidden text.
 */
export const Spinner = ({
  size = 'md',
  className,
  iconClassName,
  ...props
}: SpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={clsx('inline-flex items-center', className)}
      {...props}
    >
      <LoaderCircle
        className={clsx('animate-spin', sizeClasses[size], iconClassName)}
        aria-hidden="true"
      />
      <span className="sr-only">Loading</span>
    </div>
  );
};
