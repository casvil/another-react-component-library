import { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Select } from './Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

describe('Select', () => {
  it('renders without crashing and shows label if provided', () => {
    render(<Select label="Fruits" options={options} />);
    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders placeholder when no value selected', () => {
    render(<Select options={options} placeholder="Pick a fruit" />);
    expect(screen.getByPlaceholderText('Pick a fruit')).toBeInTheDocument();
  });

  it('shows defaultValue label on render', () => {
    render(<Select options={options} defaultValue="banana" />);
    expect(screen.getByDisplayValue('Banana')).toBeInTheDocument();
  });

  it('opens dropdown on click and closes on outside click', async () => {
    const user = userEvent.setup();
    render(<Select options={options} />);

    const input = screen.getByRole('textbox');
    // Dropdown closed initially
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    // Open dropdown
    await user.click(input);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Click outside closes dropdown
    await user.click(document.body);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('calls onChange with selected value and closes dropdown', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Select options={options} onChange={onChange} />);

    const input = screen.getByRole('textbox');
    await user.click(input);

    const option = screen.getByRole('option', { name: 'Cherry' });
    await user.click(option);

    expect(onChange).toHaveBeenCalledWith('cherry');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('Cherry')).toBeInTheDocument();
  });

  it('controlled: shows value and calls onChange but does not update internally', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const ControlledSelect = () => {
      const [value, setValue] = useState('apple');
      return (
        <Select
          options={options}
          value={value}
          onChange={(val) => {
            onChange(val);
            setValue(val);
          }}
        />
      );
    };

    render(<ControlledSelect />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Apple');

    await user.click(input);
    const option = screen.getByRole('option', { name: 'Banana' });
    await user.click(option);

    expect(onChange).toHaveBeenCalledWith('banana');
    expect(input).toHaveValue('Banana');
  });

  it('toggles dropdown with keyboard (Enter and Space)', async () => {
    const user = userEvent.setup();
    render(<Select options={options} />);

    const wrapper = screen.getByRole('button');

    // Press Enter to open
    wrapper.focus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Press Space to close
    await user.keyboard(' ');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('selects option via keyboard', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Select options={options} onChange={onChange} />);

    const wrapper = screen.getByRole('button');
    wrapper.focus();

    // Open dropdown
    await user.keyboard('{Enter}');

    const option = screen.getByRole('option', { name: 'Banana' });
    option.focus();

    // Select with Space
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalledWith('banana');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('does not open dropdown when disabled', async () => {
    const user = userEvent.setup();
    render(<Select options={options} disabled />);

    const wrapper = screen.getByRole('button');
    await user.click(wrapper);

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('applies disabled styles and attributes', () => {
    render(<Select options={options} disabled />);
    const wrapper = screen.getByRole('button');

    expect(wrapper).toHaveClass('opacity-60 cursor-not-allowed');
    expect(wrapper).toHaveAttribute('aria-expanded', 'false');

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('uses the provided id for accessibility', () => {
    render(<Select id="custom-id" label="Fruit" options={options} />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Fruit');

    expect(input).toHaveAttribute('id', 'custom-id');
    expect(label).toHaveAttribute('for', 'custom-id');
  });

  it('updates selectedLabel correctly in controlled usage', async () => {
    const user = userEvent.setup();
    const Controlled = () => {
      const [value, setValue] = React.useState('apple');
      return (
        <Select
          options={options}
          value={value}
          onChange={setValue}
          label="Controlled Select"
        />
      );
    };
    render(<Controlled />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Apple');
    await user.click(input);
    const option = screen.getByRole('option', { name: 'Banana' });
    await user.click(option);
    expect(input).toHaveValue('Banana');
  });

  it('updates selectedLabel correctly in uncontrolled usage', async () => {
    const user = userEvent.setup();
    render(
      <Select
        options={options}
        defaultValue="banana"
        label="Uncontrolled Select"
      />,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Banana');
    await user.click(input);
    const option = screen.getByRole('option', { name: 'Apple' });
    await user.click(option);
    expect(input).toHaveValue('Apple');
  });
});
