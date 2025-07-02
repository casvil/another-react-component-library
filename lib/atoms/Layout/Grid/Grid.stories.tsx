import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Atoms/Layout/Grid',
  component: Grid,
  args: {
    cols: 3,
    gap: 'md',
    children: Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="bg-teal-200 p-2 text-center"
      >{`Item ${i + 1}`}</div>
    )),
  },
  argTypes: {
    cols: { control: { type: 'number', min: 1, max: 12, step: 1 } },
    gap: {
      control: 'select',
      options: ['0', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const TwoColumn: Story = {
  args: {
    cols: 2,
  },
};

export const Responsive: Story = {
  render: () => (
    <div className="space-y-4">
      <Grid cols={1} gap="sm" className="sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-teal-300 p-2 text-center">
            {i + 1}
          </div>
        ))}
      </Grid>
    </div>
  ),
  parameters: { controls: { hideNoControlsWarning: true } },
};
