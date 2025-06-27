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
    intent: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'Intent/semantic style of the badge',
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
    intent: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    intent: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    intent: 'error',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    intent: 'info',
  },
};

export const CustomStyle: Story = {
  args: {
    children: 'Custom',
    className: 'px-3 bg-purple-100 text-purple-800 border border-purple-300',
  },
};

export const AdvancedCustomization: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">
          Gradient
        </Badge>
        <Badge className="bg-black text-white shadow-md">Dark</Badge>
        <Badge className="border-2 border-blue-500 bg-transparent text-blue-500 font-bold">
          Outline
        </Badge>
        <Badge className="bg-yellow-300 text-black border border-yellow-600 rounded-none">
          Sharp
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge
          size="sm"
          className="bg-indigo-100 text-indigo-800 uppercase tracking-wider"
        >
          Small Custom
        </Badge>
        <Badge
          size="lg"
          className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full shadow-lg"
        >
          Large Custom
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge className="animate-pulse bg-red-100 text-red-800">
          Animated
        </Badge>
        <Badge className="transform hover:scale-110 transition-transform bg-blue-100 text-blue-800 cursor-pointer">
          Hoverable
        </Badge>
      </div>
    </div>
  ),
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

export const AllIntents = {
  render: () => (
    <div className="space-x-2">
      <Badge intent="default">Default</Badge>
      <Badge intent="info">Info</Badge>
      <Badge intent="success">Success</Badge>
      <Badge intent="warning">Warning</Badge>
      <Badge intent="error">Error</Badge>
    </div>
  ),
} satisfies StoryObj<typeof meta>;

export const AllSizes = {
  render: () => (
    <div className="space-x-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
} satisfies StoryObj<typeof meta>;
