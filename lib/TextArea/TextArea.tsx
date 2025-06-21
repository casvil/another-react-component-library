import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Label } from '../Label/Label';
import { useStableId } from '../hooks/useStableId/useStableId';
import type { Size } from '../@types/size';

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  className?: string;
  label?: string;
  labelClassName?: string;
  labelPosition?: 'above' | 'beside';
  wrapperClassName?: string;
  size?: Size;
}

/**
 * TextArea molecule component.
 * Renders a customizable <textarea> with optional label support, using Tailwind CSS styles.
 * It supports label positioning (above or beside), accessibility via `aria-*` attributes,
 * and custom styling through wrapper, label, and textarea class names.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      labelPosition = 'above',
      wrapperClassName,
      labelClassName,
      size = 'md',
      id,
      className,
      ...props
    },
    ref,
  ) => {
    const textareaId = useStableId(id);

    const flexDirection = labelPosition === 'beside' ? 'flex-row' : 'flex-col';

    const sizeClasses = {
      sm: 'text-sm px-2 py-1',
      md: 'text-base px-3 py-2',
      lg: 'text-lg px-4 py-3',
    };

    return (
      <div className={clsx('flex gap-2', flexDirection, wrapperClassName)}>
        {label && (
          <Label htmlFor={textareaId} className={labelClassName}>
            {label}
          </Label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={clsx(
            'resize-none rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
            sizeClasses[size],
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
