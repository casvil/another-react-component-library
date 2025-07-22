import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { CheckboxGroup } from './CheckboxGroup';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

const meta = {
  title: 'molecules/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Fruits',
    options,
    defaultValue: ['banana'],
  },
};

export const Controlled: Story = {
  args: { options },
  render: () => {
    const [value, setValue] = useState(['apple']);
    return (
      <CheckboxGroup
        label="Controlled Fruits"
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Horizontal Group',
    options,
    direction: 'horizontal',
  },
};

export const WithDisabled: Story = {
  args: {
    label: 'With Disabled Option',
    options: [
      ...options,
      { label: 'Watermelon', value: 'watermelon', disabled: true },
    ],
    defaultValue: ['cherry'],
  },
};

export const CustomStyles: Story = {
  args: {
    label: 'Styled Group',
    options,
    className: 'bg-gray-50 p-4 rounded-lg',
    labelClassName: 'text-indigo-700 font-bold',
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <CheckboxGroup {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup in dark theme context.',
      },
    },
    globals: {
      theme: 'dark',
    },
  },
};

export const InteractiveThemeDemo: Story = {
  render: () => <ThemeDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo for toggling light/dark theme with CheckboxGroup.',
      },
    },
  },
};
