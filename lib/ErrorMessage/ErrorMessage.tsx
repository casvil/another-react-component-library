import React from "react";
import clsx from "clsx";

export interface ErrorMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  id: string;
  children?: React.ReactNode;
  className?: string;
}

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
