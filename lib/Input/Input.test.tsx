import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "./Input";

describe("Input", () => {
  it("renders input with placeholder", () => {
    render(<Input placeholder="Enter text" aria-label="input-field" />);
    const input = screen.getByRole("textbox", { name: "input-field" });
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Enter text");
  });

  it("accepts user input", async () => {
    render(<Input aria-label="input-field" />);
    const input = screen.getByRole("textbox", { name: "input-field" });
    await userEvent.type(input, "Hello");
    expect((input as HTMLInputElement).value).toBe("Hello");
  });

  it("supports disabling", () => {
    render(<Input disabled aria-label="input-field" />);
    const input = screen.getByRole("textbox", { name: "input-field" });
    expect(input).toBeDisabled();
  });

  it("supports readOnly", () => {
    render(<Input readOnly aria-label="input-field" />);
    const input = screen.getByRole("textbox", { name: "input-field" });
    expect(input).toHaveAttribute("readonly");
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" aria-label="input-field" />);
    const input = screen.getByRole("textbox", { name: "input-field" });
    expect(input).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} aria-label="input-field" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
