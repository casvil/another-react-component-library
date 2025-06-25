import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { Button } from '../../atoms/Button/Button';
import { FormProvider } from './FormContext';
import {
  useFormState,
  type UseFormStateProps,
} from '../../hooks/useFormState/useFormState';
import type { FormProps } from './types';

// Layout sizing classes - following our centralized pattern
const formLayoutClasses = {
  vertical: 'flex flex-col',
  horizontal: 'flex flex-row flex-wrap items-end',
  grid: 'grid',
} as const;

const formSpacingClasses = {
  sm: {
    vertical: 'gap-3',
    horizontal: 'gap-2',
    grid: 'gap-3',
  },
  md: {
    vertical: 'gap-4',
    horizontal: 'gap-3',
    grid: 'gap-4',
  },
  lg: {
    vertical: 'gap-6',
    horizontal: 'gap-4',
    grid: 'gap-6',
  },
} as const;

/**
 * Form molecule component.
 * Provides a powerful orchestration layer for form state management, validation, and submission.
 * Automatically detects and manages form fields while maintaining proper accessibility.
 * Supports flexible layouts, comprehensive validation, and async operations.
 */
export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      children,
      layout = 'vertical',
      spacing = 'md',
      gridColumns = 2,
      className,
      submitButton,
      submitText = 'Submit',
      loadingText = 'Submitting...',
      showSubmitButton = true,
      disabled = false,
      onSubmit,
      // Extract custom Form props to prevent them from being passed to DOM
      onValidate,
      validateOnChange,
      validateOnBlur,
      validateOnSubmit,
      isSubmitting: externalIsSubmitting,
      resetOnSubmit,
      initialValues,
      onFieldChange,
      onFieldBlur,
      onReset,
      ...htmlFormProps
    },
    ref,
  ) => {
    // Initialize form state with all Form-specific props
    const formStateConfig: UseFormStateProps = {
      onSubmit,
      onValidate,
      validateOnChange,
      validateOnBlur,
      validateOnSubmit,
      resetOnSubmit,
      initialValues,
      onFieldChange,
      onFieldBlur,
      onReset,
      isSubmitting: externalIsSubmitting,
      disabled,
    };

    const formState = useFormState(formStateConfig);

    const { submit, isSubmitting, errors } = formState;

    // Create context value with all required properties
    const contextValue = {
      ...formState,
      validateOnChange: validateOnChange ?? false,
      validateOnBlur: validateOnBlur ?? true,
      disabled: disabled || isSubmitting,
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await submit();
    };

    // Layout classes
    const layoutClass = formLayoutClasses[layout];
    const spacingClass = formSpacingClasses[spacing][layout];

    const gridStyle =
      layout === 'grid'
        ? {
            gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          }
        : undefined;

    const formClass = clsx(
      'w-full',
      layoutClass,
      spacingClass,
      disabled && 'opacity-60 pointer-events-none',
      className,
    );

    // Default submit button
    const defaultSubmitButton = showSubmitButton && (
      <Button
        type="submit"
        label={isSubmitting ? loadingText : submitText}
        disabled={isSubmitting || disabled}
        variant="primary"
        className={layout === 'horizontal' ? 'ml-auto' : undefined}
      />
    );

    // Form error message
    const formError = errors.form && (
      <div
        className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3"
        role="alert"
        aria-live="polite"
      >
        {errors.form}
      </div>
    );

    return (
      <FormProvider value={contextValue}>
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className={formClass}
          style={gridStyle}
          noValidate // We handle validation ourselves
          {...htmlFormProps}
        >
          {children}

          {formError}

          {submitButton || defaultSubmitButton}
        </form>
      </FormProvider>
    );
  },
);

Form.displayName = 'Form';
