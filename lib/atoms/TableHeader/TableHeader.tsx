import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { tableSizeClasses } from '../../@types/classes';
import type { Size } from '../../@types/classes';

export interface TableHeaderProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  size?: Size;
  variant?: 'default' | 'sortable';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

/**
 * TableHeader atom component. Renders a styled table header cell (th) with proper semantics.
 * Supports different sizes, text alignment, and sortable variant for interactive headers.
 * Fully accessible with proper ARIA attributes and semantic th element.
 */
export const TableHeader = React.memo(
  forwardRef<HTMLTableCellElement, TableHeaderProps>(
    (
      {
        children,
        size = 'md',
        variant = 'default',
        align = 'left',
        className,
        ...props
      },
      ref,
    ) => {
      const headerClasses = clsx(
        'font-semibold text-gray-900 border-b border-gray-200 bg-gray-50',
        tableSizeClasses.header.padding[size],
        tableSizeClasses.header.text[size],
        {
          'text-left': align === 'left',
          'text-center': align === 'center',
          'text-right': align === 'right',
          'cursor-pointer hover:bg-gray-100 transition-colors':
            variant === 'sortable',
        },
        className,
      );

      return (
        <th
          ref={ref}
          scope="col"
          className={headerClasses}
          {...(variant === 'sortable' && {
            tabIndex: 0,
            role: 'columnheader',
            'aria-sort': 'none',
          })}
          {...props}
        >
          {children}
        </th>
      );
    },
  ),
);

TableHeader.displayName = 'TableHeader';
