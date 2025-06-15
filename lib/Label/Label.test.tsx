import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  it("renders label with htmlFor attribute", () => {
    render(<Label htmlFor="input-1">Name</Label>);
    const label = screen.getByText("Name");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "input-1");
  });

  it("renders nothing if no children", () => {
    const { container } = render(<Label htmlFor="input-1">{null}</Label>);
    expect(container).toBeEmptyDOMElement();
  });
});
