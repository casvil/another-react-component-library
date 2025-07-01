import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TableData } from './TableData';

describe('TableData', () => {
  // Helper function to render a table data cell with wrapper
  const renderCell = (props = {}, children = 'Content') =>
    render(
      <table>
        <tbody>
          <tr>
            <TableData data-testid="cell" {...props}>
              {children}
            </TableData>
          </tr>
        </tbody>
      </table>,
    );

  describe('Basic rendering', () => {
    it('renders correctly with default props', () => {
      renderCell({}, 'Content');

      const cell = screen.getByTestId('cell');
      expect(cell).toBeInTheDocument();
      expect(cell).toHaveTextContent('Content');
      expect(cell.tagName).toBe('TD');
    });

    it('applies default styles', () => {
      renderCell({}, 'Default');

      const cell = screen.getByTestId('cell');
      expect(cell).toHaveClass(
        'px-4',
        'py-3',
        'text-base',
        'text-gray-900',
        'border-b',
        'border-gray-200',
      );
    });
  });

  describe('Size variants', () => {
    const sizeTests = [
      { size: 'sm', classes: ['px-3', 'py-2', 'text-sm'] },
      { size: 'md', classes: ['px-4', 'py-3', 'text-base'] },
      { size: 'lg', classes: ['px-6', 'py-4', 'text-lg'] },
    ] as const;

    it.each(sizeTests)(
      'applies $size size classes correctly',
      ({ size, classes }) => {
        renderCell({ size });
        const cell = screen.getByTestId('cell');
        classes.forEach((className) => expect(cell).toHaveClass(className));
      },
    );
  });

  describe('Alignment variants', () => {
    const alignmentTests = [
      { align: 'left', expectedClass: 'text-left' },
      { align: 'center', expectedClass: 'text-center' },
      { align: 'right', expectedClass: 'text-right' },
    ] as const;

    it.each(alignmentTests)(
      'applies $align alignment class correctly',
      ({ align, expectedClass }) => {
        renderCell({ align });
        expect(screen.getByTestId('cell')).toHaveClass(expectedClass);
      },
    );
  });

  describe('Variant behavior', () => {
    const variantTests = [
      {
        variant: 'numeric' as const,
        content: '123.45',
        expectedClasses: ['font-mono', 'tabular-nums'],
        expectedAttribute: { 'data-type': 'numeric' },
      },
      {
        variant: 'action' as const,
        content: 'Edit',
        expectedClasses: ['text-center'],
        expectedAttribute: null,
      },
    ];

    it.each(variantTests)(
      'applies $variant variant styles',
      ({ variant, content, expectedClasses, expectedAttribute }) => {
        renderCell({ variant }, content);

        const cell = screen.getByTestId('cell');
        expectedClasses.forEach((className) =>
          expect(cell).toHaveClass(className),
        );

        if (expectedAttribute) {
          const [attr, value] = Object.entries(expectedAttribute)[0];
          expect(cell).toHaveAttribute(attr, value);
        }
      },
    );
  });

  describe('Truncation behavior', () => {
    it('handles truncate prop correctly', () => {
      renderCell(
        { truncate: true },
        'Very long content that should be truncated',
      );

      const cell = screen.getByTestId('cell');
      expect(cell).toHaveClass('truncate', 'max-w-0');

      // Check that content is wrapped in truncate div
      const truncateDiv = cell.querySelector('div.truncate');
      expect(truncateDiv).toBeInTheDocument();
    });

    it('adds title attribute when truncating string content', () => {
      renderCell({ truncate: true }, 'Long text content');

      const truncateDiv = screen
        .getByTestId('cell')
        .querySelector('div.truncate');
      expect(truncateDiv).toHaveAttribute('title', 'Long text content');
    });

    it('does not add title attribute when truncating non-string content', () => {
      renderCell({ truncate: true }, <button>Click me</button>);

      const truncateDiv = screen
        .getByTestId('cell')
        .querySelector('div.truncate');
      expect(truncateDiv).not.toHaveAttribute('title');
    });

    it('renders content normally when not truncating', () => {
      renderCell({ truncate: false }, 'Normal content');

      const cell = screen.getByTestId('cell');
      expect(cell).not.toHaveClass('truncate');
      expect(cell.querySelector('div.truncate')).not.toBeInTheDocument();
      expect(cell).toHaveTextContent('Normal content');
    });
  });

  describe('Common component behavior', () => {
    it('applies custom className', () => {
      renderCell({ className: 'custom-class' });
      expect(screen.getByTestId('cell')).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLTableCellElement>();
      renderCell({ ref });
      expect(ref.current).toBe(screen.getByTestId('cell'));
    });

    it('passes through additional props', () => {
      renderCell({ 'data-custom': 'value' });
      expect(screen.getByTestId('cell')).toHaveAttribute(
        'data-custom',
        'value',
      );
    });
  });
});
