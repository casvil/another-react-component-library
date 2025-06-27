import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import React from 'react';

import { CreditCardForm, CreditCardFormData } from './CreditCardForm';
import { Button } from '../../atoms/Button/Button';
import { CreditCardPreview } from '../CreditCardPreview/CreditCardPreview';

const meta = {
  title: 'molecules/CreditCardForm',
  component: CreditCardForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A complete credit card form built with existing library components. Features automatic formatting, validation, and card type detection.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showCardholderName: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof CreditCardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithoutCardholderName: Story = {
  args: {
    showCardholderName: false,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithInitialValues: Story = {
  args: {
    initialValues: {
      cardNumber: '4111 1111 1111 1111',
      cardholderName: 'JOHN DOE',
      expiryDate: '12/25',
      cvc: '123',
    },
  },
};

// Interactive example with form submission
export const InteractiveForm: Story = {
  render: () => {
    const [formData, setFormData] = useState<Partial<CreditCardFormData>>({});
    const [submittedData, setSubmittedData] =
      useState<CreditCardFormData | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (data: CreditCardFormData) => {
      setIsSubmitting(true);
      setSubmittedData(data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitting(false);

      alert('Payment submitted successfully!');
    };

    return (
      <div className="space-y-6 w-96">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
          <CreditCardForm onSubmit={handleSubmit} onChange={setFormData} />

          <Button
            type="submit"
            label={isSubmitting ? 'Processing...' : 'Submit Payment'}
            className="w-full mt-4"
            disabled={isSubmitting}
            onClick={() => {
              const form = document.querySelector('form');
              if (form) {
                form.dispatchEvent(
                  new Event('submit', { bubbles: true, cancelable: true }),
                );
              }
            }}
          />
        </div>

        {/* Real-time form data */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Current Form Data:</h4>
          <pre className="text-xs bg-white p-2 rounded border overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>

        {/* Submitted data */}
        {submittedData && (
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-900 mb-2">Submitted Data:</h4>
            <pre className="text-xs bg-white p-2 rounded border overflow-x-auto">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}

        <div className="text-xs text-gray-500 space-y-1 bg-blue-50 p-3 rounded">
          <div>
            <strong>Test card numbers:</strong>
          </div>
          <div>Visa: 4111 1111 1111 1111</div>
          <div>Mastercard: 5555 5555 5555 4444</div>
          <div>Amex: 3782 822463 10005</div>
          <div>Discover: 6011 1111 1111 1117</div>
        </div>
      </div>
    );
  },
};

// Credit card preview matching the design
export const PaymentCardPreview: Story = {
  render: () => {
    const [formData, setFormData] = useState<Partial<CreditCardFormData>>({
      cardNumber: '1234 1234 1234 1234',
      cardholderName: 'VICTOR SAULER',
      expiryDate: '10/25',
      cvc: '123',
    });

    return (
      <div className="max-w-md mx-auto space-y-6">
        {/* Card preview using the actual CreditCardPreview component */}
        <CreditCardPreview
          cardNumber={formData.cardNumber}
          cardholderName={formData.cardholderName}
          expiryDate={formData.expiryDate}
          cvc={formData.cvc}
          cardType={formData.cardType}
          editable={false}
          size="md"
          className="shadow-xl"
        />

        {/* Form */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Enter Card Details</h3>
          <CreditCardForm
            onChange={setFormData}
            initialValues={formData}
            className="space-y-4"
          />
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          'A complete payment card form with live preview. The card preview updates in real-time as you type in the form below.',
      },
    },
  },
};

// Validation showcase
export const ValidationShowcase: Story = {
  render: () => {
    const [, setFormData] = useState<Partial<CreditCardFormData>>({});

    return (
      <div className="space-y-6 w-96">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Validation Example</h3>
          <CreditCardForm onChange={setFormData} />

          <Button
            type="submit"
            label="Validate Form"
            className="w-full mt-4"
            onClick={() => {
              const form = document.querySelector('form');
              if (form) {
                form.dispatchEvent(
                  new Event('submit', { bubbles: true, cancelable: true }),
                );
              }
            }}
          />
        </div>

        <div className="text-sm space-y-3 bg-amber-50 p-4 rounded-lg border border-amber-200">
          <div>
            <strong>Try these validation scenarios:</strong>
          </div>
          <ul className="space-y-1 list-disc list-inside text-gray-700">
            <li>Submit empty form to see required field errors</li>
            <li>Enter invalid card number: 1234567890</li>
            <li>Enter past expiry date: 01/20</li>
            <li>Enter invalid month: 13/25</li>
            <li>Enter wrong CVC length for card type</li>
          </ul>
        </div>
      </div>
    );
  },
};
