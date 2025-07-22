import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { themeClasses } from '../../theme/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * Divider atom component.
 * Renders an accessible horizontal or vertical divider line,
 * fills the container's full width or height accordingly.
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', className, ...props }, ref) => {
    const isHorizontal = orientation === 'horizontal';

    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={clsx(
          'border-solid border',
          themeClasses.border.primary,
          isHorizontal ? 'h-px w-full' : 'w-px h-full mx-2',
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';
