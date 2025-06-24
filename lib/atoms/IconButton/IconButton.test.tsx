import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { LucideIcon } from 'lucide-icon-type';

import { IconButton } from './IconButton';
import { iconButtonSizeClasses } from '../../@types/size';

// Mock icon component for testing
const MockIcon: LucideIcon = (props) => (
  <svg data-testid="icon" {...props}>
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

describe('IconButton', () => {
  it('renders an icon button with aria-label', () => {
    render(<IconButton icon={MockIcon} aria-label="Close" />);

    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <IconButton icon={MockIcon} aria-label="Disabled button" disabled />,
    );
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const onClick = vi.fn();
    render(
      <IconButton icon={MockIcon} aria-label="Click me" onClick={onClick} />,
    );
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(
      <IconButton
        icon={MockIcon}
        aria-label="Styled button"
        className="custom-class"
      />,
    );
    const button = screen.getByRole('button', { name: /styled button/i });
    expect(button).toHaveClass('custom-class');
  });

  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(
        <IconButton icon={MockIcon} aria-label={size} size={size} />,
      );
      const button = screen.getByRole('button', { name: size });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(iconButtonSizeClasses[size]);

      unmount();
    });
  });

  it('renders icon with correct size based on button size', () => {
    const sizes = [
      { size: 'sm' as const, expectedSize: 16 },
      { size: 'md' as const, expectedSize: 20 },
      { size: 'lg' as const, expectedSize: 24 },
    ];

    sizes.forEach(({ size, expectedSize }) => {
      const { unmount } = render(
        <IconButton icon={MockIcon} aria-label={size} size={size} />,
      );
      const icon = screen.getByTestId('icon');
      expect(icon).toHaveAttribute('size', expectedSize.toString());
      unmount();
    });
  });
});
