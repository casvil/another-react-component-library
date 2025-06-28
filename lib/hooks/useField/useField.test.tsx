import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useField } from './useField';
import { FormProvider } from '../../molecules/Form/FormContext';
import type { FormContextValue } from '../../molecules/Form/types';

describe('useField', () => {
  let mockFormContext: FormContextValue;
  let registerFieldMock: ReturnType<typeof vi.fn>;
  let unregisterFieldMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    registerFieldMock = vi.fn();
    unregisterFieldMock = vi.fn();

    registerFieldMock.mockReturnValue(unregisterFieldMock);

    mockFormContext = {
      errors: {},
      registerField: registerFieldMock,
      setFieldValue: vi.fn(),
      setFieldError: vi.fn(),
      clearFieldError: vi.fn(),
      getFieldValue: vi.fn(() => ''),
      validateField: vi.fn(),
      validateOnChange: true,
      validateOnBlur: true,
      disabled: false,
    };
  });

  const createWrapper = (contextValue: FormContextValue = mockFormContext) => {
    return ({ children }: { children: React.ReactNode }) => (
      <FormProvider value={contextValue}>{children}</FormProvider>
    );
  };

  it('registers field on mount with correct config', () => {
    const fieldConfig = {
      required: true,
      validate: vi.fn(),
    };

    renderHook(() => useField('email', fieldConfig), {
      wrapper: createWrapper(),
    });

    expect(registerFieldMock).toHaveBeenCalledWith({
      name: 'email',
      ...fieldConfig,
    });
  });

  it('returns field state correctly', () => {
    const contextWithData = {
      ...mockFormContext,
      errors: { email: 'Required field' },
      getFieldValue: vi.fn(() => 'test@example.com'),
    };

    const { result } = renderHook(() => useField('email'), {
      wrapper: createWrapper(contextWithData),
    });

    expect(result.current.value).toBe('test@example.com');
    expect(result.current.error).toBe('Required field');
    expect(result.current.hasError).toBe(true);
    expect(result.current.disabled).toBe(false);
  });

  it('handles field value changes with validation', async () => {
    const { result } = renderHook(() => useField('email'), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.setValue('new@email.com');
    });

    expect(mockFormContext.setFieldValue).toHaveBeenCalledWith(
      'email',
      'new@email.com',
    );
    expect(mockFormContext.validateField).toHaveBeenCalledWith(
      'email',
      'new@email.com',
    );
  });

  it('provides fieldProps for form integration', () => {
    const { result } = renderHook(() => useField('email'), {
      wrapper: createWrapper(),
    });

    const { fieldProps } = result.current;

    expect(fieldProps.name).toBe('email');
    expect(fieldProps.disabled).toBe(false);
    expect(typeof fieldProps.onChange).toBe('function');
    expect(typeof fieldProps.onBlur).toBe('function');
  });
});
