import React, { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

import type { Size, Intent } from '../../@types/classes';
import { badgeSizeClasses } from '../../@types/classes';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  intent?: Intent;
  size?: Size;
  'aria-label'?: string;
}

/**
 * Badge atom component.
 * Used to highlight short status or labels. Accessible and styled with Tailwind CSS.
 */
export const Badge = React.memo(
  forwardRef<HTMLSpanElement, BadgeProps>(
    (
      { intent = 'default', size = 'md', children, className, ...props },
      ref,
    ) => {
      const base =
        'inline-flex items-center font-medium rounded-full whitespace-nowrap';

      const intents = {
        default: 'bg-gray-100 text-gray-800',
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        warning: 'bg-yellow-100 text-yellow-800',
        info: 'bg-blue-100 text-blue-800',
      };

      return (
        <span
          ref={ref}
          role="status"
          className={clsx(
            base,
            intents[intent],
            badgeSizeClasses[size],
            className,
          )}
          aria-label={String(children)}
          aria-live="polite"
          {...props}
        >
          {children}
        </span>
      );
    },
  ),
);

Badge.displayName = 'Badge';
