import * as React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import { useStableId } from './useStableId';

// mock useId
vi.mock('react', async () => {
  const actual = await vi.importActual<typeof React>('react');
  return {
    ...actual,
    useId: vi.fn(() => `«r${Math.floor(Math.random() * 1000)}»`),
  };
});

describe('useStableId', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns the provided id when a non-empty string is given', () => {
    const { result } = renderHook(() => useStableId('my-custom-id'));

    expect(result.current).toBe('my-custom-id');
  });

  it('trims the id and still returns it if non-empty after trimming', () => {
    const { result } = renderHook(() => useStableId('  trimmed-id  '));

    expect(result.current).toBe('trimmed-id');
  });

  it('generates a fallback id when id is missing, empty, or whitespace', () => {
    [undefined, '', '   '].forEach((input) => {
      const { result } = renderHook(() => useStableId(input));
      expect(React.useId).toHaveBeenCalled();
      expect(typeof result.current).toBe('string');
      expect(result.current).toMatch(/^«r\d+»$/);
    });
    expect(React.useId).toHaveBeenCalledTimes(3);
  });
});
