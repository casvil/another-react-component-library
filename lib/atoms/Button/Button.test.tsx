import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { LucideIcon } from 'lucide-icon-type';

import { Button } from './Button';
import { buttonSizeClasses } from '../../@types/size';

// Mock icon components for testing
const MockArrowLeft: LucideIcon = (props) => (
  <svg data-testid="icon-left" {...props}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const MockArrowRight: LucideIcon = (props) => (
  <svg data-testid="icon-right" {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

describe('Button', () => {
  it('renders the label', () => {
    render(<Button label="Submit" />);
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('supports all variants', () => {
    const variants = ['primary', 'secondary', 'tertiary'] as const;

    variants.forEach((variant) => {
      render(<Button label={variant} variant={variant} />);
      expect(screen.getByText(variant)).toBeInTheDocument();
    });
  });

  it('supports all sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      render(<Button label={size} size={size} />);
      expect(screen.getByText(size)).toBeInTheDocument();
    });
  });

  it('supports all size variants with correct classes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Button label={size} size={size} />);
      const button = screen.getByRole('button', { name: size });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(buttonSizeClasses[size]);

      unmount();
    });
  });

  it('renders left icon', () => {
    render(
      <Button
        label="Back"
        icon={MockArrowLeft}
        iconPosition="left"
      />,
    );
    const icon = screen.getByTestId('icon-left');
    const button = screen.getByRole('button', { name: /back/i });

    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveClass('mr-2');
    expect(button).toContainElement(icon);
  });

  it('renders right icon', () => {
    render(
      <Button
        label="Next"
        icon={MockArrowRight}
        iconPosition="right"
      />,
    );
    const icon = screen.getByTestId('icon-right');
    const button = screen.getByRole('button', { name: /next/i });

    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveClass('ml-2');
    expect(button).toContainElement(icon);
  });

  it('renders icon with correct size based on button size', () => {
    const sizes = [
      { size: 'sm' as const, expectedSize: 16 },
      { size: 'md' as const, expectedSize: 20 },
      { size: 'lg' as const, expectedSize: 24 },
    ];

    sizes.forEach(({ size, expectedSize }) => {
      const { unmount } = render(
        <Button label={size} icon={MockArrowLeft} size={size} />,
      );
      const icon = screen.getByTestId('icon-left');
      expect(icon).toHaveAttribute('size', expectedSize.toString());
      unmount();
    });
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /click/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button label="Disabled" onClick={handleClick} disabled />);
    fireEvent.click(screen.getByRole('button', { name: /disabled/i }));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies additional className', () => {
    render(<Button label="Styled" className="custom-class" />);
    expect(screen.getByRole('button', { name: /styled/i })).toHaveClass(
      'custom-class',
    );
  });

  it('has proper accessibility role', () => {
    render(<Button label="Accessible" />);
    expect(
      screen.getByRole('button', { name: /accessible/i }),
    ).toBeInTheDocument();
  });

  it('supports keyboard focus styling', () => {
    render(<Button label="Focus Me" />);
    const button = screen.getByRole('button', { name: /focus me/i });
    button.focus();
    expect(button).toHaveFocus();
  });
});
