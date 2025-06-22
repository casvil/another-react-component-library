import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Switch } from './Switch';

const meta = {
  title: 'molecules/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Toggle option',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Notifications enabled"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabelClassName: Story = {
  args: {
    label: 'Custom styled label',
    labelClassName: 'text-pink-600 font-bold',
  },
};

export const WithWrapperClassName: Story = {
  args: {
    label: 'Wrapper styled',
    wrapperClassName: 'bg-gray-100 p-4 rounded-md',
  },
};

export const WithCustomInputClassName: Story = {
  args: {
    label: 'Custom input class',
    className: 'peer',
  },
};

export const ControlledUncontrolledComparison: Story = {
  render: () => {
    const [controlled, setControlled] = useState(true);
    return (
      <div className="space-y-6">
        <div>
          <h4 className="font-medium">Controlled Switch</h4>
          <Switch
            label="Controlled"
            checked={controlled}
            onChange={(e) => setControlled(e.target.checked)}
          />
        </div>
        <div>
          <h4 className="font-medium">Uncontrolled Switch</h4>
          <Switch label="Uncontrolled" defaultChecked />
        </div>
      </div>
    );
  },
};

export const CustomStyles: Story = {
  args: {
    className: 'ring-2 ring-offset-2 ring-indigo-500',
    labelClassName: 'text-indigo-700 font-semibold',
    wrapperClassName: 'p-4 bg-indigo-50 rounded-lg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
    </div>
  ),
};
