import type { Meta, StoryObj } from "@storybook/react";
import { X } from "lucide-react";

import { Tooltip, TooltipProps } from "./Tooltip";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";

const meta = {
  title: "atoms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    delay: {
      control: { type: "number", min: 0, max: 2000, step: 50 },
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "tooltip-1",
    content: "This is a tooltip",
    children: <Button label="Hover me"></Button>,
    position: "top",
    delay: 150,
  },
};

export const Positions: Story = {
  args: {
    children: <Button label="Position"></Button>,
    content: "Tooltip",
    id: "tooltip-positions",
    position: "top",
  },
  render: (args) => (
    <div className="flex gap-8 items-center justify-center">
      <Tooltip
        {...args}
        id="tooltip-top"
        position="top"
        content="Tooltip on top"
      >
        <Button label="Top"></Button>
      </Tooltip>
      <Tooltip
        {...args}
        id="tooltip-right"
        position="right"
        content="Tooltip on right"
      >
        <Button label="Right"></Button>
      </Tooltip>
      <Tooltip
        {...args}
        id="tooltip-bottom"
        position="bottom"
        content="Tooltip on bottom"
      >
        <Button label="Bottom"></Button>
      </Tooltip>
      <Tooltip
        {...args}
        id="tooltip-left"
        position="left"
        content="Tooltip on left"
      >
        <Button label="Left"></Button>
      </Tooltip>
    </div>
  ),
};

export const CustomDelay: Story = {
  args: {
    id: "tooltip-delay",
    content: "Tooltip with 1 second delay",
    children: <IconButton icon={<X />} aria-label="close" />,
    delay: 1000,
    position: "top",
  },
};

export const WithCustomStyles: Story = {
  args: {
    id: "tooltip-custom",
    content: "Styled tooltip",
    children: <Button label="Hover me"></Button>,
    className: "bg-indigo-600 text-white px-3 py-2 rounded-lg shadow-xl",
    position: "top",
  },
};
