import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { ProgressBar } from './ProgressBar';
import { WithFullWidthRoot } from '../../../.storybook/decorators/WithFullWidthRoot';

const meta = {
  title: 'atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  args: {
    value: 50,
    label: 'Loading progress',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    label: { control: 'text' },
    className: { control: 'text' },
    barClassName: { control: 'text' },
    labelClassName: { control: 'text' },
  },
  decorators: [WithFullWidthRoot],
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullProgress: Story = {
  args: {
    value: 100,
    label: 'Complete',
  },
};

export const EmptyProgress: Story = {
  args: {
    value: 0,
    label: 'Not started',
  },
};

export const NoLabel: Story = {
  args: {
    value: 30,
    label: undefined,
  },
};

export const CustomColors: Story = {
  args: {
    value: 75,
    label: 'Custom styled',
    className: 'px-2 py-2 bg-gray-800 rounded-md',
    barClassName: 'bg-green-500',
    labelClassName: 'text-white font-semibold',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small progress bar',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium progress bar',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large progress bar',
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <ProgressBar {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ProgressBar in dark theme context.',
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
          'Interactive demo for toggling light/dark theme with ProgressBar.',
      },
    },
  },
};
