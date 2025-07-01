import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { tableSizeClasses } from '../../@types/classes';
import type { Size } from '../../@types/classes';

export interface TableDataProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  size?: Size;
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'numeric' | 'action';
  truncate?: boolean;
  className?: string;
}

/**
 * TableData atom component. Renders a styled table data cell (td) with proper semantics.
 * Supports different sizes, text alignment, content variants (numeric, action), and text truncation.
 * Fully accessible with proper ARIA attributes and semantic td element.
 */
export const TableData = React.memo(
  forwardRef<HTMLTableCellElement, TableDataProps>(
    (
      {
        children,
        size = 'md',
        align = 'left',
        variant = 'default',
        truncate = false,
        className,
        ...props
      },
      ref,
    ) => {
      const cellClasses = clsx(
        'text-gray-900 border-b border-gray-200',
        tableSizeClasses.cell.padding[size],
        tableSizeClasses.cell.text[size],
        {
          'text-left': align === 'left' && variant !== 'action',
          'text-center': align === 'center' || variant === 'action',
          'text-right': align === 'right' && variant !== 'action',
          'font-mono tabular-nums': variant === 'numeric',
          'truncate max-w-0': truncate,
        },
        className,
      );

      return (
        <td
          ref={ref}
          className={cellClasses}
          {...(variant === 'numeric' && {
            'data-type': 'numeric',
          })}
          {...props}
        >
          {truncate ? (
            <div
              className="truncate"
              title={typeof children === 'string' ? children : undefined}
            >
              {children}
            </div>
          ) : (
            children
          )}
        </td>
      );
    },
  ),
);

TableData.displayName = 'TableData';
