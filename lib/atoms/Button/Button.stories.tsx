import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, ArrowLeft } from 'lucide-react';

import { Button, ButtonProps } from './Button';
import { ThemeProvider, ThemeToggle } from '../../theme';

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Next Step',
    variant: 'primary',
    size: 'md',
    icon: ArrowRight,
    iconPosition: 'right',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Back',
    variant: 'secondary',
    size: 'md',
    icon: ArrowLeft,
    iconPosition: 'left',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const AllSizes = {
  render: () => (
    <div className="space-x-2">
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
    </div>
  ),
} satisfies StoryObj<ButtonProps>;

export const InteractiveThemeDemo: Story = {
  args: { label: 'Button' },
  render: () => (
    <ThemeProvider defaultColorScheme="light">
      <div
        className="p-8 rounded-lg min-h-[400px]"
        style={{
          backgroundColor: 'var(--color-background-primary)',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border-primary)',
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3
            className="text-lg font-medium"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Interactive Theme Demo
          </h3>
          <ThemeToggle />
        </div>

        <div className="space-y-6">
          <div>
            <h4
              className="text-sm font-medium mb-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              All Button Variants
            </h4>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" label="Primary" />
              <Button variant="secondary" label="Secondary" />
              <Button variant="tertiary" label="Tertiary" />
            </div>
          </div>

          <div>
            <h4
              className="text-sm font-medium mb-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              With Icons
            </h4>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="primary"
                label="Continue"
                icon={ArrowRight}
                iconPosition="right"
              />
              <Button
                variant="secondary"
                label="Go Back"
                icon={ArrowLeft}
                iconPosition="left"
              />
            </div>
          </div>

          <div>
            <h4
              className="text-sm font-medium mb-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Disabled States
            </h4>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" label="Primary" disabled />
              <Button variant="secondary" label="Secondary" disabled />
              <Button variant="tertiary" label="Tertiary" disabled />
            </div>
          </div>

          <div
            className="p-4 rounded border text-sm"
            style={{
              backgroundColor: 'var(--color-surface-secondary)',
              borderColor: 'var(--color-border-primary)',
              color: 'var(--color-text-secondary)',
            }}
          >
            💡 <strong>Try it:</strong> Click the theme toggle above to see all
            buttons automatically adapt to the new theme using CSS variables!
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo with a working theme toggle. All buttons use CSS variables and automatically adapt when the theme changes.',
      },
    },
  },
};
