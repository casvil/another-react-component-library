import { forwardRef, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

import { Label } from "../Label/Label";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelPosition?: "above" | "beside";
  className?: string; // textarea styles
  labelClassName?: string;
  wrapperClassName?: string;
}

/**
 * TextArea atom component.
 * Renders a textarea with optional label positioned above or beside.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      labelPosition = "above",
      className,
      labelClassName,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          "flex",
          labelPosition === "beside"
            ? "flex-row items-center space-x-2"
            : "flex-col space-y-1",
          wrapperClassName
        )}
      >
        {label && (
          <Label
            htmlFor={props.id}
            className={clsx(
              labelPosition === "beside" && "inline-block",
              labelClassName
            )}
          >
            {label}
          </Label>
        )}
        <textarea
          ref={ref}
          className={clsx(
            "resize-none rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
