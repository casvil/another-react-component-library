import React, { forwardRef } from 'react';
import clsx from 'clsx';

import type { Size } from '../../@types/size';

export type StatusType = 'online' | 'offline' | 'away' | 'busy';

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  status: StatusType;
  size?: Size;
  showLabel?: boolean;
}

const statusConfig = {
  online: {
    color: 'bg-green-500',
    label: 'Online',
  },
  offline: {
    color: 'bg-gray-400',
    label: 'Offline',
  },
  away: {
    color: 'bg-yellow-500',
    label: 'Away',
  },
  busy: {
    color: 'bg-red-500',
    label: 'Busy',
  },
} as const;

const sizeClasses = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
} as const;

const textSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const;

/**
 * StatusIndicator atom component.
 * Displays user status with a colored dot and optional label.
 * Supports online, offline, away, and busy states.
 */
export const StatusIndicator = forwardRef<HTMLSpanElement, StatusIndicatorProps>(
  ({ status, size = 'md', showLabel = false, className, ...props }, ref) => {
    const config = statusConfig[status];

    const dotClass = clsx(
      'rounded-full border-2 border-white',
      config.color,
      sizeClasses[size],
    );

    const containerClass = clsx(
      'inline-flex items-center gap-1.5',
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
          <span className={clsx('text-gray-700', textSizeClasses[size])}>
            {config.label}
          </span>
        )}
      </span>
    );
  },
);

StatusIndicator.displayName = 'StatusIndicator'; 