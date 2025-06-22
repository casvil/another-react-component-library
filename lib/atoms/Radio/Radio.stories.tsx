import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta = {
  title: 'atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Option A',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the radio input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the radio input',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled)',
    },
    name: {
      control: 'text',
      description: 'Group name for radio inputs',
    },
    value: {
      control: 'text',
      description: 'Value submitted when the radio is selected',
    },
    size: {
      control: 'text',
      description: 'Size of the radio input',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCustomNameAndValue: Story = {
  args: {
    name: 'favoriteColor',
    value: 'blue',
    label: 'Blue',
  },
};

export const NoLabel: Story = {
  args: {
    label: undefined,
    'aria-label': 'Radio without visible label',
  },
};

export const CustomStyled: Story = {
  args: {
    label: 'Custom',
    wrapperClassName: 'bg-yellow-100 p-2 rounded',
    labelClassName: 'text-purple-500',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small radio',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium radio',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large radio',
  },
};
