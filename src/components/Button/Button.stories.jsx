import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: "Click me",
  },
};

export const WithClickHandler = {
  args: {
    children: "Click me",
    onClick: () => alert("Button clicked!"),
  },
};

export const Disabled = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const CustomClassName = {
  args: {
    children: "Custom Class",
    className: "custom-class",
  },
};

export const Primary = {
  args: {
    children: "Primary",
    className: "bg-blue-500 text-white px-4 py-2",
  },
};

export const Small = {
  args: {
    children: "Small",
    className: "text-sm px-2 py-1",
  },
};

export const Large = {
  args: {
    children: "Large",
    className: "text-lg px-6 py-3",
  },
};

export const WithIcon = {
  args: {
    children: (
      <>
        <span role="img" aria-label="star">
          ⭐
        </span>
        Starred
      </>
    ),
  },
};

export const FullWidth = {
  args: {
    children: "Full Width",
    className: "w-full",
  },
};
