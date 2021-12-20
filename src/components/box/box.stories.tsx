import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "./box";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    children: "Box",
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  return <Box {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
