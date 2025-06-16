import React from "react";
import clsx from "clsx";

export interface ErrorMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  id: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * ErrorMessage atom component.
 * Displays an accessible error message below a form field.
 * Renders nothing if no children are provided and sets `role="alert"` for screen readers.
 */
export const ErrorMessage = ({
  id,
  children,
  className,
  ...props
}: ErrorMessageProps) => {
  if (!children) return null;

  return (
    <p
      id={id}
      role="alert"
      className={clsx("text-xs text-red-600", className)}
      {...props}
    >
      {children}
    </p>
  );
};
