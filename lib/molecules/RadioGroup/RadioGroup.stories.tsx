import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from './RadioGroup';

const meta = {
  title: 'molecules/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Choose your favorite color',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Yellow', value: 'yellow' },
    ],
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction for radio options',
    },
    value: {
      control: 'select',
      options: ['red', 'blue', 'green', 'yellow'],
      description: 'Controlled value (selected option)',
    },
    defaultValue: {
      control: 'select',
      options: ['red', 'blue', 'green', 'yellow'],
      description: 'Default value for uncontrolled usage',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when selection changes',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'blue',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return <RadioGroup {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: 'green',
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green', disabled: true },
      { label: 'Yellow', value: 'yellow' },
    ],
  },
};

export const CustomStyling: Story = {
  args: {
    className: 'p-4 border border-gray-300 rounded-lg',
    labelClassName: 'text-lg font-bold text-blue-600',
    radioProps: {
      size: 'lg',
      wrapperClassName: 'hover:bg-gray-50 p-2 rounded',
    },
  },
};

export const SizeVariants: Story = {
  args: {
    radioProps: {
      size: 'sm',
    },
  },
};

export const LargeSize: Story = {
  args: {
    radioProps: {
      size: 'lg',
    },
  },
};

export const NoLabel: Story = {
  args: {
    label: undefined,
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Select your preferred programming language',
    options: [
      { label: 'JavaScript', value: 'js' },
      { label: 'TypeScript', value: 'ts' },
      { label: 'Python', value: 'python' },
      { label: 'Java', value: 'java' },
      { label: 'C++', value: 'cpp' },
      { label: 'Rust', value: 'rust' },
      { label: 'Go', value: 'go' },
      { label: 'Swift', value: 'swift' },
    ],
    direction: 'horizontal',
  },
};
