import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll } from 'vitest';

import { Avatar } from './Avatar';
import { ThemeProvider } from '../../theme';
import { lightTokens, darkTokens } from '../../theme';
import { waitFor } from '@testing-library/react';
import { mockMatchMedia } from '../../test/utils/themeTest';

beforeAll(mockMatchMedia);

describe('Avatar component', () => {
  it('renders img element when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(img).toHaveAttribute('alt', 'User Avatar');
  });

  it('renders span with initials when no src provided', () => {
    render(<Avatar name="Jane Doe" />);
    const span = screen.getByRole('img');
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe('SPAN');
    expect(span).toHaveTextContent('JD');
  });

  it('renders correct initials for single name', () => {
    render(<Avatar name="Cher" />);
    const span = screen.getByRole('img');
    expect(span).toHaveTextContent('C');
  });

  it('uses alt or name for aria-label', () => {
    const { rerender } = render(<Avatar src="url" alt="Custom alt" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Custom alt');

    rerender(<Avatar name="John Smith" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'John Smith');

    rerender(<Avatar />);
    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'User avatar',
    );
  });

  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Avatar name="Test User" size={size} />);
      const avatar = screen.getByRole('img');

      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveClass(
        size === 'sm'
          ? 'w-8 h-8 text-sm'
          : size === 'md'
            ? 'w-12 h-12 text-base'
            : 'w-20 h-20 text-xl',
      );

      unmount();
    });
  });

  it('applies custom className', () => {
    render(<Avatar name="Bob" className="custom-class" />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveClass('custom-class');
  });

  it('forwards ref to img element', () => {
    const ref = createRef<HTMLImageElement>();
    render(<Avatar src="url" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLImageElement);
  });

  it('forwards ref to span element', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Avatar name="Jane Doe" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('adapts to light and dark themes', async () => {
    const { unmount } = render(
      <ThemeProvider defaultColorScheme="light">
        <Avatar name="Theme" />
      </ThemeProvider>,
    );
    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      expect(
        document.documentElement.style.getPropertyValue(
          '--color-surface-secondary',
        ),
      ).toBe(lightTokens.colors.surface.secondary);
    });

    unmount();
    render(
      <ThemeProvider defaultColorScheme="dark">
        <Avatar name="Theme" />
      </ThemeProvider>,
    );
    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(
        document.documentElement.style.getPropertyValue(
          '--color-surface-secondary',
        ),
      ).toBe(darkTokens.colors.surface.secondary);
    });
  });
});
