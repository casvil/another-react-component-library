import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { CreditCardPreview } from './CreditCardPreview';
import type { CardType } from '../../utils/cardPatterns';

const meta = {
  title: 'molecules/CreditCardPreview',
  component: CreditCardPreview,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An editable credit card preview component. Click on any field to edit it directly on the card.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    editable: {
      control: 'boolean',
    },
    showCvc: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof CreditCardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NonEditable: Story = {
  args: {
    editable: false,
  },
};

export const WithoutCvc: Story = {
  args: {
    showCvc: false,
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

export const VisaCard: Story = {
  args: {
    cardNumber: '4111 1111 1111 1111',
    cardholderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvc: '123',
  },
};

export const MastercardCard: Story = {
  args: {
    cardNumber: '5555 5555 5555 4444',
    cardholderName: 'ALEX JOHNSON',
    expiryDate: '03/27',
    cvc: '567',
  },
};

// Interactive editable example
export const InteractiveEditing: Story = {
  render: () => {
    const [cardData, setCardData] = useState<{
      cardNumber: string;
      cardholderName: string;
      expiryDate: string;
      cvc: string;
      cardType: CardType | null;
    }>({
      cardNumber: '4111 1111 1111 1111',
      cardholderName: 'JOHN DOE',
      expiryDate: '12/25',
      cvc: '123',
      cardType: null,
    });

    const handleCardChange = (data: {
      cardNumber?: string;
      cardholderName?: string;
      expiryDate?: string;
      cvc?: string;
      cardType?: CardType | null;
    }) => {
      setCardData(prev => ({
        ...prev,
        ...data,
      }));
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            Interactive Credit Card
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Click on any field to edit it directly on the card
          </p>
        </div>

        <CreditCardPreview {...cardData} onChange={handleCardChange} />

        <div className="bg-gray-50 p-4 rounded-lg max-w-md mx-auto">
          <h4 className="font-medium text-gray-900 mb-2">Current Data:</h4>
          <pre className="text-xs bg-white p-2 rounded border overflow-x-auto">
            {JSON.stringify(cardData, null, 2)}
          </pre>
        </div>

        <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded max-w-md mx-auto">
          <div>
            <strong>Editing Tips:</strong>
          </div>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Click on any field to edit it</li>
            <li>Press Enter to save or Escape to cancel</li>
            <li>Card type is auto-detected from number</li>
            <li>CVC length adapts to card type (4 for Amex, 3 for others)</li>
          </ul>
        </div>
      </div>
    );
  },
};

// Comparison of different card types
export const CardTypeShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold mb-2">Different Card Types</h3>
        <p className="text-sm text-gray-600">
          Each card type has different formatting and styling
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">
            Visa
          </h4>
          <CreditCardPreview
            cardNumber="4111 1111 1111 1111"
            cardholderName="JOHN DOE"
            expiryDate="12/25"
            cvc="123"
            size="sm"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">
            Mastercard
          </h4>
          <CreditCardPreview
            cardNumber="5555 5555 5555 4444"
            cardholderName="JANE SMITH"
            expiryDate="09/26"
            cvc="567"
            size="sm"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">
            American Express
          </h4>
          <CreditCardPreview
            cardNumber="3782 822463 10005"
            cardholderName="ALEX JOHNSON"
            expiryDate="03/27"
            cvc="1234"
            size="sm"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">
            Discover
          </h4>
          <CreditCardPreview
            cardNumber="6011 1111 1111 1117"
            cardholderName="SARAH WILSON"
            expiryDate="06/28"
            cvc="890"
            size="sm"
          />
        </div>
      </div>
    </div>
  ),
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold mb-2">Size Variants</h3>
        <p className="text-sm text-gray-600">
          Available in small, medium, and large sizes
        </p>
      </div>

      <div className="space-y-6 flex flex-row gap-5">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">
            Small
          </h4>
          <CreditCardPreview
            size="sm"
            cardNumber="4111 1111 1111 1111"
            cardholderName="JOHN DOE"
            expiryDate="12/25"
            cvc="123"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">
            Medium (Default)
          </h4>
          <CreditCardPreview
            size="md"
            cardNumber="4111 1111 1111 1111"
            cardholderName="JOHN DOE"
            expiryDate="12/25"
            cvc="123"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 text-center">
            Large
          </h4>
          <CreditCardPreview
            size="lg"
            cardNumber="4111 1111 1111 1111"
            cardholderName="JOHN DOE"
            expiryDate="12/25"
            cvc="123"
          />
        </div>
      </div>
    </div>
  ),
};

// Integration with CreditCardForm
export const WithFormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState<{
      cardNumber: string;
      cardholderName: string;
      expiryDate: string;
      cvc: string;
      cardType: CardType | null;
    }>({
      cardNumber: '4111 1111 1111 1111',
      cardholderName: 'JOHN DOE',
      expiryDate: '12/25',
      cvc: '123',
      cardType: null,
    });

    const handleFormChange = (data: {
      cardNumber?: string;
      cardholderName?: string;
      expiryDate?: string;
      cvc?: string;
      cardType?: CardType | null;
    }) => {
      setFormData(prev => ({
        ...prev,
        ...data,
      }));
    };

    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Card Preview + Form Integration
          </h3>
          <p className="text-sm text-gray-600">
            The card preview syncs with form data in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Card Preview */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Live Card Preview</h4>
            <CreditCardPreview
              {...formData}
              onChange={handleFormChange}
              className="mx-auto"
            />
            <p className="text-xs text-gray-500 text-center">
              Click on the card to edit fields directly
            </p>
          </div>

          {/* Form representation */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Form Data</h4>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      cardNumber: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={formData.cardholderName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      cardholderName: e.target.value.toUpperCase(),
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={formData.expiryDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        expiryDate: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    value={formData.cvc}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, cvc: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
