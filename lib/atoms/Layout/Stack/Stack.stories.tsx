import type { Meta, StoryObj } from '@storybook/react-vite';

import type { Spacing } from '../../../@types/classes';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Atoms/Layout/Stack',
  component: Stack,
  args: {
    direction: 'vertical',
    gap: 'md',
    align: 'start',
    justify: 'start',
    children: [
      <div key="1" className="bg-indigo-100 p-2">
        Item 1
      </div>,
      <div key="2" className="bg-indigo-200 p-2">
        Item 2
      </div>,
      <div key="3" className="bg-indigo-300 p-2">
        Item 3
      </div>,
    ],
  },
  argTypes: {
    direction: { control: 'radio', options: ['vertical', 'horizontal'] },
    gap: {
      control: 'select',
      options: ['0', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    gap: 'lg',
  },
};

export const CenterAligned: Story = {
  args: {
    align: 'center',
    justify: 'center',
  },
};

export const GapShowcase: Story = {
  render: () => (
    <div className="space-y-4">
      {(['0', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map((g) => (
        <Stack key={g} direction="horizontal" gap={g}>
          <div className="bg-indigo-100 p-2">gap-{g}</div>
          <div className="bg-indigo-100 p-2">gap-{g}</div>
        </Stack>
      ))}
    </div>
  ),
  parameters: { controls: { hideNoControlsWarning: true } },
};
