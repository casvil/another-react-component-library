import React, { forwardRef } from 'react';
import clsx from 'clsx';

import type { Spacing } from '../../../@types/classes';
import { paddingClasses, marginClasses } from '../../../@types/classes';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Padding token */
  p?: Spacing;
  /** Margin token */
  m?: Spacing;
  /** Tailwind width value, e.g. `full`, `1/2`, `auto` */
  w?: string;
  /** Tailwind height value */
  h?: string;
  rounded?: boolean;
  shadow?: boolean;
}

/**
 * Box – a generic layout wrapper (styled `div` replacement).
 * Provides spacing, sizing, border, and shadow props for quick styling.
 * Use as a foundation for custom layouts or when you need a styled container.
 */
export const Box = React.memo(
  forwardRef<HTMLElement, BoxProps>(
    (
      {
        as: Component = 'div',
        p = '0',
        m = '0',
        w,
        h,
        rounded = false,
        shadow = false,
        className,
        ...rest
      },
      ref,
    ) => (
      <Component
        ref={ref}
        className={clsx(
          paddingClasses(p),
          marginClasses(m),
          w && `w-${w}`,
          h && `h-${h}`,
          rounded && 'rounded-md',
          shadow && 'shadow-md',
          className,
        )}
        {...rest}
      />
    ),
  ),
);

Box.displayName = 'Box';
