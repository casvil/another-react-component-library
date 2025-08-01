import React, {
  forwardRef,
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import clsx from 'clsx';

import { Label } from '../Label/Label';
import { useStableId } from '../../hooks/useStableId/useStableId';
import type { Size } from '../../@types/classes';
import { switchSizeClasses, textSizeClasses } from '../../@types/classes';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  className?: string; // for the <input>
  labelClassName?: string; // for the <Label>
  wrapperClassName?: string; // for the outer <div>
  size?: Size;
  description?: string;
}

/**
 * Switch atom component.
 * Renders a toggle switch input with an optional label using a Label component.
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
    const [internalChecked, setInternalChecked] = useState(
      defaultChecked ?? false,
    );

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
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
          setInternalChecked(e.target.checked);
        }
        // Call the original onChange if provided
        if (onChange) {
          onChange(e);
        }
      },
      [isControlled, onChange],
    );

    // Memoize current size and label size to prevent recalculation
    const currentSize = useMemo(() => switchSizeClasses[size], [size]);
    const currentLabelSize = useMemo(() => textSizeClasses[size], [size]);

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
                visualChecked
                  ? currentSize.thumbTranslate
                  : currentSize.thumbUnchecked,
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
                  size === 'sm'
                    ? 'text-xs'
                    : size === 'md'
                      ? 'text-sm'
                      : 'text-base',
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

Switch.displayName = 'Switch';
