import type { Meta, StoryObj } from '@storybook/react-vite';
import { X } from 'lucide-react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { IconButton, IconButtonProps } from './IconButton';

const meta = {
  title: 'atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: X,
    'aria-label': 'Primary Icon Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    icon: X,
    'aria-label': 'Secondary Icon Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Tertiary: Story = {
  args: {
    icon: X,
    'aria-label': 'Tertiary Icon Button',
    variant: 'tertiary',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    icon: X,
    'aria-label': 'Disabled Icon Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const AllSizes = {
  render: () => (
    <div className="space-x-2">
      <IconButton icon={X} aria-label="Small" size="sm" />
      <IconButton icon={X} aria-label="Medium" size="md" />
      <IconButton icon={X} aria-label="Large" size="lg" />
    </div>
  ),
} satisfies StoryObj<IconButtonProps>;

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <IconButton {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'IconButton in dark theme context.',
      },
    },
    globals: {
      theme: 'dark',
    },
  },
};

export const InteractiveThemeDemo: Story = {
  render: () => <ThemeDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo for toggling light/dark theme with IconButton.',
      },
    },
  },
};
