import React from 'react';
import { ThemeProvider, useTheme, ThemeToggle } from './index';
import { Button } from '../atoms/Button/Button';
import { Card } from '../atoms/Card/Card';
import { Text } from '../atoms/Text/Text';
import { Badge } from '../atoms/Badge/Badge';
import { Alert } from '../atoms/Alert/Alert';
import { Stack } from '../atoms/Layout/Stack/Stack';
import { Flex } from '../atoms/Layout/Flex/Flex';

/**
 * Demo component showcasing the theme system
 * This can be used for testing and as an example
 */
const ThemeDemoContent: React.FC = () => {
  const { colorScheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: 'var(--color-background-primary)',
        color: 'var(--color-text-primary)',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Stack gap="lg">
        {/* Header */}
        <Flex justify="between" align="center">
          <div>
            <Text variant="h2">Theme System Demo</Text>
            <Text color="secondary">
              Current theme: <Badge intent="info">{colorScheme}</Badge>
            </Text>
          </div>
          <ThemeToggle />
        </Flex>

        {/* Component Examples */}
        <Card
          p="lg"
          style={{
            backgroundColor: 'var(--color-surface-elevated)',
            borderColor: 'var(--color-border-primary)',
          }}
        >
          <Stack gap="md">
            <Text variant="h4">Components with Theme Support</Text>

            <Flex gap="sm" wrap>
              <Button variant="primary" label="Primary" />
              <Button variant="secondary" label="Secondary" />
              <Button variant="tertiary" label="Tertiary" />
            </Flex>

            <Alert intent="success" showIcon>
              Theme system is working! All components automatically adapt to the
              current theme.
            </Alert>

            <Alert intent="info" showIcon>
              CSS variables like <code>var(--color-background-primary)</code>{' '}
              are available for custom styling.
            </Alert>
          </Stack>
        </Card>

        {/* Design Tokens Display */}
        <Card
          p="lg"
          style={{
            backgroundColor: 'var(--color-surface-primary)',
            borderColor: 'var(--color-border-secondary)',
          }}
        >
          <Stack gap="md">
            <Text variant="h4">Design Tokens Preview</Text>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Text variant="small" weight="medium" color="secondary">
                  Background
                </Text>
                <div
                  className="mt-2 p-3 rounded border"
                  style={{
                    backgroundColor: 'var(--color-background-secondary)',
                    borderColor: 'var(--color-border-primary)',
                  }}
                >
                  <Text variant="caption">Secondary</Text>
                </div>
              </div>

              <div>
                <Text variant="small" weight="medium" color="secondary">
                  Surface
                </Text>
                <div
                  className="mt-2 p-3 rounded border"
                  style={{
                    backgroundColor: 'var(--color-surface-tertiary)',
                    borderColor: 'var(--color-border-primary)',
                  }}
                >
                  <Text variant="caption">Tertiary</Text>
                </div>
              </div>

              <div>
                <Text variant="small" weight="medium" color="secondary">
                  Text Colors
                </Text>
                <div className="mt-2 space-y-1">
                  <div style={{ color: 'var(--color-text-primary)' }}>
                    <Text variant="caption">Primary</Text>
                  </div>
                  <div style={{ color: 'var(--color-text-secondary)' }}>
                    <Text variant="caption">Secondary</Text>
                  </div>
                  <div style={{ color: 'var(--color-text-tertiary)' }}>
                    <Text variant="caption">Tertiary</Text>
                  </div>
                </div>
              </div>

              <div>
                <Text variant="small" weight="medium" color="secondary">
                  Intent Colors
                </Text>
                <div className="mt-2 space-y-1">
                  <Badge intent="success">Success</Badge>
                  <Badge intent="warning">Warning</Badge>
                  <Badge intent="error">Error</Badge>
                  <Badge intent="info">Info</Badge>
                </div>
              </div>
            </div>
          </Stack>
        </Card>
      </Stack>
    </div>
  );
};

/**
 * Complete theme demo with provider
 */
export const ThemeDemo: React.FC = () => {
  return (
    <ThemeProvider defaultColorScheme="light">
      <ThemeDemoContent />
    </ThemeProvider>
  );
};

export default ThemeDemo;
