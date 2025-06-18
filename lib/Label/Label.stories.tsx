import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta = {
  title: 'atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    htmlFor: 'input-id',
    children: 'Full Name',
  },
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'Matches the id of the related input element.',
    },
    children: {
      control: 'text',
      description: 'Text to display as the label.',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongLabel: Story = {
  args: {
    children:
      'Please enter your full legal name as it appears on your passport',
  },
};

export const WithCustomStyles: Story = {
  args: {
    children: 'With Custom Styles',
    className: 'text-red-600 font-bold uppercase tracking-wide',
  },
};
