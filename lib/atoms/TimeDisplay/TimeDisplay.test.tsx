import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme/ThemeProvider';

import { TimeDisplay } from './TimeDisplay';

describe('TimeDisplay', () => {
  const testDate = new Date('2025-01-01T12:34:56');

  it('renders with default format HH:mm:ss', () => {
    render(<TimeDisplay time={testDate} />);
    expect(screen.getByText('12:34:56')).toBeInTheDocument();
  });

  it('renders with custom format HH:mm', () => {
    render(<TimeDisplay time={testDate} format="HH:mm" />);
    expect(screen.getByText('12:34')).toBeInTheDocument();
  });

  it('renders with custom format mm:ss', () => {
    render(<TimeDisplay time={testDate} format="mm:ss" />);
    expect(screen.getByText('34:56')).toBeInTheDocument();
  });

  it('accepts time as a string and formats correctly', () => {
    render(<TimeDisplay time="2025-01-01T07:08:09" />);
    expect(screen.getByText('07:08:09')).toBeInTheDocument();
  });

  it('accepts time as a timestamp and formats correctly', () => {
    render(<TimeDisplay time={Date.UTC(2025, 0, 1, 5, 6, 7)} />);
    // toISOString is UTC, so make sure to match your expected output accordingly
    const expected = new Date(Date.UTC(2025, 0, 1, 5, 6, 7)).toLocaleTimeString(
      'en-GB',
      { hour12: false },
    );
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it('applies bordered styles when bordered prop is true', () => {
    render(<TimeDisplay time={testDate} bordered />);
    const el = screen.getByText('12:34:56');
    expect(el.className).toMatch(/border/);
  });

  it('applies additional className passed via props', () => {
    render(<TimeDisplay time={testDate} className="text-red-500" />);
    const el = screen.getByText('12:34:56');
    expect(el.className).toMatch(/text-red-500/);
  });

  it('renders a <time> element with correct dateTime attribute', () => {
    render(<TimeDisplay time={testDate} />);
    const el = screen.getByText('12:34:56');
    expect(el.tagName).toBe('TIME');
    expect(el).toHaveAttribute('dateTime', testDate.toISOString());
  });

  it('renders with correct aria-label for accessibility', () => {
    render(<TimeDisplay time={testDate} />);
    const el = screen.getByLabelText('Time is 12:34:56');
    expect(el).toBeInTheDocument();
  });

  it('adapts to light and dark themes', () => {
    const { rerender } = render(
      <ThemeProvider defaultColorScheme="light">
        <TimeDisplay time={testDate} bordered />
      </ThemeProvider>,
    );
    const timeEl = screen.getByText('12:34:56');
    expect(timeEl).toHaveClass('border-[var(--color-border-primary)]');

    rerender(
      <ThemeProvider defaultColorScheme="dark">
        <TimeDisplay time={testDate} bordered />
      </ThemeProvider>,
    );
    // Should still have the same theme variable classes
    expect(timeEl).toHaveClass('border-[var(--color-border-primary)]');
  });
});
