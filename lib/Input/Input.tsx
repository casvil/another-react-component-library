import React, { forwardRef, ReactElement } from "react";
import clsx from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement;
  iconPosition?: "left" | "right";
}

/**
 * Input molecule component.
 * Renders a styled input with optional icon on left or right.
 * Support for disabled and read-only states.
 * Uses Tailwind CSS for styling and supports all native input attributes.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { icon, iconPosition = "left", className, disabled, readOnly, ...props },
    ref
  ) => {
    const hasIcon = Boolean(icon);

    const containerClass = clsx(
      "relative flex items-center",
      disabled && "opacity-60 cursor-not-allowed"
    );

    const inputClass = clsx(
      "block rounded-md border px-3 py-2 text-sm shadow-sm w-full",
      hasIcon && iconPosition === "left" && "pl-10",
      hasIcon && iconPosition === "right" && "pr-10",
      "focus:outline-none focus:ring-2 focus:ring-blue-500",
      disabled && "bg-gray-100 cursor-not-allowed",
      readOnly && "bg-gray-50 text-gray-500",
      className
    );

    const iconWrapperClass = clsx(
      "absolute inset-y-0 flex items-center",
      iconPosition === "left" ? "left-3" : "right-3",
      disabled && "text-gray-400",
      !disabled && "text-gray-500"
    );

    return (
      <div className={containerClass}>
        {hasIcon && (
          <span className={iconWrapperClass} aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          className={inputClass}
          {...props}
        />
      </div>
    );
  }
);
