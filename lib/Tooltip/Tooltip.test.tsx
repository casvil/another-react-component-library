import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

describe("Tooltip", () => {
  it("renders the children element", () => {
    render(
      <Tooltip content="Tooltip text" id="tooltip-1">
        <Button label="Hover me"></Button>
      </Tooltip>
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("does not render tooltip content by default", () => {
    render(
      <Tooltip content="Tooltip text" id="tooltip-1">
        <Button label="Hover me"></Button>
      </Tooltip>
    );
    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });

  it("shows tooltip content on hover", async () => {
    render(
      <Tooltip content="Tooltip text" id="tooltip-1">
        <Button label="Hover me"></Button>
      </Tooltip>
    );

    const button = screen.getByText("Hover me");
    fireEvent.mouseOver(button);

    expect(await screen.findByText("Tooltip text")).toBeInTheDocument();
  });

  it("adds aria-describedby when tooltip is visible", async () => {
    render(
      <Tooltip id="tooltip-1" content="Tooltip content" delay={100}>
        <Button label="Hover me"></Button>
      </Tooltip>
    );

    const button = screen.getByText("Hover me");

    fireEvent.mouseOver(button);

    // Wait for the delay + state update
    await waitFor(() => {
      expect(button).toHaveAttribute("aria-describedby", "tooltip-1");
    });
  });

  it("removes aria-describedby when tooltip is hidden", async () => {
    render(
      <Tooltip content="Tooltip text" id="tooltip-1">
        <Button label="Hover me"></Button>
      </Tooltip>
    );

    const button = screen.getByText("Hover me");
    fireEvent.mouseOver(button);

    // Wait until aria-describedby appears (tooltip visible)
    await waitFor(() => {
      expect(button).toHaveAttribute("aria-describedby", "tooltip-1");
    });

    fireEvent.mouseLeave(button);

    // After mouse leaves, aria-describedby should be removed immediately
    expect(button).not.toHaveAttribute("aria-describedby");
  });
});
