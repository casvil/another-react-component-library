import React, { forwardRef } from 'react';
import clsx from 'clsx';

import type { Spacing } from '../../../@types/classes';
import { gapClasses } from '../../../@types/classes';

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: Spacing;
}

/**
 * Flex – low-level flexbox layout component.
 * Provides full control over direction, alignment, justification, wrapping, and gap.
 * Use for advanced layouts, toolbars, and responsive arrangements.
 */
export const Flex = React.memo(
  forwardRef<HTMLElement, FlexProps>(
    (
      {
        as: Component = 'div',
        direction = 'row',
        align = 'stretch',
        justify = 'start',
        wrap = 'nowrap',
        gap = '0',
        className,
        ...rest
      },
      ref,
    ) => {
      const directionClass = `flex-${direction}`;
      const alignClass = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      }[align];
      const justifyClass = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      }[justify];
      const wrapClass = {
        wrap: 'flex-wrap',
        nowrap: 'flex-nowrap',
        'wrap-reverse': 'flex-wrap-reverse',
      }[wrap];

      return (
        <Component
          ref={ref}
          className={clsx(
            'flex',
            directionClass,
            alignClass,
            justifyClass,
            wrapClass,
            gapClasses(gap),
            className,
          )}
          {...rest}
        />
      );
    },
  ),
);

Flex.displayName = 'Flex';
