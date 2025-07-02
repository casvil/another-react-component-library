import React, { forwardRef } from 'react';
import clsx from 'clsx';

import type { Spacing } from '../../../@types/classes';
import { gapClasses } from '../../../@types/classes';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rows?: number;
  gap?: Spacing;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'stretch';
}

/**
 * Grid – CSS Grid wrapper with shorthand props for common utilities.
 */
export const Grid = React.memo(
  forwardRef<HTMLElement, GridProps>(
    (
      {
        as: Component = 'div',
        cols = 12,
        rows,
        gap = '0',
        autoFlow,
        align = 'stretch',
        justify = 'stretch',
        className,
        ...rest
      },
      ref,
    ) => {
      const colsClass = `grid-cols-${cols}`;
      const rowsClass = rows ? `grid-rows-${rows}` : undefined;
      const autoFlowClass = autoFlow
        ? `auto-flow-${autoFlow}`.replace(' ', '-')
        : undefined;
      const alignClass = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
      }[align];
      const justifyClass = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        stretch: 'justify-stretch',
      }[justify];

      return (
        <Component
          ref={ref}
          className={clsx(
            'grid',
            colsClass,
            rowsClass,
            autoFlowClass,
            gapClasses(gap),
            alignClass,
            justifyClass,
            className,
          )}
          {...rest}
        />
      );
    },
  ),
);

Grid.displayName = 'Grid';
