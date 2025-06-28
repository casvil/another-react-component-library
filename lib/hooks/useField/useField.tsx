import React, { useCallback } from 'react';
import { useFormContext } from '../useFormContext/useFormContext';
import type { FieldConfig } from '../../molecules/Form/types';

/**
 * Hook for field registration and management.
 * Automatically registers the field with the form context and provides
 * field state, handlers, and props for easy integration with form inputs.
 *
 * @param name - The field name
 * @param config - Optional field configuration (validation, etc.)
 * @returns Field state, handlers, and props
 */
export const useField = (name: string, config?: Partial<FieldConfig>) => {
  const {
    errors,
    registerField,
    setFieldValue,
    setFieldError,
    clearFieldError,
    getFieldValue,
    validateField,
    validateOnChange,
    validateOnBlur,
    disabled,
  } = useFormContext();

  // Register field on mount
  React.useEffect(() => {
    const fieldConfig: FieldConfig = {
      name,
      ...config,
    };

    const unregister = registerField(fieldConfig);
    return unregister;
  }, [name, registerField, config]);

  // Field value and error
  const value = getFieldValue(name);
  const error = errors[name];
  const hasError = Boolean(error);

  // Field handlers
  const handleChange = useCallback(
    async (newValue: unknown) => {
      setFieldValue(name, newValue);

      if (validateOnChange) {
        await validateField(name, newValue);
      }
    },
    [name, setFieldValue, validateField, validateOnChange],
  );

  const handleBlur = useCallback(async () => {
    if (validateOnBlur) {
      await validateField(name, value);
    }
  }, [name, value, validateField, validateOnBlur]);

  const setError = useCallback(
    (errorMessage: string) => {
      setFieldError(name, errorMessage);
    },
    [name, setFieldError],
  );

  const clearError = useCallback(() => {
    clearFieldError(name);
  }, [name, clearFieldError]);

  return {
    // Field state
    value,
    error,
    hasError,
    disabled,

    // Field handlers
    setValue: handleChange,
    setError,
    clearError,
    onBlur: handleBlur,

    // Field props for easy spreading
    fieldProps: {
      name,
      value: typeof value === 'string' ? value : '',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e.target.value),
      onBlur: handleBlur,
      disabled,
      'aria-invalid': hasError,
    },
  };
};

export default useField;
