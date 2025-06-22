import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Label } from '../Label/Label';
import { useStableId } from '../../hooks/useStableId/useStableId';
import type { Size } from '../../@types/size';
import { checkboxSizeClasses } from '../../@types/size';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  indeterminate?: boolean;
  className?: string; // for the <input>
  labelClassName?: string; // for the <Label>
  wrapperClassName?: string; // for the outer <div>
  size?: Size;
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
      defaultChecked,
      id,
      label,
      indeterminate = false,
      size = 'md',
      className,
      labelClassName,
      wrapperClassName,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const checkboxId = useStableId(id);
    const currentSize = checkboxSizeClasses[size];

    // Controlled/uncontrolled
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked ?? false,
    );
    const inputChecked = isControlled ? checked : internalChecked;

    const handleChange = (e) => {
      if (!isControlled) setInternalChecked(e.target.checked);
      if (rest.onChange) rest.onChange(e);
    };

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
          checked={inputChecked}
          disabled={disabled}
          aria-checked={indeterminate ? 'mixed' : inputChecked}
          className={clsx(
            'form-checkbox text-indigo-600 rounded border-gray-300 focus:ring-2 focus:ring-indigo-500',
            currentSize.checkbox,
            className,
          )}
          onChange={handleChange}
          {...rest}
        />
        {label && (
          <Label
            className={clsx(currentSize.label, labelClassName)}
            htmlFor={checkboxId}
          >
            {label}
          </Label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
