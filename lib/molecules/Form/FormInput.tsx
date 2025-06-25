import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { FormField } from '../FormField/FormField';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';
import { useField } from './FormContext';
import type { FormFieldProps } from '../FormField/FormField';

export interface FormInputProps extends Omit<FormFieldProps, 'children'> {
  name: string;
  required?: boolean;
  validate?: (value: unknown) => string | undefined;
}

/**
 * FormInput component.
 * Auto-registering form field that integrates with Form context.
 * Combines FormField (Label + Input + Tooltip) with automatic error display and validation.
 */
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    { name, required = false, validate, className, wrapperClassName, ...props },
    ref,
  ) => {
    // Register with form context
    const { value, error, hasError, fieldProps } = useField(name, {
      required,
      validate,
    });

    return (
      <div className={clsx('space-y-1', wrapperClassName)}>
        <FormField
          ref={ref}
          {...props}
          {...fieldProps}
          value={value || ''}
          className={clsx(
            hasError &&
              'border-red-300 focus:ring-red-500 focus:border-red-300',
            className,
          )}
          required={required}
        />

        {hasError && error && (
          <ErrorMessage id={`${name}-error`}>{error}</ErrorMessage>
        )}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';
