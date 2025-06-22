import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

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

  it('applies small size', () => {
    render(<Spinner size="sm" />);
    const svg = screen.getByRole('status').querySelector('svg');
    expect(svg).toHaveClass('w-4 h-4');
  });

  it('applies medium size', () => {
    render(<Spinner size="md" />);
    const svg = screen.getByRole('status').querySelector('svg');
    expect(svg).toHaveClass('w-6 h-6');
  });

  it('applies large size', () => {
    render(<Spinner size="lg" />);
    const svg = screen.getByRole('status').querySelector('svg');
    expect(svg).toHaveClass('w-8 h-8');
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
