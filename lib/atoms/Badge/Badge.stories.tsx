import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta = {
  title: 'atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'New',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'Visual style of the badge',
      defaultValue: 'default',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
      defaultValue: 'md',
    },
    className: {
      control: { type: 'text' },
      description: 'Custom Tailwind CSS classes',
    },
    children: {
      control: { type: 'text' },
      description: 'Content inside the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const CustomStyle: Story = {
  args: {
    children: 'Custom',
    className: 'px-3 bg-purple-100 text-purple-800 border border-purple-300',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const AllSizes = {
  render: () => (
    <div className="space-x-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
} satisfies StoryObj<typeof meta>;
