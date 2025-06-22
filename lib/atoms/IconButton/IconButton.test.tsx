import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { IconButton } from './IconButton';
import { iconButtonSizeClasses } from '../../@types/size';

describe('IconButton', () => {
  it('renders an icon button with aria-label', () => {
    render(<IconButton icon={<svg data-testid="icon" />} aria-label="Close" />);

    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<IconButton icon={<svg />} aria-label="Disabled button" disabled />);
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const onClick = vi.fn();
    render(
      <IconButton icon={<svg />} aria-label="Click me" onClick={onClick} />,
    );
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(
      <IconButton
        icon={<svg data-testid="icon" />}
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
        <IconButton
          icon={<svg data-testid="icon" />}
          aria-label={size}
          size={size}
        />,
      );
      const button = screen.getByRole('button', { name: size });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(iconButtonSizeClasses[size]);

      unmount();
    });
  });
});
