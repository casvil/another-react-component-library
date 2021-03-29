import React from "react";
import renderer from "react-test-renderer";

import { Button } from "../src/components";

test("Renders a default button", () => {
  const component = renderer.create(<Button kind="default" value="Default" />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
