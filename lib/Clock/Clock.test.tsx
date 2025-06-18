import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';

import { Clock } from './Clock';

describe('Clock', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-16T12:34:56'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders with default format HH:mm:ss', () => {
    render(<Clock />);
    expect(screen.getByText('12:34:56')).toBeInTheDocument();
  });

  it('renders with default format HH:mm:ss', () => {
    render(<Clock />);
    expect(screen.getByText('12:34:56')).toBeInTheDocument();
  });

  it('updates the time every second', () => {
    render(<Clock />);
    expect(screen.getByText('12:34:56')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('12:34:57')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByText('12:34:59')).toBeInTheDocument();
  });

  it('supports custom format mm:ss', () => {
    render(<Clock format="mm:ss" />);
    expect(screen.getByText('34:56')).toBeInTheDocument();
  });

  it('applies additional className', () => {
    render(<Clock className="text-red-500" />);
    const timeEl = screen.getByText('12:34:56');
    expect(timeEl).toHaveClass('text-red-500');
  });

  it('applies bordered styles to TimeDisplay', () => {
    render(<Clock className="border px-2 py-1" />);
    const timeEl = screen.getByText('12:34:56');
    expect(timeEl).toHaveClass('border', 'px-2', 'py-1');
  });
});
