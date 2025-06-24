import React from 'react';
import clsx from 'clsx';
import { Label } from '../../atoms/Label/Label';
import { Radio } from '../../atoms/Radio/Radio';
import type { RadioProps } from '../../atoms/Radio/Radio';
import { useStableId } from '../../hooks/useStableId/useStableId';

export interface RadioGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  label?: string;
  options: RadioGroupOption[];
  value?: string; // controlled - single value for radio
  defaultValue?: string; // uncontrolled
  onChange?: (value: string) => void;
  name?: string;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  labelClassName?: string;
  radioProps?: Omit<
    RadioProps,
    'checked' | 'onChange' | 'label' | 'id' | 'disabled'
  >;
}

/**
 * RadioGroup molecule component.
 * Composed by Label + multiple Radio components.
 * Aria and a11y compliant (uses role="radiogroup" and proper labeling). Uses Tailwind CSS for styling.
 * Supports controlled and uncontrolled usage. Supports custom styles via className prop.
 * Only allows single selection.
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  defaultValue,
  onChange,
  name,
  direction = 'vertical',
  className,
  labelClassName,
  radioProps,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string>(
    defaultValue ?? '',
  );
  const selected = isControlled ? value! : internalValue;

  const groupName = useStableId(name);
  // For aria-labelledby
  const labelId = label ? `${groupName}-label` : undefined;

  // Memoize handleChange
  const handleChange = React.useCallback(
    (optionValue: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        if (!isControlled) setInternalValue(optionValue);
        if (onChange) onChange(optionValue);
      }
    },
    [isControlled, onChange],
  );

  // Direction classes
  const directionClasses =
    direction === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-4';

  return (
    <div className={className} role="radiogroup" aria-labelledby={labelId}>
      {label && (
        <Label id={labelId} className={labelClassName}>
          {label}
        </Label>
      )}
      <div className={clsx('flex', directionClasses)}>
        {options.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            checked={selected === option.value}
            onChange={handleChange(option.value)}
            name={groupName}
            disabled={option.disabled}
            {...radioProps}
          />
        ))}
      </div>
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup'; 