import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
  it("renders label above the textarea by default", () => {
    render(<TextArea label="Description" />);
    const textarea = screen.getByRole("textbox", { name: "Description" });
    expect(textarea).toBeInTheDocument();

    // Check wrapper class for flex-col (label above)
    const wrapper = textarea.parentElement!;
    expect(wrapper).toHaveClass("flex-col");
  });

  it("renders label beside the textarea when labelPosition is beside", () => {
    render(<TextArea label="Summary" labelPosition="beside" />);
    const textarea = screen.getByRole("textbox", { name: "Summary" });
    expect(textarea).toBeInTheDocument();

    const wrapper = textarea.parentElement!;
    expect(wrapper).toHaveClass("flex-row");
  });

  it("applies custom class names to wrapper, label, and textarea", () => {
    render(
      <TextArea
        label="Custom"
        wrapperClassName="wrapper-style"
        labelClassName="label-style"
        className="textarea-style"
      />
    );

    const textarea = screen.getByRole("textbox", { name: "Custom" });
    const wrapper = textarea.parentElement!;
    const label = screen.getByText("Custom");

    expect(wrapper).toHaveClass("wrapper-style");
    expect(label).toHaveClass("label-style");
    expect(textarea).toHaveClass("textarea-style");
  });

  it("calls onChange handler when typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<TextArea label="Comment" onChange={handleChange} />);
    const textarea = screen.getByRole("textbox", { name: "Comment" });

    await user.type(textarea, "Hello");
    expect(handleChange).toHaveBeenCalled();
  });

  it("handles aria-invalid and aria-describedby correctly", () => {
    const { rerender } = render(<TextArea label="Notes" />);
    let textarea = screen.getByRole("textbox", { name: "Notes" });
    expect(textarea).not.toHaveAttribute("aria-invalid");

    rerender(<TextArea label="Description" />);
    textarea = screen.getByRole("textbox", { name: "Description" });
    expect(textarea).not.toHaveAttribute("aria-invalid");

    rerender(<TextArea label="Description" aria-invalid="true" />);
    textarea = screen.getByRole("textbox", { name: "Description" });
    expect(textarea).toHaveAttribute("aria-invalid", "true");

    rerender(
      <>
        <TextArea
          label="Description"
          id="desc-id"
          aria-describedby="desc-info"
        />
        <div id="desc-info">Description info</div>
      </>
    );
    textarea = screen.getByRole("textbox", { name: "Description" });
    expect(textarea).toHaveAttribute("aria-describedby", "desc-info");
  });
});
