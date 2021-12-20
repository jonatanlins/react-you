import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sliders } from "./sliders";

export default {
  title: "Examples/Sliders",
} as ComponentMeta<typeof Sliders>;

const Template: ComponentStory<typeof Sliders> = (args) => {
  return <Sliders {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
