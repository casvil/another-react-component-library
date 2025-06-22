import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useLayoutEffect,
  useMemo,
} from 'react';
import ChevronDown from 'lucide-react/icons/chevron-down';
import clsx from 'clsx';

import { Input } from '../../atoms/Input/Input';
import { Icon } from '../../atoms/Icon/Icon';
import { Label } from '../../atoms/Label/Label';
import { useStableId } from '../../hooks/useStableId/useStableId';
import type { Size } from '../../@types/size';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  defaultValue?: string;
  value?: string; // controlled value
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: Size;
  className?: string;
  inputClassName?: string;
  dropdownClassName?: string;
  id?: string;
}

/**
 * Select molecule component.
 * Supports controlled and uncontrolled modes with keyboard accessibility.
 * Displays a styled dropdown with smooth open/close animations.
 */
export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      options,
      defaultValue,
      value,
      onChange,
      placeholder = 'Select an option',
      disabled = false,
      size = 'md',
      className,
      inputClassName,
      dropdownClassName,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = useStableId(id);

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const selected =
      isControlled && value !== undefined ? value : internalValue;

    const [isOpen, setIsOpen] = useState(false);
    const [inputWidth, setInputWidth] = useState<number>(0);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSelect = (val: string) => {
      if (!isControlled) {
        setInternalValue(val);
      }
      if (onChange) onChange(val);
      setIsOpen(false);
    };

    const toggleDropdown = () => {
      if (!disabled) setIsOpen((prev) => !prev);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useLayoutEffect(() => {
      if (inputRef.current) {
        setInputWidth(inputRef.current.offsetWidth);
      }
    }, [isOpen]);

    // Memoize selectedLabel for performance
    const selectedLabel = useMemo(
      () => options.find((opt) => opt.value === selected)?.label || '',
      [options, selected],
    );

    return (
      <div ref={wrapperRef} className={clsx('relative', className)} {...props}>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <div
          ref={ref}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={label || 'Select option'}
          className={clsx(
            'cursor-pointer',
            disabled && 'opacity-60 cursor-not-allowed',
          )}
          onClick={toggleDropdown}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDropdown();
            }
          }}
        >
          <Input
            ref={inputRef}
            id={inputId}
            value={selectedLabel}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
            size={size}
            className={clsx('cursor-pointer', inputClassName)}
            icon={
              <Icon
                icon={ChevronDown}
                size={16}
                className={clsx(
                  'transition-transform duration-200',
                  isOpen && 'rotate-180',
                )}
              />
            }
            iconPosition="right"
          />
        </div>

        {isOpen && (
          <div
            className={clsx(
              'absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto',
              dropdownClassName,
            )}
            style={{ width: inputWidth }}
            role="listbox"
          >
            {options.map((option) => (
              <div
                key={option.value}
                role="option"
                aria-selected={option.value === selected}
                className={clsx(
                  'px-3 py-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none',
                  option.value === selected && 'bg-indigo-50 text-indigo-900',
                )}
                onClick={() => handleSelect(option.value)}
                onKeyDown={(e) => {
                  if (e.key === ' ') {
                    e.preventDefault();
                    handleSelect(option.value);
                  }
                }}
                tabIndex={0}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';
