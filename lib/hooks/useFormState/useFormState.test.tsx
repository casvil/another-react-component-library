import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useFormState } from './useFormState';
import type { FormProps } from '../../molecules/Form/types';

describe('useFormState', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockProps = (overrides: Partial<FormProps> = {}): FormProps => ({
    onSubmit: vi.fn(),
    ...overrides,
  });

  describe('Field Registration', () => {
    it('registers and unregisters fields correctly', () => {
      const props = createMockProps();
      const { result } = renderHook(() => useFormState(props));

      let unregister: (() => void) | undefined;

      act(() => {
        unregister = result.current.registerField({
          name: 'email',
          required: true,
        });
      });

      expect(result.current.getFieldValue('email')).toBe(undefined);

      act(() => {
        result.current.setFieldValue('email', 'test@example.com');
      });

      expect(result.current.getFieldValue('email')).toBe('test@example.com');

      act(() => {
        unregister?.();
      });

      expect(result.current.getFieldValue('email')).toBe('test@example.com');
    });

    it('sets default values on field registration', () => {
      const props = createMockProps();
      const { result } = renderHook(() => useFormState(props));

      act(() => {
        result.current.registerField({
          name: 'username',
          defaultValue: 'john_doe',
        });
      });

      expect(result.current.getFieldValue('username')).toBe('john_doe');
    });
  });

  describe('Field Operations', () => {
    it('sets and gets field values correctly', () => {
      const props = createMockProps();
      const { result } = renderHook(() => useFormState(props));

      act(() => {
        result.current.setFieldValue('email', 'test@example.com');
      });

      expect(result.current.getFieldValue('email')).toBe('test@example.com');
      expect(result.current.values).toEqual({ email: 'test@example.com' });
    });

    it('handles nested field names', () => {
      const props = createMockProps();
      const { result } = renderHook(() => useFormState(props));

      act(() => {
        result.current.setFieldValue('user.profile.email', 'test@example.com');
      });

      expect(result.current.getFieldValue('user.profile.email')).toBe(
        'test@example.com',
      );
      expect(result.current.values).toEqual({
        user: {
          profile: {
            email: 'test@example.com',
          },
        },
      });
    });

    it('sets and clears field errors', () => {
      const props = createMockProps();
      const { result } = renderHook(() => useFormState(props));

      act(() => {
        result.current.setFieldError('email', 'Invalid email');
      });

      expect(result.current.errors).toEqual({ email: 'Invalid email' });

      act(() => {
        result.current.clearFieldError('email');
      });

      expect(result.current.errors).toEqual({});
    });
  });

  describe('Validation', () => {
    it('validates required fields', async () => {
      const props = createMockProps();
      const { result } = renderHook(() => useFormState(props));

      act(() => {
        result.current.registerField({
          name: 'email',
          required: true,
        });
      });

      await act(async () => {
        await result.current.validateField('email', '');
      });

      expect(result.current.errors.email).toBe('This field is required');
    });

    it('validates fields with custom validation', async () => {
      const props = createMockProps();
      const { result } = renderHook(() => useFormState(props));

      act(() => {
        result.current.registerField({
          name: 'email',
          validate: (value) =>
            value.includes('@') ? undefined : 'Invalid email',
        });
      });

      await act(async () => {
        await result.current.validateField('email', 'invalid');
      });

      expect(result.current.errors.email).toBe('Invalid email');

      await act(async () => {
        await result.current.validateField('email', 'valid@example.com');
      });

      expect(result.current.errors.email).toBe(undefined);
    });
  });

  describe('Form Operations', () => {
    it('resets form to initial values', () => {
      const initialValues = { email: 'initial@example.com' };
      const props = createMockProps({ initialValues });
      const { result } = renderHook(() => useFormState(props));

      act(() => {
        result.current.setFieldValue('email', 'changed@example.com');
        result.current.setFieldError('email', 'Some error');
      });

      expect(result.current.values.email).toBe('changed@example.com');
      expect(result.current.errors.email).toBe('Some error');

      act(() => {
        result.current.reset();
      });

      expect(result.current.values).toEqual(initialValues);
      expect(result.current.errors).toEqual({});
    });

    it('submits form successfully', async () => {
      const onSubmit = vi.fn().mockResolvedValue(undefined);
      const props = createMockProps({ onSubmit });
      const { result } = renderHook(() => useFormState(props));

      act(() => {
        result.current.setFieldValue('email', 'test@example.com');
      });

      await act(async () => {
        await result.current.submit();
      });

      expect(onSubmit).toHaveBeenCalledWith(
        { email: 'test@example.com' },
        expect.objectContaining({
          reset: expect.any(Function),
          setErrors: expect.any(Function),
          setFieldValue: expect.any(Function),
          getFieldValue: expect.any(Function),
          setFieldError: expect.any(Function),
          clearFieldError: expect.any(Function),
          isSubmitting: true,
        }),
      );
    });
  });
});
