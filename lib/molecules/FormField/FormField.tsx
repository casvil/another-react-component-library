import React, { forwardRef } from 'react';
import clsx from 'clsx';
import HelpCircle from 'lucide-react/icons/help-circle';

import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';
import { Tooltip } from '../../atoms/Tooltip/Tooltip';
import { useStableId } from '../../hooks/useStableId/useStableId';
import type { Size } from '../../@types/classes';
import type { InputProps } from '../../atoms/Input/Input';

export interface FormFieldProps extends Omit<InputProps, 'id'> {
  // Core props
  id?: string;
  label: string;
  tooltip?: string;

  // Tooltip customization
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  tooltipDelay?: number;

  // Styling
  labelClassName?: string;
  tooltipClassName?: string;
  wrapperClassName?: string;

  // Layout
  size?: Size;
}

/**
 * FormField molecule component.
 * Combines Label, Input, and optional Tooltip to create a comprehensive form field.
 * Provides contextual help through tooltips while maintaining proper ARIA relationships.
 * All components share consistent sizing and styling.
 */
export const FormField = React.memo(
  forwardRef<HTMLInputElement, FormFieldProps>(
    (
      {
        id,
        label,
        tooltip,
        tooltipPosition = 'top',
        tooltipDelay = 150,
        labelClassName,
        tooltipClassName,
        wrapperClassName,
        size = 'md',
        className,
        ...inputProps
      },
      ref,
    ) => {
      const fieldId = useStableId(id);
      const tooltipId = `${fieldId}-tooltip`;

      const labelElement = (
        <Label
          htmlFor={fieldId}
          className={clsx('inline-block', labelClassName)}
        >
          {label}
        </Label>
      );

      const labelWithTooltip = tooltip ? (
        <div className="flex items-center gap-1.5">
          {labelElement}
          <Tooltip
            id={tooltipId}
            content={tooltip}
            position={tooltipPosition}
            delay={tooltipDelay}
            className={tooltipClassName}
          >
            <HelpCircle
              size={16}
              className="text-gray-400 hover:text-gray-600 cursor-help transition-colors"
              aria-label={`Help: ${tooltip}`}
            />
          </Tooltip>
        </div>
      ) : (
        labelElement
      );

      return (
        <div className={clsx('space-y-1', wrapperClassName)}>
          {labelWithTooltip}
          <Input
            ref={ref}
            id={fieldId}
            size={size}
            inputClassName={className}
            aria-describedby={tooltip ? tooltipId : undefined}
            {...inputProps}
          />
        </div>
      );
    },
  ),
);

FormField.displayName = 'FormField';
