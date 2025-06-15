import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { InputField } from "./InputField";

describe("InputField", () => {
  it("renders label, input, helperText", () => {
    render(
      <InputField
        label="Email"
        placeholder="you@example.com"
        helperText="Helper text"
        data-testid="inputfield"
      />
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(screen.getByText("Helper text")).toBeInTheDocument();
  });

  it("renders error message and aria attributes", () => {
    render(
      <InputField label="Email" error="Required" data-testid="inputfield" />
    );

    expect(screen.getByText("Required")).toBeInTheDocument();
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby");
  });

  it("does not render helperText if error is present", () => {
    render(
      <InputField
        label="Email"
        error="Error"
        helperText="Helper text"
        data-testid="inputfield"
      />
    );

    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("accepts and forwards className to input", () => {
    render(
      <InputField label="Email" className="w-64" data-testid="inputfield" />
    );

    expect(screen.getByLabelText("Email")).toHaveClass("w-64");
  });

  it("supports disabled input", () => {
    render(<InputField label="Email" disabled />);
    expect(screen.getByLabelText("Email")).toBeDisabled();
  });
});
