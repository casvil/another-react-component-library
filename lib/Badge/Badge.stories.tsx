import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta = {
  title: "atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "New",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "error", "warning", "info"],
      description: "Visual style of the badge",
      defaultValue: "default",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the badge",
      defaultValue: "md",
    },
    className: {
      control: { type: "text" },
      description: "Custom Tailwind CSS classes",
    },
    children: {
      control: { type: "text" },
      description: "Content inside the badge",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    children: "Info",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Error",
    variant: "error",
  },
};

export const CustomStyle: Story = {
  args: {
    children: "Custom",
    className: "bg-purple-100 text-purple-800 border border-purple-300",
  },
};
