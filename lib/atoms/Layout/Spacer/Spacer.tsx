import React, { forwardRef } from 'react';
import clsx from 'clsx';

import type { Spacing } from '../../../@types/classes';
import { spacingClasses } from '../../../@types/classes';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Spacing; // fixed height (vertical spacer)
  grow?: boolean; // flex-grow to fill
}

/**
 * Spacer – flexible gap filler. Use inside flex layouts or as vertical rhythm helper.
 */
export const Spacer = React.memo(
  forwardRef<HTMLDivElement, SpacerProps>(
    ({ size = 'md', grow = false, className, ...rest }, ref) => {
      const heightClass = size === '0' ? '' : `h-${spacingClasses[size]}`;
      return (
        <div
          ref={ref}
          className={clsx(grow && 'flex-1', !grow && heightClass, className)}
          aria-hidden="true"
          {...rest}
        />
      );
    },
  ),
);

Spacer.displayName = 'Spacer';
