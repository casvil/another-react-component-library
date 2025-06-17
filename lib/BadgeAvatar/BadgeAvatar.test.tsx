import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BadgeAvatar } from "./BadgeAvatar";

describe("BadgeAvatar", () => {
  it("renders without crashing", () => {
    render(<BadgeAvatar avatarProps={{ name: "Alice" }}>Alice</BadgeAvatar>);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders the avatar initials when no image src is provided", () => {
    render(
      <BadgeAvatar avatarProps={{ name: "Jane Doe" }}>Jane Doe</BadgeAvatar>
    );
    const avatar = screen.getByRole("img", { name: "Jane Doe" });
    expect(avatar).toHaveTextContent("JD");
  });

  it("renders avatar image when src is provided", () => {
    render(
      <BadgeAvatar
        avatarProps={{ name: "John", src: "avatar.jpg", alt: "John's avatar" }}
      >
        John
      </BadgeAvatar>
    );
    const avatar = screen.getByRole("img", {
      name: "John's avatar",
    }) as HTMLImageElement;
    expect(avatar.tagName).toBe("IMG");
    expect(avatar.src).toContain("avatar.jpg");
  });

  it("renders the badge with text", () => {
    render(<BadgeAvatar avatarProps={{ name: "Sam" }}>Sam</BadgeAvatar>);
    expect(screen.getByText("Sam")).toBeInTheDocument();
  });

  it("applies className to the badge wrapper", () => {
    render(
      <BadgeAvatar className="bg-red-200" avatarProps={{ name: "Kim" }}>
        Kim
      </BadgeAvatar>
    );
    const badge = screen.getByRole("status");
    expect(badge.className).toContain("bg-red-200");
  });

  it("applies custom className to the inner text span via textClassName", () => {
    render(
      <BadgeAvatar
        avatarProps={{ name: "Leo" }}
        textClassName="ml-2 text-blue-500"
      >
        Leo
      </BadgeAvatar>
    );
    const text = screen.getByText("Leo");
    expect(text.className).toContain("ml-2");
    expect(text.className).toContain("text-blue-500");
  });

  it.each([
    ["sm", "w-8 h-8"],
    ["md", "w-12 h-12"],
    ["lg", "w-20 h-20"],
  ] as const)("renders avatar with size '%s'", (size, expectedClass) => {
    render(
      <BadgeAvatar avatarProps={{ name: "Size Test", size }}>
        Size Test
      </BadgeAvatar>
    );
    const avatar = screen.getByRole("img", { name: "Size Test" });
    expect(avatar.className).toContain(expectedClass);
  });

  // ✅ ARIA TESTS

  it("has role=status on the badge for screen reader announcements", () => {
    render(<BadgeAvatar avatarProps={{ name: "Aria" }}>Aria</BadgeAvatar>);
    const badge = screen.getByRole("status");
    expect(badge).toHaveAttribute("role", "status");
  });

  it("badge is aria-live polite for non-interruptive updates", () => {
    render(<BadgeAvatar avatarProps={{ name: "Polite" }}>Polite</BadgeAvatar>);
    const badge = screen.getByRole("status");
    expect(badge).toHaveAttribute("aria-live", "polite");
  });

  it("avatar uses name as accessible label by default", () => {
    render(<BadgeAvatar avatarProps={{ name: "Luna" }}>Luna</BadgeAvatar>);
    const avatar = screen.getByRole("img", { name: "Luna" });
    expect(avatar).toBeInTheDocument();
  });

  it("avatar uses alt text when provided for aria-label", () => {
    render(
      <BadgeAvatar avatarProps={{ name: "Alt test", alt: "Custom alt" }}>
        Alt test
      </BadgeAvatar>
    );
    const avatar = screen.getByRole("img", { name: "Custom alt" });
    expect(avatar).toBeInTheDocument();
  });
});
