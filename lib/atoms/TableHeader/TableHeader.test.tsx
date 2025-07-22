import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { TableHeader } from './TableHeader';

describe('TableHeader', () => {
  // Helper function to render a table header with wrapper
  const renderHeader = (props = {}, children = 'Content') =>
    render(
      <table>
        <thead>
          <tr>
            <TableHeader data-testid="header" {...props}>
              {children}
            </TableHeader>
          </tr>
        </thead>
      </table>,
    );

  describe('Basic rendering', () => {
    it('renders correctly with default props', () => {
      renderHeader({}, 'Name');

      const header = screen.getByRole('columnheader');
      expect(header).toBeInTheDocument();
      expect(header).toHaveTextContent('Name');
      expect(header).toHaveAttribute('scope', 'col');
    });

    it('has proper semantic markup and default styles', () => {
      renderHeader({}, 'Default Styles');

      const header = screen.getByTestId('header');
      expect(header.tagName).toBe('TH');
      expect(header).toHaveAttribute('scope', 'col');
      expect(header).toHaveClass(
        'font-semibold',
        'text-[var(--color-text-primary)]',
        'border-b',
        'border-[var(--color-border-primary)]',
        'bg-[var(--color-surface-secondary)]',
        'px-4',
        'py-3',
        'text-base',
        'text-left',
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
        renderHeader({ size });
        const header = screen.getByTestId('header');
        classes.forEach((className) => expect(header).toHaveClass(className));
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
        renderHeader({ align });
        expect(screen.getByTestId('header')).toHaveClass(expectedClass);
      },
    );
  });

  describe('Variant behavior', () => {
    it('applies sortable variant styles and attributes', () => {
      renderHeader({ variant: 'sortable' }, 'Sortable');

      const header = screen.getByTestId('header');
      expect(header).toHaveClass(
        'cursor-pointer',
        'hover:bg-[var(--color-surface-hover)]',
      );
      expect(header).toHaveAttribute('tabIndex', '0');
      expect(header).toHaveAttribute('role', 'columnheader');
      expect(header).toHaveAttribute('aria-sort', 'none');
    });

    it('does not apply sortable attributes for default variant', () => {
      renderHeader({ variant: 'default' }, 'Default');

      const header = screen.getByTestId('header');
      expect(header).not.toHaveClass('cursor-pointer');
      expect(header).not.toHaveAttribute('tabIndex');
      expect(header).not.toHaveAttribute('aria-sort');
    });
  });

  describe('Common component behavior', () => {
    it('applies custom className', () => {
      renderHeader({ className: 'custom-class' });
      expect(screen.getByTestId('header')).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLTableCellElement>();
      renderHeader({ ref });
      expect(ref.current).toBe(screen.getByTestId('header'));
    });

    it('passes through additional props', () => {
      renderHeader({ 'data-custom': 'value' });
      expect(screen.getByTestId('header')).toHaveAttribute(
        'data-custom',
        'value',
      );
    });

    it('adapts to light and dark themes', () => {
      const { rerender } = render(
        <ThemeProvider defaultColorScheme="light">
          <table>
            <thead>
              <tr>
                <TableHeader data-testid="header">Theme test</TableHeader>
              </tr>
            </thead>
          </table>
        </ThemeProvider>,
      );
      const header = screen.getByTestId('header');
      expect(header).toHaveClass('text-[var(--color-text-primary)]');

      rerender(
        <ThemeProvider defaultColorScheme="dark">
          <table>
            <thead>
              <tr>
                <TableHeader data-testid="header">Theme test</TableHeader>
              </tr>
            </thead>
          </table>
        </ThemeProvider>,
      );
      // Should still have the same theme variable classes
      expect(header).toHaveClass('text-[var(--color-text-primary)]');
    });
  });
});
