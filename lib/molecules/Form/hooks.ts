import React, { useContext, useCallback } from 'react';
import { FormContext } from './context';
import type { FieldConfig } from './types';

// Hook to access form context
export const useFormContext = () => {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('useFormContext must be used within a Form component');
  }
  
  return context;
};

// Hook for field registration and management
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