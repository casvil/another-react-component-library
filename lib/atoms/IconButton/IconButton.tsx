import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-icon-type';

import type { Size } from '../../@types/size';
import { iconButtonSizeClasses } from '../../@types/size';

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
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
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
        'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
      secondary:
        'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400',
      tertiary:
        'bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-300 border border-gray-300',
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
        <IconComponent size={iconSize} color="currentColor" focusable="false" />
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
