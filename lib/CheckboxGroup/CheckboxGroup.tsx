import React from 'react';
import clsx from 'clsx';
import { Label } from '../Label/Label';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import { useStableId } from '../hooks/useStableId/useStableId';

export interface CheckboxGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  label?: string;
  options: CheckboxGroupOption[];
  value?: string[]; // controlled
  defaultValue?: string[]; // uncontrolled
  onChange?: (value: string[]) => void;
  name?: string;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  labelClassName?: string;
  checkboxProps?: Omit<
    CheckboxProps,
    'checked' | 'onChange' | 'label' | 'id' | 'disabled'
  >;
}

/**
 * CheckboxGroup molecule component.
 * Composed by Label + multiple Checkbox components.
 * Aria and a11y compliant (uses role="group" and proper labeling). Uses Tailwind CSS for styling.
 * Supports controlled and uncontrolled usage. Supports custom styles via className prop.
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  value,
  defaultValue,
  onChange,
  name,
  direction = 'vertical',
  className,
  labelClassName,
  checkboxProps,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string[]>(
    defaultValue ?? [],
  );
  const selected = isControlled ? value! : internalValue;

  const groupName = useStableId(name);
  // For aria-labelledby
  const labelId = label ? `${groupName}-label` : undefined;

  // Memoize handleChange
  const handleChange = React.useCallback(
    (optionValue: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue: string[];
      if (e.target.checked) {
        newValue = [...selected, optionValue];
      } else {
        newValue = selected.filter((v) => v !== optionValue);
      }
      if (!isControlled) setInternalValue(newValue);
      if (onChange) onChange(newValue);
    },
    [selected, isControlled, onChange],
  );

  // Direction classes
  const directionClasses =
    direction === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-4';

  return (
    <div className={className} role="group" aria-labelledby={labelId}>
      {label && (
        <Label id={labelId} className={labelClassName}>
          {label}
        </Label>
      )}
      <div className={clsx('flex', directionClasses)}>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            checked={selected.includes(option.value)}
            onChange={handleChange(option.value)}
            name={groupName}
            disabled={option.disabled}
            {...checkboxProps}
          />
        ))}
      </div>
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
