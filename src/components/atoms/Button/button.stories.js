import React from "react";

import Button from "./index.js";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

/*👇 FirstStory will appear as First Story in the tree */
export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  content: "Button",
};
