import React from "react";

import Clock from "./Clock";

export default {
  title: "Clock",
  component: Clock,
};

const Template = (args) => <Clock {...args} />;

export const Countdown = Template.bind({});

Countdown.args = {
  content: "Clock",
  startTime: 10,
  width: 200,
};
