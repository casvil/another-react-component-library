import React, { forwardRef } from 'react';
import clsx from 'clsx';

import type { Size } from '../../@types/classes';
import { usernameComponentSizeClasses } from '../../@types/classes';

export interface UsernameProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  size?: Size;
  variant?: 'default' | 'bold' | 'muted';
  truncate?: boolean;
  maxLength?: number;
}

/**
 * Username atom component.
 * Displays user names with consistent styling, truncation, and accessibility.
 * Supports different sizes, variants, and optional character limits.
 */
export const Username = forwardRef<HTMLSpanElement, UsernameProps>(
  (
    {
      children,
      size = 'md',
      variant = 'default',
      truncate = false,
      maxLength,
      className,
      ...props
    },
    ref,
  ) => {
    const displayName = React.useMemo(() => {
      if (maxLength && children.length > maxLength) {
        return `${children.slice(0, maxLength)}...`;
      }
      return children;
    }, [children, maxLength]);

    const usernameClass = clsx(
      'inline-block',
      usernameComponentSizeClasses.text[size],
      usernameComponentSizeClasses.variant[variant],
      truncate && 'truncate max-w-full',
      className,
    );

    return (
      <span
        ref={ref}
        className={usernameClass}
        title={children !== displayName ? children : undefined}
        {...props}
      >
        {displayName}
      </span>
    );
  },
);

Username.displayName = 'Username';
