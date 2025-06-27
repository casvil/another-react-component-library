import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showIcon: {
      control: 'boolean',
    },
    dismissible: {
      control: 'boolean',
    },
    className: {
      control: 'text',
      description: 'Custom Tailwind CSS classes for styling',
    },
    onDismiss: { action: 'dismissed' },
  },
  args: {
    onDismiss: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is an info alert message.',
    intent: 'info',
    size: 'md',
    showIcon: true,
    dismissible: false,
  },
};

export const Success: Story = {
  args: {
    children: 'Your changes have been saved successfully!',
    intent: 'success',
    size: 'md',
    showIcon: true,
    dismissible: false,
  },
};

export const Warning: Story = {
  args: {
    children: 'Please review your information before proceeding.',
    intent: 'warning',
    size: 'md',
    showIcon: true,
    dismissible: false,
  },
};

export const Error: Story = {
  args: {
    children: 'An error occurred while processing your request.',
    intent: 'error',
    size: 'md',
    showIcon: true,
    dismissible: false,
  },
};

export const Dismissible: Story = {
  args: {
    children: 'This alert can be dismissed by clicking the X button.',
    intent: 'info',
    size: 'md',
    showIcon: true,
    dismissible: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    children: 'This alert does not show an icon.',
    intent: 'info',
    size: 'md',
    showIcon: false,
    dismissible: false,
  },
};

export const Small: Story = {
  args: {
    children: 'This is a small alert.',
    intent: 'info',
    size: 'sm',
    showIcon: true,
    dismissible: false,
  },
};

export const Large: Story = {
  args: {
    children: 'This is a large alert with more prominent styling.',
    intent: 'info',
    size: 'lg',
    showIcon: true,
    dismissible: false,
  },
};

export const LongContent: Story = {
  args: {
    children: (
      <>
        <strong>Important Notice:</strong> This is an alert with longer content
        that demonstrates how the component handles multiple lines of text. The
        alert should maintain proper spacing and alignment even with extensive
        content that may wrap to multiple lines.
      </>
    ),
    intent: 'warning',
    size: 'md',
    showIcon: true,
    dismissible: true,
  },
};

export const AllIntents: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert intent="info" showIcon>
        Info: This is an informational message.
      </Alert>
      <Alert intent="success" showIcon>
        Success: Operation completed successfully!
      </Alert>
      <Alert intent="warning" showIcon>
        Warning: Please check your input.
      </Alert>
      <Alert intent="error" showIcon>
        Error: Something went wrong.
      </Alert>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    children: 'This alert has custom styling applied via className prop.',
    intent: 'info',
    size: 'md',
    showIcon: true,
    className:
      'shadow-lg border-2 border-dashed bg-gradient-to-r from-blue-50 to-purple-50',
  },
};

export const FullyCustomized: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        intent="success"
        size="lg"
        showIcon
        dismissible
        className="shadow-xl border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50"
      >
        <div>
          <h4 className="font-bold text-green-900">Success!</h4>
          <p className="text-green-700">
            Your custom styled alert with gradient background.
          </p>
        </div>
      </Alert>

      <Alert
        intent="warning"
        size="sm"
        showIcon={false}
        className="border-l-4 border-l-orange-400 bg-orange-50 text-orange-800 rounded-none"
      >
        Minimal warning with custom border and no icon.
      </Alert>

      <Alert
        intent="error"
        className="bg-red-900 text-white border-red-700 rounded-xl shadow-2xl"
      >
        Dark theme error alert with custom colors.
      </Alert>
    </div>
  ),
};
