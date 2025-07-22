import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider, useTheme, ThemeToggle, themeClasses } from './index';

// Atom components
import { Button } from '../atoms/Button/Button';
import { Card } from '../atoms/Card/Card';
import { Text } from '../atoms/Text/Text';
import { Badge } from '../atoms/Badge/Badge';
import { Alert } from '../atoms/Alert/Alert';
import { Input } from '../atoms/Input/Input';
import { Switch } from '../atoms/Switch/Switch';
import { Checkbox } from '../atoms/Checkbox/Checkbox';
import { Link } from '../atoms/Link/Link';
import { IconButton } from '../atoms/IconButton/IconButton';
import { ProgressBar } from '../atoms/ProgressBar/ProgressBar';
import { Divider } from '../atoms/Divider/Divider';
import { Avatar } from '../atoms/Avatar/Avatar';
import { Username } from '../atoms/Username/Username';
import { TableRow } from '../atoms/TableRow/TableRow';

// Layout components
import { Box } from '../atoms/Layout/Box/Box';
import { Stack } from '../atoms/Layout/Stack/Stack';
import { Flex } from '../atoms/Layout/Flex/Flex';
import { Grid } from '../atoms/Layout/Grid/Grid';

// Molecule components
import { BadgeAvatar } from '../molecules/BadgeAvatar/BadgeAvatar';
import { CheckboxGroup } from '../molecules/CheckboxGroup/CheckboxGroup';
import { Clock } from '../molecules/Clock/Clock';
import { CreditCardForm } from '../molecules/CreditCardForm/CreditCardForm';
import { CreditCardPreview } from '../molecules/CreditCardPreview/CreditCardPreview';
import { Form } from '../molecules/Form/Form';
import { InputField } from '../molecules/InputField/InputField';
import { RadioGroup } from '../molecules/RadioGroup/RadioGroup';
import { Search as SearchInput } from '../molecules/Search/Search';
import { UserPreview } from '../molecules/UserPreview/UserPreview';

// Icons
import { X, Plus, Settings } from 'lucide-react';

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

// Header Component
const ShowcaseHeader = () => {
  const { colorScheme } = useTheme();

  return (
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
  );
};

// Color Token Display Component
const ColorTokenDisplay = ({
  label,
  className,
}: {
  label: string;
  className: string;
}) => (
  <div
    className={`w-full h-12 rounded border ${className} ${themeClasses.border.primary}`}
  >
    <div className="p-2">
      <Text variant="caption">{label}</Text>
    </div>
  </div>
);

// Color Palette Section
const ColorPaletteSection = () => (
  <Card className={themeClasses.surface.elevated}>
    <Text variant="h3" className="mb-4">
      Color Tokens
    </Text>

    <Grid cols={4} gap="md" className="mb-6">
      <div className="space-y-2">
        <Text variant="small" weight="medium">
          Background
        </Text>
        <ColorTokenDisplay
          label="Primary"
          className={themeClasses.background.primary}
        />
        <ColorTokenDisplay
          label="Secondary"
          className={themeClasses.background.secondary}
        />
        <ColorTokenDisplay
          label="Tertiary"
          className={themeClasses.background.tertiary}
        />
      </div>

      <div className="space-y-2">
        <Text variant="small" weight="medium">
          Surface
        </Text>
        <ColorTokenDisplay
          label="Primary"
          className={themeClasses.surface.primary}
        />
        <ColorTokenDisplay
          label="Secondary"
          className={themeClasses.surface.secondary}
        />
        <ColorTokenDisplay
          label="Elevated"
          className={themeClasses.surface.elevated}
        />
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
);

// Component Example Section
const ComponentExample = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-4">
    <Text variant="h5">{title}</Text>
    {children}
  </div>
);

// Basic Components Section
const BasicComponentsSection = () => (
  <Card className={themeClasses.surface.elevated}>
    <Text variant="h3" className="mb-4">
      Component Examples
    </Text>

    <Grid cols={2} gap="lg">
      <ComponentExample title="Buttons">
        <Flex gap="sm" wrap="wrap">
          <Button variant="primary" label="Primary" />
          <Button variant="secondary" label="Secondary" />
          <Button variant="tertiary" label="Tertiary" />
        </Flex>
      </ComponentExample>

      <ComponentExample title="Links">
        <Flex gap="sm" wrap="wrap">
          <Link href="#" variant="primary">
            Primary Link
          </Link>
          <Link href="#" variant="secondary">
            Secondary Link
          </Link>
          <Link href="#" variant="tertiary">
            Tertiary Link
          </Link>
        </Flex>
      </ComponentExample>

      <ComponentExample title="Icon Buttons">
        <Flex gap="sm" wrap="wrap">
          <IconButton icon={X} aria-label="Close" variant="primary" />
          <IconButton icon={Plus} aria-label="Add" variant="secondary" />
          <IconButton
            icon={Settings}
            aria-label="Settings"
            variant="tertiary"
          />
        </Flex>
      </ComponentExample>

      <ComponentExample title="Badges">
        <Flex gap="sm" wrap="wrap">
          <Badge intent="default">Default</Badge>
          <Badge intent="success">Success</Badge>
          <Badge intent="warning">Warning</Badge>
          <Badge intent="error">Error</Badge>
          <Badge intent="info">Info</Badge>
        </Flex>
      </ComponentExample>

      <ComponentExample title="Avatars">
        <Flex gap="sm" wrap="wrap">
          <Avatar name="Alice" size="sm" />
          <Avatar name="Bob Builder" />
          <Avatar name="Charlie Chaplin" size="lg" />
        </Flex>
      </ComponentExample>

      <ComponentExample title="Alerts">
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
      </ComponentExample>

      <ComponentExample title="Form Elements">
        <Grid cols={3} gap="md">
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter email" type="email" />
          <div className="flex items-center space-x-2">
            <Switch defaultChecked label="Enable notifications" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox label="Accept terms" />
          </div>
          <div className="col-span-3">
            <ProgressBar value={75} label="Progress" />
          </div>
          <div className="col-span-3">
            <Divider />
          </div>
        </Grid>
      </ComponentExample>
    </Grid>
  </Card>
);

// CSS Variables Reference Section
const CSSVariablesSection = () => (
  <Card className={themeClasses.surface.elevated}>
    <Text variant="h3" className="mb-4">
      CSS Variables Reference
    </Text>
    <Text className={themeClasses.text.secondary}>
      The theme system uses CSS custom properties that can be accessed in your
      styles:
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
);

// Advanced Components Section
const AdvancedComponentsSection = () => (
  <Card className={themeClasses.surface.elevated}>
    <Text variant="h3" className="mb-4">
      Advanced & Compound Components
    </Text>
    <Grid cols={2} gap="lg">
      <ComponentExample title="BadgeAvatar">
        <BadgeAvatar avatarProps={{ name: 'Alice' }}>Alice</BadgeAvatar>
      </ComponentExample>

      <ComponentExample title="Username">
        <Username size="md" variant="default">
          johndoe
        </Username>
      </ComponentExample>

      <ComponentExample title="TableRow">
        <table className="w-full border-collapse">
          <tbody>
            <TableRow>
              <td className="p-2">Row Cell 1</td>
              <td className="p-2">Row Cell 2</td>
            </TableRow>
          </tbody>
        </table>
      </ComponentExample>

      <ComponentExample title="CheckboxGroup">
        <CheckboxGroup
          label="Fruits"
          options={[
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
          ]}
          defaultValue={['banana']}
        />
      </ComponentExample>

      <ComponentExample title="Clock">
        <Clock />
      </ComponentExample>

      <ComponentExample title="CreditCardForm">
        <CreditCardForm />
      </ComponentExample>

      <ComponentExample title="CreditCardPreview">
        <CreditCardPreview
          cardNumber="4111 1111 1111 1111"
          cardholderName="John Doe"
          expiryDate="12/34"
          cvc="123"
        />
      </ComponentExample>

      <ComponentExample title="Form">
        <Form onSubmit={() => {}}>
          <InputField label="Name" />
          <Button type="submit" label="Submit" />
        </Form>
      </ComponentExample>

      <ComponentExample title="InputField">
        <InputField label="Email" placeholder="you@example.com" />
      </ComponentExample>

      <ComponentExample title="RadioGroup">
        <RadioGroup
          label="Options"
          options={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
          defaultValue="a"
        />
      </ComponentExample>

      <ComponentExample title="Search">
        <SearchInput placeholder="Search..." />
      </ComponentExample>

      <ComponentExample title="UserPreview">
        <UserPreview name="Jane Doe" />
      </ComponentExample>
    </Grid>
  </Card>
);

// Main Showcase Content
const ThemeShowcaseContent = () => {
  return (
    <Box p="lg" className={themeClasses.background.primary}>
      <Stack gap="xl">
        <ShowcaseHeader />
        <ColorPaletteSection />
        <BasicComponentsSection />
        <CSSVariablesSection />
        <AdvancedComponentsSection />
      </Stack>
    </Box>
  );
};

// Story factory function to reduce duplication
const createThemeStory = (
  colorScheme: 'light' | 'dark',
  description: string,
  additionalParams?: Record<string, unknown>,
): Story => ({
  render: () => (
    <ThemeProvider colorScheme={colorScheme}>
      <ThemeShowcaseContent />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: description,
      },
    },
    ...additionalParams,
  },
});

// Story exports
export const Default: Story = createThemeStory(
  'light',
  'Interactive showcase of the design token system with theme switching capabilities.',
);

export const LightTheme: Story = createThemeStory(
  'light',
  'Light theme variant showing all design tokens and components.',
);

export const DarkTheme: Story = createThemeStory(
  'dark',
  'Dark theme variant showing all design tokens and components.',
  { globals: { theme: 'dark' } },
);
