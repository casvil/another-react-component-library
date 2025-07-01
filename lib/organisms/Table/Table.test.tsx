import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vitest } from 'vitest';
import { Table } from './Table';
import { TableHeader } from '../../atoms/TableHeader/TableHeader';
import { TableRow } from '../../atoms/TableRow/TableRow';
import { TableData } from '../../atoms/TableData/TableData';

describe('Table', () => {
  // Helper function to render a simple table
  const renderTable = (props = {}, children?: React.ReactNode) =>
    render(
      <Table data-testid="table" {...props}>
        {children || (
          <tbody>
            <TableRow>
              <TableData>Content</TableData>
            </TableRow>
          </tbody>
        )}
      </Table>,
    );

  // Helper function to render a sample table with headers and data
  const renderSampleTable = (props = {}, includeCaption = false) =>
    render(
      <Table
        {...props}
        caption={includeCaption ? 'Sample table caption' : undefined}
      >
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>City</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableData>John Doe</TableData>
            <TableData>30</TableData>
            <TableData>New York</TableData>
          </TableRow>
          <TableRow>
            <TableData>Jane Smith</TableData>
            <TableData>25</TableData>
            <TableData>Los Angeles</TableData>
          </TableRow>
        </tbody>
      </Table>,
    );

  // Helper to expect multiple classes
  const expectClasses = (element: HTMLElement, classes: string[]) => {
    classes.forEach((className) => expect(element).toHaveClass(className));
  };

  describe('Basic rendering', () => {
    it('renders correctly with default props', () => {
      render(
        <Table data-testid="table">
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>John Doe</TableData>
            </TableRow>
          </tbody>
        </Table>,
      );

      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('has proper semantic markup and default styles', () => {
      renderTable();

      const table = screen.getByTestId('table');
      expect(table.tagName).toBe('TABLE');
      expect(table).toHaveAttribute('role', 'table');
      expectClasses(table, ['w-full', 'border-collapse']);

      const container = table.parentElement;
      expectClasses(container!, ['overflow-hidden', 'shadow-sm']);
    });
  });

  describe('Size variants', () => {
    const sizeTests = [
      { size: 'sm', expectedClass: 'text-sm' },
      { size: 'md', expectedClass: 'text-base' },
      { size: 'lg', expectedClass: 'text-lg' },
    ] as const;

    it.each(sizeTests)(
      'applies $size size class correctly',
      ({ size, expectedClass }) => {
        renderTable({ size });
        expect(screen.getByTestId('table')).toHaveClass(expectedClass);
      },
    );

    it('respects individual component size props over table size', () => {
      render(
        <Table size="lg">
          <thead>
            <TableRow>
              <TableHeader size="sm" data-testid="header">
                Header
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData size="sm" data-testid="cell">
                Cell
              </TableData>
            </TableRow>
          </tbody>
        </Table>,
      );

      expectClasses(screen.getByTestId('header'), ['px-3', 'py-2', 'text-sm']);
      expectClasses(screen.getByTestId('cell'), ['px-3', 'py-2', 'text-sm']);
    });
  });

  describe('Layout variants', () => {
    const layoutTests = [
      { layout: 'auto', expectedClass: 'table-auto' },
      { layout: 'fixed', expectedClass: 'table-fixed' },
    ] as const;

    it.each(layoutTests)(
      'applies $layout layout class correctly',
      ({ layout, expectedClass }) => {
        renderTable({ layout });
        expect(screen.getByTestId('table')).toHaveClass(expectedClass);
      },
    );
  });

  describe('Visual variants', () => {
    it('applies bordered variant styling', () => {
      renderTable({ variant: 'bordered' });
      const container = screen.getByTestId('table').parentElement;
      expectClasses(container!, ['border', 'border-gray-200']);
    });

    it('applies striped variant CSS-based styling', () => {
      renderTable({ variant: 'striped' });
      const table = screen.getByTestId('table');
      expect(table).toHaveClass('[&_tbody_tr:nth-child(even)]:bg-gray-50');
    });

    it('applies hover effect when hover prop is true', () => {
      renderTable({ hover: true });
      const table = screen.getByTestId('table');
      expect(table).toHaveClass('[&_tbody_tr:hover]:bg-gray-100');
    });
  });

  describe('Responsive behavior', () => {
    it('applies responsive styling when responsive prop is true', () => {
      renderTable({ responsive: true });
      const outerContainer =
        screen.getByTestId('table').parentElement?.parentElement;
      expect(outerContainer).toHaveClass('overflow-x-auto');
    });
  });

  describe('Caption support', () => {
    it('renders caption when provided', () => {
      renderSampleTable({}, true);
      expect(screen.getByText('Sample table caption')).toBeInTheDocument();
    });

    it('does not render caption when not provided', () => {
      renderSampleTable();
      expect(
        screen.queryByText('Sample table caption'),
      ).not.toBeInTheDocument();
    });
  });

  describe('Complex scenarios', () => {
    it('handles complex nested structure correctly', () => {
      render(
        <Table size="md" variant="striped" hover data-testid="table">
          <thead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader variant="sortable">Name</TableHeader>
              <TableHeader align="right">Amount</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>1</TableData>
              <TableData>John</TableData>
              <TableData align="right" variant="numeric">
                $100.00
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>2</TableData>
              <TableData>Jane</TableData>
              <TableData align="right" variant="numeric">
                $200.00
              </TableData>
            </TableRow>
          </tbody>
        </Table>,
      );

      const table = screen.getByTestId('table');
      expectClasses(table, [
        '[&_tbody_tr:nth-child(even)]:bg-gray-50',
        '[&_tbody_tr:hover]:bg-gray-100',
      ]);

      // Verify content is rendered
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('$100.00')).toBeInTheDocument();
    });

    it('supports interactive sortable headers', () => {
      const handleSort = vitest.fn();

      render(
        <Table data-testid="table">
          <thead>
            <TableRow>
              <TableHeader
                variant="sortable"
                onClick={handleSort}
                data-testid="sortable-header"
              >
                Name
              </TableHeader>
              <TableHeader data-testid="regular-header">Role</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>John Doe</TableData>
              <TableData>Engineer</TableData>
            </TableRow>
          </tbody>
        </Table>,
      );

      const sortableHeader = screen.getByTestId('sortable-header');
      const regularHeader = screen.getByTestId('regular-header');

      // Sortable header should have interactive attributes
      expectClasses(sortableHeader, ['cursor-pointer', 'hover:bg-gray-100']);
      expect(sortableHeader).toHaveAttribute('tabIndex', '0');
      expect(sortableHeader).toHaveAttribute('aria-sort', 'none');

      // Regular header should not have interactive attributes
      expect(regularHeader).not.toHaveClass('cursor-pointer');
      expect(regularHeader).not.toHaveAttribute('tabIndex');
      expect(regularHeader).not.toHaveAttribute('aria-sort');

      // Click should trigger handler
      fireEvent.click(sortableHeader);
      expect(handleSort).toHaveBeenCalledTimes(1);
    });
  });

  describe('Common component behavior', () => {
    it('applies custom className', () => {
      renderTable({ className: 'custom-class' });
      expect(screen.getByTestId('table')).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLTableElement>();
      renderTable({ ref });
      expect(ref.current).toBe(screen.getByTestId('table'));
    });

    it('passes through additional props', () => {
      renderTable({ 'data-custom': 'value' });
      expect(screen.getByTestId('table')).toHaveAttribute(
        'data-custom',
        'value',
      );
    });
  });
});
