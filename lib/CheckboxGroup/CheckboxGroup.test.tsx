import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CheckboxGroup } from './CheckboxGroup';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3', disabled: true },
];

describe('CheckboxGroup', () => {
  it('renders with label and options', () => {
    render(<CheckboxGroup label="Group Label" options={options} />);
    expect(screen.getByText('Group Label')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
  });

  it('supports uncontrolled usage', async () => {
    const user = userEvent.setup();
    render(<CheckboxGroup options={options} defaultValue={['1']} />);
    const cb1 = screen.getByLabelText('Option 1') as HTMLInputElement;
    const cb2 = screen.getByLabelText('Option 2') as HTMLInputElement;
    expect(cb1.checked).toBe(true);
    expect(cb2.checked).toBe(false);
    await user.click(cb2);
    expect(cb1.checked).toBe(true);
    expect(cb2.checked).toBe(true);
    await user.click(cb1);
    expect(cb1.checked).toBe(false);
    expect(cb2.checked).toBe(true);
  });

  it('supports controlled usage', async () => {
    const user = userEvent.setup();
    const Controlled = () => {
      const [value, setValue] = React.useState(['1']);
      return (
        <CheckboxGroup options={options} value={value} onChange={setValue} />
      );
    };
    render(<Controlled />);
    const cb1 = screen.getByLabelText('Option 1') as HTMLInputElement;
    const cb2 = screen.getByLabelText('Option 2') as HTMLInputElement;
    expect(cb1.checked).toBe(true);
    expect(cb2.checked).toBe(false);
    await user.click(cb2);
    expect(cb1.checked).toBe(true);
    expect(cb2.checked).toBe(true);
    await user.click(cb1);
    expect(cb1.checked).toBe(false);
    expect(cb2.checked).toBe(true);
  });

  it('calls onChange with correct values', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<CheckboxGroup options={options} onChange={handleChange} />);
    const cb1 = screen.getByLabelText('Option 1');
    await user.click(cb1);
    expect(handleChange).toHaveBeenCalledWith(['1']);
  });

  it('applies custom className and labelClassName', () => {
    render(
      <CheckboxGroup
        label="Styled Group"
        options={options}
        className="custom-group"
        labelClassName="custom-label"
      />,
    );
    expect(screen.getByText('Styled Group')).toHaveClass('custom-label');
    expect(screen.getByRole('group')).toHaveClass('custom-group');
  });

  it('renders vertical and horizontal directions', () => {
    const { rerender } = render(
      <CheckboxGroup label="Vertical" options={options} direction="vertical" />,
    );
    const group = screen.getByRole('group');
    const checkboxContainer = group.querySelector('.flex');
    expect(checkboxContainer).toHaveClass('flex-col');
    rerender(
      <CheckboxGroup
        label="Horizontal"
        options={options}
        direction="horizontal"
      />,
    );
    const checkboxContainer2 = screen.getByRole('group').querySelector('.flex');
    expect(checkboxContainer2).toHaveClass('flex-row');
  });

  it('disables individual options', () => {
    render(<CheckboxGroup options={options} />);
    expect(screen.getByLabelText('Option 3')).toBeDisabled();
  });

  it('is aria and a11y compliant', () => {
    render(<CheckboxGroup label="A11y Group" options={options} />);
    const group = screen.getByRole('group');
    expect(group).toBeInTheDocument();
    expect(screen.getByText('A11y Group')).toBeInTheDocument();
  });
});
