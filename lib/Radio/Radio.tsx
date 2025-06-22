import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import React from 'react';

import { Label } from '../Label/Label';
import { useStableId } from '../hooks/useStableId/useStableId';
import type { Size } from '../@types/size';
import { radioSizeClasses } from '../@types/size';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  id?: string;
  className?: string; // applies to <input>
  wrapperClassName?: string; // applies to outer div
  labelClassName?: string; // aplies to Label
  'aria-describedby'?: string;
  size?: Size;
  checked?: boolean;
  defaultChecked?: boolean;
}

/**
 * Radio atom component.
 * Accessible, stylized radio input with optional label using the custom Label component.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      checked,
      defaultChecked,
      id,
      label,
      size = 'md',
      className,
      labelClassName,
      wrapperClassName,
      ...rest
    },
    ref,
  ) => {
    const radioId = useStableId(id);
    const currentSize = radioSizeClasses[size];

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

    const radioElement = (
      <input
        id={radioId}
        type="radio"
        ref={ref}
        checked={inputChecked}
        onChange={handleChange}
        className={clsx(
          'text-indigo-600 focus:ring-2 focus:ring-indigo-500 border-gray-300 rounded-full',
          currentSize.radio,
          className,
        )}
        {...rest}
      />
    );

    if (!label) return radioElement;

    return (
      <div className={clsx('flex items-center space-x-2', wrapperClassName)}>
        {radioElement}
        <Label
          className={clsx(currentSize.label, labelClassName)}
          htmlFor={radioId}
        >
          {label}
        </Label>
      </div>
    );
  },
);

Radio.displayName = 'Radio';
