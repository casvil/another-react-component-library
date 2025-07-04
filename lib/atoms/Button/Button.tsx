import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-icon-type';

import type { Size } from '../../@types/classes';
import { buttonSizeClasses, buttonVariantClasses } from '../../@types/classes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: Size;
  label: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
}

/**
 * Button atom component.
 * Renders a styled button with support for variants, sizes, and optional icons.
 * Uses Tailwind for layout/utilities and CSS variables for theming. Supports accessibility, custom classes, and disabled state.
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
        style,
        ...props
      },
      ref,
    ) => {
      const base =
        'inline-flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

      // Get icon size based on button size
      const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

      return (
        <button
          type="button"
          ref={ref}
          className={clsx(
            base,
            buttonSizeClasses[size],
            buttonVariantClasses[variant],
            className,
          )}
          style={style}
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
