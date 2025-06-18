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
export const Label = ({
  htmlFor,
  children,
  className,
  ...props
}: LabelProps) => {
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
};
