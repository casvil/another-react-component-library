import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Spinner } from './Spinner';
import { spinnerSizeClasses } from '../@types/size';

describe('Spinner', () => {
  it('renders without crashing', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has accessible aria attributes', () => {
    render(<Spinner />);
    const status = screen.getByRole('status');
    expect(status).toHaveAttribute('aria-live', 'polite');
    expect(status).toHaveAttribute('aria-label', 'Loading');
    expect(screen.getByText('Loading')).toHaveClass('sr-only');
  });

  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Spinner size={size} />);
      const svg = screen.getByRole('status').querySelector('svg');

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass(spinnerSizeClasses[size]);

      unmount();
    });
  });

  it('applies custom wrapper className', () => {
    render(<Spinner className="bg-pink-100" />);
    expect(screen.getByRole('status')).toHaveClass('bg-pink-100');
  });

  it('applies custom icon className', () => {
    render(<Spinner iconClassName="text-blue-500" />);
    const svg = screen.getByRole('status').querySelector('svg');
    expect(svg).toHaveClass('text-blue-500');
  });
});
