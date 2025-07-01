import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  // Helper function to render a table row with wrapper
  const renderRow = (props = {}, children = <td>Content</td>) =>
    render(
      <table>
        <tbody>
          <TableRow data-testid="row" {...props}>
            {children}
          </TableRow>
        </tbody>
      </table>,
    );

  describe('Basic rendering', () => {
    it('renders correctly with default props', () => {
      renderRow(
        {},
        <>
          <td>Cell 1</td>
          <td>Cell 2</td>
        </>,
      );

      const row = screen.getByTestId('row');
      expect(row).toBeInTheDocument();
      expect(row.tagName).toBe('TR');
    });

    it('applies default border styles', () => {
      renderRow({}, <td>Border test</td>);

      const row = screen.getByTestId('row');
      expect(row).toHaveClass('border-b', 'border-gray-200', 'last:border-b-0');
    });

    it('renders children correctly', () => {
      renderRow(
        {},
        <>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </>,
      );

      expect(screen.getByText('Cell 1')).toBeInTheDocument();
      expect(screen.getByText('Cell 2')).toBeInTheDocument();
      expect(screen.getByText('Cell 3')).toBeInTheDocument();
    });
  });

  describe('Size variants', () => {
    const sizeTests = [
      { size: 'sm', expectedClass: 'h-10' },
      { size: 'md', expectedClass: 'h-12' },
      { size: 'lg', expectedClass: 'h-14' },
    ] as const;

    it.each(sizeTests)(
      'applies $size size class correctly',
      ({ size, expectedClass }) => {
        renderRow({ size }, <td>{size} row</td>);
        expect(screen.getByTestId('row')).toHaveClass(expectedClass);
      },
    );
  });

  describe('Variant behavior', () => {
    const variantTests = [
      { variant: 'default', expectedClass: 'bg-white' },
      { variant: 'striped', expectedClass: 'bg-gray-50' },
      { variant: 'highlighted', expectedClass: 'bg-blue-50' },
    ] as const;

    it.each(variantTests)(
      'applies $variant variant class correctly',
      ({ variant, expectedClass }) => {
        renderRow({ variant }, <td>{variant}</td>);
        expect(screen.getByTestId('row')).toHaveClass(expectedClass);
      },
    );
  });

  describe('Interactive behavior', () => {
    it('applies interactive styles and attributes when interactive', () => {
      renderRow({ interactive: true }, <td>Interactive row</td>);

      const row = screen.getByTestId('row');
      expect(row).toHaveClass('hover:bg-gray-100', 'cursor-pointer');
      expect(row).toHaveAttribute('tabIndex', '0');
      expect(row).toHaveAttribute('role', 'row');
    });

    it('does not apply interactive attributes when not interactive', () => {
      renderRow({ interactive: false }, <td>Non-interactive row</td>);

      const row = screen.getByTestId('row');
      expect(row).not.toHaveClass('cursor-pointer');
      expect(row).not.toHaveAttribute('tabIndex');
      expect(row).not.toHaveAttribute('role');
    });
  });

  describe('Common component behavior', () => {
    it('applies custom className', () => {
      renderRow({ className: 'custom-class' });
      expect(screen.getByTestId('row')).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLTableRowElement>();
      renderRow({ ref });
      expect(ref.current).toBe(screen.getByTestId('row'));
    });

    it('passes through additional props', () => {
      renderRow({ 'data-custom': 'value' });
      expect(screen.getByTestId('row')).toHaveAttribute('data-custom', 'value');
    });
  });
});
