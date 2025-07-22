import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { themeClasses } from '../../theme/utils';

import type { Size } from '../../@types/classes';
import { statusIndicatorComponentSizeClasses } from '../../@types/classes';

export type StatusType = 'online' | 'offline' | 'away' | 'busy';

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  status: StatusType;
  size?: Size;
  showLabel?: boolean;
}

const statusConfig = {
  online: {
    color: 'bg-[var(--color-success-500)]',
    label: 'Online',
  },
  offline: {
    color: 'bg-[var(--color-text-tertiary)]',
    label: 'Offline',
  },
  away: {
    color: 'bg-[var(--color-warning-500)]',
    label: 'Away',
  },
  busy: {
    color: 'bg-[var(--color-error-500)]',
    label: 'Busy',
  },
} as const;

/**
 * StatusIndicator atom component.
 * Displays user status with a colored dot and optional label.
 * Supports online, offline, away, and busy states.
 */
export const StatusIndicator = forwardRef<
  HTMLSpanElement,
  StatusIndicatorProps
>(({ status, size = 'md', showLabel = false, className, ...props }, ref) => {
  const config = statusConfig[status];

  const dotClass = clsx(
    'rounded-full border-2 border-white',
    config.color,
    statusIndicatorComponentSizeClasses.dot[size],
  );

  const containerClass = clsx(
    statusIndicatorComponentSizeClasses.container,
    className,
  );

  return (
    <span
      ref={ref}
      className={containerClass}
      aria-label={config.label}
      role="status"
      {...props}
    >
      <span className={dotClass} aria-hidden="true" />
      {showLabel && (
        <span
          className={clsx(
            themeClasses.text.primary,
            statusIndicatorComponentSizeClasses.text[size],
          )}
        >
          {config.label}
        </span>
      )}
    </span>
  );
});

StatusIndicator.displayName = 'StatusIndicator';
