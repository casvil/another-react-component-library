import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Search } from 'lucide-react';

import { InputField } from './InputField';
import { inputSizeClasses } from '../../@types/classes';

describe('InputField', () => {
  it('renders without crashing', () => {
    render(<InputField label="Test" />);
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });

  it('renders label, input, and helperText', () => {
    render(
      <InputField
        label="Email"
        placeholder="you@example.com"
        helperText="Helper text"
        data-testid="inputfield"
      />,
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument();
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('renders error message and aria attributes', () => {
    render(<InputField label="Email" error="Required" />);
    const input = screen.getByLabelText('Email');
    expect(screen.getByText('Required')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby');
  });

  it('does not render helperText if error is present', () => {
    render(
      <InputField
        label="Email"
        error="Error"
        helperText="Helper text"
        data-testid="inputfield"
      />,
    );

    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('accepts and forwards className to input', () => {
    render(<InputField label="Email" className="w-64" />);
    expect(screen.getByLabelText('Email')).toHaveClass('w-64');
  });

  it('supports disabled input', () => {
    render(<InputField label="Email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });

  it('renders icon if provided', () => {
    render(<InputField label="Search" icon={Search} placeholder="Search..." />);
    // The icon should be rendered inside the input
    const input = screen.getByLabelText('Search');
    expect(input.parentElement?.querySelector('svg')).toBeInTheDocument();
  });

  it('removes input padding when no icon is provided', () => {
    render(<InputField label="Search" placeholder="Type..." />);
    const input = screen.getByLabelText('Search');
    expect(input.className.includes('pl-10')).toBe(false);
  });

  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<InputField label="Test" size={size} />);
      const input = screen.getByLabelText('Test');

      expect(input).toBeInTheDocument();
      expect(input).toHaveClass(inputSizeClasses[size]);

      unmount();
    });
  });
});
