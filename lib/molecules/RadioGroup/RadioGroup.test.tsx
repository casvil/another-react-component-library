import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioGroup } from './RadioGroup';

const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

describe('RadioGroup', () => {
  it('renders all options', () => {
    render(<RadioGroup options={defaultOptions} />);

    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<RadioGroup label="Choose an option" options={defaultOptions} />);

    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  it('handles controlled usage', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioGroup
        options={defaultOptions}
        value="option1"
        onChange={onChange}
      />,
    );

    const option2 = screen.getByLabelText('Option 2');
    await user.click(option2);

    expect(onChange).toHaveBeenCalledWith('option2');
  });

  it('handles uncontrolled usage', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioGroup
        options={defaultOptions}
        defaultValue="option1"
        onChange={onChange}
      />,
    );

    const option2 = screen.getByLabelText('Option 2');
    await user.click(option2);

    expect(onChange).toHaveBeenCalledWith('option2');
  });

  it('supports horizontal layout', () => {
    render(<RadioGroup options={defaultOptions} direction="horizontal" />);

    const container = screen.getByRole('radiogroup');
    const optionsContainer = container.querySelector('div');

    expect(optionsContainer).toHaveClass('flex-row');
  });

  it('supports vertical layout (default)', () => {
    render(<RadioGroup options={defaultOptions} />);

    const container = screen.getByRole('radiogroup');
    const optionsContainer = container.querySelector('div');

    expect(optionsContainer).toHaveClass('flex-col');
  });

  it('handles disabled options', () => {
    const optionsWithDisabled = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2', disabled: true },
      { label: 'Option 3', value: 'option3' },
    ];

    render(<RadioGroup options={optionsWithDisabled} />);

    const disabledOption = screen.getByLabelText('Option 2');
    expect(disabledOption).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<RadioGroup options={defaultOptions} className="custom-class" />);

    const container = screen.getByRole('radiogroup');
    expect(container).toHaveClass('custom-class');
  });

  it('applies custom labelClassName', () => {
    render(
      <RadioGroup
        label="Test Label"
        options={defaultOptions}
        labelClassName="custom-label-class"
      />,
    );

    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('custom-label-class');
  });

  it('passes radioProps to individual radio buttons', () => {
    render(
      <RadioGroup
        options={defaultOptions}
        radioProps={{
          size: 'lg',
          wrapperClassName: 'custom-wrapper',
        }}
      />,
    );

    const radioButtons = screen.getAllByRole('radio');
    radioButtons.forEach((radio) => {
      // Find the wrapper div or label associated with the radio input
      const wrapper = radio.closest('div');
      expect(wrapper).toHaveClass('custom-wrapper');
    });
  });

  it('generates stable IDs for accessibility', () => {
    render(
      <RadioGroup
        label="Test Label"
        options={defaultOptions}
        name="test-group"
      />,
    );

    const container = screen.getByRole('radiogroup');
    const label = screen.getByText('Test Label');

    expect(container).toHaveAttribute('aria-labelledby', label.id);
  });

  it('only allows single selection', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<RadioGroup options={defaultOptions} onChange={onChange} />);

    const option1 = screen.getByLabelText('Option 1');
    const option2 = screen.getByLabelText('Option 2');

    await user.click(option1);
    expect(onChange).toHaveBeenCalledWith('option1');

    await user.click(option2);
    expect(onChange).toHaveBeenCalledWith('option2');

    // Should not call onChange when clicking the same option again
    onChange.mockClear();
    await user.click(option2);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('handles empty options array', () => {
    render(<RadioGroup options={[]} />);

    const container = screen.getByRole('radiogroup');
    expect(container).toBeInTheDocument();

    const radioButtons = screen.queryAllByRole('radio');
    expect(radioButtons).toHaveLength(0);
  });
});
