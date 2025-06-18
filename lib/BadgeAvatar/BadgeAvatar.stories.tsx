import type { Meta, StoryObj } from '@storybook/react-vite';
import { BadgeAvatar } from './BadgeAvatar';

const meta = {
  title: 'molecules/BadgeAvatar',
  component: BadgeAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'User Name',
  },
} satisfies Meta<typeof BadgeAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallAvatar: Story = {
  args: {
    avatarProps: { size: 'sm', name: 'Alice Johnson' },
  },
};

export const MediumAvatar: Story = {
  args: {
    avatarProps: { size: 'md', name: 'Bob Smith' },
  },
};

export const LargeAvatar: Story = {
  args: {
    avatarProps: { size: 'lg', name: 'Carol Lee' },
    textClassName: 'text-3xl',
  },
};
