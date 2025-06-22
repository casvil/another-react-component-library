import type { Meta, StoryObj } from '@storybook/react-vite';

import { Image } from './Image';

const meta = {
  title: 'atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  args: {
    src: 'https://placehold.co/300x200',
    alt: 'Placeholder image',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomStyles: Story = {
  args: {
    className: 'rounded-se-xl border-4 border-indigo-500',
  },
};

export const SquareWithoutBorderRadius: Story = {
  args: {
    src: 'https://placehold.co/200x200',
    alt: 'Square placeholder',
    className: 'rounded-none border-4 border-indigo-500',
  },
};
