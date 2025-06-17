import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "./TextArea";
import { withFullWidthRoot } from "../../.storybook/decorators/withFullWidthRoot";

const meta = {
  title: "atoms/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Description",
    placeholder: "Type here...",
  },
  tags: ["autodocs"],
  argTypes: {
    labelPosition: {
      control: { type: "radio" },
      options: ["above", "beside"],
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LabelBeside: Story = {
  args: {
    labelPosition: "beside",
  },
};

export const CustomStylesFullWidth: Story = {
  args: {
    className: "border-red-500",
    labelClassName: "text-indigo-700 font-semibold",
    wrapperClassName: "bg-yellow-100 p-4 rounded",
  },
  decorators: [withFullWidthRoot],
};
