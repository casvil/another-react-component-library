import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { UserPreview } from './UserPreview';

const meta: Meta<typeof UserPreview> = {
  title: 'molecules/UserPreview',
  component: UserPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
    },
    showStatus: {
      control: 'boolean',
    },
    showStatusLabel: {
      control: 'boolean',
    },
    avatarSrc: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    usernameVariant: {
      control: 'select',
      options: ['default', 'bold', 'muted'],
    },
    truncateUsername: {
      control: 'boolean',
    },
    maxUsernameLength: {
      control: 'number',
    },
  },
  args: {
    name: 'John Doe',
    status: 'online',
    showStatus: true,
    showStatusLabel: false,
    size: 'md',
    layout: 'horizontal',
    usernameVariant: 'default',
    truncateUsername: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    avatarSrc:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
};

export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
};

export const WithStatusLabel: Story = {
  args: {
    showStatusLabel: true,
  },
};

export const NoStatus: Story = {
  args: {
    showStatus: false,
  },
};

export const BoldUsername: Story = {
  args: {
    usernameVariant: 'bold',
  },
};

export const MutedUsername: Story = {
  args: {
    usernameVariant: 'muted',
  },
};

export const TruncatedUsername: Story = {
  args: {
    name: 'verylongusernamethatshouldbecapped',
    maxUsernameLength: 12,
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

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <UserPreview name="John Doe" status="online" showStatusLabel />
      <UserPreview name="Jane Smith" status="away" showStatusLabel />
      <UserPreview name="Bob Johnson" status="busy" showStatusLabel />
      <UserPreview name="Alice Wilson" status="offline" showStatusLabel />
    </div>
  ),
};

export const LayoutComparison: Story = {
  render: () => (
    <div className="flex gap-8">
      <UserPreview
        name="John Doe"
        status="online"
        layout="horizontal"
        showStatusLabel
      />
      <UserPreview
        name="John Doe"
        status="online"
        layout="vertical"
        showStatusLabel
      />
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-8 bg-gray-50">
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Small</div>
        <UserPreview name="John" status="online" size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Medium</div>
        <UserPreview name="John Doe" status="online" size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Large</div>
        <UserPreview name="John Doe Smith" status="online" size="lg" />
      </div>
    </div>
  ),
};
