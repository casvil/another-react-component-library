import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-icon-type';

import type { Size } from '../../@types/classes';
import { buttonSizeClasses } from '../../@types/classes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: Size;
  label: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

/**
 * Button atom component.
 * Renders a styled button with support for variants, sizes, and optional icons.
 * Uses Tailwind for styling and supports accessibility, custom classes, and disabled state.
 */
export const Button = React.memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        variant = 'primary',
        size = 'md',
        label,
        icon: IconComponent,
        iconPosition = 'left',
        className,
        disabled = false,
        ...props
      },
      ref,
    ) => {
      const base =
        'inline-flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

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
            buttonSizeClasses[size],
            className,
          )}
          disabled={disabled}
          {...props}
        >
          {IconComponent && iconPosition === 'left' && (
            <span className="mr-2">
              <IconComponent
                size={iconSize}
                color="currentColor"
                focusable="false"
              />
            </span>
          )}
          {label}
          {IconComponent && iconPosition === 'right' && (
            <span className="ml-2">
              <IconComponent
                size={iconSize}
                color="currentColor"
                focusable="false"
              />
            </span>
          )}
        </button>
      );
    },
  ),
);

Button.displayName = 'Button';
