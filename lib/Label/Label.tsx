import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children?: React.ReactNode;
}

export const Label = ({ htmlFor, children }: LabelProps) => {
  if (!children) return null;

  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
};
