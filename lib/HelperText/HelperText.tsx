import React from "react";

export interface HelperTextProps {
  id: string;
  children?: React.ReactNode;
}

export const HelperText = ({ id, children }: HelperTextProps) => {
  if (!children) return null;
  return (
    <p id={id} role="note" className="text-xs text-gray-500">
      {children}
    </p>
  );
};
