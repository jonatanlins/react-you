import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Buttons } from "./buttons";

export default {
  title: "Examples/Buttons",
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => {
  return <Buttons {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
