import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Atoms/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the table header',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the table header',
    },
    variant: {
      control: 'select',
      options: ['default', 'sortable'],
      description: 'Visual variant of the header',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment within the header',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  decorators: [
    (Story) => (
      <table className="border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <Story />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 text-sm text-gray-600">Sample data</td>
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    children: 'Name',
  },
};

export const Sortable: Story = {
  args: {
    children: 'Sortable Column',
    variant: 'sortable',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
        <thead>
          <tr>
            <TableHeader size="sm">Small Header</TableHeader>
            <TableHeader size="md">Medium Header</TableHeader>
            <TableHeader size="lg">Large Header</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3 py-2 text-sm text-gray-600">Small data</td>
            <td className="px-4 py-3 text-base text-gray-600">Medium data</td>
            <td className="px-6 py-4 text-lg text-gray-600">Large data</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <thead>
        <tr>
          <TableHeader align="left">Left Aligned</TableHeader>
          <TableHeader align="center">Center Aligned</TableHeader>
          <TableHeader align="right">Right Aligned</TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-3 text-sm text-gray-600">Left content</td>
          <td className="px-4 py-3 text-sm text-gray-600 text-center">
            Center content
          </td>
          <td className="px-4 py-3 text-sm text-gray-600 text-right">
            Right content
          </td>
        </tr>
      </tbody>
    </table>
  ),
};

export const Variants: Story = {
  render: () => (
    <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <thead>
        <tr>
          <TableHeader variant="default">Default Header</TableHeader>
          <TableHeader variant="sortable">Sortable Header</TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-3 text-sm text-gray-600">Regular content</td>
          <td className="px-4 py-3 text-sm text-gray-600">Sortable content</td>
        </tr>
      </tbody>
    </table>
  ),
};

export const ComplexExample: Story = {
  render: () => (
    <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <thead>
        <tr>
          <TableHeader size="sm" align="left">
            ID
          </TableHeader>
          <TableHeader size="md" variant="sortable">
            Name
          </TableHeader>
          <TableHeader size="md" variant="sortable" align="center">
            Status
          </TableHeader>
          <TableHeader size="md" variant="sortable" align="right">
            Amount
          </TableHeader>
          <TableHeader size="sm" align="center">
            Actions
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 text-sm text-gray-600">001</td>
          <td className="px-4 py-3 text-base text-gray-900">John Doe</td>
          <td className="px-4 py-3 text-base text-gray-900 text-center">
            Active
          </td>
          <td className="px-4 py-3 text-base text-gray-900 text-right font-mono">
            $1,234.56
          </td>
          <td className="px-3 py-2 text-sm text-gray-600 text-center">Edit</td>
        </tr>
      </tbody>
    </table>
  ),
};
