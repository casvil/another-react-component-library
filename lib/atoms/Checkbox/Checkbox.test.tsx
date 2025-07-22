import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../theme/ThemeProvider';

import { Checkbox } from './Checkbox';
import { checkboxSizeClasses } from '../../@types/classes';

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
      expect(input).toHaveClass(checkboxSizeClasses[size].checkbox);
      expect(label).toHaveClass(checkboxSizeClasses[size].label);

      unmount();
    });
  });

  it('supports uncontrolled (defaultChecked) usage', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Uncontrolled" defaultChecked />);
    const input = screen.getByRole('checkbox', {
      name: 'Uncontrolled',
    }) as HTMLInputElement;
    expect(input.checked).toBe(true);
    await user.click(input);
    expect(input.checked).toBe(false);
  });

  it('supports controlled (checked) usage', async () => {
    const user = userEvent.setup();
    const Controlled = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <Checkbox
          label="Controlled"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      );
    };
    render(<Controlled />);
    const input = screen.getByRole('checkbox', {
      name: 'Controlled',
    }) as HTMLInputElement;
    expect(input.checked).toBe(false);
    await user.click(input);
    expect(input.checked).toBe(true);
  });

  it('adapts to light and dark themes', () => {
    const { rerender } = render(
      <ThemeProvider defaultColorScheme="light">
        <Checkbox label="Theme test" />
      </ThemeProvider>,
    );
    const input = screen.getByRole('checkbox', { name: 'Theme test' });
    expect(input).toHaveClass('text-[var(--color-text-primary)]');
    expect(input).toHaveClass('border-[var(--color-border-primary)]');
    rerender(
      <ThemeProvider defaultColorScheme="dark">
        <Checkbox label="Theme test" />
      </ThemeProvider>,
    );
    // Should still have the same theme variable classes
    expect(input).toHaveClass('text-[var(--color-text-primary)]');
    expect(input).toHaveClass('border-[var(--color-border-primary)]');
  });
});
