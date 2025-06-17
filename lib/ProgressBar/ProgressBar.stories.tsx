import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "atoms/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  args: {
    value: 50,
    label: "Loading progress",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    label: { control: "text" },
    className: { control: "text" },
    barClassName: { control: "text" },
    labelClassName: { control: "text" },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullProgress: Story = {
  args: {
    value: 100,
    label: "Complete",
  },
};

export const EmptyProgress: Story = {
  args: {
    value: 0,
    label: "Not started",
  },
};

export const NoLabel: Story = {
  args: {
    value: 30,
    label: undefined,
  },
};

export const CustomColors: Story = {
  args: {
    value: 75,
    label: "Custom styled",
    className: "px-2 py-2 bg-gray-800 rounded-md",
    barClassName: "bg-green-500",
    labelClassName: "text-white font-semibold",
  },
};
