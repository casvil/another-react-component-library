import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Atoms/Layout/Flex',
  component: Flex,
  args: {
    direction: 'row',
    align: 'center',
    justify: 'between',
    gap: 'md',
    wrap: 'wrap',
    children: [
      <div key="1" className="bg-pink-200 p-2">
        Item A
      </div>,
      <div key="2" className="bg-pink-300 p-2">
        Item B
      </div>,
    ],
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'col', 'col-reverse'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    wrap: { control: 'select', options: ['wrap', 'nowrap', 'wrap-reverse'] },
    gap: {
      control: 'select',
      options: ['0', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ColumnWrap: Story = {
  args: {
    direction: 'col',
    wrap: 'wrap',
    gap: 'sm',
  },
};

export const JustifyBetween: Story = {
  args: {
    justify: 'between',
  },
};

export const WrapReverse: Story = {
  args: {
    wrap: 'wrap-reverse',
    gap: 'lg',
    children: [
      <div key="1" className="bg-pink-200 p-2">
        1
      </div>,
      <div key="2" className="bg-pink-300 p-2">
        2
      </div>,
      <div key="3" className="bg-pink-400 p-2">
        3
      </div>,
      <div key="4" className="bg-pink-500 p-2">
        4
      </div>,
    ],
  },
};
