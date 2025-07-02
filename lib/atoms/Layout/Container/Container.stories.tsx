import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Atoms/Layout/Container',
  component: Container,
  args: {
    size: 'lg',
    padded: true,
    center: true,
    children: <div className="bg-yellow-100 p-4">Inside Container</div>,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'],
    },
    padded: { control: 'boolean' },
    center: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(
        (s) => (
          <Container key={s} size={s} className="bg-yellow-50 py-2 text-center">
            {s}
          </Container>
        ),
      )}
    </div>
  ),
  parameters: { controls: { hideNoControlsWarning: true } },
};
