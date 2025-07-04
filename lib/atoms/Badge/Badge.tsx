import React, { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

import type { Size, Intent } from '../../@types/classes';
import { badgeSizeClasses, badgeIntentClasses } from '../../@types/classes';

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

      return (
        <span
          ref={ref}
          role="status"
          className={clsx(
            base,
            badgeIntentClasses[intent],
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
