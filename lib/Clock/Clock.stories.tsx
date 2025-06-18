import type { Meta, StoryObj } from '@storybook/react';

import { Clock } from './Clock';

const meta = {
  title: 'molecules/Clock',
  component: Clock,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    format: {
      control: 'select',
      options: ['HH:mm:ss', 'HH:mm', 'mm:ss'],
    },
    bordered: { control: 'boolean' },
    className: { control: false },
  },
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    format: 'HH:mm:ss',
    bordered: false,
  },
};

export const Bordered: Story = {
  args: {
    format: 'HH:mm:ss',
    bordered: true,
  },
};

export const HoursAndMinutes: Story = {
  args: {
    format: 'HH:mm',
    bordered: false,
  },
};

export const MinutesAndSeconds: Story = {
  args: {
    format: 'mm:ss',
    bordered: false,
  },
};

export const CustomStyleDigital7Font = {
  render: (args) => (
    <Clock {...args} className="digital7 text-4xl border-3 px-3 py-0" />
  ),
  args: {
    time: new Date(),
    format: 'mm:ss',
    bordered: true,
  },
};
