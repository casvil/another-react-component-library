import { Meta, StoryObj } from '@storybook/react-vite';
import { Search, Send } from 'lucide-react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom Tailwind classes (e.g. w-full, w-1/2)',
    },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    'aria-invalid': { control: 'boolean', name: 'ariaInvalid' },
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Type something...',
    className: 'w-full',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HalfWidth: Story = {
  args: {
    className: 'w-1/2',
  },
};

export const CustomWidth: Story = {
  args: {
    className: 'w-60',
    placeholder: 'Custom width (240px)',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'Read-only value',
  },
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid input',
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Search...',
    icon: Search,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: 'Search...',
    icon: Send,
    iconPosition: 'right',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
};
