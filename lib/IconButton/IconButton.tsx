import React, { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  "aria-label": string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
}

/**
 * IconButton atom component.
 * Renders a button containing only an icon, with variant and size support.
 * Requires an `aria-label` for accessibility and is styled with Tailwind CSS.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      size = "md",
      variant = "primary",
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
      secondary:
        "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
      tertiary:
        "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-300 border border-gray-300",
    };

    const sizes = {
      sm: "p-1 w-8 h-8",
      md: "p-2 w-10 h-10",
      lg: "p-3 w-12 h-12",
    };

    return (
      <button
        type="button"
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        disabled={disabled}
        aria-label={props["aria-label"]}
        {...props}
      >
        {icon}
      </button>
    );
  }
);
