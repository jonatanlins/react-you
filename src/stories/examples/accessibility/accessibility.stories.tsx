import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accessibility } from "./accessibility";

export default {
  title: "Examples/Accessibility",
} as ComponentMeta<typeof Accessibility>;

const Template: ComponentStory<typeof Accessibility> = (args) => {
  return <Accessibility {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
