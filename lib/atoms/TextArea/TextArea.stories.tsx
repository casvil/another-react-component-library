import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { TextArea } from './TextArea';
import { WithFullWidthRoot } from '../../../.storybook/decorators/WithFullWidthRoot';

const meta = {
  title: 'atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Description',
    placeholder: 'Type here...',
  },
  tags: ['autodocs'],
  argTypes: {
    labelPosition: {
      control: { type: 'radio' },
      options: ['above', 'beside'],
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LabelBeside: Story = {
  args: {
    labelPosition: 'beside',
  },
};

export const CustomStylesFullWidth: Story = {
  args: {
    className: 'border-red-500',
    labelClassName: 'text-indigo-700 font-semibold',
    wrapperClassName: 'bg-yellow-100 p-4 rounded',
  },
  decorators: [WithFullWidthRoot],
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small textarea',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium textarea',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large textarea',
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <TextArea {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TextArea in dark theme context.',
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
        story: 'Interactive demo for toggling light/dark theme with TextArea.',
      },
    },
  },
};
