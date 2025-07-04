import { describe, it, expect, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { lightTokens, darkTokens } from '../../theme';
import { waitFor } from '@testing-library/react';
import { mockMatchMedia } from '../../test/utils/themeTest';

import { Badge } from './Badge';
import type { BadgeProps } from './Badge';

const intentClasses: Record<NonNullable<BadgeProps['intent']>, string[]> = {
  default: [
    'bg-[var(--color-surface-secondary)]',
    'text-[var(--color-text-primary)]',
  ],
  success: ['bg-[var(--color-success-50)]', 'text-[var(--color-success-700)]'],
  error: ['bg-[var(--color-error-50)]', 'text-[var(--color-error-700)]'],
  warning: ['bg-[var(--color-warning-50)]', 'text-[var(--color-warning-700)]'],
  info: ['bg-[var(--color-info-50)]', 'text-[var(--color-info-700)]'],
};

const sizeClasses: Record<NonNullable<BadgeProps['size']>, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

beforeAll(mockMatchMedia);

describe('Badge', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Badge>Default</Badge>);
    expect(getByRole('status', { name: /default/i })).toBeInTheDocument();
  });

  it('applies default intent and size', () => {
    const { getByRole } = render(<Badge>Default</Badge>);
    const badge = getByRole('status', { name: /default/i });

    expect(badge.className).toContain('bg-[var(--color-surface-secondary)]');
    expect(badge.className).toContain('text-[var(--color-text-primary)]');
    expect(badge.className).toContain('text-sm');
  });

  it('renders all intent styles', () => {
    (
      Object.entries(intentClasses) as [BadgeProps['intent'], string[]][]
    ).forEach(([intent, classes]) => {
      const { getByRole, unmount } = render(
        <Badge intent={intent}>{intent}</Badge>,
      );
      const badge = getByRole('status', {
        name: new RegExp(String(intent), 'i'),
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

  it('supports multiple custom classes', () => {
    const { getByRole } = render(
      <Badge className="custom-class-1 custom-class-2 bg-purple-100">
        Multi-class
      </Badge>,
    );
    const badge = getByRole('status', { name: /multi-class/i });

    expect(badge.className).toContain('custom-class-1');
    expect(badge.className).toContain('custom-class-2');
    expect(badge.className).toContain('bg-purple-100');
  });

  it('preserves base classes when custom className is applied', () => {
    const { getByRole } = render(
      <Badge className="custom-class">Styled</Badge>,
    );
    const badge = getByRole('status', { name: /styled/i });

    // Should have base structural classes
    expect(badge.className).toContain('inline-flex');
    expect(badge.className).toContain('items-center');
    expect(badge.className).toContain('font-medium');
    expect(badge.className).toContain('rounded-full');
    expect(badge.className).toContain('whitespace-nowrap');
    // And custom class
    expect(badge.className).toContain('custom-class');
  });

  it('allows overriding default styling with custom className', () => {
    const { getByRole } = render(
      <Badge
        className="bg-purple-500 text-white border-2 border-purple-700"
        intent="info"
      >
        Custom Styled
      </Badge>,
    );
    const badge = getByRole('status', { name: /custom styled/i });

    expect(badge.className).toContain('bg-purple-500');
    expect(badge.className).toContain('text-white');
    expect(badge.className).toContain('border-2');
    expect(badge.className).toContain('border-purple-700');
  });

  it('works with className and all props combined', () => {
    const { getByRole } = render(
      <Badge
        className="custom-styling shadow-lg animate-pulse"
        intent="success"
        size="lg"
        aria-label="Custom badge"
      >
        Complex Badge
      </Badge>,
    );
    const badge = getByRole('status', { name: /custom badge/i });

    // Custom classes
    expect(badge.className).toContain('custom-styling');
    expect(badge.className).toContain('shadow-lg');
    expect(badge.className).toContain('animate-pulse');

    // Intent classes
    expect(badge.className).toContain('bg-[var(--color-success-50)]');
    expect(badge.className).toContain('text-[var(--color-success-700)]');

    // Size classes
    expect(badge.className).toContain('text-base');

    // Base structure classes
    expect(badge.className).toContain('inline-flex');
    expect(badge.className).toContain('items-center');

    // Aria attributes
    expect(badge).toHaveAttribute('aria-label', 'Custom badge');
  });

  it('renders with the default aria attributes when no intent provided', () => {
    const { getByRole } = render(<Badge>default</Badge>);
    const badge = getByRole('status', { name: /default/i });

    expect(badge).toHaveAttribute('role', 'status');
    expect(badge).toHaveAttribute('aria-live', 'polite');
  });

  it('adapts to light and dark themes', async () => {
    const { unmount } = render(
      <ThemeProvider defaultColorScheme="light">
        <Badge>Theme</Badge>
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      expect(
        document.documentElement.style.getPropertyValue('--color-info-50'),
      ).toBe(lightTokens.colors.intent.info[50]);
    });

    unmount();
    render(
      <ThemeProvider defaultColorScheme="dark">
        <Badge>Theme</Badge>
      </ThemeProvider>,
    );
    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(
        document.documentElement.style.getPropertyValue('--color-info-50'),
      ).toBe(darkTokens.colors.intent.info[50]);
    });
  });
});
