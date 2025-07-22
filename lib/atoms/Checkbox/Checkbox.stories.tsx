import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

const meta = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Accept terms',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Indeterminate: Story = {
  render: (args) => (
    <Checkbox
      {...args}
      ref={(el) => {
        if (el) el.indeterminate = true;
      }}
    />
  ),
  args: {
    checked: false,
    indeterminate: true,
    label: 'Partially selected',
  },
};

export const WithCustomStyles: Story = {
  args: {
    label: 'Custom styled checkbox',
    className: 'text-green-600 border-green-600',
    labelClassName: 'text-green-700 font-semibold',
    wrapperClassName: 'bg-green-50 px-4 py-2 rounded',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small checkbox',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium checkbox',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large checkbox',
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <Checkbox {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox in dark theme context.',
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
        story: 'Interactive demo for toggling light/dark theme with Checkbox.',
      },
    },
  },
};
