// lib/TimeDisplay/TimeDisplay.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TimeDisplay, TimeDisplayProps } from "./TimeDisplay";

const meta = {
  title: "atoms/TimeDisplay",
  component: TimeDisplay,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    time: { control: "date" },
    format: {
      control: "select",
      options: ["HH:mm:ss", "HH:mm", "mm:ss"],
    },
    className: { control: false },
    bordered: { control: "boolean" },
  },
} satisfies Meta<typeof TimeDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    time: new Date(),
    format: "HH:mm:ss",
  },
};

export const HoursAndMinutes: Story = {
  args: {
    time: new Date(),
    format: "HH:mm",
  },
};

export const MinutesAndSeconds: Story = {
  args: {
    time: new Date(),
    format: "mm:ss",
  },
};

export const Bordered: Story = {
  args: {
    time: new Date(),
    format: "HH:mm:ss",
    bordered: true,
  },
};

export const WithDateUTC: Story = {
  args: {
    time: Date.UTC(2025, 0, 1, 5, 6, 7),
    format: "HH:mm:ss",
    bordered: true,
  },
};

export const CustomStyleDigital7Font: Story = {
  args: {
    time: new Date(),
    format: "HH:mm:ss",
    bordered: true,
    className: "digital7 text-3xl text-gray-300 border-gray-300 px-0 py-2",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses a custom `digital-7` font (make sure to load it globally in your project).",
      },
    },
  },
};
