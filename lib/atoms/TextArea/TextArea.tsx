import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
import { themeClasses } from '../../theme/utils';

import { Label } from '../Label/Label';
import { useStableId } from '../../hooks/useStableId/useStableId';
import type { Size } from '../../@types/classes';
import { inputSizeClasses } from '../../@types/classes';

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
 * TextArea atom component.
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
            'resize-none rounded border focus:outline-none focus:ring-2',
            themeClasses.border.primary,
            themeClasses.border.focus,
            inputSizeClasses[size],
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
