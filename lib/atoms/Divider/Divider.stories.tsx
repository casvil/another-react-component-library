import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { Divider } from './Divider';
import { Label } from '../Label/Label';

const meta = {
  title: 'atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    className: { control: 'text' },
  },
  args: {
    orientation: 'horizontal',
    className: 'w-full my-4',
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: ({ className, orientation }) => (
    <div className="flex items-center h-8">
      <Divider orientation={orientation} className={className} />
    </div>
  ),
  args: {
    orientation: 'vertical',
  },
};

export const HorizontalWithLabels: Story = {
  render: (args) => (
    <div>
      <Label>Element 1</Label>
      <Divider orientation={args.orientation} className={args.className} />
      <Label>Element 2</Label>
    </div>
  ),
  args: {
    orientation: 'horizontal',
    className: 'h-24',
  },
};

export const VerticalWithLabels: Story = {
  render: ({ className, orientation }) => (
    <div className="flex items-center h-8">
      <Label>Left</Label>
      <Divider orientation={orientation} className={className} />
      <Label>Right</Label>
    </div>
  ),
  args: {
    orientation: 'vertical',
  },
};

export const CustomStyled: Story = {
  args: {
    orientation: 'horizontal',
    className: 'border-red-500 border-2',
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <Divider {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Divider in dark theme context.',
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
        story: 'Interactive demo for toggling light/dark theme with Divider.',
      },
    },
  },
};
