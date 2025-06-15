import React, { forwardRef } from "react";
import clsx from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "block rounded-md border px-3 py-2 text-sm shadow-sm",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          props.disabled && "bg-gray-100 cursor-not-allowed",
          props.readOnly && "bg-gray-50 text-gray-500",
          className
        )}
        {...props}
      />
    );
  }
);
