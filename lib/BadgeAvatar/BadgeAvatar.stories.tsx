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
    avatarProps: { name: 'Alice Johnson' },
  },
};

export const MediumAvatar: Story = {
  args: {
    avatarProps: { name: 'Bob Smith' },
  },
};

export const LargeAvatar: Story = {
  args: {
    avatarProps: { name: 'Carol Lee' },
    textClassName: 'text-3xl',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    avatarProps: { name: 'Alice Johnson' },
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    avatarProps: { name: 'Bob Smith' },
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    avatarProps: { name: 'Carol Lee' },
    textClassName: 'text-3xl',
  },
};
