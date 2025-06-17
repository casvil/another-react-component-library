import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
  it("renders without crashing", () => {
    render(<TextArea />);

    const textarea = screen.getByRole("textbox");

    expect(textarea).toBeInTheDocument();
  });

  it("renders label with correct htmlFor and id", () => {
    render(<TextArea id="my-textarea" label="Description" />);

    const label = screen.getByText("Description");
    const textarea = screen.getByRole("textbox");

    expect(label).toHaveAttribute("for", "my-textarea");
    expect(textarea).toHaveAttribute("id", "my-textarea");
  });

  it("associates label with textarea for accessibility", () => {
    render(<TextArea id="my-textarea" label="Description" />);

    const textarea = screen.getByRole("textbox", { name: "Description" });

    expect(textarea).toBeInTheDocument();
  });

  it("supports label positioning above and beside", () => {
    const { rerender } = render(
      <TextArea label="Above" labelPosition="above" />
    );
    let wrapper = screen.getByLabelText("Above").parentElement!;
    expect(wrapper).toHaveClass("flex-col");

    rerender(<TextArea label="Beside" labelPosition="beside" />);

    wrapper = screen.getByLabelText("Beside").parentElement!;
    expect(wrapper).toHaveClass("flex-row");
  });

  it("applies custom styles to wrapper, label, and textarea", () => {
    render(
      <TextArea
        label="Styled"
        className="textarea-style"
        labelClassName="label-style"
        wrapperClassName="wrapper-style"
      />
    );

    const textarea = screen.getByRole("textbox", { name: "Styled" });
    expect(textarea).toHaveClass("textarea-style");

    const label = screen.getByText("Styled");
    expect(label).toHaveClass("label-style");

    const wrapper = label.parentElement!;
    expect(wrapper).toHaveClass("wrapper-style");
  });

  it("forwards ref to the textarea element", () => {
    const ref = { current: null };

    render(
      <TextArea label="RefTest" ref={ref as React.Ref<HTMLTextAreaElement>} />
    );

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("calls onChange handler when typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<TextArea label="Input" onChange={handleChange} />);

    const textarea = screen.getByRole("textbox", { name: "Input" });

    await user.type(textarea, "hello");

    expect(handleChange).toHaveBeenCalled();
  });

  it("has no aria-invalid attribute by default", () => {
    render(<TextArea label="Description" />);

    const textarea = screen.getByRole("textbox", { name: "Description" });

    expect(textarea).not.toHaveAttribute("aria-invalid");
  });

  it("passes aria-invalid when specified", () => {
    render(<TextArea label="Description" aria-invalid="true" />);

    const textarea = screen.getByRole("textbox", { name: "Description" });

    expect(textarea).toHaveAttribute("aria-invalid", "true");
  });

  it("passes aria-describedby when specified", () => {
    render(
      <>
        <TextArea label="Description" aria-describedby="desc-id" />
        <div id="desc-id">Description info</div>
      </>
    );

    const textarea = screen.getByRole("textbox", { name: "Description" });

    expect(textarea).toHaveAttribute("aria-describedby", "desc-id");
  });
});
