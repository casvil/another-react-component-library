import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelperText } from "./HelperText";

describe("HelperText", () => {
  it("renders nothing if no children", () => {
    const { container } = render(<HelperText id="helper-1">{null}</HelperText>);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders helper text with correct content and id", () => {
    render(<HelperText id="helper-1">This is helper text</HelperText>);

    const helperText = screen.getByRole("note");

    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent("This is helper text");
    expect(helperText).toHaveAttribute("id", "helper-1");
  });
});
