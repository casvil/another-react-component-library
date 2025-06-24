import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import type { Size } from '../../@types/size';
import { inputSizeClasses } from '../../@types/size';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: Size;
  inputClassName?: string;
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

    const sizeClasses = {
      sm: {
        icon: 'text-sm',
        iconLeft: 'left-2',
        iconRight: 'right-2',
      },
      md: {
        icon: 'text-base',
        iconLeft: 'left-3',
        iconRight: 'right-3',
      },
      lg: {
        icon: 'text-lg',
        iconLeft: 'left-4',
        iconRight: 'right-4',
      },
    };

    const currentSize = sizeClasses[size];

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

    const hasAccessibilityAttributes = (element: React.ReactElement) => {
      const props = element.props as Record<string, unknown>;
      const type = element.type as { displayName?: string };

      return (
        props['aria-label'] || props.role || type.displayName === 'Spinner'
      );
    };

    return (
      <div className={containerClass}>
        {hasIcon && (
          <span
            className={iconWrapperClass}
            aria-hidden={
              !(React.isValidElement(icon) && hasAccessibilityAttributes(icon))
            }
          >
            {icon}
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
