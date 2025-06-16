import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  indeterminate?: boolean;
  className?: string; // for the <input>
  labelClassName?: string; // for the <span>
  wrapperClassName?: string; // for the outer <label>
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      onChange,
      label,
      indeterminate = false,
      className,
      labelClassName,
      wrapperClassName,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <label
        className={clsx(
          "inline-flex items-center space-x-2 cursor-pointer select-none",
          disabled && "cursor-not-allowed opacity-50",
          wrapperClassName
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-checked={indeterminate ? "mixed" : checked}
          className={clsx(
            "form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring focus:ring-primary/30",
            className
          )}
          {...rest}
        />
        {label && (
          <span className={clsx("text-sm text-gray-800", labelClassName)}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
