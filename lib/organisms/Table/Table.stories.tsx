import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Table } from './Table';
import { TableHeader } from '../../atoms/TableHeader/TableHeader';
import { TableRow } from '../../atoms/TableRow/TableRow';
import { TableData } from '../../atoms/TableData/TableData';

const meta: Meta<typeof Table> = {
  title: 'Organisms/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: false,
      description: 'Table content (thead, tbody, rows, cells)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the table',
    },
    variant: {
      control: 'select',
      options: ['default', 'striped', 'bordered'],
      description: 'Visual variant of the table',
    },
    layout: {
      control: 'select',
      options: ['auto', 'fixed'],
      description: 'Table layout algorithm',
    },
    responsive: {
      control: 'boolean',
      description:
        'Whether the table is responsive (horizontal scroll on mobile)',
    },
    hover: {
      control: 'boolean',
      description: 'Whether rows have hover effects',
    },
    caption: {
      control: 'text',
      description: 'Table caption for accessibility',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data for stories
const sampleData = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    role: 'Engineer',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    email: 'jane@example.com',
    role: 'Designer',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 35,
    email: 'bob@example.com',
    role: 'Manager',
  },
  {
    id: 4,
    name: 'Alice Brown',
    age: 28,
    email: 'alice@example.com',
    role: 'Developer',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    age: 32,
    email: 'charlie@example.com',
    role: 'Analyst',
  },
];

export const Default: Story = {
  args: {
    children: (
      <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map((person) => (
            <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>{person.email}</TableData>
              <TableData>{person.role}</TableData>
            </TableRow>
          ))}
        </tbody>
      </>
    ),
  },
};

export const Striped: Story = {
  args: {
    variant: 'striped',
    children: (
      <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader align="center">Age</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map((person) => (
            <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>{person.role}</TableData>
            </TableRow>
          ))}
        </tbody>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: (
      <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader align="center">Age</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map((person) => (
            <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>{person.email}</TableData>
              <TableData>{person.role}</TableData>
            </TableRow>
          ))}
        </tbody>
      </>
    ),
  },
};

export const WithHover: Story = {
  args: {
    hover: true,
    children: (
      <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.slice(0, 3).map((person) => (
            <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData variant="action">
                <button className="text-blue-600 hover:text-blue-800 text-sm mr-2">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-800 text-sm">
                  Delete
                </button>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    responsive: true,
    children: (
      <>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Full Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Email Address</TableHeader>
            <TableHeader>Job Role</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Salary</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map((person) => (
            <TableRow key={person.id}>
              <TableData variant="numeric">{person.id}</TableData>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>{person.email}</TableData>
              <TableData>{person.role}</TableData>
              <TableData>Engineering</TableData>
              <TableData variant="numeric" align="right">
                $75,000
              </TableData>
              <TableData variant="action">Edit</TableData>
            </TableRow>
          ))}
        </tbody>
      </>
    ),
  },
};

export const WithCaption: Story = {
  args: {
    caption: 'Employee Information Table',
    variant: 'bordered',
    children: (
      <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableData>John Doe</TableData>
            <TableData>Engineer</TableData>
            <TableData>Active</TableData>
          </TableRow>
          <TableRow>
            <TableData>Jane Smith</TableData>
            <TableData>Designer</TableData>
            <TableData>Active</TableData>
          </TableRow>
        </tbody>
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Small Table</h3>
        <Table size="sm">
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Role</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>John Doe</TableData>
              <TableData>Engineer</TableData>
            </TableRow>
            <TableRow>
              <TableData>Jane Smith</TableData>
              <TableData>Designer</TableData>
            </TableRow>
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Medium Table</h3>
        <Table size="md">
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Role</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>John Doe</TableData>
              <TableData>Engineer</TableData>
            </TableRow>
            <TableRow>
              <TableData>Jane Smith</TableData>
              <TableData>Designer</TableData>
            </TableRow>
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Large Table</h3>
        <Table size="lg">
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Role</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>John Doe</TableData>
              <TableData>Engineer</TableData>
            </TableRow>
            <TableRow>
              <TableData>Jane Smith</TableData>
              <TableData>Designer</TableData>
            </TableRow>
          </tbody>
        </Table>
      </div>
    </div>
  ),
};

export const SortableHeaders: Story = {
  render: () => {
    const [sortColumn, setSortColumn] = useState<string>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (column: string) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortColumn(column);
        setSortDirection('asc');
      }
    };

    const getSortIcon = (column: string) => {
      if (sortColumn !== column) return '';
      return sortDirection === 'asc' ? '↑' : '↓';
    };

    const renderSortableHeader = (
      label: string,
      column: string,
      align?: 'left' | 'center' | 'right',
    ) => (
      <TableHeader
        variant="sortable"
        onClick={() => handleSort(column)}
        style={{ cursor: 'pointer' }}
        align={align}
      >
        <span className="inline-flex items-center">
          <span>{label}</span>
          <span className="w-4 text-center ml-1">{getSortIcon(column)}</span>
        </span>
      </TableHeader>
    );

    const sortedData = [...sampleData].sort((a, b) => {
      let aValue: string | number = a[sortColumn as keyof typeof a] as
        | string
        | number;
      let bValue: string | number = b[sortColumn as keyof typeof b] as
        | string
        | number;

      // Handle different data types
      if (sortColumn === 'age') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      } else {
        aValue = String(aValue).toLowerCase();
        bValue = String(bValue).toLowerCase();
      }

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return (
      <Table>
        <thead>
          <TableRow>
            {renderSortableHeader('Name', 'name')}
            {renderSortableHeader('Age', 'age', 'center')}
            {renderSortableHeader('Role', 'role', 'right')}
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sortedData.map((person) => (
            <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData align="right">{person.role}</TableData>
              <TableData variant="action">
                <button className="text-blue-600 hover:text-blue-800 text-sm">
                  View
                </button>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    );
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Custom Colors
        </h3>
        <Table
          className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900"
          variant="bordered"
        >
          <thead>
            <TableRow>
              <TableHeader className="bg-blue-100 text-blue-800">
                Name
              </TableHeader>
              <TableHeader className="bg-blue-100 text-blue-800" align="center">
                Age
              </TableHeader>
              <TableHeader className="bg-blue-100 text-blue-800">
                Role
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map((person) => (
              <TableRow key={person.id}>
                <TableData className="font-medium">{person.name}</TableData>
                <TableData align="center" className="font-mono">
                  {person.age}
                </TableData>
                <TableData className="text-blue-600">{person.role}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Dark Theme</h3>
        <Table
          className="bg-gray-800 text-white border-gray-700"
          variant="bordered"
        >
          <thead>
            <TableRow>
              <TableHeader className="bg-gray-700 text-white border-gray-600">
                Name
              </TableHeader>
              <TableHeader
                className="bg-gray-700 text-white border-gray-600"
                align="center"
              >
                Age
              </TableHeader>
              <TableHeader className="bg-gray-700 text-white border-gray-600">
                Role
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map((person) => (
              <TableRow key={person.id} className="border-gray-700">
                <TableData className="text-gray-100">{person.name}</TableData>
                <TableData align="center" className="text-gray-300">
                  {person.age}
                </TableData>
                <TableData className="text-blue-400">{person.role}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Fancy Styling
        </h3>
        <Table
          className="shadow-2xl border-2 border-purple-200 rounded-xl overflow-hidden"
          size="lg"
        >
          <thead>
            <TableRow>
              <TableHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Name
              </TableHeader>
              <TableHeader
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                align="center"
              >
                Age
              </TableHeader>
              <TableHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Role
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map((person, index) => (
              <TableRow
                key={person.id}
                className={index % 2 === 0 ? 'bg-purple-50' : 'bg-pink-50'}
              >
                <TableData className="font-semibold text-purple-800">
                  {person.name}
                </TableData>
                <TableData
                  align="center"
                  className="text-purple-600 font-mono text-xl"
                >
                  {person.age}
                </TableData>
                <TableData className="text-pink-600 font-medium">
                  {person.role}
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Minimal Style
        </h3>
        <Table className="shadow-none border-none">
          <thead>
            <TableRow>
              <TableHeader className="border-b-2 border-gray-300 bg-transparent pb-4">
                Name
              </TableHeader>
              <TableHeader
                className="border-b-2 border-gray-300 bg-transparent pb-4"
                align="center"
              >
                Age
              </TableHeader>
              <TableHeader className="border-b-2 border-gray-300 bg-transparent pb-4">
                Role
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map((person) => (
              <TableRow key={person.id} className="border-none">
                <TableData className="py-4 border-none">
                  {person.name}
                </TableData>
                <TableData align="center" className="py-4 border-none">
                  {person.age}
                </TableData>
                <TableData className="py-4 border-none text-gray-600">
                  {person.role}
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  ),
};

export const ComplexExample: Story = {
  args: {
    variant: 'striped',
    hover: true,
    size: 'md',
    caption: 'Employee Directory - Q4 2024',
    children: (
      <>
        <thead>
          <TableRow>
            <TableHeader size="sm">ID</TableHeader>
            <TableHeader variant="sortable">Employee Name</TableHeader>
            <TableHeader variant="sortable" align="center">
              Age
            </TableHeader>
            <TableHeader>Contact</TableHeader>
            <TableHeader variant="sortable">Department</TableHeader>
            <TableHeader variant="sortable" align="right">
              Salary
            </TableHeader>
            <TableHeader align="center">Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map((person, index) => (
            <TableRow key={person.id}>
              <TableData size="sm" variant="numeric">
                {String(person.id).padStart(3, '0')}
              </TableData>
              <TableData>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {person.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="font-medium">{person.name}</span>
                </div>
              </TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>
                <div className="text-sm">
                  <div>{person.email}</div>
                  <div className="text-gray-500">
                    +1 (555) 123-45{String(index + 10).slice(-2)}
                  </div>
                </div>
              </TableData>
              <TableData>{person.role}</TableData>
              <TableData variant="numeric" align="right">
                $
                {(50000 + Math.random() * 50000).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                })}
              </TableData>
              <TableData variant="action">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Edit
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">
                    View
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm">
                    Delete
                  </button>
                </div>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </>
    ),
  },
};
