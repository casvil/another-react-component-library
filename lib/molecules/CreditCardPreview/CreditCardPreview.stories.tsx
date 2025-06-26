import type { Meta, StoryObj } from '@storybook/react-vite';

import { CreditCardPreview } from './CreditCardPreview';

const meta = {
  title: 'Molecules/CreditCardPreview',
  component: CreditCardPreview,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An editable credit card preview component that supports all major international card networks with gradient styling. Detects card types automatically and formats input accordingly.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cardNumber: {
      control: 'text',
      description: 'The card number (formatted automatically)',
    },
    cardholderName: {
      control: 'text',
      description: 'The cardholder name (converts to uppercase)',
    },
    expiryDate: {
      control: 'text',
      description: 'Expiry date in MM/YY format',
    },
    cvc: {
      control: 'text',
      description: 'CVC security code (3 or 4 digits based on card type)',
    },
    cardType: {
      control: 'select',
      options: [
        'visa',
        'mastercard',
        'amex',
        'discover',
        'diners',
        'jcb',
        'unionpay',
        'maestro',
        'elo',
        'mir',
        'rupay',
        null,
      ],
      description: 'Override auto-detected card type',
    },
    editable: {
      control: 'boolean',
      description: 'Whether fields can be edited by clicking',
    },
    showCvc: {
      control: 'boolean',
      description: 'Whether to show the CVC field',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card size',
    },
    onChange: { action: 'card-changed' },
  },
} satisfies Meta<typeof CreditCardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample card numbers for testing (from payment industry test sets)
const testCardNumbers = {
  visa: '4111 1111 1111 1111',
  mastercard: '5555 5555 5555 4444',
  amex: '3782 822463 10005',
  discover: '6011 1111 1111 1117',
  diners: '3056 930902 5904',
  jcb: '3530 1113 3330 0000',
  unionpay: '6200 0000 0000 0005',
  maestro: '5018 4500 0000 0000',
  elo: '4011 7812 3456 7890',
  mir: '2200 4500 0000 0000',
  rupay: '6521 4500 0000 0000',
};

export const Default: Story = {
  args: {
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvc: '',
    editable: true,
    showCvc: true,
    size: 'md',
  },
};

export const FilledExample: Story = {
  args: {
    cardNumber: testCardNumbers.visa,
    cardholderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvc: '123',
    editable: true,
    showCvc: true,
    size: 'md',
  },
};

export const AllCardNetworks: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          VISA
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.visa}
          cardholderName="JOHN SMITH"
          expiryDate="12/25"
          cvc="123"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          MASTERCARD
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.mastercard}
          cardholderName="JANE DOE"
          expiryDate="06/27"
          cvc="456"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          AMERICAN EXPRESS
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.amex}
          cardholderName="ALEX JOHNSON"
          expiryDate="03/26"
          cvc="1234"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          DISCOVER
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.discover}
          cardholderName="SARAH WILSON"
          expiryDate="09/28"
          cvc="789"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          DINERS CLUB
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.diners}
          cardholderName="MIKE BROWN"
          expiryDate="11/24"
          cvc="321"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          JCB
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.jcb}
          cardholderName="YUKI TANAKA"
          expiryDate="04/29"
          cvc="567"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          UNIONPAY
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.unionpay}
          cardholderName="LI WEI"
          expiryDate="07/26"
          cvc="890"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          MAESTRO
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.maestro}
          cardholderName="ELENA ROSSI"
          expiryDate="02/25"
          cvc="234"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          ELO
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.elo}
          cardholderName="CARLOS SILVA"
          expiryDate="08/27"
          cvc="345"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          MIR
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.mir}
          cardholderName="IVAN PETROV"
          expiryDate="10/26"
          cvc="678"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          RUPAY
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.rupay}
          cardholderName="PRIYA SHARMA"
          expiryDate="05/28"
          cvc="901"
          editable={false}
          size="md"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'All supported card networks with their unique gradient styling and formatting rules.',
      },
    },
  },
};

export const EditableCard: Story = {
  args: {
    cardNumber: '4111 1111 1111 1111',
    cardholderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvc: '123',
    editable: true,
    showCvc: true,
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Click on any field to edit it. The card type and styling will update automatically as you type.',
      },
    },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center p-6 max-w-2xl mx-auto">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Small (sm)
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.visa}
          cardholderName="SMALL CARD"
          expiryDate="12/25"
          cvc="123"
          editable={false}
          size="sm"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Medium (md) - Default
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.mastercard}
          cardholderName="MEDIUM CARD"
          expiryDate="06/27"
          cvc="456"
          editable={false}
          size="md"
        />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Large (lg)
        </h3>
        <CreditCardPreview
          cardNumber={testCardNumbers.amex}
          cardholderName="LARGE CARD"
          expiryDate="03/26"
          cvc="1234"
          editable={false}
          size="lg"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Different card sizes available.',
      },
    },
  },
};
