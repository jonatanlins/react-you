import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavigationBar } from "./navigation-bar";

export default {
  title: "Examples/NavigationBar",
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => {
  return <NavigationBar {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
