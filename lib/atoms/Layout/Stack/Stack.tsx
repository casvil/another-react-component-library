import React, { forwardRef } from 'react';
import clsx from 'clsx';

import type { Spacing } from '../../../@types/classes';
import { gapClasses } from '../../../@types/classes';

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  direction?: 'vertical' | 'horizontal';
  gap?: Spacing;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

/**
 * Stack – flexbox layout for vertical or horizontal stacking with consistent gap.
 * Ideal for lists, forms, toolbars, and any UI that needs evenly spaced children.
 * Supports alignment and justification props for flexible layouts.
 */
export const Stack = React.memo(
  forwardRef<HTMLElement, StackProps>(
    (
      {
        as: Component = 'div',
        direction = 'vertical',
        gap = 'md',
        align = 'stretch',
        justify = 'start',
        className,
        ...rest
      },
      ref,
    ) => {
      const flexDirection = direction === 'vertical' ? 'flex-col' : 'flex-row';

      const alignMap = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
      } as const;

      const justifyMap = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      } as const;

      return (
        <Component
          ref={ref}
          className={clsx(
            'flex',
            flexDirection,
            gapClasses(gap),
            alignMap[align],
            justifyMap[justify],
            className,
          )}
          {...rest}
        />
      );
    },
  ),
);

Stack.displayName = 'Stack';
