import { forwardRef, TextareaHTMLAttributes, useId } from "react";
import clsx from "clsx";

import { Label } from "../Label/Label";

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  labelPosition?: "above" | "beside";
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
}

/**
 * TextArea molecule component.
 * Renders a customizable <textarea> with optional label support, using Tailwind CSS styles.
 * It supports label positioning (above or beside), accessibility via `aria-*` attributes,
 * and custom styling through wrapper, label, and textarea class names.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      labelPosition = "above",
      wrapperClassName,
      labelClassName,
      id,
      className,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const textareaId = id ?? autoId;

    const flexDirection = labelPosition === "beside" ? "flex-row" : "flex-col";

    return (
      <div className={clsx("flex gap-2", flexDirection, wrapperClassName)}>
        {label && (
          <Label htmlFor={textareaId} className={labelClassName}>
            {label}
          </Label>
        )}
        <textarea
          id={textareaId}
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
