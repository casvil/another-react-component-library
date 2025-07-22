import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { themeClasses } from '../../theme/utils';

import { tableSizeClasses, tableBaseClasses } from '../../@types/classes';
import type { Size } from '../../@types/classes';

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  size?: Size;
  variant?: 'default' | 'striped' | 'highlighted';
  interactive?: boolean;
  className?: string;
}

/**
 * TableRow atom component. Renders a styled table row (tr) with proper semantics.
 * Supports different sizes, visual variants (striped, highlighted), and interactive behavior.
 * Fully accessible with proper ARIA attributes and semantic tr element.
 */
export const TableRow = React.memo(
  forwardRef<HTMLTableRowElement, TableRowProps>(
    (
      {
        children,
        size = 'md',
        variant = 'default',
        interactive = false,
        className,
        ...props
      },
      ref,
    ) => {
      const rowClasses = clsx(
        tableBaseClasses.row,
        tableSizeClasses.row.height[size],
        {
          'bg-[var(--color-surface-primary)]': variant === 'default',
          'bg-[var(--color-surface-secondary)]': variant === 'striped',
          'bg-[var(--color-primary-50)]': variant === 'highlighted',
          'cursor-pointer transition-colors': interactive,
          [themeClasses.surface.hover]: interactive,
          'focus:outline-none focus:ring-2 focus:ring-inset': interactive,
          [themeClasses.border.focus]: interactive,
        },
        className,
      );

      return (
        <tr
          ref={ref}
          className={rowClasses}
          {...(interactive && {
            tabIndex: 0,
            role: 'row',
          })}
          {...props}
        >
          {children}
        </tr>
      );
    },
  ),
);

TableRow.displayName = 'TableRow';
