import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageCircleWarning, User } from 'lucide-react';

import { InputField } from './InputField';
import { Icon } from '../../atoms/Icon/Icon';

const meta = {
  title: 'molecules/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: "We'll never share your email.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<MessageCircleWarning />} size="sm" />,
    iconPosition: 'left',
    error: 'This field is required',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: 'right',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
