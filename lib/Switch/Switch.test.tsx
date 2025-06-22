import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from './Switch';

describe('Switch', () => {
  it('renders without crashing', () => {
    render(<Switch />);
    const switchInput = screen.getByRole('switch');
    expect(switchInput).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Switch label="Toggle notifications" />);
    expect(screen.getByText('Toggle notifications')).toBeInTheDocument();
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <Switch
        label="Notifications"
        description="Receive email notifications for updates"
      />,
    );
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(
      screen.getByText('Receive email notifications for updates'),
    ).toBeInTheDocument();
  });

  it('applies custom className to wrapper', () => {
    const { container } = render(<Switch wrapperClassName="custom-wrapper" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('custom-wrapper');
  });

  it('applies custom className to input', () => {
    render(<Switch className="custom-input" />);
    const input = screen.getByRole('switch');
    expect(input).toHaveClass('custom-input');
  });

  it('applies custom className to label', () => {
    render(<Switch label="Test" labelClassName="custom-label" />);
    const label = screen.getByText('Test');
    expect(label).toHaveClass('custom-label');
  });

  it('handles checked state', () => {
    render(<Switch checked />);
    const switchInput = screen.getByRole('switch');
    expect(switchInput).toBeChecked();
  });

  it('handles disabled state', () => {
    render(<Switch disabled />);
    const switchInput = screen.getByRole('switch');
    expect(switchInput).toBeDisabled();
  });

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch onChange={handleChange} />);

    const switchInput = screen.getByRole('switch');
    await user.click(switchInput);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch disabled onChange={handleChange} />);

    const switchInput = screen.getByRole('switch');
    await user.click(switchInput);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Switch ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('generates stable id when none provided', () => {
    render(<Switch label="Test" />);
    const input = screen.getByRole('switch');
    const label = screen.getByText('Test');

    expect(input.id).toBeDefined();
    expect(label.getAttribute('for')).toBe(input.id);
  });

  it('uses provided id', () => {
    render(<Switch id="custom-id" label="Test" />);
    const input = screen.getByRole('switch');
    const label = screen.getByText('Test');

    expect(input.id).toBe('custom-id');
    expect(label.getAttribute('for')).toBe('custom-id');
  });

  it('associates description with input', () => {
    render(
      <Switch id="test-switch" label="Test" description="Test description" />,
    );
    const input = screen.getByRole('switch');
    const description = screen.getByText('Test description');

    expect(input.getAttribute('aria-describedby')).toBe(
      'test-switch-description',
    );
    expect(description.id).toBe('test-switch-description');
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Switch size="sm" />);
    let track = screen.getByRole('switch').nextElementSibling;
    expect(track).toHaveClass('w-9', 'h-5');

    rerender(<Switch size="md" />);
    track = screen.getByRole('switch').nextElementSibling;
    expect(track).toHaveClass('w-11', 'h-6');

    rerender(<Switch size="lg" />);
    track = screen.getByRole('switch').nextElementSibling;
    expect(track).toHaveClass('w-14', 'h-7');
  });

  it('applies correct label sizes', () => {
    const { rerender } = render(<Switch size="sm" label="Test" />);
    let label = screen.getByText('Test');
    expect(label).toHaveClass('text-sm');

    rerender(<Switch size="md" label="Test" />);
    label = screen.getByText('Test');
    expect(label).toHaveClass('text-base');

    rerender(<Switch size="lg" label="Test" />);
    label = screen.getByText('Test');
    expect(label).toHaveClass('text-lg');
  });

  it('applies correct description sizes', () => {
    const { rerender } = render(
      <Switch size="sm" description="Test description" />,
    );
    let description = screen.getByText('Test description');
    expect(description).toHaveClass('text-xs');

    rerender(<Switch size="md" description="Test description" />);
    description = screen.getByText('Test description');
    expect(description).toHaveClass('text-sm');

    rerender(<Switch size="lg" description="Test description" />);
    description = screen.getByText('Test description');
    expect(description).toHaveClass('text-base');
  });

  it('spreads additional props to input', () => {
    render(<Switch data-testid="custom-switch" aria-label="Custom switch" />);
    const input = screen.getByRole('switch');

    expect(input).toHaveAttribute('data-testid', 'custom-switch');
    expect(input).toHaveAttribute('aria-label', 'Custom switch');
  });
});
