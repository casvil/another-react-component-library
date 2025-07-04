import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider, useTheme, ThemeToggle, themeClasses } from './index';
import { Button } from '../atoms/Button/Button';
import { Card } from '../atoms/Card/Card';
import { Text } from '../atoms/Text/Text';
import { Badge } from '../atoms/Badge/Badge';
import { Alert } from '../atoms/Alert/Alert';
import { Input } from '../atoms/Input/Input';
import { Switch } from '../atoms/Switch/Switch';
import { Box } from '../atoms/Layout/Box/Box';
import { Stack } from '../atoms/Layout/Stack/Stack';
import { Flex } from '../atoms/Layout/Flex/Flex';
import { Grid } from '../atoms/Layout/Grid/Grid';
import { Avatar } from '../atoms/Avatar/Avatar';

const meta: Meta = {
  title: 'Theme/Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Design Token Theming System showcasing light and dark themes with CSS variables.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * Component to showcase theme tokens and design system
 */
const ThemeShowcaseContent = () => {
  const { colorScheme } = useTheme();

  return (
    <Box p="lg" className={themeClasses.background.primary}>
      <Stack gap="xl">
        {/* Header */}
        <Flex justify="between" align="center" className="mb-8">
          <div>
            <Text variant="h1" className={themeClasses.text.primary}>
              Design Token System
            </Text>
            <Text className={themeClasses.text.secondary}>
              Current theme: <Badge intent="info">{colorScheme}</Badge>
            </Text>
          </div>
          <ThemeToggle />
        </Flex>

        {/* Color Palette */}
        <Card p="lg" className={themeClasses.surface.elevated}>
          <Text variant="h3" className="mb-4">
            Color Tokens
          </Text>

          <Grid cols={4} gap="md" className="mb-6">
            <div className="space-y-2">
              <Text variant="small" weight="medium">
                Background
              </Text>
              <div
                className={`w-full h-12 rounded border ${themeClasses.background.primary} ${themeClasses.border.primary}`}
              >
                <div className="p-2">
                  <Text variant="caption">Primary</Text>
                </div>
              </div>
              <div
                className={`w-full h-12 rounded border ${themeClasses.background.secondary} ${themeClasses.border.primary}`}
              >
                <div className="p-2">
                  <Text variant="caption">Secondary</Text>
                </div>
              </div>
              <div
                className={`w-full h-12 rounded border ${themeClasses.background.tertiary} ${themeClasses.border.primary}`}
              >
                <div className="p-2">
                  <Text variant="caption">Tertiary</Text>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Text variant="small" weight="medium">
                Surface
              </Text>
              <div
                className={`w-full h-12 rounded border ${themeClasses.surface.primary} ${themeClasses.border.primary}`}
              >
                <div className="p-2">
                  <Text variant="caption">Primary</Text>
                </div>
              </div>
              <div
                className={`w-full h-12 rounded border ${themeClasses.surface.secondary} ${themeClasses.border.primary}`}
              >
                <div className="p-2">
                  <Text variant="caption">Secondary</Text>
                </div>
              </div>
              <div
                className={`w-full h-12 rounded border ${themeClasses.surface.elevated} ${themeClasses.border.primary}`}
              >
                <div className="p-2">
                  <Text variant="caption">Elevated</Text>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Text variant="small" weight="medium">
                Text
              </Text>
              <div
                className={`p-3 rounded border ${themeClasses.surface.secondary} ${themeClasses.border.primary}`}
              >
                <Text className={themeClasses.text.primary}>Primary</Text>
                <Text className={themeClasses.text.secondary}>Secondary</Text>
                <Text className={themeClasses.text.tertiary}>Tertiary</Text>
                <Text className={themeClasses.text.disabled}>Disabled</Text>
              </div>
            </div>

            <div className="space-y-2">
              <Text variant="small" weight="medium">
                Intent
              </Text>
              <div className="space-y-2">
                <Badge intent="success">Success</Badge>
                <Badge intent="warning">Warning</Badge>
                <Badge intent="error">Error</Badge>
                <Badge intent="info">Info</Badge>
              </div>
            </div>
          </Grid>
        </Card>

        {/* Component Examples */}
        <Card p="lg" className={themeClasses.surface.elevated}>
          <Text variant="h3" className="mb-4">
            Component Examples
          </Text>

          <Grid cols={2} gap="lg">
            {/* Buttons */}
            <div className="space-y-4">
              <Text variant="h5">Buttons</Text>
              <Flex gap="sm" wrap>
                <Button variant="primary" label="Primary" />
                <Button variant="secondary" label="Secondary" />
                <Button variant="tertiary" label="Tertiary" />
              </Flex>
            </div>

            {/* Badges */}
            <div className="space-y-4">
              <Text variant="h5">Badges</Text>
              <Flex gap="sm" wrap>
                <Badge intent="default">Default</Badge>
                <Badge intent="success">Success</Badge>
                <Badge intent="warning">Warning</Badge>
                <Badge intent="error">Error</Badge>
                <Badge intent="info">Info</Badge>
              </Flex>
            </div>

            {/* Avatars */}
            <div className="space-y-4">
              <Text variant="h5">Avatars</Text>
              <Flex gap="sm" wrap>
                <Avatar name="Alice" size="sm" />
                <Avatar name="Bob Builder" />
                <Avatar name="Charlie Chaplin" size="lg" />
              </Flex>
            </div>

            {/* Alerts */}
            <div className="space-y-4 col-span-2">
              <Text variant="h5">Alerts</Text>
              <Stack gap="sm">
                <Alert intent="success" showIcon>
                  Success alert - your changes have been saved successfully.
                </Alert>
                <Alert intent="warning" showIcon>
                  Warning alert - please review your input before continuing.
                </Alert>
                <Alert intent="error" showIcon>
                  Error alert - something went wrong, please try again.
                </Alert>
                <Alert intent="info" showIcon>
                  Info alert - here's some helpful information for you.
                </Alert>
              </Stack>
            </div>

            {/* Form Elements */}
            <div className="space-y-4 col-span-2">
              <Text variant="h5">Form Elements</Text>
              <Grid cols={3} gap="md">
                <Input placeholder="Enter your name" />
                <Input placeholder="Enter email" type="email" />
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked label="Enable notifications" />
                </div>
              </Grid>
            </div>
          </Grid>
        </Card>

        {/* CSS Variables Reference */}
        <Card p="lg" className={themeClasses.surface.elevated}>
          <Text variant="h3" className="mb-4">
            CSS Variables Reference
          </Text>
          <Text className={themeClasses.text.secondary}>
            The theme system uses CSS custom properties that can be accessed in
            your styles:
          </Text>

          <Box
            p="md"
            className={`mt-4 rounded border ${themeClasses.surface.secondary} ${themeClasses.border.primary}`}
          >
            <pre className={`text-sm ${themeClasses.text.primary}`}>
              {`.my-component {
  background-color: var(--color-surface-primary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-md);
}`}
            </pre>
          </Box>
        </Card>
      </Stack>
    </Box>
  );
};

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultColorScheme="light">
      <ThemeShowcaseContent />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Interactive showcase of the design token system with theme switching capabilities.',
      },
    },
  },
};

export const LightTheme: Story = {
  render: () => (
    <ThemeProvider defaultColorScheme="light">
      <ThemeShowcaseContent />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Light theme variant showing all design tokens and components.',
      },
    },
    // Override global theme for this story
    globals: {
      theme: 'light',
    },
  },
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultColorScheme="dark">
      <ThemeShowcaseContent />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dark theme variant showing all design tokens and components.',
      },
    },
    // Override global theme for this story
    globals: {
      theme: 'dark',
    },
  },
};
