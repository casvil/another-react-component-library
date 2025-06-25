import type { ReactNode, ReactElement } from 'react';

// Form data can be any object with string keys and unknown values
export type FormData = Record<string, unknown>;

// Form errors are always strings
export type FormErrors = Record<string, string>;

// Field validation function type
export type FieldValidator = (
  value: unknown,
) => string | undefined | Promise<string | undefined>;

// Form validation function type
export type FormValidator = (
  data: FormData,
) => FormErrors | Promise<FormErrors>;

// Form submission helpers
export interface FormHelpers {
  reset: () => void;
  setErrors: (errors: FormErrors) => void;
  setFieldValue: (name: string, value: unknown) => void;
  getFieldValue: (name: string) => unknown;
  setFieldError: (name: string, error: string) => void;
  clearFieldError: (name: string) => void;
  isSubmitting: boolean;
}

// Form submission function type
export type FormSubmitHandler = (
  data: FormData,
  helpers: FormHelpers,
) => void | Promise<void>;

// Field change callback type
export type FieldChangeHandler = (
  name: string,
  value: unknown,
  allValues: FormData,
) => void;

// Field blur callback type
export type FieldBlurHandler = (name: string, value: unknown) => void;

// Form reset callback type
export type FormResetHandler = (initialValues: FormData) => void;

// Field configuration for registration
export interface FieldConfig {
  name: string;
  defaultValue?: unknown;
  required?: boolean;
  validate?: FieldValidator;
}

// Form layout options
export type FormLayout = 'vertical' | 'horizontal' | 'grid';

// Form spacing options
export type FormSpacing = 'sm' | 'md' | 'lg';

// Main Form component props
export interface FormProps
  extends Omit<
    React.FormHTMLAttributes<HTMLFormElement>,
    'onSubmit' | 'onReset'
  > {
  // Required submission handler
  onSubmit: FormSubmitHandler;

  // Form validation
  onValidate?: FormValidator;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validateOnSubmit?: boolean;

  // Form state
  initialValues?: FormData;
  isSubmitting?: boolean;
  disabled?: boolean;
  resetOnSubmit?: boolean;

  // Form callbacks
  onFieldChange?: FieldChangeHandler;
  onFieldBlur?: FieldBlurHandler;
  onReset?: FormResetHandler;

  // Layout and styling
  layout?: FormLayout;
  spacing?: FormSpacing;
  gridColumns?: number;

  // Submit button customization
  submitButton?: ReactElement;
  submitText?: string;
  loadingText?: string;
  showSubmitButton?: boolean;

  // Content
  children: ReactNode;
}

// Form context interface for internal state sharing
export interface FormContextValue {
  // Form state
  values: FormData;
  errors: FormErrors;
  isSubmitting: boolean;

  // Field registration
  registerField: (config: FieldConfig) => () => void;

  // Field operations
  setFieldValue: (name: string, value: unknown) => void;
  setFieldError: (name: string, error: string) => void;
  clearFieldError: (name: string) => void;
  getFieldValue: (name: string) => unknown;

  // Validation
  validateField: (name: string, value: unknown) => Promise<void>;
  validateForm: () => Promise<boolean>;

  // Form operations
  submit: () => void;
  reset: () => void;

  // Configuration
  validateOnChange: boolean;
  validateOnBlur: boolean;
  disabled: boolean;
}
