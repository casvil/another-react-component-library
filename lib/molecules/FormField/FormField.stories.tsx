import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mail, Lock, User, CreditCard } from 'lucide-react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { ThemeDemo } from '../../theme/ThemeDemo';

import { FormField } from './FormField';

const meta = {
  title: 'molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    size: 'md',
  },
  argTypes: {
    tooltipPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithTooltip: Story = {
  args: {
    label: 'Password',
    tooltip:
      'Password must be at least 8 characters with at least 1 number and 1 special character',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Email Address',
    tooltip: 'We will never share your email with anyone else',
    icon: Mail,
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <FormField
        label="Small Size"
        tooltip="This is a small form field"
        size="sm"
        placeholder="Small input"
        icon={User}
      />
      <FormField
        label="Medium Size"
        tooltip="This is a medium form field"
        size="md"
        placeholder="Medium input"
        icon={User}
      />
      <FormField
        label="Large Size"
        tooltip="This is a large form field"
        size="lg"
        placeholder="Large input"
        icon={User}
      />
    </div>
  ),
};

export const TooltipPositions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <FormField
        label="Top Tooltip"
        tooltip="Tooltip appears on top"
        tooltipPosition="top"
        placeholder="Hover the help icon"
      />
      <FormField
        label="Right Tooltip"
        tooltip="Tooltip appears on the right"
        tooltipPosition="right"
        placeholder="Hover the help icon"
      />
      <FormField
        label="Bottom Tooltip"
        tooltip="Tooltip appears on bottom"
        tooltipPosition="bottom"
        placeholder="Hover the help icon"
      />
      <FormField
        label="Left Tooltip"
        tooltip="Tooltip appears on the left"
        tooltipPosition="left"
        placeholder="Hover the help icon"
      />
    </div>
  ),
};

export const FormExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <FormField
        label="Full Name"
        tooltip="Enter your first and last name"
        icon={User}
        placeholder="John Doe"
        required
      />
      <FormField
        label="Email"
        tooltip="We'll use this to send you important updates"
        icon={Mail}
        type="email"
        placeholder="john@example.com"
        required
      />
      <FormField
        label="Password"
        tooltip="Must be at least 8 characters with numbers and symbols"
        tooltipPosition="right"
        icon={Lock}
        type="password"
        placeholder="••••••••"
        required
      />
      <FormField
        label="Credit Card"
        tooltip="Your payment information is encrypted and secure"
        icon={CreditCard}
        placeholder="1234 5678 9012 3456"
        maxLength={19}
      />
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    label: 'Custom Styled Field',
    tooltip: 'This field has custom styling applied',
    labelClassName: 'text-indigo-700 font-bold text-base',
    tooltipClassName: 'bg-indigo-600 text-white',
    wrapperClassName: 'bg-indigo-50 p-4 rounded-lg border border-indigo-200',
    className: 'border-indigo-300 focus:ring-indigo-500',
    placeholder: 'Custom styled input',
    icon: Mail,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <FormField
        label="Interactive Example"
        tooltip="Type something to see the controlled behavior"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Start typing..."
        icon={User}
      />
    );
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <ThemeProvider defaultColorScheme="dark">
      <FormField {...args} />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'FormField in dark theme context.',
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
        story: 'Interactive demo for toggling light/dark theme with FormField.',
      },
    },
  },
};
