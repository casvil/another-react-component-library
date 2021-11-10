import React from "react";
import { render } from "@testing-library/react";

import { PrimaryButton } from "./Buttons";

test("Renders a Primary Button", () => {
  const { container } = render(<PrimaryButton />);
  expect(container.firstChild).toMatchSnapshot();
});
