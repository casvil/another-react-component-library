import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import React from 'react';
import { ThemeProvider } from '../../theme';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    interactive: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside'],
    },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">
          This is the card content. Cards can contain any type of content
          including text, images, buttons, and other components.
        </p>
      </div>
    ),
    variant: 'default',
    size: 'md',
    interactive: false,
  },
};

export const Outlined: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600">
          This card has a more prominent border styling.
        </p>
      </div>
    ),
    variant: 'outlined',
    size: 'md',
    interactive: false,
  },
};

export const Elevated: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">
          This card has a shadow that makes it appear elevated from the
          background.
        </p>
      </div>
    ),
    variant: 'elevated',
    size: 'md',
    interactive: false,
  },
};

export const Interactive: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
        <p className="text-gray-600">
          This card is interactive and will respond to hover and focus states.
          Click me!
        </p>
      </div>
    ),
    variant: 'elevated',
    size: 'md',
    interactive: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="default">
        <h3 className="font-semibold mb-2">Default</h3>
        <p className="text-sm text-gray-600">
          Standard card styling with subtle border.
        </p>
      </Card>
      <Card variant="outlined">
        <h3 className="font-semibold mb-2">Outlined</h3>
        <p className="text-sm text-gray-600">
          Card with prominent border styling.
        </p>
      </Card>
      <Card variant="elevated">
        <h3 className="font-semibold mb-2">Elevated</h3>
        <p className="text-sm text-gray-600">Card with shadow for depth.</p>
      </Card>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Gradient Border Card */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-300 transition-colors">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <h3 className="font-semibold text-purple-900">Gradient Card</h3>
        </div>
        <p className="text-purple-700 text-sm">
          Custom gradient background with purple accent colors.
        </p>
      </Card>

      {/* Colorful Interactive Card */}
      <Card
        interactive
        className="bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
      >
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
          <h3 className="font-semibold">Interactive Gradient</h3>
        </div>
        <p className="text-blue-100 text-sm">
          Click me! Custom interactive styling with hover effects.
        </p>
      </Card>

      {/* Minimal Card */}
      <Card className="bg-transparent border-l-4 border-l-green-500 border-t-0 border-r-0 border-b-0 rounded-none pl-4 shadow-none">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <h3 className="font-semibold text-green-900">Minimal Style</h3>
        </div>
        <p className="text-green-700 text-sm">
          Clean minimal design with left accent border.
        </p>
      </Card>

      {/* Warning Card */}
      <Card className="bg-amber-50 border-amber-200 border-l-4 border-l-amber-500">
        <div className="flex items-center mb-3">
          <div className="w-4 h-4 text-amber-600">⚠️</div>
          <h3 className="font-semibold text-amber-900 ml-2">Warning Card</h3>
        </div>
        <p className="text-amber-800 text-sm">
          Custom styling for warning or alert-style content.
        </p>
      </Card>

      {/* Success Card */}
      <Card className="bg-emerald-50 border-emerald-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500 transform rotate-45 translate-x-6 -translate-y-6"></div>
        <div className="flex items-center mb-3">
          <div className="w-4 h-4 text-emerald-600">✅</div>
          <h3 className="font-semibold text-emerald-900 ml-2">Success Card</h3>
        </div>
        <p className="text-emerald-800 text-sm">
          Custom success styling with decorative corner element.
        </p>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Cards can be extensively customized using the `className` prop. You can override default styles, add gradients, custom colors, animations, and create theme-specific designs while maintaining the card's structural behavior.",
      },
    },
  },
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultColorScheme="dark">
      <Card variant="elevated" size="md">
        <h3 className="text-lg font-semibold mb-2">Dark Theme Card</h3>
        <p className="text-sm">
          This card previews appearance in the dark theme using CSS variables.
        </p>
      </Card>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card rendered inside ThemeProvider with dark color scheme.',
      },
    },
    globals: {
      theme: 'dark',
    },
  },
};
