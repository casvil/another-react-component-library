import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "./Button"; // adjust the path as needed

describe("Button component", () => {
  test("renders with text", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test("can be disabled", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: "Disabled" });
    expect(button).toBeDisabled();
  });

  test("applies custom className", () => {
    render(<Button className="custom-class">Test</Button>);
    const button = screen.getByRole("button", { name: "Test" });
    expect(button).toHaveClass("custom-class");
  });

  test("has correct default styles", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button", { name: "Test" });

    // Replace with actual expected styles/classes your Button component applies by default
    expect(button.className).toContain("px-4");
    expect(button.className).toContain("py-2");
  });
});
