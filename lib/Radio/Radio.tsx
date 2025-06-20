import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Label } from '../Label/Label';
import { useStableId } from '../hooks/useStableId/useStableId';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  id?: string;
  className?: string; // applies to <input>
  wrapperClassName?: string; // applies to outer div
  labelClassName?: string; // aplies to Label
  'aria-describedby'?: string;
}

/**
 * Radio atom component.
 * Accessible, stylized radio input with optional label using the custom Label component.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { id, label, className, labelClassName, wrapperClassName, ...props },
    ref,
  ) => {
    const radioId = useStableId(id);

    const radioElement = (
      <input
        id={radioId}
        type="radio"
        ref={ref}
        className={clsx(
          'h-4 w-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500 border-gray-300 rounded-full',
          className,
        )}
        {...props}
      />
    );

    if (!label) return radioElement;

    return (
      <div className={clsx('flex items-center space-x-2', wrapperClassName)}>
        {radioElement}
        <Label className={labelClassName} htmlFor={radioId}>
          {label}
        </Label>
      </div>
    );
  },
);
