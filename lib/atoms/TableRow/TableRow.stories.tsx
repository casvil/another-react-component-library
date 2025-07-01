import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableRow } from './TableRow';
import { TableData } from '../TableData/TableData';

const meta: Meta<typeof TableRow> = {
  title: 'Atoms/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: false,
      description: 'Table cells (TableData or TableHeader components)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the table row',
    },
    variant: {
      control: 'select',
      options: ['default', 'striped', 'highlighted'],
      description: 'Visual variant of the row',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the row is interactive (clickable)',
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
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableData>John Doe</TableData>
        <TableData>30</TableData>
        <TableData>Engineer</TableData>
      </>
    ),
  },
};

export const Striped: Story = {
  args: {
    variant: 'striped',
    children: (
      <>
        <TableData>Jane Smith</TableData>
        <TableData>25</TableData>
        <TableData>Designer</TableData>
      </>
    ),
  },
};

export const Highlighted: Story = {
  args: {
    variant: 'highlighted',
    children: (
      <>
        <TableData>Bob Johnson</TableData>
        <TableData>35</TableData>
        <TableData>Manager</TableData>
      </>
    ),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <>
        <TableData>Alice Brown</TableData>
        <TableData>28</TableData>
        <TableData>Developer</TableData>
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Small Row</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow size="sm">
              <TableData size="sm">Small content</TableData>
              <TableData size="sm">Data</TableData>
              <TableData size="sm">Values</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Medium Row</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow size="md">
              <TableData size="md">Medium content</TableData>
              <TableData size="md">Data</TableData>
              <TableData size="md">Values</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Large Row</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow size="lg">
              <TableData size="lg">Large content</TableData>
              <TableData size="lg">Data</TableData>
              <TableData size="lg">Values</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <tbody>
        <TableRow variant="default">
          <TableData>Default Row</TableData>
          <TableData>Regular styling</TableData>
          <TableData>White background</TableData>
        </TableRow>
        <TableRow variant="striped">
          <TableData>Striped Row</TableData>
          <TableData>Alternate styling</TableData>
          <TableData>Gray background</TableData>
        </TableRow>
        <TableRow variant="highlighted">
          <TableData>Highlighted Row</TableData>
          <TableData>Special styling</TableData>
          <TableData>Blue background</TableData>
        </TableRow>
      </tbody>
    </table>
  ),
};

export const InteractiveExample: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Click on the interactive rows below:
      </p>
      <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
        <tbody>
          <TableRow interactive onClick={() => alert('Row 1 clicked!')}>
            <TableData>Interactive Row 1</TableData>
            <TableData>Click me!</TableData>
            <TableData>✓ Clickable</TableData>
          </TableRow>
          <TableRow
            interactive
            variant="striped"
            onClick={() => alert('Row 2 clicked!')}
          >
            <TableData>Interactive Row 2</TableData>
            <TableData>Click me too!</TableData>
            <TableData>✓ Clickable</TableData>
          </TableRow>
          <TableRow>
            <TableData>Non-interactive Row</TableData>
            <TableData>Cannot click</TableData>
            <TableData>✗ Not clickable</TableData>
          </TableRow>
        </tbody>
      </table>
    </div>
  ),
};

export const ComplexContent: Story = {
  args: {
    interactive: true,
    children: (
      <>
        <TableData>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
            <span>John Doe</span>
          </div>
        </TableData>
        <TableData variant="numeric">$1,234.56</TableData>
        <TableData variant="action">
          <button className="text-blue-600 hover:text-blue-800 text-sm">
            Edit
          </button>
        </TableData>
      </>
    ),
  },
};
