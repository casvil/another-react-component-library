import { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { StatusIndicator } from './StatusIndicator';

const meta: Meta<typeof StatusIndicator> = {
  title: 'atoms/StatusIndicator',
  component: StatusIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
  args: {
    status: 'online',
    size: 'md',
    showLabel: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    showLabel: true,
  },
};

export const Online: Story = {
  args: {
    status: 'online',
    showLabel: true,
  },
};

export const Offline: Story = {
  args: {
    status: 'offline',
    showLabel: true,
  },
};

export const Away: Story = {
  args: {
    status: 'away',
    showLabel: true,
  },
};

export const Busy: Story = {
  args: {
    status: 'busy',
    showLabel: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    showLabel: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    showLabel: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    showLabel: true,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <StatusIndicator status="online" showLabel />
        <StatusIndicator status="offline" showLabel />
        <StatusIndicator status="away" showLabel />
        <StatusIndicator status="busy" showLabel />
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="online" />
        <StatusIndicator status="offline" />
        <StatusIndicator status="away" />
        <StatusIndicator status="busy" />
      </div>
    </div>
  ),
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <StatusIndicator {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'StatusIndicator in dark theme context.',
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
          'Interactive demo for toggling light/dark theme with StatusIndicator.',
      },
    },
  },
};
