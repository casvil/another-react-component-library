import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spacer, SpacerProps } from './Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Atoms/Layout/Spacer',
  component: Spacer,
  args: {
    size: 'lg',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['0', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    grow: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className="bg-gray-50 p-4">
      <div className="bg-blue-200 p-2">Above</div>
      <Spacer {...(args as SpacerProps)} />
      <div className="bg-blue-200 p-2">Below</div>
    </div>
  ),
};

export const GrowInFlex: Story = {
  render: () => (
    <div className="flex space-x-2 bg-gray-100 p-2">
      <div className="bg-gray-300 p-2">A</div>
      <Spacer grow />
      <div className="bg-gray-300 p-2">B</div>
    </div>
  ),
  parameters: { controls: { hideNoControlsWarning: true } },
};
