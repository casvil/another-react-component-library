import React, { forwardRef, InputHTMLAttributes, useRef, useEffect, useState, useCallback, useMemo } from 'react';
import clsx from 'clsx';

import { Label } from '../Label/Label';
import { useStableId } from '../hooks/useStableId/useStableId';
import type { Size } from '../@types/size';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  className?: string; // for the <input>
  labelClassName?: string; // for the <Label>
  wrapperClassName?: string; // for the outer <div>
  size?: Size;
  description?: string;
}

// Move size configurations outside component to prevent recalculation
const switchSizes = {
  sm: {
    track: 'w-9 h-5',
    thumb: 'w-4 h-4',
    thumbTranslate: 'translate-x-4.5',
    thumbUnchecked: 'translate-x-0.5',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5',
    thumbTranslate: 'translate-x-5.5',
    thumbUnchecked: 'translate-x-0.5',
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    thumbTranslate: 'translate-x-7.5',
    thumbUnchecked: 'translate-x-0.5',
  },
} as const;

const labelSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const;

/**
 * Switch atom component.
 * Renders a toggle switch input with an optional label using the custom Label component.
 * Supports controlled state, custom styling, and accessibility features.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
      description,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const switchId = useStableId(id);
    const descriptionId = `${switchId}-description`;
    const inputRef = useRef<HTMLInputElement>(null);
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);

    // Determine if component is controlled or uncontrolled
    const isControlled = checked !== undefined;
    const inputChecked = isControlled ? checked : undefined;
    const inputDefaultChecked = isControlled ? undefined : defaultChecked;
    
    // For visual state, use checked if provided, otherwise use internal state
    const visualChecked = isControlled ? checked : internalChecked;

    // Update internal state when defaultChecked changes
    useEffect(() => {
      if (!isControlled && defaultChecked !== undefined) {
        setInternalChecked(defaultChecked);
      }
    }, [defaultChecked, isControlled]);

    // Remove onChange from rest to avoid conflicts
    const { onChange, ...inputProps } = rest;

    // Handle uncontrolled changes with useCallback to prevent unnecessary re-renders
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      // Call the original onChange if provided
      if (onChange) {
        onChange(e);
      }
    }, [isControlled, onChange]);

    // Memoize current size and label size to prevent recalculation
    const currentSize = useMemo(() => switchSizes[size], [size]);
    const currentLabelSize = useMemo(() => labelSizes[size], [size]);

    return (
      <div
        className={clsx(
          'inline-flex items-center space-x-3',
          disabled && 'opacity-50 cursor-not-allowed',
          wrapperClassName,
        )}
      >
        <div className="relative inline-flex items-center">
          <input
            ref={(node) => {
              // Handle both the forwarded ref and our internal ref
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
              inputRef.current = node;
            }}
            id={switchId}
            type="checkbox"
            role="switch"
            checked={inputChecked}
            defaultChecked={inputDefaultChecked}
            disabled={disabled}
            aria-describedby={description ? descriptionId : undefined}
            className={clsx(
              'sr-only', // Hide the actual input
              className,
            )}
            onChange={handleChange}
            {...inputProps}
          />
          <label
            htmlFor={switchId}
            className={clsx(
              'relative inline-flex cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2',
              currentSize.track,
              visualChecked
              ? clsx('bg-indigo-600', !disabled && 'hover:bg-indigo-700')
              : clsx('bg-gray-200', !disabled && 'hover:bg-gray-300'),
              disabled && 'cursor-not-allowed',
            )}
          >
            <span
              className={clsx(
                'inline-block transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out',
                currentSize.thumb,
                visualChecked ? currentSize.thumbTranslate : currentSize.thumbUnchecked,
              )}
            />
          </label>
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <Label
                className={clsx(
                  'cursor-pointer',
                  currentLabelSize,
                  labelClassName,
                )}
                htmlFor={switchId}
              >
                {label}
              </Label>
            )}
            {description && (
              <span
                id={descriptionId}
                className={clsx(
                  'text-gray-500',
                  size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base',
                )}
              >
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
); 