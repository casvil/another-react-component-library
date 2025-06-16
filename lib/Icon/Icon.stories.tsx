// src/components/Icon.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { AlertTriangle } from "lucide-react";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "atoms/Icon",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Small: Story = {
  args: {
    icon: <AlertTriangle />,
    size: 16,
    "aria-label": "Alert icon small",
  },
};

export const Medium: Story = {
  args: {
    icon: <AlertTriangle />,
    size: 24,
    "aria-label": "Alert icon medium",
  },
};

export const Large: Story = {
  args: {
    icon: <AlertTriangle />,
    size: 48,
    "aria-label": "Alert icon large",
  },
};
