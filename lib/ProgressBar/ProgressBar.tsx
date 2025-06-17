import React from "react";
import clsx from "clsx";

import { Label } from "../Label/Label";

export interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
  className?: string; // outer container
  barClassName?: string; // filled progress bar
  labelClassName?: string; // label styling
}

/**
 * ProgressBar atom component.
 * Displays a progress bar with accessible attributes and optional label.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  className,
  barClassName,
  labelClassName,
}) => {
  const safeValue = Math.min(100, Math.max(0, value)); // clamp between 0 and 100

  return (
    <div className={clsx("w-full", className)}>
      {label && <Label className={labelClassName}>{label}</Label>}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
        className="relative w-full h-4 bg-gray-200 rounded overflow-hidden"
      >
        <div
          className={clsx(
            "h-full bg-indigo-600 transition-all duration-300 ease-in-out",
            barClassName
          )}
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
};
