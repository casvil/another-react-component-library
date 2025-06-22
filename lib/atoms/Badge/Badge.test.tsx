import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Badge } from './Badge';
import type { BadgeProps } from './Badge';

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string[]> = {
  default: ['bg-gray-100', 'text-gray-800'],
  success: ['bg-green-100', 'text-green-800'],
  error: ['bg-red-100', 'text-red-800'],
  warning: ['bg-yellow-100', 'text-yellow-800'],
  info: ['bg-blue-100', 'text-blue-800'],
};

const sizeClasses: Record<NonNullable<BadgeProps['size']>, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

describe('Badge', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Badge>Default</Badge>);
    expect(getByRole('status', { name: /default/i })).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    const { getByRole } = render(<Badge>Default</Badge>);
    const badge = getByRole('status', { name: /default/i });

    expect(badge.className).toContain('bg-gray-100');
    expect(badge.className).toContain('text-gray-800');
    expect(badge.className).toContain('text-sm');
  });

  it('renders all variant styles', () => {
    (
      Object.entries(variantClasses) as [BadgeProps['variant'], string[]][]
    ).forEach(([variant, classes]) => {
      const { getByRole, unmount } = render(
        <Badge variant={variant}>{variant}</Badge>,
      );
      const badge = getByRole('status', {
        name: new RegExp(String(variant), 'i'),
      });

      classes.forEach((cls) => {
        expect(badge.className).toContain(cls);
      });

      unmount();
    });
  });

  it('renders all sizes', () => {
    (Object.entries(sizeClasses) as [BadgeProps['size'], string][]).forEach(
      ([size, cls]) => {
        const { getByRole, unmount } = render(
          <Badge size={size}>{size}</Badge>,
        );
        const badge = getByRole('status', {
          name: new RegExp(String(size), 'i'),
        });

        expect(badge.className).toContain(cls);

        unmount();
      },
    );
  });

  it('allows custom className to be merged', () => {
    const { getByRole } = render(
      <Badge className="custom-class">Styled</Badge>,
    );
    const badge = getByRole('status', { name: /styled/i });

    expect(badge.className).toContain('custom-class');
  });

  it('renders with the default aria attributes when no variant provided', () => {
    const { getByRole } = render(<Badge>default</Badge>);
    const badge = getByRole('status', { name: /default/i });

    expect(badge).toHaveAttribute('role', 'status');
    expect(badge).toHaveAttribute('aria-live', 'polite');
  });
});
