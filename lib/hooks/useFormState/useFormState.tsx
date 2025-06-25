import { useState, useCallback, useRef } from 'react';
import type {
  FormData,
  FormErrors,
  FieldConfig,
  FormHelpers,
  FormSubmitHandler,
  FormValidator,
  FieldChangeHandler,
  FieldBlurHandler,
  FormResetHandler,
} from '../../molecules/Form/types';
import { getNestedValue, setNestedValue } from '../../molecules/Form/utils';

// Interface for useFormState configuration
export interface UseFormStateProps {
  onSubmit: FormSubmitHandler;
  onValidate?: FormValidator;
  onFieldChange?: FieldChangeHandler;
  onFieldBlur?: FieldBlurHandler;
  onReset?: FormResetHandler;
  initialValues?: FormData;
  isSubmitting?: boolean;
  disabled?: boolean;
  resetOnSubmit?: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validateOnSubmit?: boolean;
}

/**
 * Form state management hook
 */
export function useFormState(props: UseFormStateProps) {
  const {
    onSubmit,
    onValidate,
    onFieldChange,
    onFieldBlur,
    onReset,
    initialValues = {},
    isSubmitting: externalIsSubmitting,
    disabled = false,
    resetOnSubmit = false,
    validateOnBlur = false,
    validateOnSubmit = true,
  } = props;

  // Internal state
  const [values, setValues] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [internalIsSubmitting, setInternalIsSubmitting] = useState(false);
  const fieldsRef = useRef<Map<string, FieldConfig>>(new Map());

  const isSubmitting = externalIsSubmitting || internalIsSubmitting;

  // Field registration
  const registerField = useCallback(
    (config: FieldConfig) => {
      fieldsRef.current.set(config.name, config);

      // Set default value if provided and field doesn't have a value
      if (
        config.defaultValue !== undefined &&
        getNestedValue(values, config.name) === undefined
      ) {
        setValues((prev) =>
          setNestedValue(prev, config.name, config.defaultValue),
        );
      }

      // Return cleanup function
      return () => {
        fieldsRef.current.delete(config.name);
      };
    },
    [values],
  );

  // Field value operations
  const setFieldValue = useCallback(
    (name: string, value: unknown) => {
      setValues((prev) => {
        const newValues = setNestedValue(prev, name, value);

        // Trigger field change callback
        onFieldChange?.(name, value, newValues);

        return newValues;
      });
    },
    [onFieldChange],
  );

  const getFieldValue = useCallback(
    (name: string): unknown => {
      return getNestedValue(values, name);
    },
    [values],
  );

  // Error management
  const setFieldError = useCallback((name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const clearFieldError = useCallback((name: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }, []);

  const setFormErrors = useCallback((newErrors: FormErrors) => {
    setErrors(newErrors);
  }, []);

  // Field validation
  const validateField = useCallback(
    async (name: string, value: unknown): Promise<string | undefined> => {
      const field = fieldsRef.current.get(name);
      if (!field) return;

      let error: string | undefined;

      // Required field validation
      if (
        field.required &&
        (value === undefined || value === null || value === '')
      ) {
        error = 'This field is required';
      }

      // Custom field validation
      if (
        !error &&
        field.validate &&
        value !== undefined &&
        value !== null &&
        value !== ''
      ) {
        try {
          error = await field.validate(value);
        } catch {
          error = 'Validation failed';
        }
      }

      // Update field error
      if (error) {
        setFieldError(name, error);
      } else {
        clearFieldError(name);
      }

      return error;
    },
    [setFieldError, clearFieldError],
  );

  // Form validation
  const validateForm = useCallback(async (): Promise<FormErrors> => {
    const formErrors: FormErrors = {};

    // Validate all registered fields
    const fieldValidationPromises = Array.from(fieldsRef.current.entries()).map(
      async ([name]) => {
        const value = getNestedValue(values, name);
        const error = await validateField(name, value);
        if (error) {
          formErrors[name] = error;
        }
      },
    );

    await Promise.all(fieldValidationPromises);

    // Run form-level validation if provided
    if (onValidate) {
      try {
        const additionalErrors = await onValidate(values);
        Object.assign(formErrors, additionalErrors);
      } catch {
        formErrors.form = 'Form validation failed';
      }
    }

    return formErrors;
  }, [values, onValidate, validateField]);

  // Form reset
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setInternalIsSubmitting(false);
    onReset?.(initialValues);
  }, [initialValues, onReset]);

  // Form submission
  const submit = useCallback(async () => {
    if (disabled || isSubmitting) return;

    setInternalIsSubmitting(true);

    try {
      // Validate form if validation is enabled
      if (validateOnSubmit) {
        const validationErrors = await validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
      }

      // Clear any existing errors
      setErrors({});

      // Create form helpers
      const helpers: FormHelpers = {
        reset,
        setErrors: setFormErrors,
        setFieldValue,
        getFieldValue,
        setFieldError,
        clearFieldError,
        isSubmitting: true,
      };

      // Submit form
      await onSubmit(values, helpers);

      // Reset form if configured
      if (resetOnSubmit) {
        reset();
      }
    } catch (error) {
      // Handle submission error
      if (error instanceof Error) {
        setErrors({ form: error.message });
      } else {
        setErrors({ form: 'An unexpected error occurred' });
      }
    } finally {
      setInternalIsSubmitting(false);
    }
  }, [
    disabled,
    isSubmitting,
    validateOnSubmit,
    validateForm,
    onSubmit,
    values,
    resetOnSubmit,
    reset,
    setFieldValue,
    getFieldValue,
    setFieldError,
    clearFieldError,
    setFormErrors,
  ]);

  // Field blur handler
  const handleFieldBlur = useCallback(
    (name: string, value: unknown) => {
      onFieldBlur?.(name, value);

      if (validateOnBlur) {
        validateField(name, value);
      }
    },
    [onFieldBlur, validateOnBlur, validateField],
  );

  const clearErrors = useCallback(() => {
    setErrors({});
    setInternalIsSubmitting(false);

    // Reset helpers status
    reset();
  }, [reset]);

  return {
    // Form state
    values,
    errors,
    isSubmitting,

    // Field operations
    registerField,
    setFieldValue,
    getFieldValue,

    // Error management
    setFieldError,
    clearFieldError,
    setErrors: setFormErrors,

    // Form operations
    submit,
    reset,
    validateField,
    validateForm,

    // Event handlers
    handleFieldBlur,
    clearErrors,
  };
}
