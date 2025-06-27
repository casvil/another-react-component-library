import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from 'lucide-react';

import { Input } from './Input';
import { inputSizeClasses } from '../../@types/classes';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input aria-label="input-field" />);
    expect(
      screen.getByRole('textbox', { name: 'input-field' }),
    ).toBeInTheDocument();
  });

  it('renders input with placeholder', () => {
    render(<Input placeholder="Enter text" aria-label="input-field" />);
    const input = screen.getByRole('textbox', { name: 'input-field' });
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('accepts user input', async () => {
    render(<Input aria-label="input-field" />);
    const input = screen.getByRole('textbox', { name: 'input-field' });
    await userEvent.type(input, 'Hello');
    expect((input as HTMLInputElement).value).toBe('Hello');
  });

  it('supports disabling', () => {
    render(<Input disabled aria-label="input-field" />);
    expect(screen.getByRole('textbox', { name: 'input-field' })).toBeDisabled();
  });

  it('supports readOnly', () => {
    render(<Input readOnly aria-label="input-field" />);
    expect(
      screen.getByRole('textbox', { name: 'input-field' }),
    ).toHaveAttribute('readonly');
  });

  it('applies custom className', () => {
    render(<Input inputClassName="custom-class" aria-label="input-field" />);
    expect(screen.getByRole('textbox', { name: 'input-field' })).toHaveClass(
      'custom-class',
    );
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} aria-label="input-field" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('renders icon on the left by default', () => {
    render(<Input icon={Search} aria-label="input-field" />);
    const iconContainer = screen
      .getByRole('textbox', { name: 'input-field' })
      .parentElement?.querySelector('span');
    expect(iconContainer).toBeInTheDocument();
  });

  it('renders icon on the right when iconPosition is right', () => {
    render(
      <Input icon={Search} iconPosition="right" aria-label="input-field" />,
    );
    const iconContainer = screen
      .getByRole('textbox', { name: 'input-field' })
      .parentElement?.querySelector('span');
    expect(iconContainer).toBeInTheDocument();
  });

  it('removes left padding when no icon is passed', () => {
    render(<Input aria-label="input-field" />);
    const input = screen.getByRole('textbox', { name: 'input-field' });
    expect(input.className.includes('pl-10')).toBe(false);
  });

  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(
        <Input size={size} aria-label="input-field" />,
      );
      const input = screen.getByRole('textbox', { name: 'input-field' });

      expect(input).toBeInTheDocument();
      expect(input).toHaveClass(inputSizeClasses[size]);

      unmount();
    });
  });
});
