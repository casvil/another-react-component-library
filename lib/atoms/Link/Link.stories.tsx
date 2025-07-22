import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { Link } from './Link';

const meta = {
  title: 'atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  args: {
    href: 'https://example.com',
    children: 'Example Link',
    variant: 'primary',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: { control: 'boolean' },
    target: {
      control: 'select',
      options: [undefined, '_self', '_blank', '_parent', '_top'],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const OpensInNewTab: Story = {
  args: { target: '_blank' },
};

export const CustomClass: Story = {
  args: {
    className: 'underline decoration-2 decoration-indigo-500',
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <Link {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Link in dark theme context.',
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
        story: 'Interactive demo for toggling light/dark theme with Link.',
      },
    },
  },
};
