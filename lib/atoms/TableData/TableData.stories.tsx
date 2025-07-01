import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableData } from './TableData';
import { TableRow } from '../TableRow/TableRow';

const meta: Meta<typeof TableData> = {
  title: 'Atoms/TableData',
  component: TableData,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the table cell',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the table cell',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment within the cell',
    },
    variant: {
      control: 'select',
      options: ['default', 'numeric', 'action'],
      description: 'Content variant of the cell',
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate long text content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  decorators: [
    (Story) => (
      <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
        <tbody>
          <TableRow>
            <Story />
          </TableRow>
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableData>;

export const Default: Story = {
  args: {
    children: 'Default cell content',
  },
};

export const Numeric: Story = {
  args: {
    children: '$1,234.56',
    variant: 'numeric',
    align: 'right',
  },
};

export const Action: Story = {
  args: {
    children: 'Edit',
    variant: 'action',
  },
};

export const Truncated: Story = {
  args: {
    children:
      'This is a very long text content that should be truncated when the truncate prop is enabled',
    truncate: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Small Cell</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow>
              <TableData size="sm">Small content</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Medium Cell</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow>
              <TableData size="md">Medium content</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Large Cell</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow>
              <TableData size="lg">Large content</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <tbody>
        <TableRow>
          <TableData align="left">Left aligned</TableData>
          <TableData align="center">Center aligned</TableData>
          <TableData align="right">Right aligned</TableData>
        </TableRow>
      </tbody>
    </table>
  ),
};

export const Variants: Story = {
  render: () => (
    <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <tbody>
        <TableRow>
          <TableData variant="default">Default text</TableData>
          <TableData variant="numeric" align="right">
            $999.99
          </TableData>
          <TableData variant="action">
            <button className="text-blue-600 hover:text-blue-800 text-sm">
              Edit
            </button>
          </TableData>
        </TableRow>
      </tbody>
    </table>
  ),
};
