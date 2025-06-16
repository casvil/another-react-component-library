import React from "react";
import clsx from "clsx";

export interface HelperTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  id: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * HelperText atom component.
 * Provides additional context or guidance below a form field.
 * Renders nothing if no content is passed and uses `role="note"` for accessibility.
 */
export const HelperText = ({
  id,
  children,
  className,
  ...props
}: HelperTextProps) => {
  if (!children) return null;

  return (
    <p
      id={id}
      role="note"
      className={clsx("text-xs text-gray-500", className)}
      {...props}
    >
      {children}
    </p>
  );
};
