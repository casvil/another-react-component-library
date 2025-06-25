import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mail } from 'lucide-react';

import { FormField } from './FormField';

describe('FormField', () => {
  it('renders label and input correctly', () => {
    render(<FormField label="Email Address" placeholder="Enter email" />);

    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  it('links label to input with proper htmlFor/id relationship', () => {
    render(
      <FormField
        id="email-field"
        label="Email Address"
        placeholder="Enter email"
      />,
    );

    const input = screen.getByLabelText('Email Address');
    const label = screen.getByText('Email Address');

    expect(input).toHaveAttribute('id', 'email-field');
    expect(label).toHaveAttribute('for', 'email-field');
  });

  it('generates stable id when none provided', () => {
    const { rerender } = render(<FormField label="Test Field" />);

    const firstInput = screen.getByLabelText('Test Field');
    const firstId = firstInput.getAttribute('id');

    rerender(<FormField label="Test Field" />);

    const secondInput = screen.getByLabelText('Test Field');
    const secondId = secondInput.getAttribute('id');

    expect(firstId).toBe(secondId);
    expect(firstId).toBeTruthy();
  });

  it('renders tooltip when provided', async () => {
    render(
      <FormField
        label="Password"
        tooltip="Must be 8+ characters"
        placeholder="Enter password"
      />,
    );

    // Tooltip should not be visible initially
    expect(screen.queryByText('Must be 8+ characters')).not.toBeInTheDocument();

    // Help icon should be present
    const helpIcon = screen.getByLabelText('Help: Must be 8+ characters');
    expect(helpIcon).toBeInTheDocument();

    // Hover over help icon to show tooltip
    fireEvent.mouseEnter(helpIcon);

    // Wait for tooltip to appear
    await waitFor(() => {
      expect(screen.getByText('Must be 8+ characters')).toBeInTheDocument();
    });
  });

  it('does not render help icon when no tooltip provided', () => {
    render(<FormField label="Email" placeholder="Enter email" />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('supports all tooltip positions', async () => {
    const positions = ['top', 'bottom', 'left', 'right'] as const;

    for (const position of positions) {
      const { unmount } = render(
        <FormField
          label="Test Field"
          tooltip="Test tooltip"
          tooltipPosition={position}
        />,
      );

      const helpIcon = screen.getByLabelText('Help: Test tooltip');
      fireEvent.mouseEnter(helpIcon);

      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
      });

      unmount();
    }
  });

  it('supports custom tooltip delay', async () => {
    const customDelay = 500;
    render(
      <FormField
        label="Test Field"
        tooltip="Test tooltip"
        tooltipDelay={customDelay}
      />,
    );

    const helpIcon = screen.getByLabelText('Help: Test tooltip');
    fireEvent.mouseEnter(helpIcon);

    // Tooltip should not appear immediately
    expect(screen.queryByText('Test tooltip')).not.toBeInTheDocument();

    // Wait for custom delay and tooltip should appear
    await waitFor(
      () => {
        expect(screen.getByText('Test tooltip')).toBeInTheDocument();
      },
      { timeout: customDelay + 100 },
    );
  });

  it('passes through all input props correctly', () => {
    const handleChange = vi.fn();

    render(
      <FormField
        label="Test Input"
        type="email"
        placeholder="test@example.com"
        required
        disabled
        value="test value"
        onChange={handleChange}
        icon={Mail}
      />,
    );

    const input = screen.getByLabelText('Test Input');

    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('placeholder', 'test@example.com');
    expect(input).toHaveAttribute('required');
    expect(input).toBeDisabled();
    expect(input).toHaveValue('test value');
  });

  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(
        <FormField
          label="Test Field"
          size={size}
          data-testid={`field-${size}`}
        />,
      );

      const input = screen.getByTestId(`field-${size}`);
      expect(input).toBeInTheDocument();

      unmount();
    });
  });

  it('applies custom styling classes correctly', () => {
    const { container } = render(
      <FormField
        label="Styled Field"
        labelClassName="custom-label"
        tooltipClassName="custom-tooltip"
        wrapperClassName="custom-wrapper"
        className="custom-input"
        tooltip="Help text"
      />,
    );

    const label = screen.getByText('Styled Field');
    const input = screen.getByLabelText('Styled Field');
    // Get the FormField wrapper - it's the first div child of the container
    const wrapper = container.firstElementChild;

    expect(label).toHaveClass('custom-label');
    expect(wrapper).toHaveClass('custom-wrapper');
    expect(input).toHaveClass('custom-input');
  });

  it('sets proper ARIA attributes for accessibility', () => {
    render(
      <FormField label="Email" tooltip="Enter your email address" required />,
    );

    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('required');

    // aria-describedby should reference tooltip id when tooltip exists
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    expect(describedBy).toContain('tooltip');
  });

  it('handles controlled input correctly', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <FormField
        label="Controlled Input"
        value="initial value"
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText('Controlled Input');
    expect(input).toHaveValue('initial value');

    await user.clear(input);
    await user.type(input, 'new value');

    expect(handleChange).toHaveBeenCalled();
  });

  it('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<FormField ref={ref} label="Ref Test" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current).toBe(screen.getByLabelText('Ref Test'));
  });

  it('handles icon integration correctly', () => {
    render(<FormField label="Email Field" icon={Mail} iconPosition="left" />);

    // Icon should be present in the input field
    const container = screen.getByLabelText('Email Field').closest('div');
    expect(container).toBeInTheDocument();

    // Input should have proper padding for icon
    const input = screen.getByLabelText('Email Field');
    expect(input).toHaveClass('pl-10'); // Left padding for left icon
  });

  it('maintains consistent component behavior across re-renders', () => {
    const { rerender } = render(
      <FormField
        label="Consistent Field"
        tooltip="Original tooltip"
        value="original"
      />,
    );

    const originalInput = screen.getByLabelText('Consistent Field');
    const originalId = originalInput.getAttribute('id');

    rerender(
      <FormField
        label="Consistent Field"
        tooltip="Updated tooltip"
        value="updated"
      />,
    );

    const updatedInput = screen.getByLabelText('Consistent Field');
    const updatedId = updatedInput.getAttribute('id');

    // ID should remain consistent
    expect(originalId).toBe(updatedId);

    // Value should update
    expect(updatedInput).toHaveValue('updated');
  });
});
