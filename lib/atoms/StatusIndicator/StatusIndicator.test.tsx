import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme/ThemeProvider';

import { StatusIndicator } from './StatusIndicator';

describe('StatusIndicator', () => {
  it('renders without crashing', () => {
    render(<StatusIndicator status="online" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders all status types with correct aria-labels', () => {
    const statuses = ['online', 'offline', 'away', 'busy'] as const;
    const expectedLabels = ['Online', 'Offline', 'Away', 'Busy'];

    statuses.forEach((status, index) => {
      const { unmount } = render(<StatusIndicator status={status} />);
      expect(screen.getByLabelText(expectedLabels[index])).toBeInTheDocument();
      unmount();
    });
  });

  it('renders status label when showLabel is true', () => {
    render(<StatusIndicator status="online" showLabel />);
    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('does not render status label when showLabel is false', () => {
    render(<StatusIndicator status="online" showLabel={false} />);
    expect(screen.queryByText('Online')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<StatusIndicator status="online" className="custom-class" />);
    expect(screen.getByRole('status')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<StatusIndicator status="online" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(
        <StatusIndicator status="online" size={size} />,
      );
      const statusElement = screen.getByRole('status');
      expect(statusElement).toBeInTheDocument();
      unmount();
    });
  });

  it('has correct accessibility attributes', () => {
    render(<StatusIndicator status="busy" showLabel />);
    const statusElement = screen.getByRole('status');

    expect(statusElement).toHaveAttribute('role', 'status');
    expect(statusElement).toHaveAttribute('aria-label', 'Busy');
  });

  it('passes through additional props', () => {
    render(<StatusIndicator status="online" data-testid="status-indicator" />);
    expect(screen.getByTestId('status-indicator')).toBeInTheDocument();
  });

  it('renders with default props', () => {
    render(<StatusIndicator status="online" />);
    const statusElement = screen.getByRole('status');

    expect(statusElement).toBeInTheDocument();
    expect(screen.queryByText('Online')).not.toBeInTheDocument();
  });

  it('adapts to light and dark themes', () => {
    const { rerender } = render(
      <ThemeProvider defaultColorScheme="light">
        <StatusIndicator status="online" showLabel />
      </ThemeProvider>,
    );
    const statusElement = screen.getByRole('status');
    const dot = statusElement.querySelector('span[aria-hidden="true"]');
    expect(dot).toHaveClass('bg-[var(--color-success-500)]');

    rerender(
      <ThemeProvider defaultColorScheme="dark">
        <StatusIndicator status="online" showLabel />
      </ThemeProvider>,
    );
    // Should still have the same theme variable classes
    expect(dot).toHaveClass('bg-[var(--color-success-500)]');
  });
});
