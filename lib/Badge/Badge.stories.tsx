import type { Meta, StoryObj } from "@storybook/react";
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

import { Badge } from "./Badge";

const meta = {
  title: "atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "New",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <Info className="w-4 h-4" />,
    children: "Info",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    icon: <CheckCircle className="w-4 h-4" />,
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    icon: <AlertTriangle className="w-4 h-4" />,
    children: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    icon: <XCircle className="w-4 h-4" />,
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
