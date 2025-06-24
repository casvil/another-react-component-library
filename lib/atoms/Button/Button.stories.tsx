import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, ArrowLeft } from 'lucide-react';

import { Button, ButtonProps } from './Button';

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Next Step',
    variant: 'primary',
    size: 'md',
    icon: ArrowRight,
    iconPosition: 'right',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Back',
    variant: 'secondary',
    size: 'md',
    icon: ArrowLeft,
    iconPosition: 'left',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const AllSizes = {
  render: () => (
    <div className="space-x-2">
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
    </div>
  ),
} satisfies StoryObj<ButtonProps>;
