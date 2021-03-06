import React from "react";

import Select from "./index.js";

//π This default export determines where your story goes in the story list
export default {
  title: "Select",
  component: Select,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <Select {...args} />;

/*π FirstStory will appear as First Story in the tree */
export const FirstStory = Template.bind({});

FirstStory.args = {
  /*π The args you need here will depend on your component */
  content: "Select",
};
