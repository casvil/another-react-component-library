import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    const input = screen.getByRole('checkbox', { name: 'Accept terms' });
    expect(input).toBeInTheDocument();
  });

  it('supports checked state', () => {
    render(<Checkbox label="Accept terms" checked readOnly />);
    const input = screen.getByRole('checkbox', {
      name: 'Accept terms',
    }) as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it('supports disabled state', () => {
    render(<Checkbox label="Accept terms" disabled />);
    const input = screen.getByRole('checkbox', { name: 'Accept terms' });
    expect(input).toBeDisabled();
  });

  it('supports indeterminate state via aria', () => {
    render(<Checkbox label="Partially accepted" indeterminate />);
    const input = screen.getByRole('checkbox', { name: 'Partially accepted' });
    expect(input).toHaveAttribute('aria-checked', 'mixed');
  });

  it('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox label="With ref" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom styles to input, label, and wrapper', () => {
    render(
      <Checkbox
        label="Styled"
        className="input-style"
        labelClassName="label-style"
        wrapperClassName="wrapper-style"
      />,
    );

    const input = screen.getByRole('checkbox', { name: 'Styled' });
    expect(input).toHaveClass('input-style');

    const labelText = screen.getByText('Styled');
    expect(labelText).toHaveClass('label-style');

    const wrapper = labelText.closest('div');
    expect(wrapper).toHaveClass('wrapper-style');
  });

  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Checkbox label="Test" size={size} />);
      const input = screen.getByRole('checkbox', { name: 'Test' });
      const label = screen.getByText('Test');

      expect(input).toBeInTheDocument();
      expect(input).toHaveClass(
        size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5',
      );
      expect(label).toHaveClass(
        size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg',
      );

      unmount();
    });
  });
});
