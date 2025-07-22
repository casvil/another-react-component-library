import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { Username } from './Username';

const meta: Meta<typeof Username> = {
  title: 'atoms/Username',
  component: Username,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'bold', 'muted'],
    },
    truncate: {
      control: 'boolean',
    },
    maxLength: {
      control: 'number',
    },
  },
  args: {
    children: 'johndoe',
    size: 'md',
    variant: 'default',
    truncate: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bold: Story = {
  args: {
    variant: 'bold',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const WithMaxLength: Story = {
  args: {
    children: 'verylongusername123',
    maxLength: 10,
  },
};

export const WithTruncate: Story = {
  args: {
    children: 'This is a very long username that should be truncated with CSS',
    truncate: true,
  },
  decorators: [
    (Story) => (
      <div className="w-32 border border-gray-200 p-2">
        <div className="text-xs text-gray-500 mb-1">Container width: 128px</div>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Username variant="default">johndoe</Username>
      <Username variant="bold">johndoe</Username>
      <Username variant="muted">johndoe</Username>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Username size="sm">johndoe</Username>
      <Username size="md">johndoe</Username>
      <Username size="lg">johndoe</Username>
    </div>
  ),
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <Username {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Username in dark theme context.',
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
        story: 'Interactive demo for toggling light/dark theme with Username.',
      },
    },
  },
};
