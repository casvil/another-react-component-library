import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders without crashing", () => {
    render(<Checkbox aria-label="checkbox" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Checkbox label="Agree" />);
    expect(screen.getByText("Agree")).toBeInTheDocument();
  });

  it("calls onChange when clicked", async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Agree" onChange={onChange} />);
    await userEvent.click(screen.getByRole("checkbox"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("respects checked state", () => {
    render(<Checkbox checked label="Agree" aria-label="checkbox" />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("respects disabled state", () => {
    render(<Checkbox disabled label="Agree" />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("applies indeterminate aria state", () => {
    render(<Checkbox indeterminate aria-label="checkbox" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-checked", "mixed");
  });

  it("forwards ref and sets indeterminate manually", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} indeterminate />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("applies custom className", () => {
    render(<Checkbox className="custom-style" aria-label="checkbox" />);
    expect(screen.getByRole("checkbox")).toHaveClass("custom-style");
  });
});
