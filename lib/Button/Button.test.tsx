import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders the label", () => {
    render(<Button label="Submit" />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("supports all variants", () => {
    const variants = ["primary", "secondary", "tertiary"] as const;

    variants.forEach((variant) => {
      render(<Button label={variant} variant={variant} />);
      expect(screen.getByText(variant)).toBeInTheDocument();
    });
  });

  it("supports all sizes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      render(<Button label={size} size={size} />);
      expect(screen.getByText(size)).toBeInTheDocument();
    });
  });

  it("renders left icon", () => {
    render(
      <Button
        label="Back"
        icon={<ArrowLeft data-testid="icon-left" />}
        iconPosition="left"
      />
    );
    const icon = screen.getByTestId("icon-left");
    const button = screen.getByRole("button", { name: /back/i });

    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveClass("mr-2");
    expect(button).toContainElement(icon);
  });

  it("renders right icon", () => {
    render(
      <Button
        label="Next"
        icon={<ArrowRight data-testid="icon-right" />}
        iconPosition="right"
      />
    );
    const icon = screen.getByTestId("icon-right");
    const button = screen.getByRole("button", { name: /next/i });

    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveClass("ml-2");
    expect(button).toContainElement(icon);
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button", { name: /click/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(<Button label="Disabled" onClick={handleClick} disabled />);
    fireEvent.click(screen.getByRole("button", { name: /disabled/i }));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies additional className", () => {
    render(<Button label="Styled" className="custom-class" />);
    expect(screen.getByRole("button", { name: /styled/i })).toHaveClass(
      "custom-class"
    );
  });

  it("has proper accessibility role", () => {
    render(<Button label="Accessible" />);
    expect(
      screen.getByRole("button", { name: /accessible/i })
    ).toBeInTheDocument();
  });

  it("supports keyboard focus styling", () => {
    render(<Button label="Focus Me" />);
    const button = screen.getByRole("button", { name: /focus me/i });
    button.focus();
    expect(button).toHaveFocus();
  });
});
