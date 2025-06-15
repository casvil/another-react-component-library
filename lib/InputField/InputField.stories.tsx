import type { Meta, StoryObj } from "@storybook/react";

import { InputField } from "./InputField";

const meta = {
  title: "molecules/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: "We'll never share your email.",
  },
};

export const WithError: Story = {
  args: {
    error: "Email is required",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
