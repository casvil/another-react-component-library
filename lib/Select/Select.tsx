import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useLayoutEffect,
} from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

import { Input } from '../Input/Input';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import { useStableId } from '../hooks/useStableId/useStableId';

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  value?: string; // controlled value
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
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
    const selected = isControlled ? value! : internalValue;

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

    const selectedLabel =
      options.find((opt) => opt.value === selected)?.label || '';

    return (
      <div
        ref={(node) => {
          wrapperRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={clsx('w-64', className)}
        {...props}
      >
        {label && <Label htmlFor={inputId}>{label}</Label>}

        <div className="relative w-full">
          <div
            className={clsx(
              'cursor-pointer',
              disabled && 'opacity-60 cursor-not-allowed',
            )}
            onClick={toggleDropdown}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleDropdown();
              }
            }}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <Input
              id={inputId}
              icon={<Icon icon={ChevronDown} aria-label="Toggle dropdown" />}
              iconPosition="right"
              value={selectedLabel}
              placeholder={placeholder}
              readOnly
              disabled={disabled}
              className={clsx('pr-10 cursor-pointer', inputClassName)}
              ref={inputRef}
              onChange={() => {}}
            />
          </div>

          {isOpen && !disabled && (
            <ul
              role="listbox"
              aria-labelledby={id}
              className={clsx(
                'absolute z-10 mt-1 max-h-60 overflow-auto rounded-md border border-gray-300 bg-white shadow-lg focus:outline-none',
                dropdownClassName,
              )}
              style={{ width: inputWidth }}
            >
              {options.map(({ value: val, label }) => (
                <li
                  key={val}
                  role="option"
                  aria-selected={selected === val}
                  tabIndex={0}
                  onClick={() => handleSelect(val)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(val);
                    }
                  }}
                  className={clsx(
                    'cursor-pointer px-4 py-2',
                    selected === val && 'bg-indigo-600 text-white',
                    'hover:bg-indigo-100',
                  )}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';
