import { forwardRef, InputHTMLAttributes, useId } from 'react';
import clsx from 'clsx';

import { Label } from '../Label/Label';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
  className?: string; // for the <input>
  labelClassName?: string; // for the <Label>
  wrapperClassName?: string; // for the outer <div>
}

/**
 * Checkbox atom component.
 * Renders a native checkbox input with an optional label using the custom Label component.
 * Supports controlled and indeterminate states, as well as custom styling.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      id,
      label,
      indeterminate = false,
      className,
      labelClassName,
      wrapperClassName,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div
        className={clsx(
          'inline-flex items-center space-x-2',
          disabled && 'opacity-50 cursor-not-allowed',
          wrapperClassName,
        )}
      >
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          aria-checked={indeterminate ? 'mixed' : checked}
          className={clsx(
            'form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-2 focus:ring-indigo-500',
            className,
          )}
          {...rest}
        />
        {label && (
          <Label className={labelClassName} htmlFor={checkboxId}>
            {label}
          </Label>
        )}
      </div>
    );
  },
);
