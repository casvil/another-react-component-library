import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-icon-type';

import type { Size } from '../../@types/size';
import {
  inputSizeClasses,
  iconSizeValues,
  inputIconSizeClasses,
} from '../../@types/size';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  iconAriaLabel?: string;
  size?: Size;
  inputClassName?: string;
  className?: string;
}

/**
 * Input atom component.
 * Renders a styled input with optional icon on left or right.
 * Support for disabled and read-only states.
 * Uses Tailwind CSS for styling and supports all native input attributes.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      icon,
      iconPosition = 'left',
      iconClassName,
      iconAriaLabel,
      size = 'md',
      className,
      inputClassName,
      disabled,
      readOnly,
      ...props
    },
    ref,
  ) => {
    const hasIcon = Boolean(icon);

    const containerClass = clsx(
      'relative flex items-center',
      disabled && 'opacity-60 cursor-not-allowed',
      className,
    );

    const currentSize = inputIconSizeClasses[size];

    const inputClass = clsx(
      'block rounded-md border shadow-sm w-full',
      inputSizeClasses[size],
      hasIcon && iconPosition === 'left' && 'pl-10',
      hasIcon && iconPosition === 'right' && 'pr-10',
      'focus:outline-none focus:ring-2 focus:ring-blue-500',
      disabled && 'bg-gray-100 cursor-not-allowed',
      readOnly && 'bg-gray-50 text-gray-500',
      inputClassName,
    );

    const iconWrapperClass = clsx(
      'absolute inset-y-0 flex items-center',
      currentSize.icon,
      iconPosition === 'left' ? currentSize.iconLeft : currentSize.iconRight,
      disabled && 'text-gray-400',
      !disabled && 'text-gray-500',
    );

    return (
      <div className={containerClass}>
        {hasIcon && icon && (
          <span
            className={iconWrapperClass}
            aria-hidden={!iconAriaLabel}
            aria-label={iconAriaLabel}
          >
            {React.createElement(icon, {
              size: iconSizeValues[size],
              className: iconClassName,
            })}
          </span>
        )}
        <input
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          className={inputClass}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';
