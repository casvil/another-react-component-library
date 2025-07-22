import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-icon-type';
import { themeClasses } from '../../theme/utils';

import type { Size } from '../../@types/classes';
import { iconButtonSizeClasses } from '../../@types/classes';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  'aria-label': string;
  size?: Size;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

/**
 * IconButton atom component.
 * Renders a button containing only an icon, with variant and size support.
 * Requires an `aria-label` for accessibility and is styled with Tailwind CSS.
 */
export const IconButton = React.memo(
  forwardRef<HTMLButtonElement, IconButtonProps>(
    (
      {
        icon: IconComponent,
        size = 'md',
        variant = 'primary',
        className,
        disabled = false,
        ...props
      },
      ref,
    ) => {
      const base =
        'inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

      const variants = {
        primary:
          'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-700)] focus:ring-[var(--color-border-focus)]',
        secondary:
          'bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] focus:ring-[var(--color-border-focus)]',
        tertiary:
          'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] focus:ring-[var(--color-border-focus)] border border-[var(--color-border-primary)]',
      };

      // Get icon size based on button size
      const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

      return (
        <button
          type="button"
          ref={ref}
          className={clsx(
            base,
            variants[variant],
            iconButtonSizeClasses[size],
            className,
          )}
          disabled={disabled}
          aria-label={props['aria-label']}
          {...props}
        >
          <IconComponent
            size={iconSize}
            color="currentColor"
            focusable="false"
          />
        </button>
      );
    },
  ),
);

IconButton.displayName = 'IconButton';
