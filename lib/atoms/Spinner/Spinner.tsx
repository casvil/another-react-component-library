import React from 'react';
import clsx from 'clsx';
import LoaderCircle from 'lucide-react/icons/loader-circle';

import type { Size } from '../../@types/classes';
import { spinnerSizeClasses } from '../../@types/classes';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  iconClassName?: string;
}

/**
 * Spinner atom component.
 * Renders a spinning loader icon using Lucide's `LoaderCircle`.
 * Accepts size, wrapper styling via `className`, and icon color via `iconClassName`.
 * Accessible via `role="status"` and visually hidden text.
 */
export const Spinner = React.memo<SpinnerProps>(
  ({ size = 'md', className, iconClassName, ...props }) => {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-label="Loading"
        className={clsx('inline-flex items-center', className)}
        {...props}
      >
        <LoaderCircle
          className={clsx(
            'animate-spin',
            spinnerSizeClasses[size],
            iconClassName,
          )}
          aria-hidden="true"
        />
        <span className="sr-only">Loading</span>
      </div>
    );
  },
);

Spinner.displayName = 'Spinner';
