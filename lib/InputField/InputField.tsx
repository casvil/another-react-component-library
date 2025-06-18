import React from 'react';

import { Label } from '../Label/Label';
import { Input } from '../Input/Input';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { HelperText } from '../HelperText/HelperText';

export interface InputFieldProps extends React.ComponentProps<typeof Input> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * InputField molecule component.
 * Combines Label, Input, HelperText, and ErrorMessage into a single accessible form field.
 * Manages ARIA attributes for error and helper text associations.
 * Delegates icon handling and padding fully to Input component.
 */
export const InputField = ({
  id,
  label,
  error,
  helperText,
  className,
  ...props
}: InputFieldProps) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const describedBy = [
    helperText ? `${inputId}-helper` : null,
    error ? `${inputId}-error` : null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="space-y-1">
      {label && <Label htmlFor={inputId}>{label}</Label>}

      <Input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={describedBy || undefined}
        className={className}
        {...props} // includes icon, iconPosition, etc.
      />

      {!error && helperText && (
        <HelperText id={`${inputId}-helper`}>{helperText}</HelperText>
      )}

      {error && <ErrorMessage id={`${inputId}-error`}>{error}</ErrorMessage>}
    </div>
  );
};
