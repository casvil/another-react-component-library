import type { Meta, StoryObj } from "@storybook/react";

import { HelperText } from "./HelperText";

const meta = {
  title: "atoms/HelperText",
  component: HelperText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    id: "email-helper",
    children: "We’ll never share your email.",
  },
  argTypes: {
    id: {
      control: "text",
      description: "The ID that matches aria-describedby.",
    },
    children: {
      control: "text",
      description: "Helper text to guide the user.",
    },
  },
} satisfies Meta<typeof HelperText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongHelperText: Story = {
  args: {
    children:
      "This information is used to send you notifications and password resets.",
  },
};

export const WithCustomStyles: Story = {
  args: {
    children: "Custom colored helper text",
    className: "text-red-600 italic",
  },
};
