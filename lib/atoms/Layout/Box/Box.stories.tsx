import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Atoms/Layout/Box',
  component: Box,
  args: {
    p: 'md',
    m: '0',
    w: 'auto',
    rounded: true,
    shadow: true,
    children: 'Hello Box',
  },
  argTypes: {
    p: {
      control: 'select',
      options: ['0', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    m: {
      control: 'select',
      options: ['0', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    w: { control: 'text' },
    h: { control: 'text' },
    rounded: { control: 'boolean' },
    shadow: { control: 'boolean' },
    children: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {}; 