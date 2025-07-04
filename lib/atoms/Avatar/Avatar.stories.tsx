import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeProvider, ThemeToggle } from '../../theme';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'atoms/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    name: { control: 'text' },
    alt: { control: 'text' },
    className: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'User avatar',
    size: 'sm',
  },
};

export const ImageMd: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'User avatar',
  },
};

export const ImageLg: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'User avatar',
    size: 'lg',
  },
};

export const ImageMdWithBorder: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'User avatar',
    border: 'border-1 border-black-500',
  },
};

export const SingleNameInitialMd: Story = {
  args: {
    name: 'Cher',
    size: 'md',
  },
};

export const InitialsSm: Story = {
  args: {
    name: 'John Smith',
    size: 'sm',
  },
};

export const InitialsMd: Story = {
  args: {
    name: 'Jane Doe',
  },
};

export const InitialsLg: Story = {
  args: {
    name: 'Alice Wonderland',
    size: 'lg',
  },
};

export const WithBorder: Story = {
  args: {
    name: 'Alice Wonderland',
    border: 'border-2 border-black-500',
  },
};

export const CustomStyleAvatar: Story = {
  args: {
    name: 'Custom Style',
    className: 'bg-purple-300 text-purple-900',
  },
};

export const DarkTheme: Story = {
  args: {
    name: 'Dark Mode',
    size: 'md',
  },
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <Avatar {...args} />
    </ThemeProvider>
  ),
  parameters: {
    globals: { theme: 'dark' },
  },
};

export const InteractiveThemeDemo: Story = {
  args: {
    name: 'Toggle Theme',
  },
  render: (args) => (
    <ThemeProvider defaultColorScheme="light">
      <div
        className="p-6 rounded border inline-flex flex-col items-center gap-4"
        style={{
          backgroundColor: 'var(--color-background-primary)',
          borderColor: 'var(--color-border-primary)',
        }}
      >
        <ThemeToggle />
        <Avatar {...args} />
      </div>
    </ThemeProvider>
  ),
};
