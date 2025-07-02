import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spacer } from './Spacer';

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

export const Playground: Story = {};

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
