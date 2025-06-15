import React from "react";
import clsx from "clsx";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children?: React.ReactNode;
}

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
      className={clsx("block text-sm font-medium text-gray-700", className)}
      {...props}
    >
      {children}
    </label>
  );
};
