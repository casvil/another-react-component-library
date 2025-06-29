import React from 'react';
import clsx from 'clsx';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  children?: React.ReactNode;
}

/**
 * Label atom component.
 * Renders a styled label linked to a form input via htmlFor.
 * Returns null if no children are provided.
 */
export const Label = React.memo<LabelProps>(
  ({ htmlFor, children, className, ...props }) => {
    if (!children) return null;

    return (
      <label
        htmlFor={htmlFor}
        className={clsx('text-sm font-medium text-gray-700', className)}
        {...props}
      >
        {children}
      </label>
    );
  },
);

Label.displayName = 'Label';
