import React, { forwardRef } from 'react';
import clsx from 'clsx';

export type ContainerSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | 'full';

const maxWidthClasses: Record<ContainerSize, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  full: 'max-w-full',
};

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: ContainerSize;
  center?: boolean; // center horizontally via mx-auto
  padded?: boolean; // add default x padding
}

/**
 * Container – responsive wrapper for page sections.
 * Sets a max-width, horizontal centering, and padding for consistent layouts.
 * Use to wrap main content, forms, or any section that needs alignment.
 */
export const Container = React.memo(
  forwardRef<HTMLElement, ContainerProps>(
    (
      {
        as: Component = 'div',
        size = '2xl',
        center = true,
        padded = true,
        className,
        ...rest
      },
      ref,
    ) => (
      <Component
        ref={ref}
        className={clsx(
          maxWidthClasses[size],
          center && 'mx-auto',
          padded && 'px-4 sm:px-6 lg:px-8',
          className,
        )}
        {...rest}
      />
    ),
  ),
);

Container.displayName = 'Container';
