import { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { ErrorMessage } from './ErrorMessage';

const meta = {
  title: 'atoms/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    id: 'username-error',
    children: 'This field is required.',
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hidden: Story = {
  args: {
    children: undefined,
  },
};

export const WithCustomStyles: Story = {
  args: {
    children: 'Bold and red error message',
    className: 'font-bold underline',
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <ErrorMessage {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ErrorMessage in dark theme context.',
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
          'Interactive demo for toggling light/dark theme with ErrorMessage.',
      },
    },
  },
};
