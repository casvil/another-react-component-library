import React from 'react';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useFormContext } from './useFormContext';
import { FormProvider } from '../../molecules/Form/FormContext';
import type { FormContextValue } from '../../molecules/Form/types';

describe('useFormContext', () => {
  const mockFormContext: FormContextValue = {
    errors: {},
    registerField: vi.fn(() => vi.fn()),
    setFieldValue: vi.fn(),
    setFieldError: vi.fn(),
    clearFieldError: vi.fn(),
    getFieldValue: vi.fn(),
    validateField: vi.fn(),
    validateOnChange: true,
    validateOnBlur: true,
    disabled: false,
  };

  it('throws error when used outside of Form context', () => {
    // Suppress console.error for this test since we expect an error
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      renderHook(() => useFormContext());
    }).toThrow('useFormContext must be used within a Form context');

    consoleSpy.mockRestore();
  });

  it('returns form context when used within Form component', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FormProvider value={mockFormContext}>{children}</FormProvider>
    );

    const { result } = renderHook(() => useFormContext(), { wrapper });

    expect(result.current).toBe(mockFormContext);
    expect(result.current.errors).toEqual({});
    expect(result.current.validateOnChange).toBe(true);
    expect(result.current.validateOnBlur).toBe(true);
    expect(result.current.disabled).toBe(false);
  });

  it('provides access to all form methods', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FormProvider value={mockFormContext}>{children}</FormProvider>
    );

    const { result } = renderHook(() => useFormContext(), { wrapper });

    // Verify all methods are available
    expect(typeof result.current.registerField).toBe('function');
    expect(typeof result.current.setFieldValue).toBe('function');
    expect(typeof result.current.setFieldError).toBe('function');
    expect(typeof result.current.clearFieldError).toBe('function');
    expect(typeof result.current.getFieldValue).toBe('function');
    expect(typeof result.current.validateField).toBe('function');
  });

  it('reflects updated context values', () => {
    const initialContext = { ...mockFormContext, errors: {} };
    const updatedContext = {
      ...mockFormContext,
      errors: { email: 'Required' },
    };

    let contextValue = initialContext;

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FormProvider value={contextValue}>{children}</FormProvider>
    );

    const { result, rerender } = renderHook(() => useFormContext(), {
      wrapper,
    });

    // Initial state
    expect(result.current.errors).toEqual({});

    // Update context
    contextValue = updatedContext;
    rerender();

    // Should reflect updated errors
    expect(result.current.errors).toEqual({ email: 'Required' });
  });
});
