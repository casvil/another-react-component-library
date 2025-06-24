import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Username } from './Username';

describe('Username', () => {
  it('renders without crashing', () => {
    render(<Username>johndoe</Username>);
    expect(screen.getByText('johndoe')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const variants = ['default', 'bold', 'muted'] as const;

    variants.forEach((variant) => {
      const { unmount } = render(
        <Username variant={variant}>johndoe</Username>,
      );
      expect(screen.getByText('johndoe')).toBeInTheDocument();
      unmount();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Username size={size}>johndoe</Username>);
      expect(screen.getByText('johndoe')).toBeInTheDocument();
      unmount();
    });
  });

  it('truncates text when maxLength is set', () => {
    render(<Username maxLength={5}>verylongusername</Username>);
    expect(screen.getByText('veryl...')).toBeInTheDocument();
    expect(screen.queryByText('verylongusername')).not.toBeInTheDocument();
  });

  it('shows full text in title when truncated', () => {
    render(<Username maxLength={5}>verylongusername</Username>);
    const element = screen.getByText('veryl...');
    expect(element).toHaveAttribute('title', 'verylongusername');
  });

  it('does not show title when not truncated', () => {
    render(<Username>johndoe</Username>);
    const element = screen.getByText('johndoe');
    expect(element).not.toHaveAttribute('title');
  });

  it('applies truncate className when truncate is true', () => {
    render(<Username truncate>johndoe</Username>);
    const element = screen.getByText('johndoe');
    expect(element).toHaveClass('truncate');
  });

  it('applies custom className', () => {
    render(<Username className="custom-class">johndoe</Username>);
    expect(screen.getByText('johndoe')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Username ref={ref}>johndoe</Username>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('passes through additional props', () => {
    render(<Username data-testid="username">johndoe</Username>);
    expect(screen.getByTestId('username')).toBeInTheDocument();
  });

  it('handles edge case with maxLength equal to text length', () => {
    render(<Username maxLength={7}>johndoe</Username>);
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).not.toHaveAttribute('title');
  });

  it('handles edge case with maxLength greater than text length', () => {
    render(<Username maxLength={20}>johndoe</Username>);
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).not.toHaveAttribute('title');
  });

  it('handles empty maxLength', () => {
    render(<Username maxLength={undefined}>johndoe</Username>);
    expect(screen.getByText('johndoe')).toBeInTheDocument();
  });
});
