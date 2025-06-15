import { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "./ErrorMessage";

const meta = {
  title: "atoms/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    id: "username-error",
    children: "This field is required.",
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hidden: Story = {
  args: {
    children: undefined,
  },
};

export const WithCustomStyles: Story = {
  args: {
    children: "Bold and red error message",
    className: "font-bold underline",
  },
};
