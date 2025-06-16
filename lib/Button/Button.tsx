import React, { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  label: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

/**
 * Button atom component.
 * Renders a styled button with support for variants, sizes, and optional icons.
 * Uses Tailwind for styling and supports accessibility, custom classes, and disabled state.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      label,
      icon,
      iconPosition = "left",
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
      secondary:
        "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
      tertiary:
        "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-300 border border-gray-300",
    };

    const sizes = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-5 py-3",
    };

    return (
      <button
        type="button"
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {label}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);
