/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { tableSizeClasses } from '../../@types/classes';
import type { Size } from '../../@types/classes';
import { TableHeader } from '../../atoms/TableHeader/TableHeader';
import { TableRow } from '../../atoms/TableRow/TableRow';
import { TableData } from '../../atoms/TableData/TableData';

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  size?: Size;
  variant?: 'default' | 'striped' | 'bordered';
  layout?: 'auto' | 'fixed';
  responsive?: boolean;
  hover?: boolean;
  className?: string;
  caption?: string;
}

// Generic props container used when cloning React elements while adding size.
type SizeableProps = Record<string, unknown> & {
  size?: Size;
  children?: React.ReactNode;
};

// Type guards with better typing
const isReactElement = (
  node: React.ReactNode,
): node is React.ReactElement<any> => {
  return React.isValidElement(node);
};

const isTableRow = (
  element: React.ReactElement,
): element is React.ReactElement<any> => {
  return element.type === TableRow;
};

const isTableHeader = (
  element: React.ReactElement,
): element is React.ReactElement<any> => {
  return element.type === TableHeader;
};

const isTableData = (
  element: React.ReactElement,
): element is React.ReactElement<any> => {
  return element.type === TableData;
};

/**
 * Table organism component. A comprehensive table component that provides structure
 * and styling for tabular data. Works with TableHeader, TableRow, and TableData atoms.
 * Supports responsive design, hover effects, striped rows, and fixed layouts.
 * Fully accessible with proper ARIA attributes and semantic table structure.
 */
export const Table = React.memo(
  forwardRef<HTMLTableElement, TableProps>(
    (
      {
        children,
        size = 'md',
        variant = 'default',
        layout = 'auto',
        responsive = false,
        hover = false,
        className,
        caption,
        ...props
      },
      ref,
    ) => {
      const tableClasses = clsx(
        'w-full border-collapse',
        {
          'table-auto': layout === 'auto',
          'table-fixed': layout === 'fixed',
        },
        tableSizeClasses.text[size],
        className,
      );

      const containerClasses = clsx(
        'overflow-hidden',
        tableSizeClasses.container.borderRadius[size],
        {
          'border border-gray-200': variant === 'bordered',
          'overflow-x-auto': responsive,
          'shadow-sm': variant !== 'bordered',
        },
      );

      const wrapperClasses = clsx({
        'min-w-full inline-block align-middle': responsive,
      });

      // Enhanced children processing to pass down size prop
      const enhancedChildren = React.Children.map(children, (child) => {
        if (!isReactElement(child)) return child;

        // Handle tbody specifically for size prop passing
        if (child.type === 'tbody') {
          const enhancedTbodyChildren = React.Children.map(
            (child.props as { children?: React.ReactNode }).children,
            (row: React.ReactNode) => {
              if (!isReactElement(row) || !isTableRow(row)) return row;

              // Pass down size if not already set
              const rowProps: SizeableProps = {
                ...(row.props as SizeableProps),
              };
              if (!rowProps.size) {
                rowProps.size = size;
              }

              // Process row children to pass down size
              const enhancedRowChildren = React.Children.map(
                (row.props as { children?: React.ReactNode }).children,
                (cell: React.ReactNode) => {
                  if (
                    !isReactElement(cell) ||
                    (!isTableData(cell) && !isTableHeader(cell))
                  ) {
                    return cell;
                  }

                  const cellProps: SizeableProps = {
                    ...(cell.props as SizeableProps),
                  };
                  if (!cellProps.size) {
                    cellProps.size = size;
                  }

                  return React.cloneElement(
                    cell as React.ReactElement<SizeableProps>,
                    cellProps,
                  );
                },
              );

              return React.cloneElement(
                row as React.ReactElement<SizeableProps>,
                {
                  ...rowProps,
                  children: enhancedRowChildren,
                },
              );
            },
          );

          return React.cloneElement(
            child as React.ReactElement<SizeableProps>,
            {
              ...(child.props as SizeableProps),
              children: enhancedTbodyChildren,
            },
          );
        }

        // Handle thead
        if (child.type === 'thead') {
          const enhancedTheadChildren = React.Children.map(
            (child.props as { children?: React.ReactNode }).children,
            (row: React.ReactNode) => {
              if (!isReactElement(row) || !isTableRow(row)) return row;

              const rowProps: SizeableProps = {
                ...(row.props as SizeableProps),
              };
              if (!rowProps.size) {
                rowProps.size = size;
              }

              const enhancedRowChildren = React.Children.map(
                (row.props as { children?: React.ReactNode }).children,
                (header: React.ReactNode) => {
                  if (!isReactElement(header) || !isTableHeader(header)) {
                    return header;
                  }

                  const headerProps: SizeableProps = {
                    ...(header.props as SizeableProps),
                  };
                  if (!headerProps.size) {
                    headerProps.size = size;
                  }

                  return React.cloneElement(
                    header as React.ReactElement<SizeableProps>,
                    headerProps,
                  );
                },
              );

              return React.cloneElement(
                row as React.ReactElement<SizeableProps>,
                {
                  ...rowProps,
                  children: enhancedRowChildren,
                },
              );
            },
          );

          return React.cloneElement(
            child as React.ReactElement<SizeableProps>,
            {
              ...(child.props as SizeableProps),
              children: enhancedTheadChildren,
            },
          );
        }

        // Handle direct TableRow children (not in tbody/thead)
        if (isTableRow(child)) {
          const rowProps: SizeableProps = { ...(child.props as SizeableProps) };
          if (!rowProps.size) {
            rowProps.size = size;
          }
          return React.cloneElement(
            child as React.ReactElement<SizeableProps>,
            rowProps,
          );
        }

        // Handle direct TableData or TableHeader children - with explicit type assertion
        if (isTableData(child) || isTableHeader(child)) {
          const cellElement = child as React.ReactElement<SizeableProps>;
          const cellProps: SizeableProps = {
            ...(cellElement.props as SizeableProps),
          };
          if (!cellProps.size) {
            cellProps.size = size;
          }
          return React.cloneElement(cellElement, cellProps);
        }

        return child;
      });

      const tableElement = (
        <table
          ref={ref}
          className={clsx(tableClasses, {
            // CSS-based striping using nth-child
            '[&_tbody_tr:nth-child(even)]:bg-gray-50': variant === 'striped',
            '[&_tbody_tr:hover]:bg-gray-100': hover,
          })}
          role="table"
          aria-label={caption ? undefined : 'Data table'}
          {...props}
        >
          {caption && (
            <caption className="text-left text-gray-700 font-medium mb-4 px-2">
              {caption}
            </caption>
          )}
          {enhancedChildren}
        </table>
      );

      if (responsive) {
        return (
          <div className={containerClasses}>
            <div className={wrapperClasses}>{tableElement}</div>
          </div>
        );
      }

      return <div className={containerClasses}>{tableElement}</div>;
    },
  ),
);

Table.displayName = 'Table';
