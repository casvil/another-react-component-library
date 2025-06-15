import React from "react";

export interface ErrorMessageProps {
  id: string;
  children?: React.ReactNode;
}

export const ErrorMessage = ({ id, children }: ErrorMessageProps) => {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="text-xs text-red-600">
      {children}
    </p>
  );
};
