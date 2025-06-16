import React from "react";
import clsx from "clsx";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ReactElement;
  size?: number | string;
  color?: string;
  className?: string;
  "aria-label"?: string;
}

/**
 * Icon molecule component.
 * Renders any React icon with configurable size, color, and accessibility.
 */
export const Icon = ({
  icon,
  size = 24,
  color = "currentColor",
  className,
  "aria-label": ariaLabel,
  ...props
}: IconProps) => {
  const numericSize =
    typeof size === "string" ? parseInt(size, 10) || 24 : size;

  return (
    <span
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={clsx("inline-flex items-center justify-center", className)}
      style={{
        width: numericSize,
        height: numericSize,
        color,
        lineHeight: 0,
      }}
      {...props}
    >
      {React.cloneElement(icon as React.ReactElement<any>, {
        size: numericSize,
        color,
        focusable: "false", // prevent SVG from receiving keyboard focus
      })}
    </span>
  );
};
