import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const meta = {
  title: 'molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Choose a fruit',
    options,
    placeholder: 'Select a fruit',
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'apple',
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('apple');
    return (
      <Select
        options={options}
        value={value}
        onChange={setValue}
        label="Controlled Select"
        placeholder="Pick a fruit"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'apple',
  },
};

export const WithCustomStyles: Story = {
  args: {
    className: 'p-6 bg-gray-100 rounded-xl',
    inputClassName: 'border-indigo-500 text-indigo-700',
    dropdownClassName: 'bg-indigo-50 border-indigo-200',
  },
};
