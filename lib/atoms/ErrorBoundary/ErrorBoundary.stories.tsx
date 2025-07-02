import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

// Component that throws an error during render - this will be caught by ErrorBoundary
const ProblematicComponent: React.FC<{ shouldThrow: boolean }> = ({
  shouldThrow,
}) => {
  if (shouldThrow) {
    throw new Error('This is a simulated error for testing ErrorBoundary');
  }
  return (
    <div className="p-4 border rounded bg-green-50 border-green-200">
      <Text color="success" weight="medium">
        ✅ Everything is working fine!
      </Text>
    </div>
  );
};

// Wrapper component to control error state
const ErrorDemo: React.FC<{
  showErrorDetails?: boolean;
  customFallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}> = ({ showErrorDetails, customFallback, onError }) => {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleTriggerError = () => {
    setShouldThrow(true);
  };

  const handleReset = () => {
    setShouldThrow(false);
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          label="Trigger Error"
          variant="secondary"
          onClick={handleTriggerError}
          disabled={shouldThrow}
        />
        <Button label="Reset Demo" variant="secondary" onClick={handleReset} />
      </div>

      <ErrorBoundary
        key={resetKey}
        showErrorDetails={showErrorDetails}
        fallback={customFallback}
        onError={onError}
        resetOnPropsChange
        resetKeys={[resetKey]}
      >
        <ProblematicComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>
    </div>
  );
};

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Atoms/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
    fallback: {
      control: false,
    },
    onError: {
      control: false,
    },
    className: {
      control: 'text',
    },
    showErrorDetails: {
      control: 'boolean',
    },
    resetOnPropsChange: {
      control: 'boolean',
    },
    resetKeys: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ErrorDemo />,
};

export const WithErrorDetails: Story = {
  render: () => <ErrorDemo showErrorDetails />,
};

export const CustomFallback: Story = {
  render: () => (
    <ErrorDemo
      customFallback={
        <div className="p-6 text-center bg-purple-50 border border-purple-200 rounded-lg">
          <Text variant="h3" color="primary" className="mb-2">
            🔧 Under Maintenance
          </Text>
          <Text color="secondary">
            This feature is temporarily unavailable. Please check back later.
          </Text>
          <Button
            label="Go Back"
            variant="primary"
            size="sm"
            className="mt-4"
          />
        </div>
      }
    />
  ),
};

export const WithErrorLogging: Story = {
  render: () => (
    <ErrorDemo
      onError={(error, errorInfo) => {
        console.log('Custom error handler called:', { error, errorInfo });
      }}
    />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <ErrorBoundary>
      <ProblematicComponent shouldThrow />
    </ErrorBoundary>
  ),
};

export const SuccessState: Story = {
  render: () => (
    <ErrorBoundary>
      <ProblematicComponent shouldThrow={false} />
    </ErrorBoundary>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <Text variant="h4" className="mb-2">
          Small Error Boundary
        </Text>
        <ErrorBoundary className="max-w-sm">
          <ProblematicComponent shouldThrow />
        </ErrorBoundary>
      </div>

      <div>
        <Text variant="h4" className="mb-2">
          Large Error Boundary
        </Text>
        <ErrorBoundary className="max-w-2xl">
          <ProblematicComponent shouldThrow />
        </ErrorBoundary>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
