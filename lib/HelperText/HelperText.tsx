import React from "react";
import clsx from "clsx";

export interface HelperTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  id: string;
  children?: React.ReactNode;
  className?: string;
}

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
