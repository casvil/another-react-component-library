import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBox } from './SearchBox';

const meta = {
  title: 'molecules/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Search…',
  },
  argTypes: {
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Type to search…',
  },
};

export const IconRight: Story = {
  args: {
    iconPosition: 'right',
  },
};

export const CustomStyles: Story = {
  args: {
    className: 'border-blue-500 focus:ring-blue-500',
    inputClassName: 'bg-gray-50',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');
    return (
      <SearchBox
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Controlled search…"
      />
    );
  },
}; 