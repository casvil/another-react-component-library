import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Label } from '../Label/Label';
import { useStableId } from '../hooks/useStableId/useStableId';
import type { Size } from '../@types/size';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  id?: string;
  className?: string; // applies to <input>
  wrapperClassName?: string; // applies to outer div
  labelClassName?: string; // aplies to Label
  'aria-describedby'?: string;
  size?: Size;
}

/**
 * Radio atom component.
 * Accessible, stylized radio input with optional label using the custom Label component.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { id, label, size = 'md', className, labelClassName, wrapperClassName, ...props },
    ref,
  ) => {
    const radioId = useStableId(id);

    const sizeClasses = {
      sm: {
        radio: 'h-3 w-3',
        label: 'text-sm',
      },
      md: {
        radio: 'h-4 w-4',
        label: 'text-base',
      },
      lg: {
        radio: 'h-5 w-5',
        label: 'text-lg',
      },
    };

    const currentSize = sizeClasses[size];

    const radioElement = (
      <input
        id={radioId}
        type="radio"
        ref={ref}
        className={clsx(
          'text-indigo-600 focus:ring-2 focus:ring-indigo-500 border-gray-300 rounded-full',
          currentSize.radio,
          className,
        )}
        {...props}
      />
    );

    if (!label) return radioElement;

    return (
      <div className={clsx('flex items-center space-x-2', wrapperClassName)}>
        {radioElement}
        <Label className={clsx(currentSize.label, labelClassName)} htmlFor={radioId}>
          {label}
        </Label>
      </div>
    );
  },
);
