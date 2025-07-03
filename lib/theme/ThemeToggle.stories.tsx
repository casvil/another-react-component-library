import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from './ThemeProvider';
import { Text } from '../atoms/Text/Text';
import { Card } from '../atoms/Card/Card';
import { Stack } from '../atoms/Layout/Stack/Stack';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Theme/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A toggle button for switching between light and dark themes. Uses the theme context to manage state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultColorScheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ThemeToggle size="sm" />
      <ThemeToggle size="md" />
      <ThemeToggle size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ThemeToggle variant="primary" />
      <ThemeToggle variant="secondary" />
      <ThemeToggle variant="tertiary" />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <ThemeProvider defaultColorScheme="light">
      <Card p="lg" className="space-y-4">
        <div className="flex justify-between items-center">
          <Text variant="h4">Settings Panel</Text>
          <ThemeToggle />
        </div>
        <Stack gap="md">
          <Text>
            Toggle the theme using the button above to see the component adapt
            to light and dark modes.
          </Text>
          <Text color="secondary">
            The theme state is managed by the ThemeProvider context and
            persisted to localStorage.
          </Text>
        </Stack>
      </Card>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'ThemeToggle component shown in a typical usage context with other themed components.',
      },
    },
  },
};
