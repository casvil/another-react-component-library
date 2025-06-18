import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Label } from './Label';
import { Input } from '../Input/Input';

describe('Label', () => {
  it('renders label with htmlFor attribute', () => {
    render(<Label htmlFor="input-1">Name</Label>);

    const label = screen.getByText('Name');

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'input-1');
  });

  it('renders nothing if no children', () => {
    const { container } = render(<Label htmlFor="input-1">{null}</Label>);
    expect(container).toBeEmptyDOMElement();
  });

  it('applies default Tailwind classes', () => {
    render(<Label htmlFor="input-2">Email</Label>);
    const label = screen.getByText('Email');
    expect(label).toHaveClass('text-sm', 'font-medium', 'text-gray-700');
  });

  it('appends custom className', () => {
    render(
      <Label htmlFor="input-3" className="text-red-600 font-bold">
        Email
      </Label>,
    );
    const label = screen.getByText('Email');
    expect(label).toHaveClass('text-red-600', 'font-bold');
  });

  it('supports other native props like id or data-testid', () => {
    render(
      <Label htmlFor="input-4" id="custom-label" data-testid="label">
        Address
      </Label>,
    );
    const label = screen.getByTestId('label');
    expect(label).toHaveAttribute('id', 'custom-label');
    expect(label).toHaveTextContent('Address');
  });

  it('connects label to input for accessibility', () => {
    render(
      <>
        <Label htmlFor="username">Username</Label>
        <Input id="username" />
      </>,
    );

    const input = screen.getByLabelText('Username');
    expect(input).toBeInTheDocument();
  });

  it('allows aria attributes for accessibility', () => {
    render(
      <Label htmlFor="email" aria-describedby="email-help">
        Email
      </Label>,
    );
    const label = screen.getByText('Email');
    expect(label).toHaveAttribute('aria-describedby', 'email-help');
  });
});
